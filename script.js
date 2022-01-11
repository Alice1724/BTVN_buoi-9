//HW1
//using question mark
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
console.log(checkAge(19));
//using or
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

//HW2
function min(a, b) {
    return (a < b) ? a : b;
}
console.log(min(0, 2))

//HW3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function ask1() {
    alert("You agreed.");
}
function ask2() {
    alert("You canceled the execution.");
}

console.log(ask("Do you agree", ask1, ask2))

//HW4
let acc = prompt("Nhap account:")
if (acc == "Admin") {
    let pass = prompt("Nhap mat khau")
    if (pass =="cafedev"){
        alert("Chao mung")
    }
    else if(pass == ""|| pass == null){
        alert("Da huy")
    }
    else{
        alert("Mat khau sai")
    }
}
else if (acc == "" || acc == null) {
    alert("Canceled")
}
else {
    alert("Toi khong biet ban")
}