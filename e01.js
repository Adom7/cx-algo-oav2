var tab = [ 5, 1, 4, 2, 8] // [0,1,2,3,4]
// console.log(tab)
// console.log(tab.length)
function check(tableau){
    var a = tableau.length-1;
    for (let j=0; j< a ; j++){
        for (let i=0; i< a ; i++){
        if (tableau[i] > tableau[i+1]) {
            var b = tableau[i]
            tableau[i] = tableau[i+1]
            tableau[i+1] = b
        } else {
            
        }
    }
    // console.log(tab)
}
// return tableau
};
check(tab);
console.log(tab)