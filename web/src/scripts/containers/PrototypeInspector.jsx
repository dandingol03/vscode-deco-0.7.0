/**
 * author:dandingol03
 * 
 */

import _ from 'lodash'
import React, { Component, } from 'react'
import { connect } from 'react-redux'

import PaneHeader from '../components/headers/PaneHeader'
import NoContent from '../components/display/NoContent'
import JsonNode from '../components/navigator/JsonNode';




const style = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  overflow: 'hidden',
  minHeight: 0,
}

const innerStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  overflowX: 'hidden',
  overflowY: 'auto',
  minHeight: 0,
}

const UNGROUPED = '__ungrouped__'

class PrototypeInspector extends Component {
  constructor(props) {
    super(props)
    //TODO:写死json文件内容
    this.state={
      json:{name:'danding',age:25}
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.property==nextProps.property)
  
  }
  
  


  //根结点渲染
  renderRoot(node)
  {
     var item=[];
     if(Object.prototype.toString.call(node)=='[object String]'||Object.prototype.toString.call(node)=='[object Number]')
     {
        item=
          <JsonNode propType='literal'>
            <span>{label}:</span>
            <span>{node}</span>
          </JsonNode>
          ;
     }
     else if(Object.prototype.toString.call(node)=='[object Object]')
     {
          item=<JsonNode propType='object' node={node} label='root' collapse={false} offset={0} 
                  prefix={null}/>;
     }
     return item;
  }


  renderContent() {
    if (! this.props.property) {
      return (
        <NoContent>no property available</NoContent>
      )
    } else {
      var json=JSON.parse(this.props.property.toString());
      return (
      <div>
          {
            this.renderRoot(json)
          }  
      </div>
      );
    }
  }

  renderPreview()
  {
    if (! this.props.property) {
      return (
        null
      )
    } else {
     
   
    }
  }


  render() {

    return (
      <div style={style}>
     
    
         <div id='fake-render'>
                <iframe width={this.props.width} height={500} src="/build/"
                            frameBorder="no" border="0" style={{margin:0,border:0}} scrolling="no" allowTransparency="yes"/> 
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  var property=state.customize.property;
  
 
  return {
    property,
    ...ownProps,
  }
}

export default connect(mapStateToProps)(PrototypeInspector)
