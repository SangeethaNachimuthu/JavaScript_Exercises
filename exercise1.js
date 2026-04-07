// Exercise 1 - User Profile
let username = 'John'
let age = 31
let isOnline = true
let onlineStatus = isOnline ? 'online' : 'offline'

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


// Exercise 6 - Login Toggle
let isLoggedIn = false
let buttonText = isLoggedIn ? 'Logout' : 'Login'
console.log('Button Text: ' + buttonText)


// Exercise 7 - Traffic Light
let lightColor = 'green'
switch(lightColor) {
    case 'red':
        console.log('Stop!')
        break
    case 'yellow':
        console.log('Slow down!')
        break
    case 'green':
        console.log('Go!')
        break
    default:
        console.log('Invalid color')
}


//Exercise 8 - Countdown Timer
console.log('Rocket launch countdown starts')
for(let count = 10; count>=1; count=count-1) {
    console.log(count)
}
console.log('Lift off! 🚀')


// Exercise 9 - Number List
for(let i = 1; i<= 20; i++) {
    if(i%2 === 0) {
        console.log(i + ' is Even')
    } else {
        console.log(i + ' is Odd')
    }
}


// Exercise 10 - Discount Function
function applyDiscount(price, percentage) {
    let discountedPrice = price - (price * percentage / 100)
    console.log('Discounted Price is ' + discountedPrice)
}
applyDiscount(100, 20)


// Exercise 11 - Greeting Arrow
const formatWelcome = (name) => {
    return "Hello, " + name + "! Welcome back."
}
console.log(formatWelcome('John'))


// Exercise 12 - Email Default
const sendEmail = (recipient, subject='No Subject') => {
    return "Hai, " + recipient + " chooses " + subject
}
console.log(sendEmail('Rose', ))
console.log(sendEmail('Lily', 'Java'))


// Exercise 13 - Price Increase
const oldPrices = [50, 100, 250]
const newPrices = oldPrices.map(oldPrices => oldPrices + (oldPrices * 10 / 100))
console.log('New Prices: ' + newPrices)


// Exercise 14 - Inventory Check
const inventory = [0, 12, 5, 0, 8, 3]
const inStock = inventory.filter((inventory => inventory > 0))
console.log('In Stock: ' + inStock)


// Exercise 15 - Cart Total
const cart = [19.99, 5.50, 24.00]
const totalAmount = cart.reduce((total, price) => {
                                return total + price;
                            }, 0)
console.log(totalAmount.toFixed(2))