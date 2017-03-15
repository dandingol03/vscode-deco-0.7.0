/**
 * author:dandingol03
 * 1.paths should be assign to an Object which make locate one element more fast
 */
import _ from 'lodash'

import {
  CUSTOMIZING_PANEL_OPEN,
  CUSTOMIZING_PANEL_TOGGLE,
  SET_CUSTOMIZE_PROPERTIES,
  ADD_CUSTOMIZE_PROPERTIES,
  PROPERTY_UPDATE
} from '../actions/customizeActions'



const initialState = {
  paths:{},
  path:null
}

const customizeReducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_CUSTOMIZE_PROPERTIES:
    
       const {id,path,utf8Data}=action.payload;
       return Object.assign({}, state, {
        paths: Object.assign({}, state.paths, 
        {
          [path]: {utf8Data:utf8Data}
        }),
        property:utf8Data,
        path:path
      }); 
    break;
    case SET_CUSTOMIZE_PROPERTIES:
    {
       const {path}=action.payload;
       var utf8Data=state.paths[path];
       return Object.assign({}, state, {
        property:utf8Data,
        path:path
      }); 
    }
    break;
    case PROPERTY_UPDATE:
    {
      const {path,buf}=action.payload;
     
       return Object.assign({}, state, {
        property:buf,
        paths:Object.assign(state.paths,
        {
          [path]:{utf8Data:buf}
        })
       }); 

    } 
    break;
    default:
      return state
    break
  }
}

export default customizeReducer
