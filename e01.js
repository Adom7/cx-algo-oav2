var tab = [ 5, 1, 4, 2, 8]
console.log(tab)
console.log(tab.length)
function check(tableau){
    var a = tableau.length-1;
    for (let i=0; i< a ; i++){
        if (tableau[i] > tableau[i+1]) {
            var b = tableau[i]
            tableau[i] = tableau[i+1]
            tableau[i+1] = b
        } else {
            
        }
    }
    console.log(tab)
};

console.log(check(tab));
console.log(check(tab));

