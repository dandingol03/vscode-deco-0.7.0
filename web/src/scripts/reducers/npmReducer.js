
import _ from 'lodash'

import {
    NPM_LOGGED,
    MAKE_LOGIN_VISIBLE,
    MAKE_INIT_UNVISIBLE,
    MAKE_INIT_VISIBLE
} from '../actions/npmActions'



const initialState = {
  logged:false,
  certificate:null,
  isLoginVisible:false,
  isInitVisible:false
}

const npmReducer = (state = initialState, action) => {
  switch(action.type) {

    case NPM_LOGGED:
    
       const {username,password}=action.payload;
       return Object.assign({}, state, {
        certificate: Object.assign({}, state.certificate, 
        {
            username:username,
            password:password
        }),
        logged:true,
        isLoginVisible:false
      }); 
    break;
    case MAKE_LOGIN_VISIBLE:
         return Object.assign({}, state, {
        isLoginVisible:true
      }); 
    break;
    case MAKE_INIT_VISIBLE:
    return Object.assign({}, state, {
                isInitVisible:true
            }); 
    break;
    case MAKE_INIT_UNVISIBLE:
    return Object.assign({}, state, {
            isInitVisible:false
        }); 
    break;
    
    default:
      return state
    break
  }
}

export default npmReducer
