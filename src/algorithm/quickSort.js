export function getQuickSortAnimation(items, left, right, animation) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, animation); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      getQuickSortAnimation(items, left, index - 1, animation);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      getQuickSortAnimation(items, index, right, animation);
    }
  }

  return animation;
}

function partition(items, left, right, animation) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      animation.push([j, i]);

      animation.push([
        [j, items[j]],
        [i, items[i]],
      ]);
      swap(items, i, j); //sawpping two elements

      i++;
      j--;
    }
  }
  return i;
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

// first
