function srtName() {
    var x = document.getElementById("fname").value;
    var y = x.charAt(0);
    var z = document.getElementById("lname").value;
    var a = document.getElementById("srtnbr").value;
    var lgth = z.length;
    if (lgth > 12){
        document.getElementById("error2").innerHTML = "*Your last name is: " + lgth + " letters. Name needs to be at most: 12*";
    }
    
    document.getElementById("name").innerHTML = y + "." + z;

    if (a < 10) {
        document.getElementById("nbr").innerHTML = "0" + a;
    }

    if (a > 9) {
        document.getElementById("nbr").innerHTML = a;
    }

    if (a < 1) {
        document.getElementById("nbr").innerHTML = "00"
    }

    if (a > 99) {
        document.getElementById("error").innerHTML = "**Please keep number between 01 and 99**"
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}