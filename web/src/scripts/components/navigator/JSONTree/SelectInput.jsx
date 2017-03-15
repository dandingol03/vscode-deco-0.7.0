import React, { Component, } from 'react'
import { connect } from 'react-redux'
import Autosuggest from 'react-autosuggest';
import {changePropertyType} from '../../../actions/customizeActions';
const options = ['literal','object','array'];




class SelectInput extends Component {
  constructor(props) {
    super();
    
    this.state = {
      value:props.value!==undefined&&props.value!==null?props.value:null,
      
    };
  }


  onChange = (e) => {
    var val=e.target.value;
    
    this.setState({
      value:val
    });
  }


  render() {
    

    var props=this.props;
    var state=this.state;

    var {value}=state;

    return (
      <span style={Object.assign({width:100},props.style)} className='pointer'>
        <span style={{color:'#eee',marginRight:10}}>
          {value}
        </span>
    
        <select style={{width:10}} value={value} 
          onChange={(e)=>{
            var val=e.target.value;
            //TODO:make a dispatch
            if(val!==state.value)
            {
                this.props.dispatch(changePropertyType({
                        prefix:props.prefix,
                        type:val
                }));
            }
          }}>
          <option>literal</option>
          <option>object</option>
          <option>array</option>
        </select>
      

      </span>
    );
  }
}


export default connect()(SelectInput) 
