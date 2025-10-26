type a = {b:number}
type c ={d:string}

type e= a & c

const f : e = {
 b :123,
 d:"ABCD"

}
console.log(typeof(f.d));

