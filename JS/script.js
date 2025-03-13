// Welcoming speech on Home Page

replaceName();

function replaceName() {
    let name = prompt('Hai, siapa namamu?', '');

    // Validasi input
    if (name === null || name.trim() === '') {
        alert('Nama tidak boleh kosong!');
        return; // Berhenti jika input kosong atau Cancel ditekan
    }

    // Tampilkan nama di elemen dengan id 'name'
    document.getElementById('name').innerHTML = name;
}

// banner-autoslide

let bannerIndex = 0;
showBanner()

// function to change banners
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

    // get all benner elements
function showBanner() {
    const banners = document.getElementsByClassName('slide');
    console.log (banners);

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // loop through all banner elements

    for (let i =0 ; i < banners.length; i++) {
        banners [i].style.display = 'none';
    }

    // show first banner

    banners [bannerIndex].style.display = 'block';
}

// setinterval to change banner
setInterval(nextBanner, 5000);

// form

function validateForm() {
    // Ambil nilai dari input
    const nameImput = document.getElementById('name-input').value;
    const birthDate = document.getElementById('birth-date').value;
    const sellectImput = document.getElementById('gender').value;
    const messageImput = document.getElementById('messages').value;

    // Validasi input
    if (nameImput === '' || birthDate === '' || sellectImput === '' || messageImput === '') {
        alert('tidak boleh kosong!');
        return;
    }

    // Tampilkan nilai di elemen yang sesuai
    setSenderUI(nameImput, birthDate, sellectImput, messageImput);

    return false;
}

// Fungsi untuk menampilkan nilai di UI
function setSenderUI(name, date, gender, message) {
    document.getElementById('sender-name').textContent = name;
    document.getElementById('sender-date').textContent = date;
    document.getElementById('sender-gender').textContent = gender;
    document.getElementById('sender-message').textContent = message;

    const resultDiv = document.querySelector('.form-content > div');
    resultDiv.classList.add('show');
}