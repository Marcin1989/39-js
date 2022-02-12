let first = "Uwielbiam JavaScript";

let second = "Jestem świetnym programistą";


function longest (x, y) {
    if (x.length > y.length) {
        return x
      } else {
        return y
      }
    }

console.log(longest(first,second));