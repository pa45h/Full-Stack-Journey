console.log("welcome to js!");

async function getSongsUrl() {
  try {
    console.log("getSongsUrl Called..");

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

const songList = document.querySelector(".songList");

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
  
}

main();
