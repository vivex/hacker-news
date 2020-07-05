const app = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const nextTaskId = state ? state.length : 0;

      return [
        ...state,
        {
          id: nextTaskId,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
export default app;