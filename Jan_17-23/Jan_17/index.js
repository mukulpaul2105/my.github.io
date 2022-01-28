 document.write("hii");
 
 function main(array, functionality) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
       var y = functionality(array[i]);
       result.push(y);
    }
    return result;
 }

 function mulBy2(n) {
    return n * 2;
 }

 function add3(n) {
    return n + 3;
 }

 var x = [3, 5, 2, 6, 3];

 var outMul = main(x, mulBy2);
 var outAdd = main(x, add3);

 console.log(outMul);
 
 document.getElementById("MulOut").innerText=outMul;
 document.getElementById("AddOut").innerText=outAdd;