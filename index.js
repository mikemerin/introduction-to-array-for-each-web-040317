function changeCompletely(element, i, arr)
  { arr[i] = (Math.random() * 100).toString() + "!!!" }

function doToElementsInArray(arr, callback) { arr.forEach(callback) }
