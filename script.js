let litery = ['a', 'b', 'c', 'd', 'e', 'f'];
let zaznaczona;
let aktualnePyt;
let punkty = 0;
let pytania = ['Dlaczego mam kręcone włosy?', 'Jak nazywa się moja mama?', 'Czy jestem pieskiem?', 'Ile sie znamy?', 'Dodasz mnie na tiktoku, żebym znów mógł oglądać tiktoki od Ciebie?',
               'Czy teskniłaś za mną chociaż odrobinę?', 'Czy zauważyłaś ukryte napisy na obrazie, który podarowałem Ci w urodziny?', 'Ile wyciskam na klatę?'];
let odpowiedziWszystkie = [
        ['Bo zrobiłem trwałą ondulację.', 'Bo ich nie myję.', 'Po tacie', 'Po mamie', 'Po psie dafim', 'Bo jestem pudlem.'],
        ['Bogumiła', 'Lucyna', 'Janina', 'Natalia', 'Iwona', 'Martyna'],
        ['Nie', 'Nie', 'Nie', 'Nie', 'Nie', 'Tak'],
        ['9 Miesięcy', '9.5 Miesiąca', '10 Miesięcy', '11 Miesięcy', '1 Rok', '1 Rok i 1 miesiąc'],
        ['Tak, z chęcią', 'Oczywiście', 'Dodam Cię', 'Nie', 'Zastanowię się', 'Może'],
        ['Bardzo', 'Trochę', 'Może', 'Niezbyt', 'Wcale', 'Nie zadawaj mi tego pytania'],
        ['Nie', 'Chujowy był ten obraz', 'Zauważyłam', 'Nie przyglądałam się bo bolał w oczy', 'Nie mam tego obrazu', 'Jaki obraz?'],
        ['90kg', '95kg', '100kg', '102.5kg', '105kg', '107,5kg'],
];

let prawidloweOdp = [
    ['c'],
    ['b'],
    ['a', 'b', 'c', 'd', 'e'],
    ['c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['c'],
    ['e'],
];

let pomaranczOdp = [
    [],
    ['d'],
    [],
    [],
    ['e', 'f'],
    ['f'],
    [],
    ['f'],
];

let pole_a = document.getElementById('odp_a_t')
let pole_b = document.getElementById('odp_b_t')
let pole_c = document.getElementById('odp_c_t')
let pole_d = document.getElementById('odp_d_t')
let pole_e = document.getElementById('odp_e_t')
let pole_f = document.getElementById('odp_f_t')

let odpowiedziTab = [];

function start() {
    document.getElementById('start').style.display = 'none';
    aktualnePyt = 1;
    zmienPyt();
}

function zaznacz(odpowiedz) {
    document.getElementById('odp_' + odpowiedz).style.outline = '2px solid #dbd8e3';
    zaznaczona = odpowiedz;
    for (let i = 0; i < 6; i++) {
        if (i != litery.indexOf(odpowiedz)) {
            document.getElementById('odp_' + litery[i]).style.outline = "none";
        }
        else {
            continue;
        }
    }
}

function zmienPyt() {
    document.getElementById('pytanie_tekst').innerHTML = pytania[aktualnePyt - 1];
    pole_a.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][0];
    pole_b.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][1];
    pole_c.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][2];
    pole_d.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][3];
    pole_e.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][4];
    pole_f.innerHTML = odpowiedziWszystkie[aktualnePyt - 1][5];
}

function sprawdz() {
    if (prawidloweOdp[aktualnePyt - 1].includes(zaznaczona)) {
        document.getElementById('odp_' + zaznaczona).style.outline = '2px solid #49FF00';
        document.getElementById('odp_' + zaznaczona).style.color = '#49FF00';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = '0 0 25px #49FF00 inset, 0 0 25px #49FF00';
        punkty++;
    }
    else if (pomaranczOdp[aktualnePyt - 1].includes(zaznaczona)) {
        document.getElementById('odp_' + zaznaczona).style.outline = '2px solid #FF9300';
        document.getElementById('odp_' + zaznaczona).style.color = '#FF9300';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = '0 0 25px #FF9300 inset, 0 0 25px #FF9300';
        punkty += 0.5;
    }
    else {
        document.getElementById('odp_' + zaznaczona).style.outline = '2px solid #FF0000';
        document.getElementById('odp_' + zaznaczona).style.color = '#FF0000';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = '0 0 25px #FF0000 inset, 0 0 25px #FF0000';
    }
    document.getElementById('odp_a').style.pointerEvents = 'none';
    document.getElementById('odp_b').style.pointerEvents = 'none';
    document.getElementById('odp_c').style.pointerEvents = 'none';
    document.getElementById('odp_d').style.pointerEvents = 'none';
    document.getElementById('odp_e').style.pointerEvents = 'none';
    document.getElementById('odp_f').style.pointerEvents = 'none';

    document.getElementById('zatwierdz_btn').style.display = 'none';
    document.getElementById('nastepne_btn').style.display = 'block';

    odpowiedziTab.push(zaznaczona);
}

