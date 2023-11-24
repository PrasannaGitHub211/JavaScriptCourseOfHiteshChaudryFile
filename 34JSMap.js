var myMap = new Map();

myMap.set(0,"one");
myMap.set(1,"two");
myMap.set(2,"three");
myMap.set(3,"four");
myMap.set(4,"five");

console.log(myMap);


for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

//for of  loop
for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}


for(let [key,value] of myMap){
    console.log(`Key is ${key} and value is ${value}`);
}

//for each loop
myMap.forEach((key)=>console.log(`${key}`));

myMap.forEach((value)=>console.log(`${value}`));


myMap.forEach((key,value)=>console.log(`line at start from 32 ${key} and ${value}`));