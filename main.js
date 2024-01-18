function kalkulatorkecepatan() {
    const m = document.getElementById("massa").value;
    const ek = document.getElementById("ek").value;

    if (m === "" || ek === "") {
        alert("Masukkan Nilai Massa dan Energi Kinetik");
        return;
    }

    const kecepatan = Math.sqrt((2 * ek) / m);
    document.getElementById("result").innerHTML = `<strong>Kecepatan:</strong> ${kecepatan.toFixed(2)} m/s`;
}

function kalkulatormassa() {
    const ek = document.getElementById("ek").value;
    const v = document.getElementById("v").value;

    if (ek === "" || v === "") {
        alert("Masukkan Nilai Energi Kinetik dan Kecepatan");
        return;
    }

    const massa = (ek * 2 / v ** 2);
    document.getElementById("result").innerHTML = `<strong>Massa:</strong> ${massa.toFixed(2)} kg`;
}

function kalkulatorkek() {
    const m = document.getElementById("massa").value;
    const v = document.getElementById("v").value;

    if (m === "" || ek === "") {
        alert("Masukkan Nilai Massa dan Energi Kinetik");
        return;
    }

    const energikin = (m * (v ** 2) / 2 );
    document.getElementById("result").innerHTML = `<strong>Energi Kinetik:</strong> ${energikin.toFixed(2)} Joule`;
}
