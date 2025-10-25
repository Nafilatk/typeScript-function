let num = "hello" as string
console.log(typeof(num));

// asserting to narrow union 

type id = string|number

let myid : id  ="1233"

let ids = myid as string
console.log(ids);

let value  : unknown = "hello"

let valuetype = (value as string)
let valuetype2 = (<string> value).length

console.log(valuetype);
console.log(valuetype2);