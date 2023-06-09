import { playMusic } from "../components/control.js";
import { mainSong, repeatBtn, next, prev } from "../constants/constants.js";
import loadFavSong from "./loadFavSong.js";

export default function clickFav(favSong, favoriteUrls) {
  favSong.forEach((fav, index) => {
    fav.addEventListener("click", function () {
      let musicIndex = index;

      loadFavSong(musicIndex, favoriteUrls);

      function nextMusic() {
        musicIndex++;
        if (musicIndex == favoriteUrls.length) {
          musicIndex = 0;
        }
        loadFavSong(musicIndex, favoriteUrls);
      }

      function prevMusic() {
        if (musicIndex == 0) {
          musicIndex = favoriteUrls.length;
        }
        musicIndex--;
        loadFavSong(musicIndex, favoriteUrls);
      }

      next.onclick = nextMusic;

      prev.onclick = prevMusic;

      mainSong.onended = function () {
        let getText = repeatBtn.innerText;

        switch (getText) {
          case "repeat":
            nextMusic();
            break;
          case "repeat_one":
            mainSong.currentTime = 0;
            playMusic();
            break;
        }
      };
    });
  });
}
