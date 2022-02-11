let first = "Uwielbiam JavaScript";

let second = "Jestem świetnym programistą";


function longest (x, y) {
    if (x.length > y.length) {
        console.log(x);
    } else {
        console.log(y);
    }
}

console.log(longest(first,second));