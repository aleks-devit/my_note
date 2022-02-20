export function document(state, action) {
  switch (action.type) {
    case "SAVE_DOCUMENT":
      return { ...state, saveDocument: action.payload };
    default:
      return state;
  }
}