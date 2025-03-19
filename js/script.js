let questions = [
    "Apakah kamu jatuh cinta padaku sejak pertama kali bertemu?",
    "Apakah kamu selalu tersenyum saat mengingatku?",
    "Apakah hatimu berdebar setiap kali kita berbicara?",
    "Apakah kamu merasa nyaman dan bahagia saat bersamaku?",
    "Apakah kamu ingin selalu ada di sisiku selamanya?"
];

let index = 0;
let bgMusic = document.getElementById("bg-music");
let playButton = document.getElementById("play-music-btn");
let noButton = document.getElementById("no");

// Fungsi untuk memutar musik
function playMusic() {
    bgMusic.play().then(() => {
        playButton.style.display = "none"; // Sembunyikan tombol setelah musik diputar
    }).catch(error => {
        console.log("Autoplay diblokir, pengguna harus berinteraksi.");
    });
}

// Event Listener tombol "Mulai Musik"
playButton.addEventListener("click", playMusic);

// Fungsi untuk berpindah ke pertanyaan berikutnya
document.getElementById("yes").addEventListener("click", function () {
    playMusic(); // Pastikan musik diputar saat user klik "Ya"
    index++;
    if (index < questions.length) {
        document.getElementById("question").innerText = questions[index];
        resetNoButton();
    } else {
        document.getElementById("container").innerHTML = "<h2>Aku tahu kamu mencintaiku tinaaaaaaa! ❤️</h2>";
    }
});

// Fungsi agar tombol "Tidak" berpindah setiap kali diklik
noButton.addEventListener("click", moveNo);
noButton.addEventListener("mouseover", moveNo);

// Fungsi agar tombol "Tidak" kabur saat dihover atau diklik
function moveNo() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Fungsi untuk mereset posisi tombol "Tidak" setelah setiap pertanyaan
function resetNoButton() {
    noButton.style.position = "relative";
    noButton.style.left = "auto";
    noButton.style.top = "auto";
    noButton.style.transform = "translateX(0)";
}
