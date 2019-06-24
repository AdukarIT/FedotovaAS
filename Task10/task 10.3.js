/*Найдите два наименьших элемента массива.*/
function getRandomArray(len) { 
  let randomArr = []; 
  for(i = 0; i <= len; i++) 
    randomArr.push(Math.random()); 
    return randomArr; 
} 
function findTheSmallest(len) { 
    let arr = getRandomArray(len); 
    let num = arr[0]; 
    let num2 = arr[0]; 
    for(i = 1; i < arr.length; i++) { 
      if(arr[i] < num) num = arr[i]; 
    } 
    for(i = 1; i < arr.length; i++) { 
      if(arr[i] < num2 && arr[i] != num) num2 = arr[i]; 
    } 
    return [num, num2]; 
}