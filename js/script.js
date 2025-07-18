// console.log("Lets write js")
// let currentSong = new Audio();
// let songs;
// let currFolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function getSongs(folder) {
//     currFolder = folder;
//     let a = await fetch(`http://127.0.0.1:5000/${folder}/`)
//     let response = await a.text();
//     console.log(response)
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1])
//         }
//     }

//     //show all the songs in the playlist. 

//     let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
//     songUL.innerHTML = ""
//     for (const song of songs) {
//         songUL.innerHTML = songUL.innerHTML + `<li> <img class="invert" width="34" src="img/music.svg" alt="">
//                                 <div class="info">
//                                     <div>  ${song.replaceAll("%20", " ")} </div>
//                                     <div>Artist- Song</div>
//                                 </div>
//                                 <div class="playnow">
//                                     <span>Play Now</span>
//                                 <img class="invert" src="img/play.svg" alt="">
//                                </div></li>`;
//     }
//     //Attach an event listener to each song.
//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//         })
//     })
//     return songs

// }


// const playMusic = (track, pause = false) => {
//     // let audio= new Audio ("/songs/" + track)
//     currentSong.src = `/${currFolder}/` + track
//     if (!pause) {
//         currentSong.play()
//         play.src = "img/pause.svg"
//     }

//     document.querySelector(".songinfo").innerHTML = decodeURI(track)
//     document.querySelector(".songtime").innerHTML = "00:00/00:00"
// }

// async function displayAlbums() {
//     let a = await fetch(`http://127.0.0.1:5000/songs/`)
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a")
//     let cardContainer = document.querySelector(".cardContainer")
//     let array = Array.from(anchors)
//         for (let index = 0; index < array.length; index++) {
//         const e = array[index];



//         if (e.href.includes("/songs")) {
//             let folder = e.href.split("/").slice(-2)[0]
//             // Get the metadta of folder
//             let a = await fetch(`http://127.0.0.1:5000/songs/${folder}/info.json`)
//             let response = await a.json();
//             console.log(response)
//             cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${folder}" class="card" >

//                             <div class="play">

//                                 <svg width="16" height="16" viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M5 20V4L19 12L5 20Z"
//                                         stroke="#141B34" stroke-width="1.5" fill="#000"
//                                         stroke-linejoin="round" />
//                                 </svg>
//                             </div>

//                             <img
//                                 src="/songs/${folder}/cover.jpg"
//                                 alt>
//                             <h2>${response.title}</h2>
//                             <p>${response.description}</p>

//                         </div> `
//         }
    

//     //Load the playlist when the card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         // console.log(e)
//         e.addEventListener("click", async item => {
//             console.log("Fetching Songs")
//             songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
//             playMusic(songs[0])
//         })
//     })
// }
// }

// async function main() {
//     //get the list of all songs
//     await getSongs("songs/ncs")
//     playMusic(songs[0], true)

//     //display all the albums on the page
//     displayAlbums()


//     // console.log(Music)




//     //Attach an event listener to play, next and previous.
//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play()
//             play.src = "img/pause.svg"
//         }
//         else {
//             currentSong.pause()
//             play.src = "img/play.svg"
//         }

//     })

//     //Listen for time update event
//     currentSong.addEventListener("timeupdate", () => {
//         console.log(currentSong.currentTime, currentSong.duration);
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     })


//     // Add an event listener to seek bar
//     document.querySelector(".seekbar").addEventListener("click", (e) => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = ((currentSong.duration) * percent) / 100
//     })

//     //Add event listener for hamburger
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0"
//     })

//     //Add event listener for close
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%"
//     })

