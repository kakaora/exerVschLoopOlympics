const fruit = ["banana", "orange", "apple", "kiwi"]

for(var i = 0; i <= 9; i += 1) {
    console.log(i);
}

for(var i = 9; i >=0; i--) {
    console.log(i);
}

console.log("Fruit array length is " + fruit.length);
for (var i = fruit.length - 1; i >= 0; i--) {
        console.log(fruit[i]);
    }

var sub_array = [];
for (var i = 0; i <= 9; i++) {
            sub_array.push(i);
        }

console.log(sub_array)

for(i=0; i<=100; i++){
    // let's divide the value by 2
    // if the remainder is zero then it's an even number
   
    if(i % 2 == 0){
      console.log(i);
    }
  }

  const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

  console.log("Fruit 2 array length is " + fruit2.length);
  let x = fruit2.filter((element, index) => {
    return index % 2 === 0;
  })
  console.log(x)