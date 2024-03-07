
var fruit = [
    ["Grape", 15],
    ["Banana", 10],
    ["Mango", 15],
    ["Apple", 20],
]
console.log(fruits);

//Vòng lặp For In
for (i in fruits) {
    console.log(i);
}

//vòng lặp FOR OF
for(i of fruits); {
    console.log(i);
}




// Thực hành xây dựng thanh search
var nameUnp = propt("Nhập tên trái cây mà bạn muốn tìm kiếm: ")
for (let i=0; i<=3;i++) {
    if (nameInp == fruits[i][i]) {
        console.log("có "+fruits[i][i+1] +" " + fruits[i+1][i]);
    }
    else {
        console.log("không có");
    }
}


C:\buoi 3
