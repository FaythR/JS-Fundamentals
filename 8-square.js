const size = parseInt(process.argv[2]);
     if (isNaN(size) || size <= 0) {
         console.log("Missing size");
     } else {
         let i = 0;
         const row = 'X'.repeat(size);
         while (i < size) {
             console.log(row);
             i++;
         }
     }