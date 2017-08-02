'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(0, 1000));
}

let swapped;
function bubbleSort(arr) {
  // Your code here
  do {
  swapped = false;
  var end = arr.length - 1;
  for (var i = 0, j = 1; i < end; i++, j++) {
    if (arr[i] > arr[j]) {
      swapped = true;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } }while (swapped);
  return arr;
}

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var middle = Math.floor(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function binarySearch(arr, item) {
    var min = 0,
        max = arr.length - 1,
        guess,
        element;
    while (min <= max) {
         guess = Math.floor((min + max) / 2);
        element = arr[guess];
        if (element < item) {
            min = guess + 1;
        } else if (element > item) {
            max = guess - 1;
        } else {
            return guess;
        }
    }
    return false;
}

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {

  console.log('Run the tests!')

}
