const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function for user input
const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

module.exports = { askQuestion, rl };
