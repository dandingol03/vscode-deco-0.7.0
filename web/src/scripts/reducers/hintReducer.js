/**
 * author:dandingol03
 * 1.paths should be assign to an Object which make locate one element more fast
 */
import _ from 'lodash'

import {
  SCAN_NODE_MODULES,
  CLEAR_SCAN
} from '../actions/hintActions'



const initialState = {
  timerId:null,
}

const hintReducer = (state = initialState, action) => {
  switch(action.type) {

    case SCAN_NODE_MODULES:
        var timerId=state.timerId;
        if(timerId!==undefined&&timerId!==null)
        {
            return state;
        }else{
            var {timerId}=action.payload;
            return Object.assign({}, state, {
                timerId: timerId 
            });
        }
    break;
    case CLEAR_SCAN:
        return Object.assign({}, state, {
            timerId: null 
        });
    break;
  
    default:
      return state
    break
  }
}

export default hintReducer
