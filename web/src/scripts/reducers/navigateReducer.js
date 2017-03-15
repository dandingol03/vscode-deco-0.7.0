
import _ from 'lodash'
import {
  NAVIGATE_FORWARD,
  NAVIGATE_BACKWARD
} from '../actions/navigateActions'



const initialState = {
  stack: []
}

const navigateReducer = (state = initialState, action) => {
  switch(action.type) {
   
    case NAVIGATE_FORWARD:
      var _stack=_.cloneDeep(state.stack);
      _stack.push(action.payload.id)
      return {
        ...state,
        stack: _stack
      }
    case NAVIGATE_BACKWARD:
      var _stack=_.cloneDeep(state.stack);
      if(_stack.length==1)
      {
        return Object.assign({}, state, {
            stack:  state.stack
          });
      }
      
      _stack.pop();
      return Object.assign({}, state, {
        stack:  _stack
      })

    default:
      return state
  }
}

export default navigateReducer
