//let a=[1, 5, 9, 7, 4, 6, 3, 2];
//alert(a);
//alert(a.length);
//alert(a.join("***"));
//alert(a.push("1","2"));
//alert(a.pop());
//a.unshift(2,8);
//alert(a.sort());
var mathang=[];
function add(){
    let a = document.getElementById("name").value;
    mathang.push(a);
    document.getElementById("kq").innerHTML += "<tr>" + 
        "<td>" + mathang.length + "</td>"+
        "<td>" + a + "<td>"+
        "<td><button>Sửa</button><button>Xóa</button></td>" +
        "</tr>"
}