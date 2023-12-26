let x = 10;
let y;

// Using short-circuiting to set a default value for y
y = y || "Default Value"; // If y is falsy, assign "Default Value"

console.log(y); // Output: "Default Value"
function debounce(func, delay) {
    
    let timeoutId;
  
    return function (...args) {
      // Clear the previous timeout
      clearTimeout(timeoutId);
  
      // Set a new timeout
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const searchFunction = debounce((query) => {
    console.log(`Performing search for: ${query}`);
  }, 500);