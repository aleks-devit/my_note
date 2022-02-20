export function app(state, action) {
  switch (action.type) {
    case "CHANGE_STATUS":
      return { ...state, status: action.payload };
    default:
      return state;
  }
}