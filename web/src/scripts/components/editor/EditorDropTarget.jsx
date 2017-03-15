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

/**
 * DropTarget(type, spec, collect)(component);
 * type,只有在 type 相同的情况下，DragSource 才能放到 DropTarget 中 
 * 
 * 
 * 1>.spec,让你的组件响应dnd相关事件,支持以下方法:
 * drop(props, monitor, component) 可选，响应 drop 事件 
 * hover(props, monitor, component) 可 选
 * canDrop(props, monitor) 可选
 * --props,组件当前的props
 * --monitor,用来查询drag state 的信息
 * --component表示当前组件
 * 
 * 2>.collect(connect,monitor),这个函数可以帮助组件的属性注入
 * --connect,connect.dragSource()可以用来封装组件
 * --monitor,用来查询当前拖拽的信息
 * 
 * 
 */



import React, { Component, } from 'react'
import ReactDOM from 'react-dom'
import { DropTarget } from 'react-dnd'
import _ from 'lodash'

import Editor from './Editor'
import TextUtils from '../../utils/editor/TextUtils'

const target = {
  drop(props, monitor, component) {
    //单纯的文本换行，和设置缩进和光标
    TextUtils.ensureNewlineWithIndentation(props.decoDoc.cmDoc)
    var item=monitor.getItem();
    //当组件在拖拽时设置了{item:xxx},dropTarget可以通过getItem获取
    props.onImportItem(monitor.getItem())    
    component.focus()
  },
  hover(props, monitor, component) {
    const {x, y} = monitor.getClientOffset()
    component.setState({
      offset: {
        left: x,
        top: y,
      },
    })
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }
}

const style = {
  flexDirection: 'column',
  flex: '1 1 auto',
  alignItems: 'stretch',
  display: 'flex',
}

class EditorDropTarget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: null,
    }
  }
  focus() {
    this.refs.editor.focus()
  }
  render() {
    const {isOver, connectDropTarget, decoDoc, middleware} = this.props
    const {offset} = this.state

    // Enhance any middleware that have a setHover method
    _.each(middleware, (m) => {
      if (m.setHover) {
        m.setHover(isOver, offset)
      }
    })

    return connectDropTarget(
      <div style={style}>
        <Editor ref={'editor'} {...this.props} />
      </div>
    )
  }
}

export default DropTarget('COMPONENT', target, collect)(EditorDropTarget)
