function task(a, b, c) {
    switch (b) {
        case "+": return a + c;
        case "-": return a - c;
        case "*": return a * c;
        default: return "expression not expected";
    }
}
console.log(task(2, "*", 4));
console.log(task(4, "-", 2));
console.log(task(2, "+", 4));
console.log(task(2, "/", 4));
