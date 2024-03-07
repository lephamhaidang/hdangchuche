// console.log("số 1");
// console.log("số 1");
// console.log("số 1");
// console.log("số 1");


var i=1;

while (i<=10) {
   console.log(i);
   i++; //i=1+1, i thăng đến số 11
}

do {
    console.log(i);
    i++;
} while (i<=10)

const namestudent = [
    "Hải Đăng",
    "Tiến Long",
    "Trần Nhi",
    "Phúc",
]
console.log(namestudent);
console.log(namestudent[2]);
var i=0;
while (i<namestudent.lenth) {
    console.log(namestudent[i]);
}

const classes = new Array (
    "JSB",
    ["JSB01","JSB02"],
    "JSA",
    "JSI",
)
console.log(classes);
console.log(classes.shift());
console.log(classes);
console.log(classes);
delete classes[1];
console.log(classes);
console.log(classes[1][1]);

const informations = {
    name: "Hải Đăng",
    class: "JSA",
    language:["Anh", 
    {
        certificate1: "Toeic",
        certificate2: "Ielts",
    },"Hàn",]
    age: 14,
}
console.log(informations);
console.log(informations.language[1].certificate);