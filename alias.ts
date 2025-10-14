type  id = string|number

let userid : id = 101
let usersid : id = "a22"

console.log(userid,usersid);

//object type alias

 type user = {
    name : string,
    age : number,
    isAdmin:boolean
 }

 const user1 : user={         // user1    is alias
    name : "nafila tk",
    age : 18,
    isAdmin: true
 }
 console.log(user1);


 // function type alias 
 

  type aliaswithfunction= (a:number, b:number)=>number

  const alias1: aliaswithfunction = (a,b) => a+b

  console.log(alias1(8,9));


  //complex type alias


  type addresss ={
    city: string
    country: string 
  }

  type details ={
    name :string,
    age : number,
    address: addresss
  }

const userAddress : addresss={
    city: "malppuram",
    country: " india "

}

  const userdetails : details ={
    name : " nafila tk", 
    age : 18,
    address:userAddress
  };
  console.log(userdetails);