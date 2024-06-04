document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("surprise").classList.remove("hidden");
    document.getElementById("extraSurprise").classList.remove("hidden");
});

document.getElementById("spotifyButton").addEventListener("click", function() {
    document.getElementById("spotifySurprise").classList.remove("hidden");
});
