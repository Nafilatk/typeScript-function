function add(a: number, b: number): number {
  return a + b;
}
 console.log(add(2,4));



// function without return type


function greet(a:string):void{
  console.log("hello",a);
}


//  function with default parameter

function power(base:number,exponent :number = 2):number{
  return base * exponent
}
console.log(power(3));

function powers(base:number,exponent :number = 2):number{
  return base ** exponent
}
console.log(powers(3));

function powerr(base:number,exponent :number ):number{
  return base + exponent
}
console.log(powerr(3,5));


function powerss(base:string,exponent :string = "nafila"):string{
  return base + exponent
}
console.log(powerss('hello'));


function optional(name : string , age ?: string): string {
  return `hello ${name}, iam ${age} years old `
}
console.log(optional("Nafila","18"));

 
// Function Type directly defined

let added :(a:number, b:number)=>number 
  added = (x,y)=> x+y

console.log(added(5,10));


