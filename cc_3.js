// Task 1: Product Price Management Scenario: Online Store 

// Declare array prices with five numerical values
let prices = [3.65,6.78,5.23,2.1,4]; 

// Add a new price to the array
prices.push(9.12); 

// Remove the first price from the array
prices.shift(); 

// Log the updated price list
console.log("Updated Price List:", prices); 


// Task 2: Modifying Customer Orders Scenario: Order List 

// Declare array orders with five numerical values representing quantities
let orders = [5,6,7,8,9]; 

// Increase the third order quantity by 5
orders[2] += 5; 

// Calculate the total number of all orders
let total_order = orders.reduce((sum,order) => sum+order, 0); 

// Print the updated array and total order count
console.log("Updated array:", orders); 
console.log("Total order count:", total_order); 
