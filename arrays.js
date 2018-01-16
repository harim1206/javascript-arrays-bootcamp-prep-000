chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,n){

  var newArr = [n,...arr]
  return newArr

}

function destructivelyAddElementToBeginningOfArray(arr,n){

  return arr.unshift(n)

}
