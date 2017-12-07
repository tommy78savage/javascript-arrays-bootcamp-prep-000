var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
 return array;
  }
 
 function addElementToEndOfArray(array, element) {
    array.push(element);
    return array;
 }
 
 function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
 }

 function accessElementInArray(array, element, index) {
  console.log(array[2]);
  } 

 function removeElementFromBeginningOfArray(array, element) {
   array.slice(-1);
   return array;
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array, element) {
   array.pop(-1);
   return array;
 }
 
  function removeElementFromEndOfArray(array, element) {
   array.slice(-2);
   return array;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
   array.pop(-2);
   return array;
 }