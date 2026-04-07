// Exercise 1 - User Profile
let username = 'John'
let age = 31
let isOnline = true
let onlineStatus

if(isOnline) {
    onlineStatus = 'online'
}else {
    onlineStatus = 'offline'
}
console.log(`Welcome, ${username}! Yor are ${age} years old and currently ${onlineStatus}.`)


//Exercise 2 - Shopping Receipt
let price = 150
let quantity = 3
let subtotal = price * quantity
console.log('Subtotal: ' + subtotal)
let finalTotal = subtotal + (25 * subtotal / 100)
console.log('Final Total: ' + finalTotal)

// Exercise 3 - Data Type Check
console.log(10 == "10")
console.log(10 === "10")
console.log(undefined == null)
console.log(undefined === null)
// Always use strict equality check (===) when checking user ids and password.
// It compares both value and type. This makes the comparison safer.


//Exercise 4 - Age Verification
let visitorAge = 18
if(visitorAge > 12 && visitorAge <= 18) {
    console.log('Qualifying for a teens discount')
}else {
    console.log('Not qualify for a teen discount')
}


// Exercise 5 - Smart Thermostat
let roomTemperature = 9
if(roomTemperature > 25) {
    console.log('Turning on the AC... ❄️')
} else if(roomTemperature > 18 && roomTemperature < 25) {
    console.log('Temperature is perfect. ✅')
} else if (roomTemperature < 18) {
    console.log('Turning on the heater... 🔥')
}