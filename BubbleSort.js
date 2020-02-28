const array = [8,5,9,13,56,23,12,45,52,11];

function bubbleSort(array){
  let counter = 0;
  for(counter; counter < array.length; counter++){
    for(let index = 0; index < array.length - counter; index++){
      if(array[index] > array[index + 1]){
        swap(array, index, index + 1);
      }
    }
  }
  console.log(array);
}

function swap(array, item1, item2){
  const holdingPointer = array[item1];
  array[item1] = array[item2];
  array[item2] = holdingPointer;
  return array[item1], array[item2];
}

bubbleSort(array);