//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.status = "",
  this.color = "",
  this.hungry =""
}


const sadie = new Dog("Sadie")
sadie.owner = "mason"
sadie.status = "normal"
sadie.color = "black"
sadie.hungry = false


const moonshine = new Dog("Moonshine")
// moonshine.owner = "julia"
moonshine.hungry = true


const atticus = new Dog("Atticus")
atticus.hungry = true

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
this.pet = function (dogName) {
  return sadie.status = "happy"
}
this.feed = function (feedDog) {
  return moonshine.hungry = false
}
this.cool = function () {
}
}

const julia = new Human("Julia")
julia.cool = true
const mason = new Human("Mason")
mason.cool = false




// Instances of Human
// Needed: mason, julia
