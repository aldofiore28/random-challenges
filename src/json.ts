/**
 * 1. Create a function that converts a JavaScript value to a JSON string.
 * 2. Write a function that performs a deep copy of a value, ensuring it handles circular references correctly.
 * 3. Implement a function that converts a JSON string back into a JavaScript value.
 * 4. Create a function that merges two objects, deeply combining their properties.
 * 5. Implement a function that deep freezes an object, preventing any changes.
 * 6. Write a custom polyfill for the typeof operator that returns the correct type of a JavaScript value.
 * 7. Create a function that converts a JavaScript object into a query string.
 * 8. Write a function that parses a query string back into a JavaScript object.
 * 9. Develop a function that returns the longest word in a string.
 */

// 1. Create a function that converts a JavaScript value to a JSON string.
function convertToJSON(value: unknown) {
    try {
        return JSON.stringify(value);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return new Error(errorMessage);
    }
}

// 2. Write a function that performs a deep copy of a value, ensuring it handles circular references correctly.
function deepCopy<T>(value: T) {
    return structuredClone(value);
}

// 3. Implement a function that converts a JSON string back into a JavaScript value.
function convertFromJSON(json: string) {
    try {
        return JSON.parse(json);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return new Error(errorMessage);
    }
}