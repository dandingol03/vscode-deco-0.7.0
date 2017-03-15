/**
 * author:danding
 */
import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class InputModalButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowingModal: props.isShowingModal?props.isShowingModal:false,
        }  
    }



    handleClose = () => {
        this.setState({isShowingModal: false});
        if(this.props.onClose)
            this.props.onClose();
    }

    handleOK=(val)=>{
        this.setState({isShowingModal:false});
        if(this.props.onClose)
            this.props.onClose();
        if(this.props.onConfirm)
            this.props.onConfirm(this.input.value);
    }

    handleCancel=()=>{
        //TODO:make this unvisible
        this.setState({isShowingModal:false});
        if(this.props.onCancel)
            this.props.onCancel();
        if(this.props.onClose)
            this.props.onClose();
    }

    componentWillReceiveProps(nextProps)
    {
        if(this.state.isShowingModal!=nextProps.isShowingModal)
            this.setState(nextProps);
    }

    render() {

    const style = _.extend({
        fontSize: '11px',
        position: 'relative',
        width: '60px',
        alignItems: 'center',
        WebkitAppRegion: 'no-drag',
        }, _.cloneDeep(this.props.style))



        return <span>
        {
            this.state.isShowingModal &&
            <ModalContainer onClose={this.handleClose}>
                <ModalDialog onClose={this.handleClose} className='custom-modal' style={{padding:0,borderRadius:0,backgroundColor:'transparent'}}>
                    <div style={{display:'flex',flex:1,width:340,flexDirection:'column'}}>
                        
                        
                        <span style={{display:'flex',flex:1,alignItems:'center',backgroundColor:'#ddd',height:22,
                            borderTopLeftRadius:4,borderTopRightRadius:4}}>
                            <span style={{width:43,display:'flex',padding:4,justifyContent:'center'}}
                                onClick={this.handleClose}
                            >
                                <span style={{display:'flex',width:16,height:16,borderRadius:8,backgroundColor:'#F91BB3',
                                   alignContent:'center'}}>
                                    <span style={{color:'#ddd',display:'flex',fontSize:11,flex:1,justifyContent:'center',alignItems:'center'}}>
                                        <i className='fa fa-times'></i>
                                    </span>
                                </span>
                            </span>
                            <span style={{color:'#555',fontSize:'0.8em',flex:1,display:'flex',flexDirection:'row'
                                    ,justifyContent:'center'}}>New File</span>
                            <span style={{display:'flex',width:40}}>

                            </span>
                        </span>
                        
                        <span style={{display:'flex',flex:1,backgroundColor:'#333',borderBottomLeftRadius:4,
                            borderBottomRightRadius:4,padding:12,paddingLeft:20,paddingRight:20,flexDirection:'column'}}>
                            <span style={{color:'#aaa',flex:1,fontSize:13}}>Enter a new file name:</span>
                            <input type="text" style={{fontSize:16,flex:1,marginTop:3,borderRadius:4,borderWidth:0,color:'#ddd',
                                backgroundColor:'rgba(140,140,140,0.2)',paddingLeft:6,paddingRight:6}} 
                                ref={(o)=>{
                                    this.input=o;
                                }}/>
                            <span style={{flex:1,marginTop:14,justifyContent:'flex-end',display:'flex'}}>
                                {/*cancel button*/}
                                <span style={{width:70,borderRadius:3,marginRight:10,backgroundColor:'#555',alignItems:'center',
                                    justifyContent:'center',display:'flex'}} onCancel={this.handleCancel}>
                                    <span style={{color:'#ccc',fontSize:13}}>Cancel</span>
                                </span>

                                {/*ok button*/}
                                 <span style={{width:70,borderRadius:3,backgroundColor:'rgba(51, 133, 255, 0.35)',alignItems:'center',
                                    justifyContent:'center',display:'flex'}} onClick={this.handleOK}>
                                    <span style={{color:'#ccc',fontSize:13}}>OK</span>
                                </span>

                            </span>

                        </span>
                        
                    
                    </div>


                
                </ModalDialog>
            </ModalContainer>
        }
        </span>;
    }

}



export default InputModalButton
