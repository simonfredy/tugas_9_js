function tugasSembilan(){
    var buku = {
        judul: "Belajar HTML",
        tipe: "Buku Tutorial",
        tahun: 2017,
        harga: 120000
    }
    for (var x in buku){
        console.log(buku[x]);
    }
}

tugasSembilan();