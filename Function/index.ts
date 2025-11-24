//####### Union | (OR)
// function statusCode(a: string | number){
//     return `Status code is ${a}`;
// }

// console.log(statusCode("200"));
// console.log(statusCode(400));


//#####  Return Type
// function getTime() : number{
//     return new Date().getTime();
// }

// const time : number = getTime();
// console.log(time);

//###### Parameters
// function multiply(a:number, b:number) : number{
//     return a*b;
// }

// console.log(multiply(5, 5));

//########### Option Parameters
// function add(a:number, b:number, c?:number){
//     return a + b + (c || 0);
// }

// console.log(add(5, 8));


// Default Parameters
// function pow(value:number, exponent:number=0){
//     return value ** exponent;
// }

// console.log(pow(4, 2));


//###########Rest Parameters

// const numbers : number [] = [1, 2, 3, 4, 5];

// function sum(a:number, b:number, ...numbers:number[]){
//     return a + b + numbers.reduce((p, c)=> p + c, 0);
// }

// console.log(sum(4, 4, ...numbers));


const multiply = (a:number, b:number) : number =>{
    return a*b;
}

console.log(multiply(5, 6));


