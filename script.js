function createPlaylistCards () {
  data.playlists.forEach(function(playlist) {
  
    let newDiv = document.createElement("div");
    newDiv.className = "playlist-card";

    let newImg = document.createElement("img");
    newImg.className = "playlist-img";
    newImg.src = playlist.playlist_art;
    newDiv.appendChild(newImg);

    let newTitle = document.createElement("p");
    newTitle.textContent = playlist.playlist_name;
    newDiv.appendChild(newTitle);

    let newCreator = document.createElement("p");
    newCreator.textContent = playlist.playlist_creator;
    newDiv.appendChild(newCreator);

    let divLikes = document.createElement("div");
    divLikes.className = "likes";
    newDiv.appendChild(divLikes);

    let heart = document.createElement("img");
    heart.className = "heart";
    heart.src = "./assets/heart-icon-empty.png";
    divLikes.appendChild(heart);

    let numLikes = document.createElement("p");
    numLikes.className = "item";
    numLikes.textContent = playlist.likeCount;
    divLikes.appendChild(numLikes);

    let existingDiv = document.querySelector(".playlist-container");
    existingDiv.appendChild(newDiv);
  });
}

function createModal() {

  // Create a container for the songs
  let songsContainer = document.createElement("div");
  songsContainer.className = "songs-container";

  // Loop through the songs in the playlist
  playlist.songs.forEach(function(song) {
    let songDiv = document.createElement("div");
    songDiv.className = "song";

    let songTitle = document.createElement("p");
    songTitle.textContent = song.title;
    songDiv.appendChild(songTitle);

    let songArtist = document.createElement("p");
    songArtist.textContent = song.artist;
    songDiv.appendChild(songArtist);

    // Append the songDiv to the songsContainer
    songsContainer.appendChild(songDiv);
  });

  // Append the songsContainer to the newDiv (playlist card)
  newDiv.appendChild(songsContainer);

  
}

createPlaylistCards();

let likeBtn = document.getElementsByClassName("heart");
let numOfLikes = document.getElementsByClassName("item");

for(let i = 0; i< likeBtn.length; i++) {

  likeBtn[i].addEventListener("click", () => {
    // heart.src = "./assets/heart-icon-full.png";

    let count = numOfLikes[i].textContent;
    count++;
    numOfLikes[i].textContent = count;
    console.log(count);
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("playlist-img");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

for (let j = 0; j < btn.length; j++) {
  // console.log(btn[j]);

  // When the user clicks the button, open the modal 
  btn[j].onclick = function() {
    modal.style.display = "block";
    

    playlists.songs.forEach(function(playlist) {

      console.log("New modal?");
  
      let newModal = document.createElement("div");
      newModal.className = "modal-content";
  
      console.log("Yes");
  
      let modalImg = document.createElement("img");
      modalImg.className = "playlist-img";
      modalImg.src = playlist.playlist_art;
      // newModal.appendChild(modalImg);
  
    });
    
    // modal.style.display = "block";
    // dynamically create modal
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}