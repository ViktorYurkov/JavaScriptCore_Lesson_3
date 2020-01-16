function show(data) {
    console.log(data);
}
//Завдання1
var person = prompt("Введіть значення змінної");
if (person > 0) {
    show(1);
} else if (person < 0) {
    show(-1);
} else {
    show(0);
}
//Завдання2
var login = prompt("Who's there?") ; 
if (login == "Admin" ) {
    var password = prompt("Password?");
    if (password == "TheMaster" ) {
        show('Welcome!');
    } else if (password == "Other") {
        show('Wrong password');
    } else if (password == "Cancel") {
        show('Canceled');
    } 
} else if (login == "Other" ) {
    show("I don't know you");
} else if (login == "Cancel" ) {
    show("Canceled");
}
//Завдання3
var login = prompt("Who's there?") ;
switch(login) {   
    case "Admin" : {
    var password = prompt("Password?");
    switch(password) {    
    case "TheMaster" : {
        show('Welcome!');
        break;
    }
    case "Other" : {
        show('Wrong password');
        break;
    }
    case "Cancel" : {
        show('Canceled');
        break;
    }
    }
        break;
}
    case "Other" : {
        show("I don't know you");
        break;
}
    case "Cancel" : {
        show("Canceled");
        break;
}
} //test massege
