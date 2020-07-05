const app = (state = {
  news: {}
}, action) => {
  //console.log('action', action);
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload
      };
    case 'ADD_NEWS':
      return {
        ...state,
      }
    default:
      return state;
  }
};
export default app;