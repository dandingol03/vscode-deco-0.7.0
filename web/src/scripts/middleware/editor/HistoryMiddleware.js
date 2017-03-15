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

import CodeMirror from 'codemirror'

import {edit, undo, redo, markDirty,navigatModule} from '../../actions/editorActions'
import { markUnsaved } from '../../actions/fileActions'
import { makeTabPermanent } from '../../actions/tabActions'
import { CONTENT_PANES } from '../../constants/LayoutConstants'
import Middleware from '../Middleware'
import CodeMirrorEventTypes from '../../constants/CodeMirrorEventTypes'
import DecoChangeFactory from '../../factories/editor/DecoChangeFactory'
import CodeMirrorChange from '../../models/editor/CodeMirrorChange'


/**
 * Middleware for custom history management
 */
class HistoryMiddleware extends Middleware {

  constructor() {
    super()
    this._keyMap = {
      [CodeMirrorEventTypes.beforeChange]: this._onBeforeChange.bind(this),
      [CodeMirrorEventTypes.changes]: this._onChanges.bind(this),
       [CodeMirrorEventTypes.cursorActivity]:this._onModuleNavigate.bind(this),
    }
  }

  get eventListeners() {
    return this._keyMap
  }

  attach(decoDoc) {
    if (!decoDoc) {
      return
    }

    this._decoDoc = decoDoc
    this._changeId = null

    this._oldCommands = {
      undo: CodeMirror.commands.undo,
      redo: CodeMirror.commands.redo,
    }

    CodeMirror.commands.undo = this._undo.bind(this)
    CodeMirror.commands.redo = this._redo.bind(this)
  }

  detach() {
    if (!this._decoDoc) {
      return
    }

    this._decoDoc = null
    this._changeId = null

    CodeMirror.commands.undo = this._oldCommands.undo
    CodeMirror.commands.redo = this._oldCommands.redo
  }

  _undo() {
    this.dispatch(undo(this._decoDoc.id))
  }

  _redo() {
    this.dispatch(redo(this._decoDoc.id))
  }

  // A batched version of onChange, for performance
  _onChanges() {
    if (this._decoDoc.isClean() || !this._changeId) {
      this._changeId = this._decoDoc.changeGeneration()
      this.dispatch(markUnsaved(this._decoDoc.id))
      this.dispatch(markDirty(this._decoDoc.id))
      this.dispatch(makeTabPermanent(CONTENT_PANES.CENTER))
    }
  }

  _onBeforeChange(cm, change) {
    if (! this._decoDoc.locked) {
      change.cancel()

      const cmChange = new CodeMirrorChange(
        change.from,
        change.to,
        change.text,
        cm.getRange(change.from, change.to),
        change.origin
      )

      const decoChange = DecoChangeFactory.createChangeFromCMChange(cmChange)
      this.dispatch(edit(this._decoDoc.id, decoChange))

      return
    }
  }

  //模块的跳转
  _onModuleNavigate(cm,change)
  {
      if (! this._decoDoc.locked&&window.event.type=='mousedown'&&window.event.metaKey==true) {
            //TODO:again the cursor
            var  coords=cm.cursorCoords();
            var  pos=cm.coordsChar(coords);
            var word=cm.findWordAt(pos)
            var token=cm.getTokenAt(pos);
            console.log('token clicked===='+token.string)
            this.dispatch(navigatModule({token:token,cm:cm,type:'interface'}));
      }
  }

  


  

}

const middleware = new HistoryMiddleware()

export default (dispatch) => {
  middleware.setDispatchFunction(dispatch)
  return middleware
}
