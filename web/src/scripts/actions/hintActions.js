
import request from '../ipc/Request'
import _ from 'lodash'


export const GET_NODE_MODULES='GET_NODE_MODULES';
function getNodeModules(rootPath) {
  return {
    type: GET_NODE_MODULES,
    rootPath:rootPath,
  }
}
export const SCAN_NODE_MODULES='SCAN_NODE_MODULES';
export const scanNodeModules=(interval)=>{

 return (dispatch, getState) => {

    //TODO:get the rootname of the proj
    var state=getState();
    var directory=state.directory;
    var rootPath=directory.rootPath;


    var timerId= setInterval(()=>{
        return request(getNodeModules(rootPath)).then((payload) => {
            var {packages} = payload;
            //TODO:把packages添加至关键字,does it work?
        })
    },interval);
 }
   
}

export const CLEAR_SCAN='CLEAR_SCAN';
export const clearScan = () => {
  return {
    type: CLEAR_SCAN,
    payload:{}
  }
}
