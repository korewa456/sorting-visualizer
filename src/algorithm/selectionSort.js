export function getSelectionSortAnimation(arr) {
  const animation = [];
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      animation.push([i, lowest]);

      animation.push([
        [i, arr[i]],
        [lowest, arr[lowest]],
      ]);
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return animation;
}
