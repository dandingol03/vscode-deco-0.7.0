import React, { Component, } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable:props.editable!==undefined&&props.editable!==null?props.editable:false,
      value:props.value
    };
  }

  toggle()
  {
      this.setState({editable:!this.state.editable});
      if(!this.state.editable)
        {
            setTimeout(function(){
                this.ref.focus();
                this.ref.select();
            }.bind(this),100);
        }
  }

  refSettterr(ref)
  {
    this.ref=ref;
  }

  mountTabListener()
  {
    if(this.state.editable==true&&this.props.tmp==true)
      {
          this.ref.focus();
          this.ref.select();
            this.tabCb=function()
            {
                if(window.event.keyCode == 9){ 
                    //TODO:make property change to parent
                    if(this.props.onTab)
                        this.props.onTab(this.state.value);
                    document.removeEventListener('keydown',this.tabCb,false);
                }
            }.bind(this)
      document.addEventListener("keydown", this.tabCb, false);
      }
  }


  componentWillReceiveProps(nextProps)
  {
      
    if(this.props.editable!==nextProps.editable||this.props.tmp!==nextProps.tmp||this.props.value!==nextProps.value)
    {
        this.setState({editable:nextProps.editable,tmp:nextProps.tmp});
    }
  }

  render() {
    var state=this.state;
    var props=this.props;   
    

    return (
        <span style={props.style} 
                    onClick={
                        ()=>{
                            this.toggle();
                        }}>
            {
                state.editable==true?
                <input name={props.value} defaultValue={state.value}  
                    ref={(ref)=>{
                        this.refSettterr(ref);
                        }}
                    onChange={(e)=>{
                        this.setState({value: e.target.value});
                    }}
                    onBlur={
                        ()=>{
                            if(state.value=='xxx')
                            {
                                if(this.props.onItemCancel)
                                    this.props.onItemCancel();
                            }else{
                                if(this.state.tmp==true)
                                {
                                     if(this.props.onTab)
                                        this.props.onTab(this.state.value);
                                    
                                }else{
                                    if(this.props.value!==this.state.value)
                                    {
                                        if(this.props.onTab)
                                            this.props.onTab(this.state.value);
                                    }else{
                                        this.toggle();  
                                    }
                                }
                                
                            }
                          
                        }
                    }
                />:
                this.state.value
            }
        </span>
    );
  }

  componentDidMount()
  {
      this.mountTabListener();
  }

  componentWillUpdate()
  {
      
  }
  
  componentWillUnmount()
  {
      if(this.tabCb)
        document.removeEventListener("keydown", this.tabCb, false);
  }

}





export default Input
