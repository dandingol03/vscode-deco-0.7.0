import React, { Component, } from 'react'
import { connect } from 'react-redux'
import Node from './JSONTree/Node';
import Input from './JSONTree/Input';
import _ from 'lodash';

import {updateProperty} from '../../actions/customizeActions';

class JsonNode extends Component {
  constructor(props) {
    super(props)
    this.state={
        collapse:props.collapse!==undefined&&props.collapse!==null?props.collapse:true,
        node:props.node,
        editOffset:props.editOffset,
        label:props.label,
        prefix:props.prefix
    };
  }
  
  //当前object结点的子结点添加回调
  onItemAdd()
  {
      var state=this.state;
      //临时结点的设置为{key:xxx,value:space*3}
      this.setState({node:Object.assign(state.node,{'xxx':'   '})});
  }
  
  onItemCancel()
  {
      var state=this.state;
      delete state.node['xxx'];
      this.setState({node: state.node});
  }

  onTab(type,val)
  {
    if(type=='node')
    {
         var prefix=this.state.prefix;
         this.setState({node:val,editOffset:0});
         this.props.dispatch(updateProperty({
                prefix:this.state.prefix,
                value:val
         }));
       
    }
    else{
        var prefix=_.cloneDeep(this.state.prefix);
        prefix.splice(prefix.length-1,1);
        prefix.push(val);
         this.setState({prefix:prefix,label:val,editOffset:++this.state.editOffset});
    }
  }

  onCollaspse()
  {
      this.setState({collapse:!this.state.collapse});
  }

  stretch(label,node,offset)
  {
     var item=null;
     if(Object.prototype.toString.call(node)=='[object String]'||Object.prototype.toString.call(node)=='[object Number]')
     {
        item=
          <JsonNode propType='literal' >
            <span>{label}:</span>
            <span>{node}</span>
          </JsonNode>
          ;
     }
     else if(Object.prototype.toString.call(node)=='[object Object]')
     {
        var items=[];
        var i=0;
        
         for(var field in node)
         {
             //TODO:make a difference between Object and literal
            var _prefix=null;
            if(this.props.prefix==null)
                _prefix=[field];
            else
            {
                _prefix=_.cloneDeep(this.props.prefix);
                _prefix.push(field);
            }
            if(Object.prototype.toString.call(node[field])=='[object Object]')
            {
               
                  items.push(
                    <JsonNode propType='object' key={i++}  node={node[field]} label={field} offset={offset+12}
                        onItemAdd={this.props.onItemAdd} 
                        prefix={_prefix} dispatch={this.props.dispatch}/>
                    );
            }else{
                items.push(
                <JsonNode propType='literal' key={i++} node={node[field]} label={field} offset={offset+12}
                  onItemCancel=
                    {
                      ()=>{
                          this.onItemCancel();
                      }
                    }
                   editOffset={0} 
                   prefix={_prefix}
                   dispatch={this.props.dispatch}
                />
                );
            }
         }
         
          item=(
          <div>
            <Node propType='object' offset={offset} collapse={this.state.collapse} 
                    onCollaspse={()=>{
                      this.onCollaspse();
                    }}
                    onItemAdd={
                              ()=>{
                                
                                  this.onItemAdd();
                              }
                            }
                  >
                  <span style={{marginRight:12}}>{label}:</span>
                  <span style={{color:'#888'}}>Object</span>
            </Node>
            {items}
          </div>
          );
     }
     return item;
  }


 componentWillReceiveProps(nextProps)
 {
     if(this.props!==nextProps)
        this.setState({...nextProps});
 }


  render() {
    
      var item=null;
      var props=this.props;
      var state=this.state;
      if(props.propType=='literal')
      {

          if(state.label=='xxx')
          {
              item=(<Node propType='literal' offset={props.offset}>
                    <Input style={{color:'rgb(22,128,250)'}} value='xxx' tmp={true} editable={true} onItemCancel=
                    {
                      ()=>{
                          if(this.props.onItemCancel)
                            this.props.onItemCancel();
                      }
                    }
                    onTab={this.onTab.bind(this,'label')}
                    />
                    <Input style={{color:'rgb(22,128,250)'}} value={state.node}/>
                </Node>);
          }else if(state.editOffset==0)
          {
            item=(
            <Node propType='literal' offset={props.offset} >
                <span style={{marginRight:6}} className='pointer'>{state.label}:</span>
                <Input style={{color:'rgb(22,128,250)'}} value={state.node}
                    onTab={this.onTab.bind(this,'node')}
                />
            
            </Node>);
          }else{
            item=(
                <Node propType='literal' offset={props.offset}>
                    <span style={{marginRight:6}} className='pointer'>{state.label}:</span>
                    <Input style={{color:'rgb(22,128,250)'}} value={state.node} tmp={true} editable={true}
                        onItemCancel={
                            ()=>{
                                if(this.props.onItemCancel)
                                    this.props.onItemCancel();
                            }
                        }
                        onItemConfirm={()=>{
                            //TODO:make a dispatch
                        }}
                        onTab={this.onTab.bind(this,'node')}
                    />
                </Node>
            );
          }
        


      }else{
          if(this.state.collapse==false)
          {
              //如果展开,则需要遍历一层结点
              item=this.stretch(props.label,props.node,props.offset)
          }else{
              //如果折叠
                item= <Node propType='object' collapse={this.state.collapse}  offset={props.offset}
                        prefix={state.prefix}
                          onCollaspse={()=>{
                              this.onCollaspse();
                            }}
                            onItemAdd={
                              ()=>{
                                
                                  this.onItemAdd();
                                
                              }
                            }
                            >
                            <span style={{marginRight:12}}>{props.label}:</span>
                            <span style={{color:'#888'}}>Object</span>
                      </Node>;
          }
      }

    return (
        <div>
          {item}
        </div>
         
    );
  }
}


export default connect()(JsonNode) 