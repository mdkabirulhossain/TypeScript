
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

console.log(car);

const student: {
    name: string,
    id: number,

} = {
    name: "Kabirul",
    id: 124,
}

console.log(student.name);

const kabirul :{[index:string]:number} = {};
 
kabirul.name = 30;
kabirul.id = 11;
console.log(kabirul.id);

type person = {
    name: string;
    age: number;
};

const p:person = {
    name: "Kabirul",
    age: 32,
}

console.log(p);