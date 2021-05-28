// Viết chương trình nhập vào thông tin 1 mặt hàng Tên , số lượng , đơn giá . Tính và xuất tiền phải trả dựa theo quy tắc : Nếu mua với số lượng từ 50 đến 100 sẽ được giảm 8 % , mua với số lượng trên 100 thì số lượng từ 100 trở đi sẽ được giảm 12 % .

document.getElementById("btnClick").onclick = function(){
    var matHang = document.getElementById("matHang").value;
    var slg = document.getElementById("soLuong").value;
    var donGia = document.getElementById("donGia").value;
    var tongTien, info;
    info = "<span>Mặt hàng " + matHang + "</span>"; 
    info += "<span> có số lượng " + slg + "</span>"; 
    info += "<span> với đơn giá " + donGia + "đ </span>"; 
    if (slg > 100){
        tongTien = (49 * donGia) + (51 * donGia * 92/100) + ((slg - 100) * donGia * 88/100);
        info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
        document.getElementById("show").innerHTML = info;
    } else if (slg >= 50 && slg <= 100 ) {
            tongTien = (49 * donGia) + ((slg - 49) * donGia * 92/100);
            info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
            document.getElementById("show").innerHTML = info;
        } else if (slg > 0 && slg < 50 ){
                tongTien = slg * donGia;
                info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
                document.getElementById("show").innerHTML = info;
            } else {
                    document.getElementById("show").innerHTML = "Bạn đang nhập số lượng là 0 hoặc nhỏ hơn 0!";
                }
};