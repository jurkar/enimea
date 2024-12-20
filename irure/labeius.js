function manipulateElement(el) {
    // Check if the element exists
    if (!el) return;

    // Proceed with manipulation if `el` is truthy
    el.style.backgroundColor = 'blue';
    el.textContent = 'Hello, World!';
}

// Example usage:
const myElement = document.getElementById('myElement');
manipulateElement(myElement);  // This will only proceed if `myElement` exists
