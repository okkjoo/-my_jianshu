const defaultState = {
  focused:false,
}
const reducer = (state=defaultState,action)=>{
  const {type} = action
  switch (type){
    case 'search_focus':
      return{
        focused:true
      } 
    case 'search_blur':
      return{
        focused:false
      } 

    default:
      return state
  }
}
export default  reducer