const arg = process.argv[2];
     const num = parseInt(arg);
     let i = 0;
     if (isNaN(num) || num <= 0) {
         console.log("Missing number of occurrences");
     }
     while (i < num) {
         console.log("C is fun");
         i++;
     }