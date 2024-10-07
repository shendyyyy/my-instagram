const nama = "shendy seftiana"
let usia = 50;
function generateBiodata() {
    if (usia > 12 && usia < 18) {
        generasi = "generasi remaja"
    } else if (usia > 18 && usia < 40) {
        generasi = "generasi dewasa"
    } else if (usia > 40) {
        generasi = "generasi kolot"
    }
    else if (usia > 5 && usia < 12) {
        generasi = "generasi budak"
    }
    else {
        generasi = "generasi sigma"
    }
    return console.log('generasi saya adalah', generasi)
}

console.log(nama)
console.log(usia)

generateBiodata();
