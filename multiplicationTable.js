// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

function multiplicationTable(num){

    for (var i = 1; i <= num; i++) {
        printTable(i);
        console.log("");
    }
    
    function printTable(num) {
        for (var i = 1; i <=10; i++) {
            var row = num + " * " + i + " = " + num * i;
            console.log(row);
        }
    }
}
multiplicationTable(3)