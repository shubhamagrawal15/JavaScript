"use strict";  // treat all JS code as newer version

//alert(3+3) // we r using node js not browser

console.log(3+3)
console.log("shubham")


let name = "hitesh" //string
let age =18         //number
let isLoggedIn=false //bool
let state;

//number =>2 to the power 53
//bigint
//string
//boolean
//null =>standalone value
//undefined
//symbol=> unique


//object


console.log(typeof("hitesh"))
console.log(typeof(age))
console.log(typeof(null))
console.log(typeof(undefined))


//////******************datatypes summary****************************************** */

// primitive data type: they are call by value

const score=100
const scoreValue=100.3
const isloggedIn=false
const outsideTemp=null
let userEmail;


// symbols

const id = Symbol('123')
const anotherId =Symbol('123')

// they both have same values but they are different
console.log(id===anotherId)


// bigint

const bigNumber =345365959595595n

console.log(typeof bigNumber)





//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

// Reference Type: Non primitive
//  Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"] //array

//object

// let myObj{

//     names:"hitesh"
//     age:22

// }

// function

 const myfunction=function(){
    console.log("hello world");

}

console.log(typeof myfunction)
console.log(typeof id)




console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myfunction)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory and heap memory

//stack(Primitive----copy is created),Heap(Non-primitive-----reference to original value is given)


let myYoutubeName="shubham"

let anotherName=myYoutubeName

anotherName="shub"
console.log(anotherName)
console.log(myYoutubeName)


let userOne={
    email:"shubham29030",
    upi:"shub@ybl",
}

let userTwo=userOne

userTwo.email="aman@ggoole.com"

// now if we print  then value gets changed in the original copy too....but not in primary data type

console.log(userOne.email)
console.log(userTwo.email)
