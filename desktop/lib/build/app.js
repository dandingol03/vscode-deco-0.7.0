"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;var a = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
  }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
}([function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = n(1),
      o = (r(a), n(2)),
      i = r(o),
      u = n(3),
      l = n(11),
      c = l.app,
      s = n(4),
      f = process.argv,
      d = f.length >= 3 && s.indexOf(f, "--dev-mode") != -1;global.__DEV__ = d, global.openWindows = {};var p = n(60),
      h = n(63),
      _ = n(41),
      y = n(14);n(11);c.on("window-all-closed", function () {});var E = function E() {
    var e = !1;try {
      var t = i.default.spawnSync("watchman", ["version"], { env: process.env });t && t.stdout && t.stdout.toString().length > 0 && (e = !0);
    } catch (e) {}e || (process.env.PATH = process.env.PATH + ":/usr/local/Deco/watchman");
  };c.on("ready", function () {
    c.commandLine.appendSwitch("js-flags", "--harmony"), E(), y.info("Deco initializing..."), _.init(), (0, u.registerHandlers)();var e = l.screen,
        t = e.getPrimaryDisplay().workAreaSize;global.workArea = t;var r = c.getVersion();p.checkNeedsUpgrade(r).then(function () {
      p.newWindow(640, 450, !1), p.initializePreferencesWindow(), h.instantiateTemplate();try {
        var e = n(65);e.init(r, "osx_64");
      } catch (e) {
        y.error(e);
      }
    }).catch(function () {
      c.exit(0);
    });
  });
}, function (e, t) {
  e.exports = require("os");
}, function (e, t) {
  e.exports = require("child_process");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.registerHandlers = void 0;var a = n(4),
      o = r(a),
      i = n(5),
      u = r(i),
      l = n(32),
      c = r(l),
      s = n(45),
      f = r(s),
      d = n(47),
      p = r(d),
      h = n(50),
      _ = r(h),
      y = n(52),
      E = r(y),
      v = n(38),
      P = r(v),
      m = [c.default, f.default, p.default, _.default, u.default, E.default, P.default];t.registerHandlers = function () {
    o.default.each(m, function (e) {
      e.register();
    });
  };
}, function (e, t) {
  e.exports = require("lodash");
}, function (t, n, r) {
  "use strict";
  function a(e) {
    return e && e.__esModule ? e : { default: e };
  }function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function i(e) {
    try {
      E.default.stat(S.default.dirname(e), function (t) {
        t && (0, O.default)(S.default.dirname(e), function (e) {
          e && J.default.error(e);
        });
      });
    } catch (e) {
      J.default.error(e);
    }
  }function u(e, t) {
    var n = S.default.join(h(t), ".deco", "metadata", h(e).replace(t, "") + ".deco");return J.default.info("metadataPath=" + n), J.default.info("filePath=" + e), i(n), n;
  }function l(e) {
    return ".deco" !== S.default.extname(e) && ".deco" !== S.default.basename(e);
  }function c() {
    if (ue) try {
      ue.close();
    } catch (e) {
      J.default.error(e);
    }
  }function s() {
    try {
      process.env.PATH.indexOf("/usr/local/Deco/watchman") != -1 && P.default.spawnSync("/usr/local/Deco/watchman/watchman", ["shutdown-server"]);
    } catch (e) {
      J.default.error(e);
    }
  }function f(e) {
    var t = new Buffer(e),
        n = t.toString("hex"),
        r = S.default.basename(e),
        a = e.split(S.default.sep);return { absolutePathArray: a.slice(1, a.length), baseName: r, id: n };
  }function d(e) {
    var t = new Buffer(e, "hex");return t.toString();
  }function p(e) {
    if (!e.path) throw "payload path is required, but found missing";return !0;
  }function h(e) {
    return "string" != typeof e ? [""].concat(e).join(S.default.sep) : e;
  }Object.defineProperty(n, "__esModule", { value: !0 });var _ = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }();n.buildPathObjects = f;var y = r(6),
      E = a(y),
      v = r(2),
      P = a(v),
      m = r(7),
      g = (a(m), r(8)),
      S = a(g),
      b = r(9),
      O = a(b),
      T = r(4),
      A = a(T),
      R = r(10),
      k = a(R),
      w = r(11),
      D = r(12),
      C = a(D),
      I = r(13),
      M = a(I),
      j = r(17),
      L = a(j),
      N = r(29),
      F = r(30),
      U = r(27),
      G = r(31),
      x = r(28),
      B = a(x),
      H = r(21),
      W = a(H),
      V = r(14),
      J = a(V),
      K = B.default.ERROR,
      z = W.default.WATCH_PATH,
      q = W.default.FETCH_SUB_PATH,
      Y = W.default.WRITE_FILE_DATA,
      Q = W.default.WRITE_FILE_METADATA,
      X = W.default.DELETE_FILE_METADATA,
      Z = W.default.DELETE,
      $ = W.default.SHOW_IN_FINDER,
      ee = W.default.CREATE_DIRECTORY,
      te = W.default.RENAME,
      ne = W.default.CREATE_FILE,
      re = W.default.GET_FILE_DATA,
      ae = W.default.GET_JSON_DATA,
      oe = W.default.GET_FILE_METADATA,
      ie = (W.default.SAVE_SUCCESSFUL, W.default.SHARE_SAVE_STATUS, W.default.UPDATE_JSON_FILE),
      ue = null,
      le = null,
      ce = {};process.on("exit", function () {
    c(), s();
  }), process.on("SIGTERM", function () {
    c(), s();
  });var se = function () {
    function t() {
      o(this, t);
    }return _(t, [{ key: "getWatchedPath", value: function value() {
        return le;
      } }, { key: "register", value: function value() {
        L.default.on(z, this.watchPath.bind(this)), L.default.on(q, this.asyncListSubPaths.bind(this)), L.default.on(Y, this.writeFileData.bind(this)), L.default.on(Q, this.writeFileMetadata.bind(this)), L.default.on(X, this.deleteFileMetadata.bind(this)), L.default.on(Z, this.delete.bind(this)), L.default.on($, this.showInFinder.bind(this)), L.default.on(ee, this.createDirectory.bind(this)), L.default.on(te, this.rename.bind(this)), L.default.on(ne, this.createFile.bind(this)), L.default.on(U.EXEC_SHELL, this.execShell.bind(this)), L.default.on(re, this.readFileData.bind(this)), L.default.on(ae, this.readJSONData.bind(this)), L.default.on(ie, this.updateJSONFile.bind(this)), L.default.on(oe, this.readFileMetadata.bind(this));
      } }, { key: "execShell", value: function value(t, n) {
        try {
          J.default.info("shell== call" + t.path);var r = t.path;P.default.execFile(r, function (t, r, a) {
            t ? n((0, F.onError)(e)) : (J.default.info("shell== exec completely"), n((0, G.onShellExeced)(r)));
          });
        } catch (e) {
          J.default.error(err), n((0, F.onError)(e));
        }
      } }, { key: "createFile", value: function value(e, t) {
        try {
          !function () {
            var n = d(e.id),
                r = S.default.join(n, e.filename);E.default.writeFile(r, e.data, { mode: "0755" }, function (n) {
              if (n) return J.default.error(n), void t((0, F.onError)("Failed to create new file"));var a = f(r);t((0, N.onFileCreated)(a, e.data));
            });
          }();
        } catch (e) {}
      } }, { key: "rename", value: function value(e, t) {
        try {
          var n = d(e.id),
              r = S.default.join(S.default.dirname(n), e.newName);C.default.moveSync(n, r);var a = f(r);t((0, N.onRename)(a));
        } catch (e) {
          J.default.error(e), t((0, F.onError)("Rename operation was unsuccessful"));
        }
      } }, { key: "delete", value: function value(e, t) {
        try {
          var n = d(e.id);"dir" == e.fileType ? P.default.exec("rm -r " + n) : E.default.unlink(n, function (e) {
            e && J.default.error(e);
          });
        } catch (e) {
          J.default.error(e);
        }t((0, F.onSuccess)(Z));
      } }, { key: "showInFinder", value: function value(e, t) {
        try {
          var n = d(e.id);J.default.error(n), w.shell.showItemInFolder(n);
        } catch (e) {
          J.default.error(e);
        }t((0, F.onSuccess)($));
      } }, { key: "createDirectory", value: function value(e, t) {
        try {
          var n = d(e.id);J.default.info("callback==" + n);var r = S.default.join(n, e.dirname);J.default.info("callbakc===" + r), E.default.mkdir(r, function (e) {
            e && J.default.error(e);
          });
        } catch (e) {
          J.default.error(e);
        }t((0, F.onSuccess)(ee));
      } }, { key: "readJSONData", value: function value(e, t) {
        try {
          if (p(e), !e) return;M.default.readFile(e.path, { success: function success(n) {
              ce[e.path] = !0;var r = new Buffer(e.path),
                  a = r.toString("hex");t((0, N.onJSONData)(a, e.path, n));
            }, error: function error(e) {
              t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "updateJSONFile", value: function value(e, t) {
        try {
          if (p(e), !e) return;M.default.writeFile(e.path, e.data, { success: function success() {
              t((0, N.onJSONUpdate)(null));
            }, error: function error(e) {
              t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "readFileData", value: function value(e, t) {
        try {
          if (p(e), J.default.info("path of payload =" + e.path), e.path = h(e.path), !e) return;M.default.readFile(e.path, { success: function success(n) {
              var r = f(e.path);ce[e.path] = !0, t((0, N.onFileData)(r, n.toString("utf8")));
            }, error: function error(e) {
              t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "readFileMetadata", value: function value(e, t) {
        try {
          if (p(e), e.path = u(d(e.path), e.rootPath), !e) return;M.default.readFile(e.path, { success: function success(n) {
              var r = f(e.path);ce[e.path] = !0, J.default.info("metadata=\r\n" + n), t((0, N.onFileMetadata)(r, n.toString("utf8")));
            }, error: function error(e) {
              t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "writeFileData", value: function value(e, t) {
        try {
          if (!e.id) return;var n = d(e.id);M.default.writeFile(n, e.data, { success: function success() {
              t((0, F.onSuccess)(Y)), L.default.send((0, N.confirmSave)(e.id));
            }, error: function error(e) {
              J.default.error(e), t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "writeFileMetadata", value: function value(e, t) {
        try {
          if (!e.id) return;var n = u(d(e.id), e.rootPath);M.default.writeFile(n, e.metadata, { success: function success() {
              t((0, F.onSuccess)(Q)), L.default.send((0, N.confirmSave)(e.id));
            }, error: function error(e) {
              J.default.error(e), t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "deleteFileMetadata", value: function value(e, t) {
        try {
          if (!e.id) return;var n = u(d(e.id), e.rootPath);M.default.deleteFile(n, { success: function success() {
              t((0, F.onSuccess)(X));
            }, error: function error(e) {
              J.default.error(e), t((0, F.onError)(e));
            } });
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "watchPath", value: function value(e, t) {
        var n = this,
            r = e.rootPath;le = r;var a = [],
            o = A.default.debounce(function () {
          L.default.send((0, N.removeSubPathBatch)(a.slice())), a = [];
        }, 1e3);try {
          ue = (0, k.default)(r, { watchman: !0 }), ue.on("error", function (e) {
            J.default.error(e), setTimeout(n.watchPath.bind(n, { rootPath: r }, function () {}), 1e4);
          }), ue.on("add", function (e, t, r) {
            if (l(e)) {
              var a = S.default.join(t, e);ce[S.default.dirname(a)] && n.asyncListSubPaths({ path: a, isCollapsed: !0 }, function (e) {
                e.type != K && L.default.send(e);
              });
            }
          }), ue.on("change", function (e, t, n) {
            if (l(e)) {
              var r = S.default.join(t, e);C.default.isDirectorySync(r) || ce[r];
            }
          }), ue.on("delete", function (e, t, r) {
            if (l(e)) {
              var i = S.default.join(t, e);ce[t] && n.asyncRemoveSubPaths({ path: i }, function (e) {
                e.type != K && (a.push(e), o());
              });
            }
          });
        } catch (e) {
          return J.default.error(e), void t((0, F.onError)(z));
        }t((0, F.onSuccess)(z));
      } }, { key: "asyncRemoveSubPaths", value: function value(e, t) {
        try {
          p(e), e.path = h(e.path), C.default.existsSync(e.path) && C.default.removeSync(e.path), ce[e.path] && delete ce[e.path];var n = f(e.path);t((0, N.removeSubPath)(n));
        } catch (e) {
          J.default.error(e);
        }
      } }, { key: "_asyncListDir", value: function value(e, t, n, r) {
        return C.default.traverseTree(t, function (e) {
          if (l(e)) {
            var t = f(e);n.push((0, N.addSubPath)(t, "file"));
          }
        }, function (e) {
          if (l(e)) {
            var t = f(e);return n.push((0, N.addSubPath)(t, "dir")), !1;
          }
        }, function () {
          r((0, N.addSubPathBatch)(n));
        });
      } }, { key: "asyncListSubPaths", value: function value(e, t) {
        try {
          if (p(e), e.path = h(e.path), !e) return;if (!l(e.path)) return;var n = f(e.path);if (C.default.isDirectorySync(e.path)) {
            var r = [];r.push((0, N.addSubPath)(n, "dir")), e.isCollapsed || (ce[e.path] = !0), this._asyncListDir(n.id, e.path, r, t) || L.default.send((0, N.addSubPathBatch)(r));
          } else t((0, N.addSubPathBatch)([(0, N.addSubPath)(n, "file")]));
        } catch (e) {
          J.default.error(e);
        }
      } }]), t;
  }(),
      fe = new se();n.default = fe;
}, function (e, t) {
  e.exports = require("fs");
}, function (e, t) {
  e.exports = require("shelljs");
}, function (e, t) {
  e.exports = require("path");
}, function (e, t) {
  e.exports = require("mkdirp");
}, function (e, t) {
  e.exports = require("sane");
}, function (e, t) {
  e.exports = require("electron");
}, function (e, t) {
  e.exports = require("fs-plus");
}, function (e, t, n) {
  "use strict";
  var r = n(6),
      a = n(8),
      o = n(11).app,
      i = (n(4), n(12), n(14)),
      u = function u() {
    this.writingLog = {};
  },
      l = function l(e, t) {
    var n = o.getPath(e);return a.join(n, t);
  },
      c = function c(e) {
    return a.join(__dirname, e);
  };u.prototype.getAppPath = l.bind(void 0, "appData"), u.prototype.getTmpPath = l.bind(void 0, "temp"), u.prototype.getHomePath = l.bind(void 0, "home"), u.prototype.readFile = function (e, t) {
    r.readFile(e, function (e, n) {
      e ? t.error && t.error(e) : t.success && t.success(n);
    });
  }, u.prototype.writeFile = function (e, t, n) {
    if (this.writingLog[e]) return void n.error("CANNOT_SIMULTANEOUSLY_WRITE");this.writingLog[e] = 1;var a = this.writingLog,
        o = function (t) {
      return function (n) {
        delete a[e], n ? t.error && (i.error("Failed to write file", n), t.error(n)) : t.success && t.success();
      };
    }(n),
        u = t;Buffer.isBuffer(t) || (u = new Buffer(t, "utf8")), r.writeFile(e, u, o);
  }, u.prototype.deleteFile = function (e, t) {
    r.unlink(e, function (e) {
      e && "ENOENT" !== e.code ? (i.error("Failed to delete file", e), t.error && t.error(e)) : t.success && t.success();
    });
  }, u.prototype.createDirectory = function (e, t) {
    r.mkdir(e, "775", function (e) {
      return e ? "EEXIST" == e.code ? void t.success() : (i.error("Failed to create directory", e), void t.error(e)) : void t.success();
    });
  }, u.prototype.deleteDirectoryRecursivelySync = function (e, t) {
    var n = function n(o) {
      for (var i = r.readdirSync(o), u = 0; u < i.length; u++) {
        var l = a.join(o, i[u]),
            c = r.statSync(l);"." == l || ".." == l || (c.isDirectory() ? n(l) : r.unlinkSync(l));
      }o == e && t || r.rmdirSync(o);
    };return n(e);
  }, u.prototype.copyDirectorySync = function (e, t) {
    var n = function e(t, n) {
      try {
        r.mkdirSync(n, "775");
      } catch (e) {
        if ("EEXIST" != e.code) throw e;
      }for (var o = r.readdirSync(t), i = 0; i < o.length; i++) {
        var u = a.join(t, o[i]),
            l = a.join(n, o[i]),
            c = r.statSync(u);if ("." == u || ".." == u) ;else if (c.isDirectory()) e(u, l);else try {
          r.statSync(l).isFile(), r.unlinkSync(l);
        } catch (e) {} finally {
          r.createReadStream(u).pipe(r.createWriteStream(l));
        }
      }
    };return n(e, t);
  }, u.prototype.lsFilesInDirSync = function (e) {
    for (var t = r.readdirSync(e), n = [], o = 0; o < t.length; o++) {
      n.push(a.join(e, t[o]));
    }return n;
  }, u.prototype.copyFileSync = function (e, t) {
    try {
      r.statSync(t).isFile(), r.unlinkSync(t);
    } catch (e) {} finally {
      r.createReadStream(e).pipe(r.createWriteStream(t));
    }
  }, u.prototype.statAppData = function (e) {
    return r.statSync(l("appData", e));
  }, u.prototype.createAppDataDirectory = function (e, t) {
    r.mkdir(l("appData", e), "775", t);
  }, u.prototype.statTmpData = function (e) {
    return r.statSync(l("temp", e));
  }, u.prototype.createTmpDataDirectory = function (e, t) {
    r.mkdir(l("temp", e), "775", t);
  }, u.prototype.readAppData = function (e, t) {
    this.readFile(l("appData", e), t);
  }, u.prototype.writeAppData = function (e, t, n) {
    this.writeFile(l("appData", e), t, n);
  }, u.prototype.readFromRelativePath = function (e, t) {
    this.readFile(c(e), t);
  }, u.prototype.writeToRelativePath = function (e, t, n) {
    this.writeFile(c(e), t, n);
  }, e.exports = new u();
}, function (e, t, n) {
  "use strict";
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(11).app,
      l = n(8),
      c = n(15),
      s = n(4),
      f = l.join(u.getPath("appData"), "/com.decosoftware.Deco/logs.out"),
      d = n(16),
      p = new d.Client("https://a1ba00d4bfe94b0586811f5ffb5d0596:d67db2941b2f4665b2940c7ed604d32d@app.getsentry.com/64868"),
      h = function (e) {
    function t(e) {
      r(this, t), e = e || {};var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n._sentry = p, n.name = "Sentry", n.levelsMap = { silly: "debug", verbose: "debug", info: "info", debug: "debug", warn: "warning", error: "error" }, n.logger = e.logger || "root", n;
    }return o(t, e), i(t, [{ key: "log", value: function value(e, t, n, r) {
        n = n || {}, e = this.levelsMap[e] || "info";var a = s.extend({}, n),
            o = a.tags || null;delete a.tags;var i = { level: e, logger: this.logger, extra: a, tags: o };try {
          "error" == e && (global.__DEV__ || this._sentry.captureError(t, i, function (e) {
            r(null, !0);
          }));
        } catch (e) {
          console.log(e);
        }
      } }]), t;
  }(c.Transport),
      _ = function () {
    function e() {
      r(this, e);var t = "info";global.__DEV__ && (t = "debug");var n = { filename: f, level: t, tailable: !0, handleExceptions: !0, humanReadableUnhandledException: !0, maxFiles: 10, maxSize: 1e7 },
          a = [new c.transports.File(n), new c.transports.Console()];global.__DEV__ || a.push(new h({ handleExceptions: !0, humanReadableUnhandledException: !0 })), this._logger = new c.Logger({ transports: a });
    }return i(e, [{ key: "logger", get: function get() {
        return this._logger;
      } }]), e;
  }();e.exports = new _().logger;
}, function (e, t) {
  e.exports = require("winston");
}, function (e, t) {
  e.exports = require("raven");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }function u(e, t, n) {
    if (!e) return void M.default.error("Channel was found broken", e);if (t || (t = {}), M.default.info("bridge send======\r\n windowId=" + n + " channer=" + e), "preferences" == n) try {
      if (!global.preferencesWindow) return;global.preferencesWindow.webContents.send(e, t);
    } catch (e) {
      M.default.info("Warning: ", e);
    } else {
      M.default.info("openWindows=" + global.openWindows);for (var r in global.openWindows) {
        global.openWindows[r].webContents.send(e, t);
      }
    }
  }Object.defineProperty(t, "__esModule", { value: !0 });var l = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      c = n(4),
      s = r(c),
      f = n(18),
      d = n(19),
      p = r(d),
      h = n(20),
      _ = r(h),
      y = n(21),
      E = r(y),
      v = n(22),
      P = r(v),
      m = n(23),
      g = r(m),
      S = n(24),
      b = r(S),
      O = n(25),
      T = r(O),
      A = n(26),
      R = r(A),
      k = n(27),
      w = r(k),
      D = n(28),
      C = r(D),
      I = n(14),
      M = r(I),
      j = C.default.ERROR,
      L = [_.default, E.default, P.default, g.default, b.default, T.default, R.default, w.default],
      N = function (e) {
    function t() {
      a(this, t);var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e._init(), e._send = u, e;
    }return i(t, e), l(t, [{ key: "_init", value: function value() {
        var e = this;s.default.each(L, function (t) {
          s.default.each(t, function (t, n) {
            "EXEC_SHELL" == n && (M.default.info("==========listen EXEC_SHELL======="), M.default.info("===========id->" + t + "========")), p.default.on(t, function (n, r, a) {
              e.emit(t, n, function (e) {
                return e && e.type != j ? void r(null, e) : void r(e);
              }, a);
            });
          });
        });
      } }, { key: "send", value: function value(e, t) {
        this._send(e.type, e, t);
      } }]), t;
  }(f.EventEmitter),
      F = new N();t.default = F;
}, function (e, t) {
  e.exports = require("events");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var u = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      l = function e(t, n, r) {
    null === t && (t = Function.prototype);var a = Object.getOwnPropertyDescriptor(t, n);if (void 0 === a) {
      var o = Object.getPrototypeOf(t);return null === o ? void 0 : e(o, n, r);
    }if ("value" in a) return a.value;var i = a.get;if (void 0 !== i) return i.call(r);
  },
      c = n(14),
      s = r(c),
      f = n(11),
      d = n(18),
      p = (n(11).ipcMain, function (e) {
    function t() {
      return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }return i(t, e), u(t, [{ key: "emit", value: function value(e, n, r, a) {
        var o = function o(e, t) {
          try {
            a.sender.send("response", n, e, t);
          } catch (e) {
            s.default.error(e);
          }
        };l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "emit", this).call(this, e, r, o, a);
      } }]), t;
  }(d.EventEmitter)),
      h = new p();f.ipcMain.on("request", function (e, t, n, r) {
    h.emit(n, t, r, e);
  }), e.exports = h;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["APPLICATION_UPGRADING", "BROADCAST_PREFERENCES", "GET_SYSTEM_PATHS"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["ADD_SUB_PATH", "ADD_SUB_PATH_BATCH", "CREATE_FILE", "CREATE_DIRECTORY", "RENAME", "DELETE", "SHOW_IN_FINDER", "DELETE_FILE_METADATA", "FETCH_SUB_PATH", "ON_FILE_DATA", "GET_FILE_DATA", "GET_FILE_METADATA", "REMOVE_SUB_PATH", "REMOVE_SUB_PATH_BATCH", "SAVE_SUCCESSFUL", "WRITE_FILE_DATA", "WRITE_FILE_METADATA", "WATCH_PATH", "GET_JSON_DATA", "UPDATE_JSON_FILE"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["IMPORT_COMPONENT", "GET_COMPONENT_LIST"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["PACKAGER_OUTPUT", "RUN_SIMULATOR", "RUN_PACKAGER", "STOP_PACKAGER", "UPDATE_PACKAGER_STATUS", "RESUME_SIMULATOR", "RESUME_PACKAGER", "HARD_RELOAD_SIMULATOR", "LIST_AVAILABLE_SIMS", "UPDATE_SIMULATOR_STATUS"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["SAVE_PROJECT", "SAVE_AS_PROJECT", "SET_PROJECT_DIR", "CREATE_NEW_PROJECT", "OPEN_PROJECT", "SHARE_SAVE_STATUS", "OPEN_PROJECT_SETTINGS", "CUSTOM_CONFIG_ERROR"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["OPEN_PROJECT_DIALOG", "SAVE_AS_DIALOG", "OPEN_PATH_CHOOSER_DIALOG", "RESIZE"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["IMPORT_MODULE", "SCAN_PROJECT_FOR_REGISTRIES", "FOUND_REGISTRIES"]);
}, function (e, t) {
  "use strict";
  e.exports = { EXEC_SHELL: "EXEC_SHELL" };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["ERROR"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.removeSubPathBatch = t.removeSubPath = t.addSubPathBatch = t.addSubPath = t.onFileMetadata = t.onJSONUpdate = t.onJSONData = t.onFileData = t.onRename = t.onFileCreated = t.onExternalFileData = t.confirmSave = void 0;var a = n(14),
      o = (r(a), n(21)),
      i = r(o),
      u = i.default.SAVE_SUCCESSFUL,
      l = i.default.ON_FILE_DATA,
      c = i.default.GET_FILE_DATA,
      s = i.default.GET_JSON_DATA,
      f = i.default.UPDATE_JSON_FILE,
      d = i.default.GET_FILE_METADATA,
      p = i.default.RENAME,
      h = (i.default.CREATE_DIRECTORY, i.default.CREATE_FILE),
      _ = i.default.ADD_SUB_PATH,
      y = i.default.ADD_SUB_PATH_BATCH,
      E = i.default.REMOVE_SUB_PATH,
      v = i.default.REMOVE_SUB_PATH_BATCH;t.confirmSave = function (e) {
    return { type: u, id: e };
  }, t.onExternalFileData = function (e, t) {
    return { type: l, id: e.id, absolutePathArray: e.absolutePathArray, utf8Data: t };
  }, t.onFileCreated = function (e, t) {
    return { type: h, id: e.id, absolutePathArray: e.absolutePathArray, fileType: "file", baseName: e.baseName };
  }, t.onRename = function (e) {
    return { type: p, id: e.id, baseName: e.baseName, absolutePathArray: e.absolutePathArray };
  }, t.onFileData = function (e, t) {
    return { type: c, id: e.id, absolutePathArray: e.absolutePathArray, utf8Data: t };
  }, t.onJSONData = function (e, t, n) {
    return { type: s, id: e, absolutePath: t, utf8Data: n };
  }, t.onJSONUpdate = function (e) {
    return { type: f, error: e };
  }, t.onFileMetadata = function (e, t) {
    return { type: d, id: e.id, absolutePathArray: e.absolutePathArray, utf8Data: t };
  }, t.addSubPath = function (e, t) {
    return { type: _, fileType: t, baseName: e.baseName, absolutePathArray: e.absolutePathArray, id: e.id };
  }, t.addSubPathBatch = function (e) {
    return { type: y, batch: e };
  }, t.removeSubPath = function (e) {
    return { type: E, baseName: e.baseName, absolutePathArray: e.absolutePathArray, id: e.id };
  }, t.removeSubPathBatch = function (e) {
    return { type: v, batch: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.onSuccess = t.onError = void 0;var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      o = n(28),
      i = r(o),
      u = (n(14), i.default.ERROR);t.onError = function (e) {
    return "object" != ("undefined" == typeof e ? "undefined" : a(e)) && (e = { message: e }), Object.assign({}, e, { type: u });
  }, t.onSuccess = function (e) {
    return { type: e };
  };
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = t.EXEC_SHELL = "EXEC_SHELL";t.onShellExeced = function (e) {
    return { type: n, data: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(6),
      l = r(u),
      c = n(8),
      s = r(c),
      f = n(2),
      d = r(f),
      p = n(33),
      h = r(p),
      _ = n(9),
      y = r(_),
      E = n(12),
      v = r(E),
      P = n(4),
      m = r(P),
      g = n(17),
      S = r(g),
      b = n(30),
      O = n(34),
      T = n(24),
      A = r(T),
      R = n(35),
      k = n(36),
      w = r(k),
      D = n(44),
      C = r(D),
      I = n(14),
      M = r(I),
      j = A.default.CREATE_NEW_PROJECT,
      L = A.default.OPEN_PROJECT,
      N = A.default.SHARE_SAVE_STATUS,
      F = {},
      U = '{\n\n  // relative path from project root to the .app binary that is generated after building iOS\n  "iosTarget": "ios/build/Build/Products/Debug-iphonesimulator/Project.app",\n\n  // relative path from project root to the xcode project or workspace file for iOS build\n  "iosProject": "ios/Project.xcodeproj",\n\n  // scheme name to use when building in Deco\n  "iosBuildScheme": "Project",\n\n  // relative path from project to the AndroidManifest.xml file for your application\n  "androidManifest": "android/app/src/main/AndroidManifest.xml",\n\n  // port for the packager to run on\n  "packagerPort": 8081\n}',
      G = function () {
    function e() {
      a(this, e);
    }return i(e, [{ key: "hasUnsavedProgress", value: function value() {
        return 0 != m.default.keys(F).length;
      } }, { key: "register", value: function value() {
        S.default.on(j, this.createNewProject.bind(this)), S.default.on(L, this.openProject.bind(this)), S.default.on(N, this.updateSaveStatus.bind(this));
      } }, { key: "updateSaveStatus", value: function value(e, t) {
        try {
          e.status ? F[e.id] = e.status : delete F[e.id];
        } catch (e) {
          M.default.error(e);
        }t((0, b.onSuccess)(N));
      } }, { key: "_deleteProject", value: function value(e) {
        var t = e + ".delete";try {
          l.default.statSync(e);
        } catch (e) {
          return void M.default.error(e);
        }try {
          v.default.moveSync(e, t), d.default.spawn("rm", ["-rf", t]);
        } catch (e) {
          M.default.error(e);
        }
      } }, { key: "cleanBuildDir", value: function value(e) {
        try {
          var t = [s.default.join(e, "ios/build/ModuleCache"), s.default.join(e, "ios/build/info.plist"), s.default.join(e, "ios/build/Build/Intermediates")];m.default.each(t, function (e) {
            d.default.spawn("rm", ["-rf", e]);
          });
        } catch (e) {
          M.default.error(e);
        }
      } }, { key: "_createTemplateFolder", value: function value() {
        return new Promise(function (e, t) {
          try {
            d.default.spawn("cp", ["-rf", s.default.join(R.LIB_PROJECT_FOLDER), R.TEMP_PROJECT_FOLDER_TEMPLATE]).on("close", function (n) {
              0 != n ? (M.default.error("Project template creation exited with code: " + n), t()) : e();
            });
          } catch (e) {
            return void M.default.error(e);
          }
        });
      } }, { key: "_resetProcessState", value: function value() {
        try {
          w.default.clearLastSimulator(), C.default.killPackager();
        } catch (e) {
          M.default.error(e);
        }
      } }, { key: "createNewProject", value: function value(e, t) {
        var n = this;this._resetProcessState();try {
          var r = function () {
            e.path = R.TEMP_PROJECT_FOLDER, n._deleteProject(e.path);var r = function r() {
              l.default.rename(R.TEMP_PROJECT_FOLDER_TEMPLATE, R.TEMP_PROJECT_FOLDER, function (r) {
                return r ? (M.default.error(r), void t((0, b.onError)(r))) : (t((0, b.onSuccess)(j)), S.default.send((0, O.setProject)(e.path, e.tmp)), n._createTemplateFolder(), void n.createProjectSettingsTemplate(e.path));
              }), F = {};
            };try {
              l.default.statSync(R.TEMP_PROJECT_FOLDER_TEMPLATE);
            } catch (e) {
              return n._createTemplateFolder().then(function () {
                r();
              }), { v: void 0 };
            }r();
          }();if ("object" === ("undefined" == typeof r ? "undefined" : o(r))) return r.v;
        } catch (e) {
          M.default.error(e);
        }
      } }, { key: "createProjectSettingsTemplate", value: function value(e) {
        return new Promise(function (t, n) {
          var r = s.default.join(e, ".deco"),
              a = s.default.join(r, ".settings");try {
            l.default.statSync(a), t(a);
          } catch (e) {
            e && "ENOENT" == e.code ? (0, y.default)(r, function () {
              try {
                l.default.writeFileSync(a, U, { mode: "755" }), t(a);
              } catch (e) {
                M.default.error("Failed to write settings file template", e), n();
              }
            }) : (M.default.error(e), n());
          }
        });
      } }, { key: "updateOldProjectStructure", value: function value(e) {
        var t = s.default.join(e, ".deco"),
            n = l.default.readdirSync(t);m.default.each(n, function (e) {
          var n = s.default.join(t, e),
              r = s.default.join(t, "metadata", e);(0, h.default)(n, r, { mkdirp: !0 }, function (e) {
            e && M.default.error(e);
          });
        }), this.createProjectSettingsTemplate(e);
      } }, { key: "checkOldProjectStructure", value: function value(e) {
        var t = this,
            n = s.default.join(e, ".deco"),
            r = s.default.join(n, "metadata");l.default.stat(n, function (n, a) {
          return n ? void t.createProjectSettingsTemplate(e) : void l.default.stat(r, function (n, r) {
            return n ? "ENOENT" != n.code ? void M.default.error(n) : void t.updateOldProjectStructure(e) : void t.createProjectSettingsTemplate(e);
          });
        });
      } }, { key: "openProject", value: function value(e, t) {
        e.resumeState || this._resetProcessState(), F = {}, console.log("the path of payload=" + e.path), S.default.send((0, O.setProject)(e.path, !1)), this.checkOldProjectStructure(e.path), t((0, b.onSuccess)(L));
      } }]), e;
  }(),
      x = new G();t.default = x;
}, function (e, t) {
  e.exports = require("mv");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.openProjectSettings = t.saveAs = t.save = t.newProject = t.setProject = t.customConfigError = void 0;var a = n(24),
      o = r(a),
      i = (n(8), o.default.CREATE_NEW_PROJECT),
      u = o.default.SET_PROJECT_DIR,
      l = o.default.SAVE_PROJECT,
      c = o.default.SAVE_AS_PROJECT,
      s = o.default.OPEN_PROJECT_SETTINGS,
      f = o.default.CUSTOM_CONFIG_ERROR;t.customConfigError = function (e) {
    return { type: f, errorMessage: e };
  }, t.setProject = function (e, t) {
    return { type: u, absolutePath: new Buffer(e).toString("hex"), isTemp: t };
  }, t.newProject = function () {
    return { type: i };
  }, t.save = function () {
    return { type: l };
  }, t.saveAs = function () {
    return { type: c };
  }, t.openProjectSettings = function (e) {
    return { type: s, settingsInfo: { fileType: "file", id: e.id, module: e.baseName, absolutePath: e.absolutePathArray, isLeaf: !0 } };
  };
}, function (e, t, n) {
  "use strict";
  var r = n(8),
      a = n(13),
      o = (n(14), "/com.decosoftware.Deco"),
      i = "/com.decosoftware.Deco/ProjectInfo",
      u = "/com.decosoftware.Deco/libs",
      l = "/com.decosoftware.Deco/libs/binaries",
      c = "/com.decosoftware.Deco/cache",
      s = "/.Deco/tmp/Project",
      f = "/.Deco/tmp/.template.Project",
      d = "/com.decosoftware.Deco/libs/Project",
      p = null;p = global.__DEV__ ? r.join(__dirname, "../../public") : r.join(__dirname, "../public"), e.exports = { RelativePaths: { ROOT_FOLDER: o, PROJECT_ROOT_FOLDER: i, LIB_FOLDER: u, BINARIES_FOLDER: l, COMPONENT_CACHE_FOLDER: c }, PUBLIC_FOLDER: p, APP_SUPPORT: a.getAppPath(o), LIB_FOLDER: a.getAppPath(u), BINARIES_FOLDER: a.getAppPath(l), TMP_FOLDER: a.getTmpPath(o), CACHE_FOLDER: a.getAppPath(c), TEMP_PROJECT_FOLDER: a.getHomePath(s), LIB_PROJECT_FOLDER: a.getAppPath(d), TEMP_PROJECT_FOLDER_TEMPLATE: a.getHomePath(f) };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(37),
      u = r(i),
      l = n(17),
      c = r(l),
      s = n(42),
      f = (n(2), n(8)),
      d = n(14),
      p = n(41).LIB_FOLDER,
      h = (f.join(p, "/Scripts/appWatcher.js"), n(43), function () {
    function e() {
      a(this, e), this._lastUsedArgs = null, this._androidRunning = !1, this._iosRunning = !1;
    }return o(e, [{ key: "clearLastSimulator", value: function value() {
        this._lastUsedArgs = null;
      } }, { key: "lastUsedArgs", value: function value() {
        return this._lastUsedArgs;
      } }, { key: "isSimulatorRunning", value: function value() {
        return this._androidRunning || this._iosRunning;
      } }, { key: "runSimulator", value: function value(e) {
        e || (e = {}, this._lastUsedArgs && (e = this._lastUsedArgs)), this._lastUsedArgs = e, this._runSimulator(e);
      } }, { key: "hardReload", value: function value() {
        this.androidRunning && u.default.runTask("reload-android-app"), this.iosRunning && u.default.runTask("reload-ios-app");
      } }, { key: "_runIOS", value: function value(e) {
        return u.default.runTask("sim-ios", e);
      } }, { key: "_runAndroid", value: function value(e) {
        return u.default.runTask("sim-android", e);
      } }, { key: "_runSimulator", value: function value(e) {
        try {
          var t = u.default.objToArgString(e.simInfo),
              n = "ios" == e.platform ? this._runIOS(t) : this._runAndroid(t);if (!n) return;n.stdout.on("data", function (e) {
            try {
              var t = e.toString();d.info(t), c.default.send((0, s.onPackagerOutput)(t));
            } catch (e) {
              d.error(e);
            }
          }), n.stderr.on("data", function (e) {
            try {
              var t = e.toString();d.error("packager stderr", t), c.default.send((0, s.onPackagerError)(t));
            } catch (e) {
              d.error(e);
            }
          });
        } catch (e) {
          d.error(e);
        }
      } }, { key: "listAvailableSimulators", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ios";return new Promise(function (t, n) {
          var r = setTimeout(function () {
            try {
              t({ error: !0, payload: ["The task to find simulators took too long.", "Try hitting the simulator button again or restarting Deco."] });
            } catch (e) {
              d.error(e), n(e);
            }
          }, 3e4),
              a = function a(e) {
            clearTimeout(r), t(e);
          };switch (e) {case "ios":
              u.default.runManagedTask("list-ios-sim", [], null, a);break;case "android":
              u.default.runManagedTask("list-android-sim", [], null, a);}
        });
      } }, { key: "androidRunning", get: function get() {
        return this._androidRunning;
      }, set: function set(e) {
        this._androidRunning = e;
      } }, { key: "iosRunning", get: function get() {
        return this._iosRunning;
      }, set: function set(e) {
        this._iosRunning = e;
      } }, { key: "simulatorStatus", get: function get() {
        return this.isSimulatorRunning();
      } }]), e;
  }());e.exports = new h();
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(2),
      u = r(i),
      l = n(8),
      c = r(l),
      s = n(4),
      f = r(s),
      d = n(11),
      p = (r(d), n(17)),
      h = r(p),
      _ = n(34),
      y = n(5),
      E = r(y),
      v = n(38),
      P = r(v),
      m = n(40),
      g = n(14),
      S = r(g),
      b = n(41).LIB_FOLDER,
      O = "./Scripts/deco-tool/bin/deco-tool",
      T = "./Scripts/deco-tool/index",
      A = function A(e) {
    h.default.send((0, _.customConfigError)(e));
  },
      R = function R(e) {
    if (e) try {
      e.killed || e.kill("SIGINT");
    } catch (t) {
      e = null;
    }
  },
      k = [];process.on("SIGINT", function () {
    k.forEach(function (e) {
      R(e);
    });
  }), process.on("close", function () {
    k.forEach(function (e) {
      R(e);
    });
  }), process.on("exit", function () {
    k.forEach(function (e) {
      R(e);
    });
  });var w = function w(e) {
    var t = P.default.getPreferences(),
        n = t[m.CATEGORIES.GENERAL][m.PREFERENCES.GENERAL.ANDROID_HOME],
        r = t[m.CATEGORIES.GENERAL][m.PREFERENCES.GENERAL.GENYMOTION_APP];if ("" == n) return void S.default.info("Path to Android SDK is not set, android functionality may be broken as a result");e.env.ANDROID_HOME = n, e.env.GENYMOTION_APP = r, e.env.PATH = e.env.PATH + ":" + c.default.join(n, "tools") + ":" + c.default.join(n, "platform-tools"), t[m.CATEGORIES.GENERAL][m.PREFERENCES.GENERAL.USE_GENYMOTION] && (e.env.USE_GENYMOTION = t[m.CATEGORIES.GENERAL][m.PREFERENCES.GENERAL.USE_GENYMOTION]);var a = c.default.join("/usr/local", "Deco");e.env.PATH = e.env.PATH + ":" + c.default.join(a, "node", "bin");
  },
      D = function () {
    function e() {
      a(this, e);
    }return o(e, null, [{ key: "objToArgString", value: function value(e) {
        var t = [];return f.default.each(e, function (e, n) {
          t.push("--" + n), t.push(e.toString());
        }), t;
      } }, { key: "runManagedTask", value: function value(e, t, n, r) {
        n || (n = {}), n.env = Object.assign({}, n.env || {}, process.env), w(n), t || (t = []);var a = E.default.getWatchedPath(),
            o = u.default.fork(T, [e, "-r", a].concat(t), Object.assign({}, n, { cwd: b }));k.push(o), o.once("message", function (e) {
          return e._configError ? void A(e.errorMessage) : void (r && r(e));
        });
      } }, { key: "runTask", value: function value(e, t, n) {
        n || (n = {}), n.env = Object.assign({}, n.env || {}, process.env), w(n), t || (t = []);var r = E.default.getWatchedPath(),
            a = u.default.spawn(O, [e, "-r", r].concat(t), Object.assign({}, n, { cwd: b }));return a.once("exit", function (e, t) {
          1 == e && A(a.stderr.toString());
        }), k.push(a), a;
      } }]), e;
  }();t.default = D;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(8),
      l = r(u),
      c = n(4),
      s = r(c),
      f = n(17),
      d = r(f),
      p = n(39),
      h = n(20),
      _ = r(h),
      y = n(40),
      E = n(30),
      v = n(14),
      P = (r(v), _.default.BROADCAST_PREFERENCES),
      m = _.default.GET_SYSTEM_PATHS,
      g = function () {
    function e() {
      o(this, e), this._preferences = {}, this._callbacks = [];
    }return i(e, [{ key: "register", value: function value() {
        d.default.on(P, this.storePreferences.bind(this)), d.default.on(m, this.getSystemPaths.bind(this));
      } }, { key: "onPreferenceUpdate", value: function value(e) {
        this._callbacks.push(e);
      } }, { key: "_defaultPreferences", value: function value() {
        var e;return a({}, y.CATEGORIES.GENERAL, (e = {}, a(e, y.PREFERENCES[y.CATEGORIES.GENERAL].ANDROID_HOME, l.default.join("/Users/" + process.env.USER, "/Library/Android/sdk")), a(e, y.PREFERENCES[y.CATEGORIES.GENERAL].GENYMOTION_APP, l.default.join("/Applications", "Genymotion.app")), e));
      } }, { key: "getPreferences", value: function value() {
        return this._preferences[y.CATEGORIES.GENERAL] || (this._preferences = this._defaultPreferences()), this._preferences;
      } }, { key: "getSystemPaths", value: function value(e, t) {
        t((0, p.sendSystemPaths)(this._defaultPreferences()));
      } }, { key: "storePreferences", value: function value(e, t) {
        e.preferences && (this._preferences = e.preferences), s.default.each(this._callbacks, function (e) {
          e();
        }), t((0, E.onSuccess)(P));
      } }]), e;
  }(),
      S = new g();t.default = S;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.sendSystemPaths = void 0;var a = n(20),
      o = r(a),
      i = o.default.GET_SYSTEM_PATHS;t.sendSystemPaths = function (e) {
    return { type: i, payload: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.METADATA = t.PREFERENCES = t.CATEGORIES = t.ROOT_KEY = void 0;var o,
      i,
      u,
      l,
      c,
      s = n(4),
      f = r(s),
      d = (t.ROOT_KEY = "PREFERENCES", t.CATEGORIES = f.default.mapKeys(["GENERAL", "SAVING", "EDITOR"])),
      p = t.PREFERENCES = (o = {}, a(o, d.GENERAL, f.default.mapKeys(["ANDROID_HOME", "GENYMOTION_APP", "USE_GENYMOTION"])), a(o, d.SAVING, f.default.mapKeys(["AUTOSAVE", "PROPERTY_CHANGE", "TEXT_EDIT", "DEBOUNCE"])), a(o, d.EDITOR, f.default.mapKeys(["VIM_MODE", "SHOW_INVISIBLES", "SHOW_INDENT_GUIDES", "HIGHLIGHT_ACTIVE_LINE", "NPM_REGISTRY"])), o);t.METADATA = (c = {}, a(c, d.GENERAL, (i = {}, a(i, p[d.GENERAL].ANDROID_HOME, { defaultValue: "" }), a(i, p[d.GENERAL].GENYMOTION_APP, { defaultValue: "" }), a(i, p[d.GENERAL].USE_GENYMOTION, { defaultValue: !1 }), i)), a(c, d.SAVING, (u = {}, a(u, p[d.SAVING].AUTOSAVE, { defaultValue: !0 }), a(u, p[d.SAVING].PROPERTY_CHANGE, { defaultValue: !0 }), a(u, p[d.SAVING].TEXT_EDIT, { defaultValue: !0 }), a(u, p[d.SAVING].DEBOUNCE, { defaultValue: 1500 }), u)), a(c, d.EDITOR, (l = {}, a(l, p[d.EDITOR].VIM_MODE, { defaultValue: !1 }), a(l, p[d.EDITOR].SHOW_INVISIBLES, { defaultValue: !1 }), a(l, p[d.EDITOR].HIGHLIGHT_ACTIVE_LINE, { defaultValue: !0 }), a(l, p[d.EDITOR].SHOW_INDENT_GUIDES, { defaultValue: !1 }), a(l, p[d.EDITOR].NPM_REGISTRY, { defaultValue: "https://registry.npmjs.org" }), l)), c);
}, function (e, t, n) {
  "use strict";
  var r = n(13),
      a = n(6),
      o = n(9),
      i = n(2),
      u = n(8),
      l = n(14),
      c = n(35),
      s = c.RelativePaths,
      f = s.ROOT_FOLDER,
      d = s.PROJECT_ROOT_FOLDER,
      p = s.LIB_FOLDER,
      h = s.BINARIES_FOLDER,
      _ = s.COMPONENT_CACHE_FOLDER,
      y = c.TEMP_PROJECT_FOLDER,
      E = function E(e) {
    e && l.error("Model failed to init", e);
  },
      v = function v() {
    try {
      r.statAppData(d);
    } catch (e) {
      r.createAppDataDirectory(d, E);
    }try {
      r.statAppData(_);
    } catch (e) {
      r.createAppDataDirectory(_, E);
    }try {
      r.statTmpData(f);
    } catch (e) {
      r.createTmpDataDirectory(f, E);
    }try {
      r.statTmpData(u.join(f, "projects"));
    } catch (e) {
      r.createTmpDataDirectory(u.join(f, "projects"), E);
    }try {
      a.statSync(y), a.statSync(u.join(y, "node_modules")), a.statSync(u.join(y, "/ios"));
    } catch (e) {
      o(y, function (e) {
        if (e) return void l.error("Model failed to init", e);var t = u.join(r.getAppPath(p), "/ios/Project/ios"),
            n = u.join(r.getAppPath(p), "node_modules");try {
          i.spawnSync("cp", ["-rf", t, y]), i.spawnSync("cp", ["-rf", n, y]);
        } catch (e) {
          l.error("Failed to copy modules");
        }
      });
    }
  };e.exports = { init: v, LIB_FOLDER: r.getAppPath(p), BINARIES_FOLDER: r.getAppPath(h), TMP_FOLDER: r.getTmpPath(f) };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.updateSimulatorStatus = t.showSimulatorError = t.listAvailableSims = t.updatePackagerStatus = t.onPackagerError = t.onPackagerOutput = void 0;var a = n(14),
      o = (r(a), n(23)),
      i = r(o),
      u = i.default.PACKAGER_OUTPUT,
      l = i.default.LIST_AVAILABLE_SIMS,
      c = i.default.UPDATE_SIMULATOR_STATUS,
      s = i.default.UPDATE_PACKAGER_STATUS;t.onPackagerOutput = function (e) {
    return { type: u, value: e };
  }, t.onPackagerError = function (e) {
    return { type: u, value: e };
  }, t.updatePackagerStatus = function (e) {
    return { type: s, status: e };
  }, t.listAvailableSims = function (e) {
    return { type: l, simList: e };
  }, t.showSimulatorError = function (e) {
    return e || (e = ""), "string" == typeof e ? { error: !0, message: [e] } : { error: !0, message: e };
  }, t.updateSimulatorStatus = function (e) {
    return { type: c, simulatorIsOpen: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = n(4),
      o = r(a),
      i = function i(e, t) {
    for (var n = o.default.chain(e).orderBy("version", "desc").unionBy("name").reverse().value(), r = n.length - 1; r >= 0; r--) {
      if (n[r].name === t) return n[r];
    }return n[0];
  },
      u = function u(e) {
    var t = [],
        n = null;return e.split("\n").forEach(function (e) {
      var r = e.match(/^-- (.+) --$/);if (r) {
        var a = r[1].match(/^iOS (.+)$/);return void (n = a ? a[1] : null);
      }var o = e.match(/^[ ]*([^()]+) \(([^()]+)\)/);if (o && n) {
        var i = o[1],
            u = o[2];t.push({ udid: u, name: i, version: n });
      }
    }), t;
  };e.exports = { matchingSimulator: i, parseSimulatorList: u };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(37),
      u = r(i),
      l = n(17),
      c = r(l),
      s = n(42),
      f = (n(2), n(18), n(14)),
      d = function () {
    function e() {
      var t = this;a(this, e), this._packagerProcess = null, this._packagerPath = null, this._packagerIsActive = !1, process.on("exit", function () {
        t.killPackager();
      }), process.on("SIGINT", function () {
        t.killPackager();
      });
    }return o(e, [{ key: "processIsRunning", value: function value() {
        return this.isActive();
      } }, { key: "emitPackagerState", value: function value(e) {
        null != e && "undefined" != typeof e && (this._packagerIsActive = !!e.isAlive, c.default.send((0, s.updatePackagerStatus)(this._packagerIsActive)));
      } }, { key: "isActive", value: function value() {
        return this._packagerIsActive;
      } }, { key: "checkPackagerStatus", value: function value() {
        !this._packagerProcess || this._packagerProcess.killed ? this.emitPackagerState({ isAlive: !1 }) : this.emitPackagerState({ isAlive: !0 });
      } }, { key: "stopPackager", value: function value() {
        var e = this;return this.isActive() && this.promiseKillPackager().then(function () {
          return e.isActive();
        }).catch(function () {
          return e.isActive();
        }), !this.isActive();
      } }, { key: "_runPackager", value: function value(e) {
        var t = this;try {
          this._packagerProcess = u.default.runTask("run-packager"), this._packagerProcess.stdout.on("data", function (e) {
            try {
              var t = e.toString();f.info(t), c.default.send((0, s.onPackagerOutput)(t));
            } catch (e) {
              f.error(e);
            }
          }), this._packagerProcess.stderr.on("data", function (e) {
            try {
              var t = e.toString();f.error("packager stderr", t), c.default.send((0, s.onPackagerError)(t));
            } catch (e) {
              f.error(e);
            }
          }), this._packagerProcess.once("exit", function () {
            t.emitPackagerState({ isAlive: !1 });
          }), this._packagerProcess.once("SIGINT", function () {
            t.emitPackagerState({ isAlive: !1 });
          }), this.checkPackagerStatus();
        } catch (e) {
          f.error(e);
        }
      } }, { key: "runPackager", value: function value(e) {
        var t = this;try {
          this.promiseKillPackager().then(function () {
            t._runPackager(e);
          }).catch(function () {
            t._runPackager(e);
          });
        } catch (e) {
          f.error(e);
        }
      } }, { key: "promiseKillPackager", value: function value() {
        var e = this;return new Promise(function (t, n) {
          var r = function r() {
            if (e._packagerProcess) try {
              e._packagerProcess.kill("SIGINT");
            } catch (e) {
              f.error(e);
            }
          },
              a = 0,
              o = setInterval(function () {
            if (a > 3) n();else if (e._packagerProcess) {
              if (!e._packagerProcess.killed) return a += 1, void r();t(), e.emitPackagerState({ isAlive: !1 });
            } else t(), e.emitPackagerState({ isAlive: !1 });clearInterval(o);
          }, 150);r();
        });
      } }, { key: "killPackager", value: function value() {
        try {
          this._packagerProcess && !this._packagerProcess.killed && this._packagerProcess.kill("SIGINT");
        } catch (e) {
          f.error(e);
        }
      } }, { key: "packagerPath", get: function get() {
        return this._packagerPath;
      } }]), e;
  }();e.exports = new d();
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(8),
      u = r(i),
      l = n(2),
      c = r(l),
      s = n(11),
      f = r(s),
      d = n(12),
      p = r(d),
      h = n(13),
      _ = (r(h), n(17)),
      y = r(_),
      E = n(46),
      v = n(30),
      P = n(25),
      m = r(P),
      g = n(14),
      S = r(g),
      b = m.default.OPEN_PROJECT_DIALOG,
      O = m.default.SAVE_AS_DIALOG,
      T = m.default.RESIZE,
      A = m.default.OPEN_PATH_CHOOSER_DIALOG,
      R = function () {
    function e() {
      a(this, e);
    }return o(e, [{ key: "register", value: function value() {
        y.default.on(b, this.openProjectDialog.bind(this)), y.default.on(O, this.saveAsDialog.bind(this)), y.default.on(T, this.resizeWindow.bind(this)), y.default.on(A, this.openPathChooserDialog.bind(this));
      } }, { key: "openProjectDialog", value: function value(e, t) {
        var n = s.dialog.showOpenDialog(s.BrowserWindow.getFocusedWindow(), { title: "Select Project Directory", properties: ["openDirectory"], filter: [{ name: "All Files", extensions: ["*"] }] });n && 0 !== n.length && t((0, E.openProjectDialog)(n[0]));
      } }, { key: "openPathChooserDialog", value: function value(e, t) {
        e.propertyType || (e.propertyType = "openDirectory");var n = s.dialog.showOpenDialog(s.BrowserWindow.getFocusedWindow(), { title: e.title || "Select Path", properties: [e.propertyType], filter: [{ name: "All Files", extensions: ["*"] }] });n && 0 !== n.length && t((0, E.openPathChooserDialog)(n[0]));
      } }, { key: "_cleanBuildDirectory", value: function value(e) {
        var t = u.default.join(e, "ios/build"),
            n = u.default.join(t, "Logs"),
            r = u.default.join(t, "ModuleCache"),
            a = u.default.join(t, "info.plist"),
            o = u.default.join(t, "Build/Intermediates");c.default.spawn("rm", ["-rf", n]), c.default.spawn("rm", ["-rf", r]), c.default.spawn("rm", ["-rf", a]), c.default.spawn("rm", ["-rf", o]);
      } }, { key: "saveAsDialog", value: function value(e, t) {
        try {
          var n = e.rootPath,
              r = s.dialog.showSaveDialog(s.BrowserWindow.getFocusedWindow(), { title: "Select a directory to save your project" });if (!r) return;if (p.default.existsSync(r)) {
            if (r == n) return void t((0, E.saveAsDialog)(r));c.default.spawnSync("rm", ["-rf", r]);
          }c.default.spawnSync("cp", ["-rf", n, r]);this._cleanBuildDirectory(r), t((0, E.saveAsDialog)(r));
        } catch (e) {
          S.default.error(e), t((0, v.onError)(O));
        }
      } }, { key: "resizeWindow", value: function value(e, t, n) {
        try {
          !function () {
            var r = f.default.screen.getPrimaryDisplay().workAreaSize,
                a = s.BrowserWindow.fromWebContents(n.sender);e.width && e.height ? (a.setSize(e.width, e.height), e.center ? a.center() : "number" == typeof e.x && "number" == typeof e.y && e.x >= 0 && e.y >= 0 && a.setPosition(e.x, e.y), e.popResize && (a.hide(), setTimeout(function () {
              a.show();
            }, 500))) : e.twoThirds ? (a.setPosition(0, 0), a.setSize(Math.round(r.width / 1.3), Math.round(r.height))) : e.maximize ? (a.setPosition(0, 0), a.maximize()) : S.default.error("resize-window was given incorrect arguments"), t((0, v.onSuccess)(T));
          }();
        } catch (e) {
          S.default.error(e), t((0, v.onError)(T));
        }
      } }]), e;
  }(),
      k = new R();t.default = k;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.openPathChooserDialog = t.saveAsDialog = t.openProjectDialog = void 0;var a = n(25),
      o = r(a),
      i = (n(14), o.default.OPEN_PROJECT_DIALOG),
      u = o.default.SAVE_AS_DIALOG,
      l = o.default.OPEN_PATH_CHOOSER_DIALOG;t.openProjectDialog = function (e) {
    return { type: i, path: e };
  }, t.saveAsDialog = function (e) {
    return { type: u, path: e };
  }, t.openPathChooserDialog = function (e) {
    return { type: l, path: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(6),
      u = (r(i), n(8)),
      l = r(u),
      c = n(2),
      s = r(c),
      f = n(12),
      d = r(f),
      p = n(4),
      h = r(p),
      _ = n(48),
      y = (r(_), n(49)),
      E = (r(y), n(41)),
      v = n(17),
      P = r(v),
      m = n(42),
      g = n(30),
      S = n(23),
      b = r(S),
      O = n(5),
      T = (r(O), n(38)),
      A = r(T),
      R = n(44),
      k = r(R),
      w = n(36),
      D = r(w),
      C = n(14),
      I = r(C),
      M = n(40),
      j = l.default.join(E.LIB_FOLDER, "/Scripts/appWatcher.js"),
      L = b.default.RUN_SIMULATOR,
      N = b.default.STOP_PACKAGER,
      F = b.default.RUN_PACKAGER,
      U = b.default.RESUME_PACKAGER,
      G = b.default.RESUME_SIMULATOR,
      x = b.default.HARD_RELOAD_SIMULATOR,
      B = b.default.LIST_AVAILABLE_SIMS,
      H = function H(e) {
    var t = A.default.getPreferences(),
        n = t[M.CATEGORIES.GENERAL][M.PREFERENCES.GENERAL.ANDROID_HOME];return "" == n ? void I.default.info("Path to Android SDK is not set, android functionality may be broken as a result") : (e.env.ANDROID_HOME = n, void (e.env.PATH = e.env.PATH + ":" + l.default.join(n, "tools") + ":" + l.default.join(n, "platform-tools")));
  },
      W = function () {
    function e() {
      a(this, e);
    }return o(e, [{ key: "register", value: function value() {
        P.default.on(L, this.onRunSimulator.bind(this)), P.default.on(N, this.onStopPackager.bind(this)), P.default.on(F, this.onRunPackager.bind(this)), P.default.on(U, this.onResumePackager.bind(this)), P.default.on(G, this.onResumeSimulator.bind(this)), P.default.on(x, this.onHardReloadSimulator.bind(this)), P.default.on(B, this.listAvailableSims.bind(this)), this._initMonitor();
      } }, { key: "_initMonitor", value: function value() {
        var e = this;this._monitorSimulatorProcess(), process.on("exit", function () {
          e._simWatcher.kill();
        }), process.on("SIGINT", function () {
          e._simWatcher.kill();
        }), A.default.onPreferenceUpdate(function () {
          e._restartMonitorProcess();
        }), setInterval(function () {
          e._simWatcher && !e._simWatcher.killed || e._monitorSimulatorProcess();
        }, 3e4);
      } }, { key: "_handleMonitorMessage", value: function value(e) {
        try {
          var t = e.androidRunning || e.iosRunning;D.default.simulatorStatus != t && P.default.send((0, m.updateSimulatorStatus)(t)), D.default.androidRunning = e.androidRunning, D.default.iosRunning = e.iosRunning;
        } catch (e) {
          I.default.error(e);
        }
      } }, { key: "_monitorSimulatorProcess", value: function value() {
        var e = {};e.env = Object.assign({}, e.env || {}, process.env), H(e), e.stdio = "inherit", this._simWatcher = s.default.fork(j, [], e), this._simWatcher.on("message", this._handleMonitorMessage.bind(this));
      } }, { key: "_restartMonitorProcess", value: function value() {
        try {
          this._simWatcher.kill();
        } catch (e) {
          I.default.error(e);
        }this._monitorSimulatorProcess();
      } }, { key: "onStopPackager", value: function value(e, t) {
        try {
          t(k.default.stopPackager() ? (0, g.onSuccess)(N) : (0, g.onError)("Error when stopping packager."));
        } catch (e) {
          I.default.error(e), t((0, g.onError)("Error when stopping packager."));
        }
      } }, { key: "onRunPackager", value: function value(e, t) {
        k.default.runPackager(e), t((0, g.onSuccess)(F));
      } }, { key: "onResumePackager", value: function value(e, t) {
        k.default.processIsRunning() && (k.default.runPackager(e), t((0, g.onSuccess)(U)));
      } }, { key: "listAvailableSims", value: function value(e, t) {
        D.default.listAvailableSimulators(e.platform).then(function (e) {
          t(e.error ? (0, m.showSimulatorError)(e.payload) : (0, m.listAvailableSims)(e.payload));
        }).catch(function (e) {
          I.default.error(e), t((0, g.onError)(B));
        });
      } }, { key: "_findAppFile", value: function value(e) {
        var t = null;try {
          var n = d.default.listSync(e);return h.default.each(n, function (e) {
            ".app" == l.default.extname(e) && (t = e);
          }), t;
        } catch (e) {
          I.default.error(e);
        }return t;
      } }, { key: "onResumeSimulator", value: function value(e, t) {
        if (D.default.isSimulatorRunning() && null != D.default.lastUsedArgs()) try {
          D.default.runSimulator(), t((0, g.onSuccess)(G));
        } catch (e) {
          I.default.error(e), t((0, g.onError)("Could not find the application binary in default path."));
        } else t((0, g.onError)(G));
      } }, { key: "onHardReloadSimulator", value: function value(e, t) {
        try {
          D.default.hardReload(), t((0, g.onSuccess)());
        } catch (e) {
          I.default.error(e), t((0, g.onError)("Could not hard reload the application."));
        }
      } }, { key: "onRunSimulator", value: function value(e, t) {
        try {
          D.default.runSimulator({ simInfo: e.simInfo, platform: e.platform || "ios" }), t((0, g.onSuccess)(L));
        } catch (e) {
          I.default.error(e), t((0, g.onError)("Could not find the application binary in default path."));
        }
      } }]), e;
  }();e.exports = new W();
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e) {
    return s.basename(e.name, s.extname(e.name));
  }function o(e, t) {
    return s.join(e, "build/Build/Products/Debug-iphonesimulator/" + t + ".app");
  }function i(e) {
    try {
      var t = c.execFileSync("/usr/libexec/PlistBuddy", ["-c", "Print:CFBundleIdentifier", s.join(e, "Info.plist")], { encoding: "utf8" }).trim();return t;
    } catch (e) {
      l.default.error(e);
    }
  }var u = n(14),
      l = r(u),
      c = n(2),
      s = n(8);e.exports = { inferredSchemeName: a, getAppPath: o, getBundleID: i };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    for (var t = e.sort(), n = t.length - 1; n >= 0; n--) {
      var r = e[n],
          o = a.extname(r);if (".xcworkspace" === o) return { name: r, isWorkspace: !0 };if (".xcodeproj" === o) return { name: r, isWorkspace: !1 };
    }return null;
  }var a = n(8);e.exports = r;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(8),
      l = r(u),
      c = n(2),
      s = r(c),
      f = n(4),
      d = r(f),
      p = n(12),
      h = r(p),
      _ = n(13),
      y = r(_),
      E = n(17),
      v = r(E),
      P = n(22),
      m = r(P),
      g = n(28),
      S = r(g),
      b = n(30),
      O = n(51),
      T = n(14),
      A = r(T),
      R = m.default.IMPORT_COMPONENT,
      k = m.default.GET_COMPONENT_LIST,
      w = (S.default.ERROR, n(35).CACHE_FOLDER),
      D = function () {
    function e() {
      a(this, e);
    }return i(e, [{ key: "register", value: function value() {
        v.default.on(R, this.getComponentList.bind(this)), v.default.on(k, this.getComponentList.bind(this));
      } }, { key: "_verifyOrCreateComponentFolder", value: function value(e) {
        var t = l.default.join(e, "Components");try {
          return h.default.isDirectorySync(t) ? t : (s.default.spawnSync("mkdir", ["-p", t]), t);
        } catch (e) {
          return A.default.error(e), null;
        }
      } }, { key: "_readComponentMetadata", value: function value(e, t) {
        y.default.readFile(e, t);
      } }, { key: "importComponent", value: function value(e, t) {
        var n = this;try {
          var r = function () {
            var r = h.default.listSync(w),
                a = e.componentName,
                o = d.default.findIndex(r, function (e) {
              return l.default.basename(e).includes(a);
            });if (o == -1) return t((0, b.onError)("Could not find a component with that name")), { v: void 0 };var i = r[o],
                u = e.projectRoot;"string" != typeof u && (u = [""].concat(u).join("/"));var c = n._verifyOrCreateComponentFolder(u);if (!c) return t((0, b.onError)("Could not find or initialize component folder in project root")), { v: void 0 };s.default.spawnSync("tar", ["-xzf", i, "-C", c]);var f = l.default.join(c, a, a + ".js.deco"),
                p = l.default.join(c, a, a).split("/");p.shift(), n._readComponentMetadata(f, { success: function success(e) {
                var n = JSON.parse(e.toString());t((0, O.onImportComponent)(n, p));
              }, error: function error(e) {
                A.default.error(e), t((0, b.onError)("Could not get component metadata"));
              } });
          }();if ("object" === ("undefined" == typeof r ? "undefined" : o(r))) return r.v;
        } catch (e) {
          A.default.error(e), t((0, b.onError)("Component failed to import"));
        }
      } }, { key: "getComponentList", value: function value(e, t) {
        try {
          A.default.info("callback========CACHE_FOLDER=" + w);var n = h.default.listSync(w);A.default.info("CACHE_FOLDER=========" + w);var r = d.default.map(n, function (e) {
            var t = l.default.basename(e);return { name: t.slice(0, t.indexOf(".tar.gz")) };
          });t((0, O.onComponentList)(r));
        } catch (e) {
          A.default.error(e), t((0, b.onError)("fatal error when fetching component list"));
        }
      } }]), e;
  }(),
      C = new D();t.default = C;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.onImportComponent = t.onComponentList = void 0;var a = n(14),
      o = (r(a), n(22)),
      i = r(o),
      u = i.default.GET_COMPONENT_LIST,
      l = i.default.IMPORT_COMPONENT;t.onComponentList = function (e) {
    return { type: u, componentList: e };
  }, t.onImportComponent = function (e, t) {
    return { type: l, metadata: e, requirePath: t };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  }function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(4),
      l = r(u),
      c = n(6),
      s = (r(c), n(8)),
      f = r(s),
      d = n(53),
      p = r(d),
      h = n(54),
      _ = r(h),
      y = n(14),
      E = r(y),
      v = n(55),
      P = r(v),
      m = n(17),
      g = r(m),
      S = n(30),
      b = n(57),
      O = n(59),
      T = n(26),
      A = r(T),
      R = function () {
    function e() {
      o(this, e);
    }return i(e, [{ key: "register", value: function value() {
        g.default.on(A.default.IMPORT_MODULE, this.importModule.bind(this)), g.default.on(A.default.SCAN_PROJECT_FOR_REGISTRIES, this.scanPathForRegistries.bind(this));
      } }, { key: "readPackageJSON", value: function value(e) {
        var t = f.default.join(e, "package.json");return new Promise(function (e, n) {
          try {
            p.default.readFile(t, function (t, r) {
              t && "ENOENT" !== t.code ? (E.default.info("Failed to read package.json"), E.default.error(t), n(t)) : e(r);
            });
          } catch (e) {
            E.default.error(e), n(e);
          }
        });
      } }, { key: "readAllPackageJSON", value: function value(e) {
        return new Promise(function (t, n) {
          var r = {},
              a = function a(e, t, n, _a) {
            if (e) return _a();try {
              r[n] = JSON.parse(t);
            } catch (e) {
              return _a();
            }return _a();
          },
              o = function o(e, a) {
            return e ? n() : void t(r);
          },
              i = { match: /package.json$/, excludeDir: /node_modules/, matchFullName: !0 };try {
            _.default.readFiles(e, i, a, o);
          } catch (e) {
            E.default.error(e);
          }
        });
      } }, { key: "readAllComponentLists", value: function value(e) {
        var t = this;return e = f.default.resolve(e), E.default.info("callback==begin readAllPackageJSON"), this.readAllPackageJSON(e).then(function (e) {
          var t = {};return l.default.each(e, function (e, n) {
            var r = l.default.get(e, "deco.components");r && (E.default.info("get deco component================" + n), t[n] = r);
          }), t;
        }).then(function (e) {
          return l.default.mapValues(e, function (e, n) {
            return t.resolveLocalPathsInComponents(f.default.dirname(n), e);
          });
        });
      } }, { key: "resolveLocalPathsInComponents", value: function value(e, t) {
        var n = function n(t, _n) {
          var r = l.default.get(t, _n);"string" == typeof r && r.startsWith("./") && l.default.set(t, _n, f.default.join(e, r));
        };return l.default.each(t, function (e) {
          n(e, "template.text"), n(e, "template.metadata");
        }), t;
      } }, { key: "scanPathForRegistries", value: function value(e, t) {
        var n = e.path;E.default.info("callback=====scanPathForRegistries"), this.readAllComponentLists(n).then(function (e) {
          var n = "";for (var r in e) {
            n += r;
          }E.default.info("registryMap=====" + n), t((0, O.foundRegistries)(e));
        });
      } }, { key: "importModule", value: function value(e, t) {
        e.version = e.version || "latest";var n = e.name,
            r = e.version,
            o = e.path;this.readPackageJSON(e.path).then(function () {
          var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              u = i.dependencies;u && u[n] && ("*" === r || r === u[n]) ? (E.default.info("npm: dependency " + n + "@" + r + " already installed"), t((0, S.onSuccess)(A.default.IMPORT_MODULE))) : !function () {
            var i = l.default.throttle(function (e) {
              g.default.send((0, b.updateProgressBar)(n, 100 * e));
            }, 250);g.default.send((0, b.startProgressBar)(n, 0));try {
              var u = ["install", "-S", n + "@" + r].concat(a(e.registry && ["--registry", e.registry]));E.default.info("npm " + u.join(" ")), P.default.run(u, { cwd: o }, function (e) {
                i.cancel(), g.default.send((0, b.endProgressBar)(n, 100)), e ? (E.default.info("npm: dependency " + n + "@" + r + " failed to install"), t((0, S.onError)(A.default.IMPORT_MODULE))) : (E.default.info("npm: dependency " + n + "@" + r + " installed successfully"), t((0, S.onSuccess)(A.default.IMPORT_MODULE)));
              }, i);
            } catch (e) {
              E.default.error(e), t((0, S.onError)(A.default.IMPORT_MODULE));
            }
          }();
        });
      } }]), e;
  }();t.default = new R();
}, function (e, t) {
  e.exports = require("jsonfile");
}, function (e, t) {
  e.exports = require("node-dir");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(56),
      u = r(i),
      l = n(2),
      c = n(8),
      s = r(c),
      f = n(14),
      d = r(f),
      p = function () {
    function e() {
      a(this, e);
    }return o(e, null, [{ key: "run", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments[2],
            r = arguments[3];n = (0, u.default)(n);var a = s.default.join(__dirname, "../node_modules/npm/bin/npm-cli.js");d.default.info("cmd=" + e + ",opts=" + t);var o = (0, l.fork)(a, e, t);return o.on("error", n), o.on("close", function (e) {
          n(null, e);
        }), r && o.on("message", function (e) {
          e && r(e.progress);
        }), o;
      } }]), e;
  }();t.default = p;
}, function (e, t) {
  e.exports = require("once");
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.upgradeStatus = t.endProgressBar = t.updateProgressBar = t.startProgressBar = void 0;var a = n(58),
      o = r(a);t.startProgressBar = function (e, t) {
    return { type: o.default.PROGRESS_START, payload: { name: e, progress: t } };
  }, t.updateProgressBar = function (e, t) {
    return { type: o.default.PROGRESS_UPDATE, payload: { name: e, progress: t } };
  }, t.endProgressBar = function (e, t) {
    return { type: o.default.PROGRESS_END, payload: { name: e, progress: t } };
  }, t.upgradeStatus = function (e) {
    return { type: o.default.UPGRADE_STATUS, payload: { status: e } };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["PROGRESS_START", "PROGRESS_UPDATE", "PROGRESS_END", "UPGRADE_STATUS"]);
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.foundRegistries = void 0;var a = n(26),
      o = r(a),
      i = o.default.SCAN_PROJECT_FOR_REGISTRIES;t.foundRegistries = function (e) {
    return { type: i, payload: e };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = n(4),
      o = r(a),
      i = n(5),
      u = r(i),
      l = n(32),
      c = r(l),
      s = n(61),
      f = n(62),
      d = r(f),
      p = n(35),
      h = (n(6), n(8)),
      _ = n(11).BrowserWindow,
      y = n(11).dialog;n(11).nativeImage, n(11).app, n(14);global.preferencesWindow = null;var E = null,
      v = function v(e) {
    e.webContents.session.clearCache(function () {}), e.hide(), e.setTitle("Deco"), e.loadURL(P.getProjectBaseURL());var t = new Date().getTime().toString();global.openWindows[t] = e, e.on("close", function (e) {
      P.userWantsToClose() || e.preventDefault();
    }), e.on("closed", function () {
      delete global.openWindows[t], global.preferencesWindow && (global.preferencesWindow.destroy(), global.preferencesWindow = null);
    });
  },
      P = { getProjectBaseURL: function getProjectBaseURL() {
      var e = h.join(p.PUBLIC_FOLDER, "/index.html");return global.__DEV__ ? "http://0.0.0.0:8080/" : "file://" + e;
    }, allWindowsClosed: function allWindowsClosed() {
      return 0 == o.default.keys(global.openWindows).length;
    }, userWantsToClose: function userWantsToClose() {
      var e = u.default.getWatchedPath();return e == p.TEMP_PROJECT_FOLDER ? 0 == y.showMessageBox(s.QUESTION.shouldLoseTemporaryDirectory) : !c.default.hasUnsavedProgress() || 0 == y.showMessageBox(s.QUESTION.shouldLoseUnsavedProgress);
    }, checkNeedsUpgrade: function checkNeedsUpgrade(e) {
      return new Promise(function (e, t) {
        if (d.default.needsUpgrade()) {
          E = new _({
            width: 475, height: 178, show: !1, resizable: !1, frame: !1, title: "Deco Upgrade", titleBarStyle: "hidden", closable: "false", icon: h.join(p.PUBLIC_FOLDER, "/images/deco-icon.png") }), E.setMinimizable(!1), E.setMaximizable(!1), E.setFullScreenable(!1), E.loadURL(P.getProjectBaseURL() + "#/upgrading");var n = new Date().getTime().toString();global.openWindows[n] = E, E.webContents.on("did-finish-load", function () {
            E.show(), d.default.upgrade().then(function () {
              setTimeout(function () {
                e(), E.close(), delete global.openWindows[n];
              }, 5e3);
            }).catch(function () {
              setTimeout(t, 5e3);
            });
          });
        } else e();
      });
    }, newWindow: function newWindow(e, t, n) {
      return new Promise(function (r, a) {
        var o = new _({ width: e || global.workArea.width, height: t || global.workArea.height, show: n || !0, titleBarStyle: "hidden", icon: h.join(p.PUBLIC_FOLDER, "/images/deco-icon.png") });v(o), o.webContents.on("did-finish-load", function () {
          r(), o.show();
        });
      });
    }, hidePreferencesWindow: function hidePreferencesWindow() {
      preferencesWindow.hide();
    }, openPreferencesWindow: function openPreferencesWindow() {
      global.preferencesWindow && global.preferencesWindow.show();
    }, initializePreferencesWindow: function initializePreferencesWindow() {
      var e = new _({ width: 450, height: 360, show: !1, title: "Preferences", titleBarStyle: "hidden", icon: h.join(p.PUBLIC_FOLDER, "/images/deco-icon.png") });return e.setMinimizable(!1), e.setMaximizable(!1), e.setFullScreenable(!1), e.loadURL(P.getProjectBaseURL() + "#/preferences"), e.on("close", function (t) {
        t.preventDefault(), e.hide();
      }), global.preferencesWindow = e, e;
    } };e.exports = P;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.QUESTION = t.INFO = void 0;var a = n(8),
      o = r(a),
      i = n(11),
      u = i.nativeImage.createFromPath(o.default.join(__dirname, "../../public/images/deco-icon.png"));t.INFO = { noUpdateIsAvailable: { type: "info", message: "No update is available", detail: "You are using the latest version of Deco", buttons: ["Ok"], icon: u } }, t.QUESTION = { shouldRestartAndUpdate: { type: "question", message: "A new version of Deco is available!", detail: "Update and restart Deco? Any unsaved changes will be lost.", buttons: ["Update and Restart", "Later"], icon: u }, shouldLoseTemporaryDirectory: { type: "question", message: "Quit without saving?", detail: "This project has not yet been saved. New projects are temporary until saved for the first time. To save this project, first click Cancel, then go to File > Save Project.", buttons: ["Quit", "Cancel"], icon: u }, shouldLoseUnsavedProgress: { type: "question", message: "Quit without saving?", detail: "Files have been changed since last save. Quit anyway?", buttons: ["Quit", "Cancel"], icon: u } };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(6),
      u = r(i),
      l = n(8),
      c = r(l),
      s = n(2),
      f = r(s),
      d = n(11),
      p = n(35),
      h = n(17),
      _ = r(h),
      y = n(57),
      E = n(14),
      v = r(E),
      P = global.__DEV__ ? c.default.join(__dirname, "../Scripts/postinstall") : c.default.join(__dirname, "../../app.asar.unpacked/Scripts/postinstall"),
      m = c.default.join(p.APP_SUPPORT, "/libs/binaries/Deco"),
      g = c.default.join(p.APP_SUPPORT, ".deco.version"),
      S = function () {
    function e() {
      a(this, e);
    }return o(e, [{ key: "needsUpgrade", value: function value() {
        try {
          var e = u.default.readFileSync(g).toString();return e != d.app.getVersion();
        } catch (e) {
          return v.default.info(e), !0;
        }
      } }, { key: "_upgrade", value: function value(e, t) {
        var n = global.__DEV__ ? "dev " + c.default.join(__dirname, "../deco_unpack_lib") : "upgrade",
            r = '"' + P + '" ' + n,
            a = 'do shell script \\"' + r + '\\" with administrator privileges';f.default.exec('"' + m + '" -e "' + a + '"', { env: process.env }, function (n, r, a) {
          if (null !== n) return v.default.error("upgrade stderr: " + a), v.default.error("upgrade error: " + n), _.default.send((0, y.upgradeStatus)("failed")), void t();try {
            _.default.send((0, y.upgradeStatus)("success")), e();
          } catch (e) {
            v.default.error(e), _.default.send((0, y.upgradeStatus)("failed")), t();
          }
        });
      } }, { key: "upgrade", value: function value() {
        return new Promise(this._upgrade.bind(this));
      } }]), e;
  }(),
      b = new S();t.default = b;
}, function (e, t, n) {
  "use strict";
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var a = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = n(11).Menu,
      i = n(64),
      u = function () {
    function e() {
      r(this, e);
    }return a(e, [{ key: "instantiateTemplate", value: function value() {
        var e = new i(process.platform).makeTemplate();this._template = e, this._menu = o.buildFromTemplate(this._template), o.setApplicationMenu(this._menu);
      } }, { key: "menu", get: function get() {
        return this._menu;
      } }]), e;
  }(),
      l = new u();e.exports = l;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = n(11),
      o = n(8),
      i = r(o),
      u = n(60),
      l = r(u),
      c = n(65),
      s = r(c),
      f = n(45),
      d = (r(f), n(32)),
      p = r(d),
      h = n(5),
      _ = r(h),
      y = n(47),
      E = r(y),
      v = n(44),
      P = r(v),
      m = n(36),
      g = (r(m), n(66)),
      S = r(g),
      b = n(37),
      O = r(b),
      T = n(61),
      A = n(28),
      R = r(A),
      k = n(17),
      w = r(k),
      D = n(67),
      C = (n(42), n(34)),
      I = R.default.ERROR,
      M = n(14),
      j = function j(e) {
    this.fileMenu = { label: "File", submenu: [{ label: "New", accelerator: "CmdOrCtrl+N", click: function click() {
          l.default.allWindowsClosed() ? (l.default.newWindow(640, 450, !1).then(function () {
            w.default.send((0, D.shouldCreateProject)());
          }), l.default.initializePreferencesWindow()) : l.default.userWantsToClose() && w.default.send((0, D.shouldCreateProject)());
        } }, { label: "Open...", accelerator: "CmdOrCtrl+O", click: function click() {
          l.default.allWindowsClosed() ? (l.default.newWindow(640, 450, !1).then(function () {
            w.default.send((0, D.openProjectDialog)());
          }), l.default.initializePreferencesWindow()) : l.default.userWantsToClose() && w.default.send((0, D.openProjectDialog)());
        } }, { type: "separator" }, { label: "Save Project", accelerator: "CmdOrCtrl+S", click: function click() {
          w.default.send((0, D.shouldSaveProject)());
        } }, { label: "Save Project As...", accelerator: "Shift+CmdOrCtrl+S", click: function click() {
          w.default.send((0, D.shouldSaveProjectAs)());
        } }] }, this.editMenu = { label: "Edit", submenu: [{ label: "Undo", accelerator: "CmdOrCtrl+Z", role: "undo" }, { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", role: "redo" }, { type: "separator" }, { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" }, { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" }, { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }] }, this.installMenu = { label: "Install", submenu: [{ label: "Install npm module", accelerator: "CmdOrCtrl+Shift+M", click: function click() {
          w.default.send((0, D.openInstallModuleDialog)());
        } }, { type: "separator" }, { label: "Add deco config to project", click: function click() {
          var e = O.default.runTask("init-template");e.on("exit", function () {
            var e = _.default.getWatchedPath();w.default.send((0, D.openFile)((0, h.buildPathObjects)(i.default.join(e, "configure.deco.js"))));
          });
        } }] }, this.windowMenu = { label: "Window", role: "window", submenu: [{ label: "Minimize", accelerator: "CmdOrCtrl+M", role: "minimize" }, { label: "Close Tab", accelerator: "CmdOrCtrl+W", click: function click() {
          return global.preferencesWindow && global.preferencesWindow.isFocused() ? void l.default.hidePreferencesWindow() : void w.default.send((0, D.shouldCloseTab)());
        } }, { type: "separator" }, { label: "Bring All to Front", role: "front" }] }, this.helpMenu = { label: "Help", role: "help", submenu: [{ label: "Chat With Deco Team...", click: function click() {
          a.shell.openExternal("https://decoslack.slack.com/messages/deco/");
        } }] }, this.appMenu = null, "darwin" == e && (this.appMenu = { label: "Deco", submenu: [{ label: "About Deco", role: "about" }, { label: "Check for Update", click: function click() {
          try {
            s.default.checkForUpdates(function (e) {
              return e ? 0 == a.dialog.showMessageBox(T.QUESTION.shouldRestartAndUpdate) : (a.dialog.showMessageBox(T.INFO.noUpdateIsAvailable), !1);
            });
          } catch (e) {
            M.error(e);
          }
        } }, { type: "separator" }, { label: "Preferences...", accelerator: "Command+,", click: function click() {
          l.default.openPreferencesWindow();
        } }, { label: "Project Settings", click: function click() {
          var e = _.default.getWatchedPath();e && "" != e && p.default.createProjectSettingsTemplate(e).then(function (e) {
            w.default.send((0, C.openProjectSettings)((0, h.buildPathObjects)(e)));
          });
        } }, { type: "separator" }, { label: "Services", role: "services", submenu: [] }, { type: "separator" }, { label: "Hide Deco", accelerator: "Command+H", role: "hide" }, { label: "Hide Others", accelerator: "Command+Shift+H", role: "hideothers" }, { label: "Show All", role: "unhide" }, { type: "separator" }, { label: "Quit", accelerator: "Command+Q", click: function click() {
          (l.default.allWindowsClosed() || l.default.userWantsToClose()) && a.app.exit(0);
        } }] }), this.toolsMenu = { label: "Tools", submenu: [{ label: "Restart Packager", click: function click() {
          P.default.runPackager(null);
        } }, { type: "separator" }, { label: "Build Native Modules", accelerator: "Command+B", click: function click() {
          S.default.buildIOS();
        } }, { label: "Clean", accelerator: "Command+K", click: function click() {
          try {
            var e = _.default.getWatchedPath();e && p.default.cleanBuildDir(e);
          } catch (e) {
            M.error(e);
          }
        } }, { type: "separator" }, { label: "Run/Reload Simulator", accelerator: "CmdOrCtrl+R", click: function click() {
          E.default.onHardReloadSimulator({}, function (e) {
            e.type == I && M.error(e.message);
          });
        } }] }, global.__DEV__ && (this.toolsMenu.submenu.push({ type: "separator" }), this.toolsMenu.submenu.push({ label: "Reload Last Save", accelerator: "CmdOrCtrl+Shift+R", click: function click(e, t) {
        t && t.reload();
      } })), this.viewMenu = { label: "View", submenu: [{ label: "Toggle Full Screen", accelerator: function () {
          return "darwin" == process.platform ? "Ctrl+Command+F" : "F11";
        }(), click: function click(e, t) {
          t && t.setFullScreen(!t.isFullScreen());
        } }, { label: "Toggle Packager Output", accelerator: function () {
          return "darwin" == process.platform ? "Ctrl+Command+J" : "F10";
        }(), click: function click() {
          w.default.send((0, D.toggleTerm)());
        } }] }, global.__DEV__ && this.viewMenu.submenu.push({ label: "Toggle Developer Tools", accelerator: function () {
        return "darwin" == process.platform ? "Alt+Command+I" : "Ctrl+Shift+I";
      }(), click: function click(e, t) {
        t && t.toggleDevTools();
      } });
  };j.prototype.makeTemplate = function () {
    var e = [];return this.appMenu && e.push(this.appMenu), e.push(this.fileMenu), e.push(this.editMenu), e.push(this.viewMenu), e.push(this.installMenu), e.push(this.toolsMenu), e.push(this.windowMenu), e.push(this.helpMenu), e;
  }, e.exports = j;
}, function (e, t, n) {
  "use strict";
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var a = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      o = n(61),
      i = n(11).autoUpdater,
      u = n(11).dialog,
      l = (n(14), function () {
    function e() {
      r(this, e), this._callback = null;
    }return a(e, [{ key: "init", value: function value(e, t) {
        global.__DEV__ || (i.setFeedURL("https://deco-nuts.herokuapp.com/update/" + t + "/" + e), i.on("update-not-available", this._updateNotAvailable.bind(this)), i.on("update-downloaded", this._updateDownloaded.bind(this)), i.on("error", this._onError.bind(this)), this._checkForUpdateOnLaunch());
      } }, { key: "_checkForUpdateOnLaunch", value: function value() {
        this._callback = function (e) {
          return !!e && 0 == u.showMessageBox(o.QUESTION.shouldRestartAndUpdate);
        }, i.checkForUpdates();
      } }, { key: "checkForUpdates", value: function value(e) {
        if (!global.__DEV__) try {
          if (!e) return;if (this._callback) return void u.showErrorBox("Update Status", "An update check is already happening.");this._callback = e, i.checkForUpdates();
        } catch (e) {
          this._onError(e);
        }
      } }, { key: "_onError", value: function value(e) {
        u.showErrorBox("Update Error", e.message || "Failed to check update status.");
      } }, { key: "_updateNotAvailable", value: function value() {
        this._callback && this._callback(!1), this._callback = null;
      } }, { key: "_updateDownloaded", value: function value() {
        if (this._callback && this._callback(!0)) try {
          i.quitAndInstall();
        } catch (e) {
          this._callback = null, u.showErrorBox("Install Failure", "Could not install the new update.");
        }this._callback = null;
      } }]), e;
  }());e.exports = new l();
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = n(2),
      u = r(i),
      l = n(6),
      c = (r(l), n(8)),
      s = (r(c), n(49)),
      f = (r(s), n(43)),
      d = r(f),
      p = n(48),
      h = (r(p), n(37)),
      _ = r(h),
      y = n(17),
      E = r(y),
      v = n(42),
      P = n(5),
      m = (r(P), n(14)),
      g = r(m),
      S = { simulator: "iPhone 6" },
      b = null,
      O = null,
      T = function () {
    function e() {
      a(this, e);
    }return o(e, [{ key: "getAppPath", value: function value() {
        return b;
      } }, { key: "getBundleID", value: function value() {
        return O;
      } }, { key: "buildIOS", value: function value(e, t) {
        var n = Object.assign({}, S, e);try {
          var r = d.default.parseSimulatorList(u.default.execFileSync("xcrun", ["simctl", "list", "devices"], { encoding: "utf8" })),
              a = d.default.matchingSimulator(r, n.simulator);if (!a) {
            var o = "Couldn't find " + a + " simulator";g.default.error(o), E.default.send((0, v.onPackagerOutput)(o));
          }var i = _.default.runTask("build-ios", ["--deviceId", a.udid]);i.stdout.on("data", function (e) {
            var t = e.toString();global.__DEV__ && g.default.info(t), E.default.send((0, v.onPackagerOutput)(t));
          }), i.stderr.on("data", function (e) {
            var t = e.toString();g.default.error("build error ", t), E.default.send((0, v.onPackagerOutput)(t));
          }), i.on("close", function (e) {
            t && t();
          });
        } catch (e) {
          g.default.error(e);
        }
      } }]), e;
  }();e.exports = new T();
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 }), t.openImportTemplateDialog = t.openInstallModuleDialog = t.openFile = t.shouldCloseTab = t.toggleTerm = t.openProjectDialog = t.shouldSaveProjectAs = t.shouldSaveProject = t.shouldCreateProject = void 0;var a = n(68),
      o = r(a),
      i = (n(14), o.default.SHOULD_CREATE_NEW_PROJECT),
      u = o.default.SHOULD_SAVE_PROJECT_AS,
      l = o.default.SHOULD_SAVE_PROJECT,
      c = o.default.SHOULD_OPEN_PROJECT_DIALOG,
      s = o.default.SHOULD_TOGGLE_TERM,
      f = o.default.SHOULD_CLOSE_TAB,
      d = o.default.OPEN_INSTALL_MODULE_DIALOG,
      p = o.default.OPEN_IMPORT_TEMPLATE_DIALOG,
      h = o.default.OPEN_FILE;t.shouldCreateProject = function () {
    return { type: i };
  }, t.shouldSaveProject = function () {
    return { type: l };
  }, t.shouldSaveProjectAs = function () {
    return { type: u };
  }, t.openProjectDialog = function () {
    return { type: c };
  }, t.toggleTerm = function () {
    return { type: s };
  }, t.shouldCloseTab = function () {
    return { type: f };
  }, t.openFile = function (e) {
    return { type: h, fileInfo: { fileType: "file", id: e.id, module: e.baseName, absolutePath: e.absolutePathArray, isLeaf: !0 } };
  }, t.openInstallModuleDialog = function () {
    return { type: d };
  }, t.openImportTemplateDialog = function () {
    return { type: p };
  };
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }Object.defineProperty(t, "__esModule", { value: !0 });var a = n(4),
      o = r(a);t.default = o.default.mapKeys(["SHOULD_CREATE_NEW_PROJECT", "SHOULD_SAVE_PROJECT", "SHOULD_SAVE_PROJECT_AS", "SHOULD_OPEN_PROJECT_DIALOG", "SHOULD_TOGGLE_TERM", "SHOULD_CLOSE_TAB", "OPEN_INSTALL_MODULE_DIALOG", "OPEN_IMPORT_TEMPLATE_DIALOG", "OPEN_FILE"]);
}]);