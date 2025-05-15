console.log("welcome to js!");

const songList = document.querySelector(".songList");
let currSong = new Audio();

async function getSongsUrl() {
  try {
    console.log("getSongsUrl() Called..");

    const response = await fetch(
      `http://127.0.0.1:5500/05_JS_Advanced/Projects/VibeStream/songs`
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const htmlText = await response.text();

    const div = document.createElement("div");
    div.innerHTML = htmlText;

    let songsUrl = [];

    const as = div.querySelectorAll("a");

    for (const element of as) {
      if (element.href.endsWith(".mp3")) {
        songsUrl.push(element.href.split("/songs/")[1]);
      }
    }

    return songsUrl;
  } catch (error) {
    console.log(error);
  }
}

const playMusic = (song, movie) => {
  console.log("playMusic() called..");

  currSong.src =
    "/05_JS_Advanced/Projects/VibeStream/songs/" + song + "-" + movie + ".mp3";

  currSong.play();
  play_button.src = "./imgs/pause.svg";
  currentSong_name.innerHTML = `${song}`;
  document.querySelector(".song_info").style.opacity = "1";
  selectSong.style.opacity = "0";
  document.querySelector(".playing_songs").style.opacity = "1";

  console.log(`Playing ${song}-${movie}`);
};

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function main() {
  const songsUrl = await getSongsUrl();

  for (const song of songsUrl) {
    songList.innerHTML += `
        <li class="songItems flex">

                <div class="songItems_info flex">
                    <img class="music_logo" src="./imgs/music.svg" alt="music">
                    <div>                                
                    <h3>${song.split("-")[0].replaceAll("%20", " ")}</h3>
                        <p>${song
                          .split("-")[1]
                          .replaceAll("%20", " ")
                          .replaceAll(".mp3", "")}</p>
                          </div>
                </div>

                <div class="plaNow flex">
                <div>Play now</div>
                        <img src="./imgs/play.svg" alt="play">
                    </div>
                </div>
                    
            </li>
        `;
  }

  Array.from(
    document.querySelector(".songList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      const songName = e.getElementsByTagName("h3")[0].innerHTML;
      const movieName = e.getElementsByTagName("p")[0].innerHTML;
      playMusic(songName, movieName);
    });
  });

  play_button.addEventListener("click", () => {
    console.log("Play Button Clicked..");

    if (!currSong.src) {
      play_button.src = "./imgs/play.svg";
    } else {
      if (currSong.paused) {
        currSong.play();
        console.log("Played Current Song");
        play_button.src = "./imgs/pause.svg";
      } else {
        currSong.pause();
        play_button.src = "./imgs/play.svg";
        console.log("Paused Current Song");
      }
    }
  });

  currSong.addEventListener("timeupdate", () => {
    song_time.innerHTML = `${secondsToMinutesSeconds(currSong.currentTime)}`;
    song_duration.innerHTML = `${secondsToMinutesSeconds(currSong.duration)}`;

    document.querySelector(".seekbar_range").value =
      (currSong.currentTime / currSong.duration) * 100;
  });

  document.querySelector(".seekbar_range").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

    currSong.currentTime = (currSong.duration * percent) / 100;

    document.querySelector(".seekbar_range").value = `${percent}`;
  });
}

main();
