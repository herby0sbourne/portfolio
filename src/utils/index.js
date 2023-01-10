function techStacksArrays(items, length) {
  let subArrays = [];
  for (let i = 0; i < items.length; i += length) {
    subArrays.push(items.slice(i, i + length));
  }
  return subArrays;
}

export { techStacksArrays };
