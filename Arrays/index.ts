// Basic Array Syntax 
// const names: string[] = [];
// names.push("Kabirul");
// names.push("Hossain");

// console.log(names);

// Using Generic Array Type
// const names: Array<string> = ["Kabiru", "Hossain"];
// console.log(names);
// console.log(names[0]);

//##########Array of Mixed Types (Union Type)

// const mixedArray: (number | string)[] = [];
// mixedArray.push(1);
// mixedArray.push("Kabirul");
// console.log(mixedArray);

// ### Array of Objects

// const arr :{name:string, roll: number}[]=[
//     {name:"Kabirul", roll:30},
//     {name:"Umar", roll:40},
// ];

// type office ={
//     name:string,
//     types:string,
// };

// const Office : office[] = [
//     {name:"Softvance", types:"Tech"},
//     {name:"SM Technologies", types:"Tech"},
// ]

// console.log(Office);

// ######## Array with Interface

interface Car{
    brand: string,
    model: string,
}

const BMW:Car[] = [
    {brand:"BMW", model:"202"}
]

console.log(BMW);
