function check(){
    let diem = document.getElementById('diem').value;
    if(diem>=9){
        document.getElementById('show').innerHTML = "Xếp loại Xuất sắc";
    }
    else if(diem<9 && diem>=8){
        document.getElementById('show').innerHTML = "Xếp loại Giỏi";
    }
    else if(diem<8 && diem>=7){
        document.getElementById('show').innerHTML = "Xếp loại Khá";
    }
    else if(diem<7 && diem>=5){
        document.getElementById('show').innerHTML = "Xếp loại Trung bình";
    }
    else{
        document.getElementById('show').innerHTML = "Xếp loại Yếu";
    }
}