function nastepne() {
    aktualnePyt++;

    if (aktualnePyt == 8) {
        document.getElementById('nastepne_btn').innerHTML = 'Zobacz wyniki';
    }

    if (aktualnePyt <= 8) {
        document.getElementById('pytka').innerHTML = 'Pytanie: ' + aktualnePyt + ' / 8';

    document.getElementById('zatwierdz_btn').style.display = 'block';
    document.getElementById('nastepne_btn').style.display = 'none';

    if (zaznaczona != prawidloweOdp[aktualnePyt - 1]) {
        document.getElementById('odp_' + zaznaczona).style.outline = 'none';
        document.getElementById('odp_' + zaznaczona).style.color = '#dbd8e3';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = 'none';
    }
    else if (pomaranczOdp[aktualnePyt - 1].includes(zaznaczona)) {
        document.getElementById('odp_' + zaznaczona).style.outline = 'none';
        document.getElementById('odp_' + zaznaczona).style.color = '#dbd8e3';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = 'none';
        punkty += 0.5;
    }
    else {
        document.getElementById('odp_' + zaznaczona).style.outline = 'none';
        document.getElementById('odp_' + zaznaczona).style.color = '#dbd8e3';
        document.getElementById('odp_' + zaznaczona).style.boxShadow = 'none';
    }
    document.getElementById('odp_a').style.pointerEvents = 'all';
    document.getElementById('odp_b').style.pointerEvents = 'all';
    document.getElementById('odp_c').style.pointerEvents = 'all';
    document.getElementById('odp_d').style.pointerEvents = 'all';
    document.getElementById('odp_e').style.pointerEvents = 'all';
    document.getElementById('odp_f').style.pointerEvents = 'all';
    
    

    zmienPyt();
    }
    else if (aktualnePyt >= 9) {
        koniec();
    }
}

let odpK = [];

odpK[0] = document.querySelector('#odp_k1');
odpK[1] = document.querySelector('#odp_k2');
odpK[2] = document.querySelector('#odp_k3');
odpK[3] = document.querySelector('#odp_k4');
odpK[4] = document.querySelector('#odp_k5');
odpK[5] = document.querySelector('#odp_k6');
odpK[6] = document.querySelector('#odp_k7');
odpK[7] = document.querySelector('#odp_k8');

function koniec() {
    document.getElementById('pytanie_nr').style.display = 'none';
    document.getElementById('pytanie_tekst').style.display = 'none';
    document.getElementById('odpowiedzi').style.display = 'none';
    document.getElementById('nastepne_btn').style.display = 'none';
    document.querySelectorAll('hr').forEach(function(element) {
        element.remove();
    })

    let pktKoniec = document.querySelector('#pkt_koniec');

    document.querySelector('#ekran_koniec').style.display = 'block';
    pktKoniec.innerHTML = `Zdobyłaś ${punkty} / 8 pkt.`

    for (let i = 0; i < 8; i++) {
        odpK[i].innerHTML = (i + 1) + '. ' + odpowiedziTab[i].toUpperCase();
    }

    for (let i = 0; i < 8; i++) {
        if (prawidloweOdp[i].includes(odpowiedziTab[i])) {
            odpK[i].style.boxShadow = '0 0 10px #49FF00 inset, 0 0 10px #49FF00';
        }
        else if (pomaranczOdp[i].includes(odpowiedziTab[i])) {
            odpK[i].style.boxShadow = '0 0 10px #FF9300 inset, 0 0 10px #FF9300';
        }
        else {
            odpK[i].style.boxShadow = '0 0 10px #FF0000 inset, 0 0 10px #FF0000';
        }

        odpK[i].innerHTML = (i + 1) + '. ' + odpowiedziTab[i].toUpperCase();
    }

}