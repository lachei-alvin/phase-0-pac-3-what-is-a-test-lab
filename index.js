// Declare variables in order
let name = "Susan"; // must be Susan
let height = 30; // between 0 and 40

// Create message AFTER name and height exist
let message = `${name} is ${height} inches tall`;

// Export so tests can use them
module.exports = { name, height, message };
