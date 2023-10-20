const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app= express() 

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.post("/berat", (req, res) => {
    let tipeberat = req.body.tipeberat
    let berat = Number (req.body.berat)
    let response;
    let kg, hg, dag, g, dg, cg, mg;

    if (tipeberat === "mg") {
        mg = berat;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "cg") {
        mg = berat / 10;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "cG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "dg") {
        mg = berat / 100;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "g") {
        mg = berat / 1000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "dag") {
        mg = berat / 10000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "hg") {
        mg = berat / 100000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipeberat === "kg") {
        mg = berat / 1000000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Satuan: "KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    }

    res.json(response);
})







app.get("/kecepatan/:tipe/:angka1/:angka2", (req, res) => {
    const { tipe, angka1, angka2 } = req.params; 
    let hasil = 0;
    let response;

    if (tipe === "v") {
        hasil = angka1 / angka2;
        response = {
            dicari: "v",
            Jarak: angka1 + ' meter',
            Waktu: angka2 + ' detik',
            Hasil: hasil + ' m/detik',
        };
    } else if (tipe === "s") {
        hasil = angka1 * angka2;
        response = {
            dicari: "s",
            Kecepatan: angka1 + ' m/detik',
            Waktu: angka2 + ' detik',
            Hasil: hasil + ' meter',
        };
    } else if (tipe === "t") {
        hasil = angka1 / angka2;
        response = {
            dicari: "t",
            Jarak: angka1 + ' Meter',
            Kecepatan: angka2 + ' m/detik',
            Hasil: hasil+ ' detik',
        };
    } else {
        response = "Tipe tidak ada!";
    }

    res.json(response);
});









app.get("/berat/:tipeberat/:berat", (req, res) => {
    const {tipeberat , berat} = req.params
    let response;
    let km, hm, dam, m, dm, cm, mm;

    if (tipeberat === "mm") {
        mm = berat
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "MM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "cm") {
        mm = berat / 10
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "CM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "dm") {
        mm = berat / 100
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "DM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "m") {
        mm = berat / 1000
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "M",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "dam") {
        mm = berat / 10000
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "DAM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "hm") {
        mm = berat / 100000
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "HM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipeberat === "km") {
        mm = berat / 1000000
        cm = mm * 10
        dm = cm * 10
        m = dm * 10
        dam = m * 10
        hm = dam * 10
        km = hm * 10
        response = {
            Satuan: "KM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    }

    res.json(response);
});





















app.post("/kecepatan", (req, res) => {
    let tipe = req.body.tipe
    let angka1 = Number(req.body.angka1)
    let angka2 = Number(req.body.angka2)
    let hasil = 0;
    let response;

    if (tipe === "f") {
        hasil = angka1 * angka2
        response = {
            dicari: "f",
            Jarak: angka1 ,
            Waktu: angka2 ,
            Hasil: hasil ,
        };
    } else if (tipe === "m") {
        hasil = angka1 / angka2;
        response = {
            dicari: "m",
            Kecepatan: angka1,
            Waktu: angka2,
            Hasil: hasil,
        };
    } else if (tipe === "a") {
        hasil = angka1 / angka2;
        response = {
            dicari: "a",
            Jarak: angka1,
            Kecepatan: angka2,
            Hasil: hasil,
        };
    } else {
        response = "Tipe tidak ada!";
    }

    res.json(response);
});
        


const port = 5000
app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})
