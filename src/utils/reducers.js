function singleOpen(state, changes) {
  if (changes.type === "opening") {
    return { ...changes, openIndexes: changes.openIndexes.slice(-1) };
  }
  return changes;
}

function preventClose(state, changes) {
  if (changes.type === "closing" && state.openIndexes.length < 2) {
    return { ...changes, openIndexes: state.openIndexes };
  }
  return changes;
}

function combineReducers(...reducers) {
  return (state, changes) => {
    for (let reducer of reducers) {
      const result = reducer(state, changes);
      if (result !== changes) {
        return result;
      }
    }
    return changes;
  };
}

export { singleOpen, preventClose, combineReducers };
