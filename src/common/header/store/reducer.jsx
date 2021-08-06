import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused:false,
})
const reducer = (state=defaultState,action)=>{
  const {type} = action
  switch (type){
    case constants.SEARCH_FOCUS:
      return state.set('focused',true)
    case constants.SEARCH_BLUR:
      return state.set('focused',false)
      

    default:
      return state
  }
}
export default  reducer