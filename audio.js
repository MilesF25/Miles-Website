// List of audio files
const songs = [
    "assets/audio/Story4.mp3",
    "assets/audio/web.mp3",
    "assets/audio/thirdsong.mp3",
    "assets/audio/mall.mp3",
    "assets/audio/universal.mp3"


];

// Shuffle the songs array randomly
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create shuffled playlist
const playlist = shuffleArray(songs);
let currentSongIndex = 0;

// Create audio element
const audio = document.createElement("audio");
audio.src = playlist[currentSongIndex];


// Get a reference to the button element
const button = document.getElementById('play_pause_button');

// Add a click event listener
button.addEventListener('click', function () {

    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
});

audio.addEventListener("ended", function () {
    currentSongIndex++;
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
    }
    audio.src = playlist[currentSongIndex];
    audio.play();
});
