function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
// function without return type
function greet(a) {
    console.log("hello", a);
}
//  function with default parameter
function power(base, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return base * exponent;
}
console.log(power(3));
function powers(base, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(base, exponent);
}
console.log(powers(3));
function powerr(base, exponent) {
    return base + exponent;
}
console.log(powerr(3, 5));
function powerss(base, exponent) {
    if (exponent === void 0) { exponent = "nafila"; }
    return base + exponent;
}
console.log(powerss('hello'));
