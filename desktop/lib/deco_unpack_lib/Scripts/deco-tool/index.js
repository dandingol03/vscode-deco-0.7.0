/**
 *    Copyright (C) 2015 Deco Software Inc.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var path = require('path');
var clinput = require('minimist')(process.argv.slice(2));
var stripComments = require('./util/stripComments');

var RUNNING_DEFAULT = false;

var handleError = function handleError(e) {
  if (process.send) {
    process.send({
      _configError: true,
      errorMessage: 'Error in config: ' + e.toString()
    });
  } else {
    console.error('\nLocal config is broken: \n\n[' + e + ']\n');
    process.exit(1);
  }
};

var AVAILABLE_TASKS = {
  'list-ios-sim': {
    args: [],
    argInfo: ['list the available simulators']
  },
  'reload-ios-app': {
    args: [],
    argInfo: ['relaunches the application on the iOS simulator']
  },
  'reload-android-app': {
    args: [],
    argInfo: ['relaunches the application on the Android emulator']
  },
  'sim-ios': {
    args: ['deviceId'],
    argInfo: ['launch the iOS simulator', 'the udid of device to launch']
  },
  'list-android-sim': {
    args: [],
    argInfo: ['lists created devices from android emulator']
  },
  'sim-android': {
    args: ['deviceId'],
    argInfo: ['executes react native\'s "run android"', 'the name of the emulator to launch']
  },
  'build-ios': {
    args: ['deviceId'],
    argInfo: ['builds the .app file', 'the udid of device to build on']
  },
  'build-android': {
    args: [],
    argInfo: ['builds the .apk file']
  },
  'run-packager': {
    args: [],
    argInfo: ['starts the react-native packager']
  },
  'init-template': {
    args: [],
    argInfo: ['creates a template configure.deco.js in the working directory']
  }

};

var taskToHelpString = function taskToHelpString() {
  var helpString = '';
  Object.keys(AVAILABLE_TASKS).forEach(function (key) {
    helpString += '\n    ' + key + ' \t ' + AVAILABLE_TASKS[key].argInfo[0] + '\n\n    ';
    AVAILABLE_TASKS[key].args.forEach(function (keyArg, i) {
      helpString += '\t--' + keyArg + ' <' + keyArg + '> \t' + AVAILABLE_TASKS[key].argInfo[i + 1] + '\n';
    });
    helpString += '\n';
  });
  return helpString;
};

var printHelp = function printHelp() {

  console.log('\nUsage: deco-tool <taskname> [options...]\n\nwhere `<taskname> [options...]` is one of:\n\n' + taskToHelpString() + '\noptional flags:\n\n    -r <root_dir> \t changes the working directory to <root_dir>\n\n---\nSpecifying a deco-tool configuration file:\n\nIf a configure.deco.js file is present in the working directory,\ndeco-tool will run the function from that file rather than using\nits own behavior.\n\nFor example, if you run the command: `deco-tool sim-ios --deviceId MY-D3V1CE-1D-2BCONT-U3D --target /path/to/my.app`\n\na configure.deco.js, in the current working directory, which included a function as shown below...\n\n`\n// Function must return a promise\nlet taskname = \'sim-ios\'\nDECO.on(taskname, function(args) {\n  console.log(args.deviceId)\n  console.log(args.target)\n  return Promise.resolve()\n})\n`\n\nwould yield an expected output of...\n\n> MY-D3V1CE-1D-2BCONT-U3D\n> /path/to/my.app\n\nOptionally, you may return an object on the resolve() call. For example...\n\n`\nconst myChild = child_process.spawn(...)\nPromise.resolve({ child: myChild })\n`\n\nthis ensures the child process will be handled properly\n\n');
};

var moduleWorkingDir = __dirname;

var foundTask = Object.keys(AVAILABLE_TASKS).filter(function (key) {
  if (key == clinput._[0]) {
    return true;
  }
});

if (foundTask.length == 0) {
  printHelp();
  process.exit(0);
}

if (clinput.h || clinput.help) {
  printHelp();
  process.exit(0);
}

// change working directory
if (clinput.r) {
  process.chdir(clinput.r);
}

var CONFIG_FILE_NAME = 'configure.deco.js';
var METADATA_DIR = '.deco';
var SETTINGS_FILE_NAME = '.settings';
var REGISTERED_TASKS = {};

// get settings file from project
var settingsPath = path.join(process.cwd(), METADATA_DIR, SETTINGS_FILE_NAME);
var PROJECT_SETTING = {};
try {
  fs.statSync(settingsPath);
  PROJECT_SETTING = JSON.parse(stripComments(fs.readFileSync(settingsPath).toString()));
} catch (e) {
  console.log('Warning: No local .settings file is present at path: ' + settingsPath + ' falling back to defaults.');
  try {
    var getDefaults = require(path.join(moduleWorkingDir, 'default.settings.js'));
    var projectName = path.basename(process.cwd());
    PROJECT_SETTING = getDefaults(projectName);
  } catch (e) {}
}

var DECO = function () {
  function DECO() {
    _classCallCheck(this, DECO);
  }

  _createClass(DECO, null, [{
    key: 'on',
    value: function on(taskname, fn) {
      REGISTERED_TASKS[taskname] = fn;
    }
  }]);

  return DECO;
}();

DECO.setting = PROJECT_SETTING;

// Alias deco-tool into the require statements
var Module = require('module');
var originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  if (id == 'deco-tool') {
    return DECO;
  } else {
    return originalRequire.apply(this, arguments);
  }
};

// load in config file from root
var filePath = path.join(process.cwd(), CONFIG_FILE_NAME);
try {
  fs.statSync(filePath);
  console.log('Running with Deco config found at ./configure.deco.js');
  require(filePath);
} catch (e) {
  // no file, that's ok
  if (e.code == 'ENOENT') {
    console.log('Running with default Deco config');
  } else {
    handleError(e);
  }
  require(path.join(moduleWorkingDir, '/configure.deco.js'));
}

var TASK = clinput._[0];
var ARGS = Object.assign({}, clinput);
delete ARGS.r;
delete ARGS._;

if (!REGISTERED_TASKS[TASK]) {
  // load default configure deco js file if no task was registered by user
  console.log('No user specified task was registered, falling back to default!');
  require(path.join(moduleWorkingDir, '/configure.deco.js'));
}

var handleChildren = function handleChildren(resp) {
  var safeKill = function safeKill() {
    if (resp && resp.child && !resp.child.killed) {
      resp.child.kill('SIGINT');
    }
  };

  process.on('uncaughtException', function () {
    safeKill();
  });
  process.on('SIGINT', function () {
    safeKill();
  });
  process.on('exit', function () {
    safeKill();
  });
};

var shipPayload = function shipPayload(resp) {
  if (process.send) {
    process.send(resp);
  } else {
    console.log(resp.payload);
  }
};

try {
  REGISTERED_TASKS[TASK](ARGS).then(function (resp) {
    if (resp && resp.child && !resp.child.killed) {
      handleChildren(resp);
    }
    if (resp && resp.payload) {
      shipPayload(resp);
    }
  }).catch(function (resp) {
    if (resp && resp.child && !resp.child.killed) {
      handleChildren(resp);
    }
    if (resp && resp.payload) {
      shipPayload({
        error: true,
        payload: resp.payload
      });
    }
  });
} catch (e) {
  console.error(e);
  handleError(e);
}