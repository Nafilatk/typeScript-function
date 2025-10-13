var value;
value = "hello";
value = 18;
console.log(value);
function print(id) {
    console.log("your ID is : " + id);
}
print("A88");
print(231);
function display(value) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value.toFixed(2));
    }
}
display(value);
