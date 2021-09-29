function getPilahanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, Player) {
    if (Player == comp) return 'SERI!';
    if (Player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (Player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (Player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if (Player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function GmbAcak() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilahanComputer();
        const pilihaPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihaPlayer);

        GmbAcak();

        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
        return hasil;


    });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilahanComputer();
//     const pilihaPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihaPlayer);
//     // console.log('comp :' + pilihanComputer);
//     // console.log('player :' + pilihaPlayer);
//     // console.log('Hasil : ' + hasil);
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilahanComputer();
//     const pilihaPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihaPlayer);
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilahanComputer();
//     const pilihaPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihaPlayer);
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });