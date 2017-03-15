/**
 * 
 * author:dandingol03
 * 1.literal结点的类型转换
 */

import React, { Component, } from 'react'
import { connect } from 'react-redux'
const remote = Electron.remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
import SelectInput  from './SelectInput';

import {deleteProperty} from '../../../actions/customizeActions';


const iconStyle = {
  width: 12,
  backgroundColor: "transparent",
  marginRight: 8,
  position: 'relative',
  'flexDirection':'row',
  alignItems:'center'
}

class Node extends Component {
  constructor(props) {

    super(props)
    this.state = {
      style: props.style,
      prefix:props.prefix!==undefined&&props.prefix!==null?props.prefix:null
    }
    this._changeStyle = (toHover) => {
      let style = this.props.style
      if (toHover) {
        style = this.props.hoverStyle
      }
      this.setState({
        style: style,
        hover:toHover
      });
    }
    this._onShowInFinder = () => {
      this.props.onShowInFinder(this.props.node)
    }
    this._onRename = () => {
      this.props.onRename(this.props.node)
    }
    this._onDelete = () => {
      this.props.onDelete(this.props.node)
    }
    //added by dandingol03
    this._onItemAdd=()=>{
      if(this.props.onItemAdd)
        this.props.onItemAdd();
    }
    this._onItemDelete=()=>{
      if(this.props.onItemDelete)
        this.props.onItemDelete();
    }
    this._onLiteralDelete=()=>{
      
    }
    this._menu = new Menu()
    // this._menu.append(new MenuItem({ label: 'Rename', click: this._onRename }))
    // this._menu.append(new MenuItem({ label: 'Delete', click: this._onDelete }))
    // this._menu.append(new MenuItem({ label: 'Show in Finder', click: this._onShowInFinder }))
    var object=this.props.propType=='object'?true:false;
    if(object)
    {
            
          this._menu.append(new MenuItem({ label:'add', click: this._onItemAdd }));
          this._menu.append(new MenuItem({label:'delete',click:this._onItemDelete}));
    }else{
      this._menu.append(new MenuItem({label:'delete',click:this._onLiteralDelete}));
    }

    



  }

  _showContextMenu(e) {
    e.preventDefault()
    this._menu.popup(remote.getCurrentWindow())
  }


  render() {
    let style = this.state.style
    if (this.props.isSelected) {
      style = this.props.selectedStyle
    }
    if (this.props.isUnsaved) {
      style = Object.assign({}, style, this.props.unsavedStyle)
    }
    var state=this.state;
    var paddingLeft=13+this.props.offset;
  
    var fakeClass=null;
    if(this.props.propType=='literal')
    {
        if(this.state.hover==true)
          fakeClass='hover json-node';
        else
          fakeClass=null;
    }else{
          fakeClass='pointer';
        if(this.state.hover==true)
          fakeClass+=' hover json-node';
    }

    return (
      <span style={
        Object.assign({
          alignItems:'center',color:"rgb(63,63,63)",display:"flex",flex:"0 0 30px",
          flexDirection:"row",fontSize:11,letterSpacing:0.3,overflow:"hidden",
          textOverflow:"ellipsis",whiteSpace:"nowrap"},{paddingLeft:paddingLeft})
          }

          className={fakeClass}
        
        onClick={(e)=>{
          if(e.metaKey==true)
          {
               //command+点击,呼出上下文菜单
                this._menu.popup(remote.getCurrentWindow());

          }else{
            if(this.props.onCollaspse!==undefined&&this.props.onCollaspse!==null)
              this.props.onCollaspse();
          }
        }}
        onDoubleClick={()=>{
         
        }}
        onContextMenu={this._showContextMenu.bind(this)}
        onMouseEnter={this._changeStyle.bind(this, true)}
        onMouseLeave={this._changeStyle.bind(this, false)}
        >

        {
            this.props.propType=='literal'?
             <div style={iconStyle} >
                 <span style={{color:'#444',fontSize:'1em'}}><i className="fa fa-file-text-o"></i></span>
             </div>:this.props.collapse==true?
             <div style={Object.assign(iconStyle,{top:'-2'})} onClick={this.props.onCollaspse} >
                 <span style={{color:'#444',fontSize:'1.3em'}}><i className="fa fa-chevron-right"></i></span>
             </div>:
              <div style={iconStyle}  onClick={this.props.onCollaspse} >
                 <span style={{color:'#444',fontSize:'1.3em'}}><i className="fa fa-chevron-down"></i></span>
             </div>
        }

        {
            this.props.propType=='literal'?
              <span style={{'flexDirection':'row',alignItems:'center',height:'26px'}}>
                {this.props.children}
              </span>:
              <span style={{'flexDirection':'row',alignItems:'center',height:'26px'}}>
                {this.props.children}
              
              </span>
        }

        {/*针对literal结点*/}
        {
          this.props.propType=='literal'&&this.state.hover==true?
          <SelectInput value='literal' category='json' style={{marginLeft:12}} prefix={state.prefix}/>
          :null
        }

        {/*针对object结点*/}
        {
          this.props.propType=='object'&&this.state.hover==true?
          <span style={{marginLeft:30,color:'#fff',flexDirection:'row',alignItems:'center',
              height:'26',fontSize:'1.7em'}}
              onClick={(e)=>{
                //TODO:make a dispatch to delete this node
                console.log('prefix='+state.prefix);
                 this.props.dispatch(deleteProperty({
                          prefix:this.state.prefix
                  }));
                
                e.stopPropagation();
              }}
          >
            <i className='fa fa-times'></i>
          </span>:
          null
        }
      </span>
    )
  }
}

const style = {
  display: 'inline-block',
  width: '100%',
  padding: '4px 5px',
}

Node.defaultProps = {
  style: style,
  hoverStyle: style,
  unsavedStyle: style,
  onClick: () => {},
  onDoubleClick: () => {},
  isUnsaved: false,
  onRename: () => {},
  onDelete: () => {}
}


export default connect()(Node) 
