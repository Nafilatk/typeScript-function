// let  value : string | number 
// value = "hello"
// value = 18
// console.log(value);
// function print(id : string|number){
//     console.log("your ID is : " + id);
// }
// print("A88")
// print(231)
// function display(value: string | number) {
//   if (typeof value === "string") {
//     console.log("String value:", value.toUpperCase());
//   } else {
//     console.log("Number value:", value.toFixed(2));
//   }
// }
// display(value)
// union with variables
// union with  function parameters
// function printed(a:number| string){
//  console.log("a hold number and string : " + a ); 
// }
// printed(124334)
// printed("nafila tk")
// function student ( a : number |string){
//  return "first student name with age : " + a
// }
// console.log(student("nafila 18"));
// union with arrays
// let uni: (number|string)[]=[]
// console.log(uni.push(9,"A",89));
// console.log(uni);
// console.log(uni.pop())
//type Narrowing ( Check type Before Using )
function p(val) {
    if (typeof val === "string") {
        console.log(" length of the String ", val.length);
    }
    else {
        console.log("length squared", val * val);
    }
}
p(6);
p("nafilatk");
function button(value) {
    if (value === "string") {
        console.log("clicked ones", value);
    }
    else {
        console.log("clicked again", value);
    }
}
button(123);
