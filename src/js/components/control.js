const musicStorage = JSON.parse(localStorage.getItem("music"));

const musicName = document.getElementById("song-name");
const musicArtist = document.getElementById("song-artist");
const albumCover = document.getElementById("album-cover");
const mainSong = document.getElementById("main-song");
const controls = document.getElementById("controls");
const playPauseBtn = document.getElementById("play-pause");
const repeatBtn = document.getElementById("repeat");

// let musicIndex = Math.floor(Math.random() * specificSongApi.length);

export function localStorageMusic() {
  if (musicStorage) {
    musicArtist.innerText = musicStorage.artist;
    musicName.innerText = musicStorage.title;
    albumCover.src = musicStorage.thumbnailUrl;
    mainSong.src = musicStorage.song;
  }
}

export function playMusic() {
  controls.classList.add("paused");
  playPauseBtn.innerText = "pause";
  mainSong.play();
}

export function pauseMusic() {
  controls.classList.remove("paused");
  playPauseBtn.innerText = "play_arrow";
  mainSong.pause();
}

export async function clickCard() {}

repeatBtn.addEventListener("click", function () {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      break;
    case "repeat_one":
      repeatBtn.innerText = "repeat";
      break;
  }
});

export function playPause() {
  playPauseBtn.addEventListener("click", function () {
    const isMusicPaused = controls.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
  });
}

export function favorite() {
  const favorite = document.getElementById("favorite");

  favorite.addEventListener("click", function () {
    let getText = favorite.innerText;
    switch (getText) {
      case "favorite_border":
        favorite.innerText = "favorite";
        break;
      case "favorite":
        favorite.innerText = "favorite_border";
        break;
    }
  });
}
