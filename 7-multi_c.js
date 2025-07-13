const arg = process.argv[2];
const num = parseInt(arg);
let i = 0;
if (isNaN(num)) {
    console.log("Missing number of occurrences");
} else if (num > 0) {
    while (i < num) {
        console.log("C is fun");
        i++;
    }
}