// Callback function: functions that are passed to another functions as an arguments are called callback function. 

let nums = [1, 2, 3, 4, 5];

nums.forEach((item)=> console.log(item));

let squares = nums.map((item) => item*item);

console.log(squares);

console.log(nums.find((item) => item===4));
console.log(nums.find((item) => item===6));

let evens = nums.filter((item) => item%2===0);
let odds = nums.filter((item) => item%2);

console.log(evens);
console.log(odds);


const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];
  
  const groupedItems = items.reduce((accumulator, item) => {
    const category = item.category;
    if (!accumulator[category]) {
      accumulator[category] = []
    }
    accumulator[category].push(item.name);
    return accumulator;
  }, {})
  
console.log(groupedItems);

let numbers = [1, 2, 3, 4, 53, 1, 3, 2, 54, 7, 67, 54];

let res = numbers.reduce((arr, item) => {
    if(!arr.includes(item))
    {
        arr.push(item);
    }
    return arr;
}, []);

console.log(res);