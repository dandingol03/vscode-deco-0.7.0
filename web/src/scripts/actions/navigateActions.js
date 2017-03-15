
import _ from 'lodash'
import request from '../ipc/Request'
import {
    backwardFile
} from './compositeFileActions'

//加入栈
export const NAVIGATE_FORWARD='NAVIGATE_FORWARD';
export const navigateForward=(payload)=>{
    return {
        type: NAVIGATE_FORWARD,
        payload:payload
    }
}

//弹出栈
export const NAVIGATE_BACKWARD='NAVIGATE_BACKWARD';
export const _onNavigateBackward=()=>{
    return {
        type:NAVIGATE_BACKWARD,
        payload:{}
    }
}

//浏览回退
export const navigateBackward=()=>{

    return  (dispatch, getState) => {
    
        var  state = getState();
        var  stack=state.navigator.stack;
        //当前只有一个文件浏览历史
        if(stack.length==1)
        {}
        else{
            
            var fileId=stack[stack.length-2];
            var directory=state.directory;
            var fileInfo=directory.filesById[fileId];
            dispatch(backwardFile(fileInfo));
            dispatch(_onNavigateBackward())
        }
    }
}



