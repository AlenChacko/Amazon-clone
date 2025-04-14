import { formatCurrency } from "../scripts/utils/money.js";


console.log('test suite: format currency')

console.log('converts cents into dollars')
if (formatCurrency(2095) === "20.95") {
    console.log('test passed')
}else{
    console.log('test failed')
}


console.log('works with 0s')
if (formatCurrency(0) === "0.00") {
    console.log('test passed')
}else{
    console.log('test failed')
}



console.log('rounds upto the nearest cent')
if (formatCurrency(2000.5) === "20.01") {
    console.log('test passed')
}else{
    console.log('test failed')
}
