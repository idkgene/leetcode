var addBinary = function(a, b) {
    let i = a.length - 1;
       let j = b.length - 1;
       let carry = 0;
       let result = '';

       while (i >= 0 || j >= 0) {
           let sum = carry;

           if (i >= 0) {
               sum += parseInt(a.charAt(i));
               i--;
           }

           if (j >= 0) {
               sum += parseInt(b.charAt(j));
               j--;
           }

           if (sum === 0 || sum === 1) {
               result = sum + result;
               carry = 0;
           } else if (sum === 2) {
               result = '0' + result;
               carry = 1;
           } else if (sum === 3) {
               result = '1' + result;
               carry = 1;
           }
       }

       if (carry === 1) {
           result = '1' + result;
       }

       return result;
   };
