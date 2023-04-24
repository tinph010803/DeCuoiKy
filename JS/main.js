let stt = 0;
// Check mã bệnh nhân
function checkMaBenhNhan() {
  const maBenhNhan = $("#mabenhnhan").val();
  if (!maBenhNhan) {
    $(".ma-mes").html("Không được để trống");
    return false;
  }
  const regex = /^BN-\d{5}$/;
  if (regex.test(maBenhNhan)) {
    $(".ma-mes").html("(*)");
    return true;
  } else {
    $(".ma-mes").html(
      "Mã bệnh nhân phải có dạng: BN-YYYYY (BN cố định, YYYYY là 5 số bất kì)"
    );
    return false;
  }
}

// Check mật khẩu
function checkMatKhau() {
  const matKhau = $("#matkhau").val();
  if (!matKhau) {
    $(".mk-mes").html("Không được để trống");
    return false;
  }
  const regex = /^\w{6,}$/;
  if (regex.test(matKhau)) {
    $(".mk-mes").html("(*)");
    return true;
  } else {
    $(".mk-mes").html(
      "Mật khẩu phải từ 6 kí tự trở lên (Bất kỳ trừ kí tự đặc biệt)"
    );
    return false;
  }
}

//Check ngày khám
function checkNgayKham() {
  var ngayKham = new Date($("#ngaykham").val());
  var currentDate = new Date();
  if (!ngayKham) {
    $(".nk-mes").html("Chưa chọn ngày khám");
    return false;
  }
  if (ngayKham.getTime() > currentDate.getTime()) {
    $(".nk-mes").html("(*)");
    return true;
  } else {
    $(".nk-mes").html("Ngày khám phải sau ngày hiện tại");
    return false;
  }
}

$("#mabenhnhan").blur(checkMaBenhNhan);
$("#matkhau").blur(checkMatKhau);
$("#ngaykham").blur(checkNgayKham);

$("#form").submit((e) => e.preventDefault());
function themMoi() {
  const ma = $("#mabenhnhan").val();
  const matKhau = $("#matkhau").val();
  const ngayKham = $("#ngaykham").val();

  const phuThuKhamBenh = $("#phuthuKhamBenh").prop("checked");
  const phuThuDieuTri = $("#phuthuDieuTri").prop("checked");
  const phuThuBacSi = $("#phuthuBacSi").prop("checked");

  const chuyenKhoa = $("#chuyenkhoa").val();

  let phuThu = 0;
  if (phuThuKhamBenh) phuThu += 50000;
  if (phuThuDieuTri) phuThu += 50000;
  if (phuThuBacSi) phuThu += 50000;

  stt++;
  const addNew =
    "<tr><td>" +
    stt +
    "</td><td>" +
    ma +
    "</td><td>" +
    matKhau +
    "</td><td>" +
    ngayKham +
    "</td><td>" +
    phuThu +
    "</td><td>" +
    chuyenKhoa +
    "</td></tr>";

  $("#tbody").append(addNew);
}
function reSet() {
  $("#mabenhnhan").val("");
  $("#matkhau").val("");
  $("#ngayKham").val("");
  $("#modal").modal("hide");
}

$("#btn-submit").click(() => {
  const ma = checkMaBenhNhan();
  const mk = checkMatKhau();
  const nk = checkNgayKham();

  if (ma && mk && nk) {
    themMoi();
    reSet();
  }
});

$("#open-modal").click(() => {
  $("#modal").modal("show");
});
