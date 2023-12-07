let playingAudio = "";

/* Siyahamba */

const siyahambaAudio = new Audio("./Recordings/siyahamba.mp3");
const siyahambaPlayBtn = document.getElementById("siyahambaPlayBtn");
const siyahambaProgress = document.getElementById("siyahambaProgress");
let mouseDownOnSliderSiyahamba = false;

siyahambaAudio.addEventListener("loadeddata", () => {
    siyahambaProgress.value = 0;
});
siyahambaAudio.addEventListener("timeupdate", () => {
    if (!mouseDownOnSliderSiyahamba) {
        siyahambaProgress.value = siyahambaAudio.currentTime / siyahambaAudio.duration * 100;
    }
});
siyahambaAudio.addEventListener("ended", () => {
    siyahambaPlayBtn.textContent = "▶";
    audioPlaying = false;
});

siyahambaPlayBtn.addEventListener("click", () => {

    if (playingAudio !== ""){
        stopAllAudios()
    }

    if (playingAudio === "siyahamba") {
        siyahambaAudio.pause();
        playingAudio = "";
        siyahambaPlayBtn.textContent = "▶";
    } else {
        siyahambaAudio.play();
        playingAudio = "siyahamba";
        siyahambaPlayBtn.textContent = "⏸";
    }

});

siyahambaProgress.addEventListener("change", () => {
    const pct = siyahambaProgress.value / 100;
    siyahambaAudio.currentTime = (siyahambaAudio.duration || 0) * pct;
});
siyahambaProgress.addEventListener("mousedown", () => {
    mouseDownOnSliderSiyahamba = true;
});
siyahambaProgress.addEventListener("mouseup", () => {
    mouseDownOnSliderSiyahamba = false;
});

/* Sanctus */

const sanctusAudio = new Audio("./Recordings/sanctus.mp3");
const sanctusPlayBtn = document.getElementById("sanctusPlayBtn");
const sanctusProgress = document.getElementById("sanctusProgress");
let mouseDownOnSliderSanctus = false;

sanctusAudio.addEventListener("loadeddata", () => {
    sanctusProgress.value = 0;
});
sanctusAudio.addEventListener("timeupdate", () => {
    if (!mouseDownOnSliderSanctus) {
        sanctusProgress.value = sanctusAudio.currentTime / sanctusAudio.duration * 100;
    }
});
sanctusAudio.addEventListener("ended", () => {
    sanctusPlayBtn.textContent = "▶";
    audioPlaying = false;
});

sanctusPlayBtn.addEventListener("click", () => {

    if (playingAudio !== ""){
        stopAllAudios()
    }

    if (playingAudio === "sanctus") {
        sanctusAudio.pause();
        playingAudio = "";
        sanctusPlayBtn.textContent = "▶";
    } else {
        sanctusAudio.play();
        playingAudio = "sanctus";
        sanctusPlayBtn.textContent = "⏸";
    }
});

sanctusProgress.addEventListener("change", () => {
    const pct = sanctusProgress.value / 100;
    sanctusAudio.currentTime = (sanctusAudio.duration || 0) * pct;
});
sanctusProgress.addEventListener("mousedown", () => {
    mouseDownOnSliderSanctus = true;
});
sanctusProgress.addEventListener("mouseup", () => {
    mouseDownOnSliderSanctus = false;
});

/* Salve Regina */
const salveReginaAudio = new Audio("./Recordings/salveRegina.mp3");
const salveReginaPlayBtn = document.getElementById("salveReginaPlayBtn");
const salveReginaProgress = document.getElementById("salveReginaProgress");
let mouseDownOnSliderSalveRegina = false;

salveReginaAudio.addEventListener("loadeddata", () => {
    salveReginaProgress.value = 0;
});
salveReginaAudio.addEventListener("timeupdate", () => {
    if (!mouseDownOnSliderSalveRegina) {
        salveReginaProgress.value = salveReginaAudio.currentTime / salveReginaAudio.duration * 100;
    }
});
salveReginaAudio.addEventListener("ended", () => {
    salveReginaPlayBtn.textContent = "▶";
    audioPlaying = false;
});

salveReginaPlayBtn.addEventListener("click", () => {

    if (playingAudio !== ""){
        stopAllAudios()
    }

    if (playingAudio === "salveRegina") {
        salveReginaAudio.pause();
        playingAudio = "";
        salveReginaPlayBtn.textContent = "▶";
    } else {
        salveReginaAudio.play();
        playingAudio = "salveRegina";
        salveReginaPlayBtn.textContent = "⏸";
    }
});

salveReginaProgress.addEventListener("change", () => {
    const pct = salveReginaProgress.value / 100;
    salveReginaAudio.currentTime = (salveReginaAudio.duration || 0) * pct;
});
salveReginaProgress.addEventListener("mousedown", () => {
    mouseDownOnSliderSalveRegina = true;
});
salveReginaProgress.addEventListener("mouseup", () => {
    mouseDownOnSliderSalveRegina = false;
});

/* Blahoslaveni */

const blahoslaveniAudio = new Audio("./Recordings/blahoslaveni.mp3");
const blahoslaveniPlayBtn = document.getElementById("blahoslaveniPlayBtn");
const blahoslaveniProgress = document.getElementById("blahoslaveniProgress");
let mouseDownOnSliderBlahoslaveni = false;

blahoslaveniAudio.addEventListener("loadeddata", () => {
    blahoslaveniProgress.value = 0;
});
blahoslaveniAudio.addEventListener("timeupdate", () => {
    if (!mouseDownOnSliderBlahoslaveni) {
        blahoslaveniProgress.value = blahoslaveniAudio.currentTime / blahoslaveniAudio.duration * 100;
    }
});
blahoslaveniAudio.addEventListener("ended", () => {
    blahoslaveniPlayBtn.textContent = "▶";
    audioPlaying = false;
});

blahoslaveniPlayBtn.addEventListener("click", () => {

    if (playingAudio !== ""){
        stopAllAudios()
    }

    if (playingAudio === "blahoslaveni") {
        blahoslaveniAudio.pause();
        playingAudio = "";
        blahoslaveniPlayBtn.textContent = "▶";
    } else {
        blahoslaveniAudio.play();
        playingAudio = "blahoslaveni";
        blahoslaveniPlayBtn.textContent = "⏸";
    }
});

blahoslaveniProgress.addEventListener("change", () => {
    const pct = blahoslaveniProgress.value / 100;
    blahoslaveniAudio.currentTime = (blahoslaveniAudio.duration || 0) * pct;
});
blahoslaveniProgress.addEventListener("mousedown", () => {
    mouseDownOnSliderBlahoslaveni = true;
});
blahoslaveniProgress.addEventListener("mouseup", () => {
    mouseDownOnSliderBlahoslaveni = false;
});


/* Audio stopper */

function stopAllAudios() {
    siyahambaAudio.pause();
    sanctusAudio.pause();
    salveReginaAudio.pause();
    blahoslaveniAudio.pause();

    siyahambaPlayBtn.textContent = "▶";
    sanctusPlayBtn.textContent = "▶";
    salveReginaPlayBtn.textContent = "▶";
    blahoslaveniPlayBtn.textContent = "▶";


}