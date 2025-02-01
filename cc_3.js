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


// Task 3: Employee Performance Tracking Scenario: HR System 

// Declare employee object with properties: name, role, performanceScore, and isActive
let employee = {  
    name: "Linh", 
    role: "Data Analyst", 
    performanceScore: 87, 
    isActive: true 
}; 

// Update the performanceScore property
employee.performanceScore = 93; 

// Add a new property promotionEligible with a boolean value
employee.promotionEligible = true; 

// Log the updated employee object
console.log("Updated Employee Record:", employee); 


// Task 4: Customer Feedback Records Scenario: Feedback Management 

// Declare array feedback containing three objects, each with properties: customerName, feedbackText, and rating
let feedback = [ 
    {customerName: "Le", feedbackText: "Great service and friendly staff!", rating: 5},
    {customerName: "Lan", feedbackText: "Good experience, but could be faster.", rating: 4},
    {customerName: "Phong", feedbackText: "The service was okay, but I expected more attention to detail.", rating: 3}
]; 

// Add a new feedback object to the array
feedback.push({customerName: "Minh", feedbackText: "Great support! They resolved my issue swiftly.", rating: 5}); 

// Log the updated feedback list
console.log("Feedback List:", feedback); 
