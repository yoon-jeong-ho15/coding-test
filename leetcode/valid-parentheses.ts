function isValid(s: string): boolean {
    console.log(s);
    return true;
};


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));