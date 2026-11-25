// Count each physical object once, independently of the answer the learner picks.
export function touchState(total, touched = []) {
  const valid = [...new Set(touched)].filter(i => Number.isInteger(i) && i >= 0 && i < total);
  return { touched: valid, count: valid.length, ready: valid.length === total };
}
export function touchObject(total, touched, index) {
  return touchState(total, [...touched, index]).touched;
}
