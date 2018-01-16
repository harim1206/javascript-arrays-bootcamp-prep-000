chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,n){

  var newArr = [n,...arr]
  return newArr

}

function destructivelyAddElementToBeginningOfArray(arr,n){

  /*we have arr
  add element to beginning of array destructively meaning permanent change*/
  arr.unshift(n)
  return arr

}

function addElementToEndOfArray(arr, n){
  var newArr=[]
  newArr=[...arr,n]
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, n){
  arr.push(n)
  return arr
}


