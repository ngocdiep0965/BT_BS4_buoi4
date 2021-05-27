// Viết chương trình nhập vào thông tin 1 mặt hàng Tên , số lượng , đơn giá . Tính và xuất tiền phải trả dựa theo quy tắc : Nếu mua với số lượng từ 50 đến 100 sẽ được giảm 8 % , mua với số lượng trên 100 thì số lượng từ 100 trở đi sẽ được giảm 12 % .

document.getElementById("btnClick").onclick = function(){
    var matHang = document.getElementById("matHang").value;
    var slg = document.getElementById("soLuong").value;
    var donGia = document.getElementById("donGia").value;
    var tongTien;
    if (slg > 100){
        // [49 * giá] + [51 * giá * 92%] + [(slg - 100) * giá * 88%];
        tongTien = (49 * donGia) + (51 * donGia * 92/100) + ((slg - 100) * donGia * 88/100);
    } else if (slg >= 50 && slg <= 100 ) {
            // [49 * giá] + [(slg-49) * giá * 92%];
            tongTien = (49 * donGia) + ((slg - 49) * donGia * 92/100);
        } else if (slg > 0 && slg < 50 ){
                // slg * DG;
                tongTien = slg * donGia;
            } else {
                    document.getElementById("show").innerHTML = "nhập sai";
                    // console.log("nhập sai");
                }
    var info = "<div>Tổng tiền phải trả là: " + tongTien + "đ </div>";
    document.getElementById("show").innerHTML = info;
};