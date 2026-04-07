![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

# JavaScript Exercises

### 1. Exercise 1
**User Profile**: Create a program that defines three variables for a social media profile: a user's `username` (string), `age` (number), and `isOnline` (boolean). Then, output a welcome message using a **template literal** (e.g., "Welcome, Astrid! You are 28 years old and currently online.").
```javascript
// Copy your code here
var username = 'John'
var age = 31
var isOnline = true
var onlineStatus

if(isOnline) {
    onlineStatus = 'online'
}else {
    onlineStatus = 'offline'
}
console.log(`Welcome, ${username}! Yor are ${age} years old and currently ${onlineStatus}.`)
```
### 2. Exercise 2
**Shopping Receipt**: Create two variables `price` and `quantity` with values `150` and `3`. Calculate and log the `subtotal`. Then, calculate the **tax** (25% of subtotal) and the **final total**.
```javascript
// Copy your code here
var price = 150
var quantity = 3
var subtotal = price * quantity
console.log('Subtotal: ' + subtotal)
var finalTotal = subtotal + (25 * subtotal / 100)
console.log('Final Total: ' + finalTotal)
```

### 3. Exercise 3
**Data Type Check**: You receive data from an API. Predict and log the output of the following comparisons to understand how JavaScript handles types:
- `10 == "10"`
- `10 === "10"`
- `undefined == null`
- `undefined === null`
Explain in a comment why we should prefer `===` for checking user IDs or passwords.
```javascript
// Copy your code here
console.log(10 == "10")
console.log(10 === "10")
console.log(undefined == null)
console.log(undefined === null)
// Always use strict equality check (===) when checking user ids and password.
// It compares both value and type. This makes the comparison safer.
```

### 4. Exercise 4
**Age Verification**: Write a script for a movie theater. Check if a variable `visitorAge` is between `12` and `18` (inclusive) to qualify for a "Teen Discount" using the `&&` operator. Log `true` or `false`.
```javascript
// Copy your code here
var visitorAge = 18
if(visitorAge > 12 && visitorAge <= 18) {
    console.log('Qualifying for a teens discount')
}else {
    console.log('Not qualify for a teen discount')
}
```

### 5. Exercise 5
**Smart Thermostat**: Create a variable `roomTemperature`.
- If it's above 25, log "Turning on the AC... ❄️"
- If it's between 18 and 25, log "Temperature is perfect. ✅"
- If it's below 18, log "Turning on the heater... 🔥"
```javascript
// Copy your code here
let roomTemperature = 9
if(roomTemperature > 25) {
    console.log('Turning on the AC... ❄️')
} else if(roomTemperature > 18 && roomTemperature < 25) {
    console.log('Temperature is perfect. ✅')
} else if (roomTemperature < 18) {
    console.log('Turning on the heater... 🔥')
}
```

### 6. Exercise 6
**Login Toggle**: Use a **single line** ternary operator to set a variable `buttonText`. If the variable `isLoggedIn` is `true`, the button should say `"Logout"`, otherwise it should say `"Login"`.
```javascript
// Copy your code here
let isLoggedIn = false
let buttonText = isLoggedIn ? 'Logout' : 'Login'
console.log('Button Text: ' + buttonText)
```

### 7. Exercise 7
**Traffic Light**: Create a variable `lightColor`. Use a `switch` statement to log instructions:
- `"red"` -> "Stop!"
- `"yellow"` -> "Slow down!"
- `"green"` -> "Go!"
- Default -> "Invalid color."
```javascript
// Copy your code here
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
```

### 8. Exercise 8
**Countdown Timer**: Write a `for` loop that simulates a rocket launch countdown from `10` down to `1`, and then logs "Lift off! 🚀".
```javascript
// Copy your code here
console.log('Rocket launch countdown starts')
for(let count = 10; count>=1; count=count-1) {
    console.log(count)
}
console.log('Lift off! 🚀')
```

### 9. Exercise 9
**Number List**: Iterate through numbers `1` to `20`. For each number, log if it is `"Even"` (like a row in a table) or `"Odd"` using the remainder operator `%`.
```javascript
// Copy your code here
for(let i = 1; i<= 20; i++) {
    if(i%2 === 0) {
        console.log(i + ' is Even')
    } else {
        console.log(i + ' is Odd')
    }
}
```

### 10. Exercise 10
**Discount Function**: Create a function called `applyDiscount` that takes `price` and `percentage`. It should return the discounted price. (e.g., `applyDiscount(100, 20)` should return `80`).
```javascript
// Copy your code here
function applyDiscount(price, percentage) {
    let discountedPrice = price - (price * percentage / 100)
    console.log('Discounted Price is ' + discountedPrice)
}
applyDiscount(100, 20)
```

### 11. Exercise 11
**Greeting Arrow**: Convert this traditional function into a modern **arrow function** for a website welcome message:
```javascript
function formatWelcome(name) {
    return "Hello, " + name + "! Welcome back.";
}
```
```javascript
// Copy your code here
const formatWelcome = (name) => {
    return "Hello, " + name + "! Welcome back."
}
console.log(formatWelcome('John'))
```

### 12. Exercise 12
**Email Default**: Create a function `sendEmail` that takes a `recipient` and a `subject`. If `subject` is not provided, it should default to `"No Subject"`.
```javascript
// Copy your code here
const sendEmail = (recipient, subject='No Subject') => {
    return "Hai, " + recipient + " chooses " + subject
}
console.log(sendEmail('Rose', ))
console.log(sendEmail('Lily', 'Java'))
```

### 13. Exercise 13
**Price Increase**: You have an array: `const oldPrices = [50, 100, 250]`. Use `.map()` to create a new array where every price is increased by 10% due to inflation.
```javascript
// Copy your code here
const oldPrices = [50, 100, 250]
const newPrices = oldPrices.map(oldPrices => oldPrices + (oldPrices * 10 / 100))
console.log('New Prices: ' + newPrices)
```

### 14. Exercise 14
**Inventory Check**: You have an array of stock levels: `const inventory = [0, 12, 5, 0, 8, 3]`. Use `.filter()` to create a new array containing only the items that are **in stock** (greater than 0).
```javascript
// Copy your code here
const inventory = [0, 12, 5, 0, 8, 3]
const inStock = inventory.filter((inventory => inventory > 0))
console.log('In Stock: ' + inStock)
```

### 15. Exercise 15
**Cart Total**: You have an array of item prices in a cart: `const cart = [19.99, 5.50, 24.00]`. Use `.reduce()` to calculate the **Total Amount** the customer needs to pay.
```javascript
// Copy your code here
const cart = [19.99, 5.50, 24.00]
const totalAmount = cart.reduce((total, price) => {
    return total + price;
}, 0)
console.log(totalAmount.toFixed(2))
```

### 16. Exercise 16
**User Object**: Create an object representing a `userAccount` with properties: `username`, `email`, `followerCount`, and `isVerified` (boolean). Log the username and email using dot notation.
```javascript
// Copy your code here
const userAccount = {
    username: 'Johan',
    email: 'johan@gmail.com',
    followerCount: 12,
    isVerified: true
}
console.log('User Name: ' + userAccount.username)
console.log('User Email: ' + userAccount.email)
```

### 17. Exercise 17
**Profile Update**: Take the `userAccount` from Exercise 16. Add a `bio`, update the `followerCount`, and delete the `email` property (for privacy). Log the final object.
```javascript
// Copy your code here
userAccount.bio = 'ab' //Add a property
userAccount.followerCount = 16  //Update a property
delete userAccount.email    //Delete a property
console.log(userAccount)
```

### 18. Exercise 18
**Local Storage Simulation**: Convert your `userAccount` object into a **JSON string** (like you would do to save it to LocalStorage). Then, parse it back into an object.
```javascript
// Copy your code here
const jsonString = JSON.stringify(userAccount)
console.log(jsonString)
const backToObj = JSON.parse(jsonString)
console.log(backToObj)
```

### 19. Exercise 19
**Safe API Parsing**: Write a function `fetchConfig` that takes a JSON string. Use `try...catch` to parse it. If the string is broken (invalid JSON), log a friendly error message: "Configuration error: Please check your data."
```javascript
// Copy your code here
function fetchConfig(jsonString) {
    try {
        return JSON.parse(jsonString)
    }
    catch (error) {
        console.log("Configuration error: Please check your data.")
        return null
    }
}
const invalid = '{"name": "App", version: 1}';
fetchConfig(invalid)
```

### 20. Exercise 20
**Auto-Date**: Create a `Date` object. Log the current **Year** and **Month**, then format the date into a readable string like `"03/03/2026"` using `.toLocaleDateString()`.
```javascript
// Copy your code here
let now = new Date()
console.log('Current Year: ' + now.getFullYear())
console.log('Current Month: ' + (now.getMonth()+1))
console.log("Today's Date: " + (now.toLocaleDateString('en-GB')))
```