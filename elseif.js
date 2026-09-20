/*
Create a system to calculate popcorn prices
based on the size customer asked for:
if size 'XL', price is BDT 250
if size 'L', price is BDT 200
if size 'M', price is BDT 100
if size 'S', price is BDT 50
*/

const customer_order = "XL";

if (customer_order === "XL") {
    console.log("Price is BDT 250")
}
else if (customer_order === "L") {
    console.log("Price is BDT 200")
}
else if (customer_order === "M") {
    console.log("Price is BDT 100")
}
else if (customer_order === "S") {
    console.log("Price is BDT 50")
}
else {
    console.log("Order invalid!")
}