//     //Add an event listener to previous and next
//     previous.addEventListener("click", () => {
//         console.log("Previous clicked")
//         console.log(currentSong)
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index - 1) >= 0) {
//             playMusic(songs[index - 1])
//         }
//     })

//     next.addEventListener("click", () => {
//         currentSong.pause()
//         console.log("Next clicked")

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index + 1) < songs.length) {
//             playMusic(Music[index + 1])
//         }

//     })

//     // Auto-play next song when current ends
//     currentSong.addEventListener("ended", () => {
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
//         if (index + 1 < songs.length) {
//             playMusic(songs[index + 1]);
//         } else {
//             // Optional: Restart from the beginning
//             playMusic(songs[0]);
//         }
//     })

//     // Add an event to volume.
//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",
//         (e) => {
//             console.log("Setting volume to", e, e.target, e.target.value)
//             currentSong.volume = parseInt(e.target.value) / 100
//         })

//      //add event listener to mute the track
//      document.querySelector(".volume>img").addEventListener("click", e=>{
//         console.log(e.target)
//         if(e.target.src.includes("volume.svg")){
//              e.target.src = e.target.src.replace("volume.svg", "mute.svg")
//             currentSong.volume = 0;
//                 document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
//         }
//         else{
//             e.target.src =  e.target.src.replace("mute.svg", "volume.svg")
//             currentSong.volume = .10;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
//         }
//      })



// }




// // //play the first song
// //     var audio = new Audio(songs[0])
// //     audio.play(); 

// //     audio.addEventListener("loadeddata", ()=>{
// //         console.log(audio.duration, audio.currentSrc, audio.currentTime)
// //     });


// main()
// console.log("Lets write js")
// let currentSong = new Audio();
// let songs;
// let currFolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function getSongs(folder) {
//     currFolder = folder;
//     let res = await fetch(`${folder}/info.json`);
//     let data = await res.json();
//     songs = data.songs;

//     let songUL = document.querySelector(".songList ul");
//     songUL.innerHTML = "";

//     for (const song of songs) {
//         songUL.innerHTML += `<li> 
//             <img class="invert" width="34" src="img/music.svg" alt="">
//             <div class="info">
//                 <div>${song.replaceAll("%20", " ")}</div>
//                 <div>Artist - Song</div>
//             </div>
//             <div class="playnow">
//                 <span>Play Now</span>
//                 <img class="invert" src="img/play.svg" alt="">
//             </div>
//         </li>`;
//     }

//     Array.from(songUL.children).forEach(li => {
//         li.addEventListener("click", () => {
//             const track = li.querySelector(".info div").innerText.trim();
//             playMusic(track);
//         });
//     });
//     return songs;
// }

// const playMusic = (track, pause = false) => {
//     currentSong.src = `${currFolder}/${track}`;
//     if (!pause) {
//         currentSong.play();
//         play.src = "img/pause.svg";
//     }
//     document.querySelector(".songinfo").innerHTML = decodeURI(track);
//     document.querySelector(".songtime").innerHTML = "00:00/00:00";
// };

// async function displayAlbums() {
//     const folders = ["Angry_(mood)", "Bright_(mood)", "Chill_(mood)", "cs", "Dark_(mood)", "Diljit",  "ncs", "Funky_(mood)", "Kran_aujla", "romantic", "Uplifitng_(mood)"]; // Add your actual folder names
//     const cardContainer = document.querySelector(".cardContainer");

//     for (let folder of folders) {
//         let res = await fetch(`songs/${folder}/info.json`);
//         let data = await res.json();

//         cardContainer.innerHTML += `<div data-folder="${folder}" class="card">
//             <div class="play">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5" fill="#000" stroke-linejoin="round" />
//                 </svg>
//             </div>
//             <img src="songs/${folder}/cover.jpg" alt>
//             <h2>${data.title}</h2>
//             <p>${data.description}</p>
//         </div>`;
//     }

//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         e.addEventListener("click", async item => {
//             songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
//             playMusic(songs[0]);
//         });
//     });
// }

// async function main() {
//     await getSongs("songs/ncs");
//     playMusic(songs[0], true);
//     displayAlbums();

//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play();
//             play.src = "img/pause.svg";
//         } else {
//             currentSong.pause();
//             play.src = "img/play.svg";
//         }
//     });

//     currentSong.addEventListener("timeupdate", () => {
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     });

//     document.querySelector(".seekbar").addEventListener("click", (e) => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = (currentSong.duration * percent) / 100;
//     });

//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     });

//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%";
//     });

//     previous.addEventListener("click", () => {
//         let index = songs.indexOf(currentSong.src.split("/").pop());
//         if (index > 0) {
//             playMusic(songs[index - 1]);
//         }
//     });

//     next.addEventListener("click", () => {
//         let index = songs.indexOf(currentSong.src.split("/").pop());
//         if (index < songs.length - 1) {
//             playMusic(songs[index + 1]);
//         }
//     });

//     currentSong.addEventListener("ended", () => {
//         let index = songs.indexOf(currentSong.src.split("/").pop());
//         if (index + 1 < songs.length) {
//             playMusic(songs[index + 1]);
//         } else {
//             playMusic(songs[0]);
//         }
//     });

//     document.querySelector(".range input").addEventListener("change", (e) => {
//         currentSong.volume = parseInt(e.target.value) / 100;
//     });

