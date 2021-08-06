import * as constants from './constants'


const defaultState = {
  focused:false,
}
const reducer = (state=defaultState,action)=>{
  const {type} = action
  switch (type){
    case constants.SEARCH_FOCUS:
      return{
        focused:true
      } 
    case constants.SEARCH_BLUR:
      return{
        focused:false
      } 

    default:
      return state
  }
}
export default  reducer