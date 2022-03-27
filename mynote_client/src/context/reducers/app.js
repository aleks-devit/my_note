export function app(state, action) {
  switch (action.type) {
    case "CHANGE_STATUS":
      return { ...state, status: action.payload };
    case "CHANGE_VIEW_MODE":
      return { ...state, viewMode: action.payload };
    default:
      return state;
  }
}