//     document.querySelector(".volume > img").addEventListener("click", e => {
//         if (e.target.src.includes("volume.svg")) {
//             e.target.src = e.target.src.replace("volume.svg", "mute.svg");
//             currentSong.volume = 0;
//             document.querySelector(".range input").value = 0;
//         } else {
//             e.target.src = e.target.src.replace("mute.svg", "volume.svg");
//             currentSong.volume = 0.1;
//             document.querySelector(".range input").value = 10;
//         }
//     });
// }

// main();

console.log("Let's write JS");

let currentSong = new Audio();
let songs = [];
let currFolder = "";

// Format seconds to MM:SS
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Load songs from a folder
async function getSongs(folder) {
  currFolder = folder;
  try {
    const res = await fetch(`${folder}/info.json`);
    const data = await res.json();
    songs = data.songs;

    const songUL = document.querySelector(".songList ul");
    songUL.innerHTML = "";

    songs.forEach(song => {
      const displayName = decodeURIComponent(song).split("/").pop();
      songUL.innerHTML += `
        <li>
          <img class="invert" width="34" src="img/music.svg" alt="">
          <div class="info">
            <div>${displayName}</div>
            <div>Artist - Song</div>
          </div>
          <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="img/play.svg" alt="">
          </div>
        </li>`;
    });

    // Add click listeners
    Array.from(songUL.children).forEach((li, index) => {
      li.addEventListener("click", () => playMusic(songs[index]));
    });

  } catch (err) {
    console.error(`Error loading ${folder}/info.json:`, err);
  }
}

// Play a selected song
function playMusic(track, pause = false) {
  currentSong.src = `${currFolder}/${track}`;
  if (!pause) {
    currentSong.play();
    document.getElementById("play").src = "img/pause.svg";
  }
  document.querySelector(".songinfo").innerText = decodeURIComponent(track);
  document.querySelector(".songtime").innerText = "00:00 / 00:00";
}

// Display album cards
async function displayAlbums() {
  const folders = ["Angry_(mood)", "Bright_(mood)", "Chill_(mood)", "cs", "Dark_(mood)", "Diljit", "ncs", "Funky_(mood)", "Kran_aujla", "romantic", "Uplifitng_(mood)"];
  const cardContainer = document.querySelector(".cardContainer");
  cardContainer.innerHTML = "";

  for (const folder of folders) {
    try {
      const res = await fetch(`${folder}/info.json`);
      const { title, description } = await res.json();

      cardContainer.innerHTML += `
        <div data-folder="${folder}" class="card">
          <div class="play"><svg width="16" height="16" ...></svg></div>
          <img src="${folder}/cover.jpg" alt="${title}">
          <h2>${title}</h2>
          <p>${description}</p>
        </div>`;
    } catch (err) {
      console.error(`Missing or invalid info.json in: ${folder}`, err);
    }
  }

  // Add click listeners to cards
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", async () => {
      const folder = card.dataset.folder;
      await getSongs(folder);
      playMusic(songs[0]);
    });
  });
}

// Main function
async function main() {
  await getSongs("ncs");
  playMusic(songs[0], true);
  await displayAlbums();

  document.getElementById("play").addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      document.getElementById("play").src = "img/pause.svg";
    } else {
      currentSong.pause();
      document.getElementById("play").src = "img/play.svg";
    }
  });

  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerText =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  document.querySelector(".seekbar").addEventListener("click", e => {
    const percent = e.offsetX / e.target.getBoundingClientRect().width;
    currentSong.currentTime = percent * currentSong.duration;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });

  document.getElementById("previous").addEventListener("click", () => {
    const idx = songs.indexOf(currentSong.src.split("/").pop());
    if (idx > 0) playMusic(songs[idx - 1]);
  });

  document.getElementById("next").addEventListener("click", () => {
    const idx = songs.indexOf(currentSong.src.split("/").pop());
    if (idx < songs.length - 1) playMusic(songs[idx + 1]);
  });

  currentSong.addEventListener("ended", () => {
    const idx = songs.indexOf(currentSong.src.split("/").pop());
    playMusic(songs[(idx + 1) % songs.length]);
  });

  document.querySelector(".range input").addEventListener("input", e => {
    currentSong.volume = e.target.value / 100;
  });

  document.querySelector(".volume>img").addEventListener("click", e => {
    const img = e.target;
    if (img.src.includes("volume.svg")) {
      img.src = img.src.replace("volume.svg", "mute.svg");
      currentSong.volume = 0;
      document.querySelector(".range input").value = 0;
    } else {
      img.src = img.src.replace("mute.svg", "volume.svg");
      currentSong.volume = 0.1;
      document.querySelector(".range input").value = 10;
    }
  });
}

main();
