function singleOpen(changes) {
  if (changes.type === "opening") {
    return { openIndexes: changes.openIndexes.slice(-1) };
  }
  return changes;
}

export { singleOpen };
