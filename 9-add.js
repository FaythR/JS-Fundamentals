function add(a, b) {
         return parseInt(a) + parseInt(b);
     }
     const first = process.argv[2];
     const second = process.argv[3];
     console.log(add(first, second));