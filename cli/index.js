// Soal 1 : Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
/**
 * Jika angka <=60 maka tampilkan tulisan “KURANG” di sebelah angka tsb.
 * Jika >60 dan <=70 maka tampilkan tulisan “CUKUP” di sebelah angka tsb.
 * Jika >70 dan <=80 maka tampilkan tulisan “BAIK” di sebelah angka tsb.
 * ika >80 maka tampilkan tulisan “LUAR BIASA” di sebelah angka tsb.
 */
console.log("Soal Pertama ======================================");
var answerQuestionNumberOne = function () {
    for (var i = 50; i <= 100; i += 5) {
        var result = "";
        if (i <= 60) {
            result += "".concat(i, " Kurang ");
        }
        else if (i > 60 && i <= 70) {
            result += "".concat(i, " CUKUP ");
        }
        else if (i > 70 && i <= 80) {
            result += "".concat(i, " BAIK ");
        }
        else {
            result += "".concat(i, " LUAR BIASA ");
        }
        console.log(result);
    }
};
answerQuestionNumberOne();
console.log("Soal Kedua =========================================");
var fibbonaci = function (n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0);
        }
        else if (i === 1) {
            result.push(1);
        }
        else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
};
console.log(fibbonaci(20));
console.log("Soal Ketiga =========================================");
var ansteric = function (n) {
    for (var i = 0; i < n; i++) {
        var result = "";
        for (var j = 0; j <= i; j++) {
            result += "*";
        }
        console.log(result);
    }
};
ansteric(5);
console.log("Soal Keempat =========================================");
var toRupiah = function (n) {
    var result = "";
    var satuan = [
        "",
        "Satu",
        "Dua",
        "Tiga",
        "Empat",
        "Lima",
        "Enam",
        "Tujuh",
        "Delapan",
        "Sembilan",
        "Sepuluh",
    ];
    if (n < 10) {
        result = satuan[n];
    }
    else if (n < 20) {
        result = toRupiah(n % 10) + "Belas";
    }
    else if (n < 100) {
        result = toRupiah(Math.trunc(n / 10)) + " Puluh " + toRupiah(n % 10);
    }
    else if (n < 200) {
        result = "Seratus" + toRupiah(n - 100);
    }
    else if (n < 1000) {
        result = toRupiah(Math.trunc(n / 100)) + " Ratus " + toRupiah(n % 100);
    }
    else if (n < 10000) {
        result = toRupiah(Math.trunc(n / 1000)) + " Ribu " + toRupiah(n % 1000);
    }
    return result;
};
console.log(toRupiah(9000));
