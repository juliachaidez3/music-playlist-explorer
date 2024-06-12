console.log("script.js");

document.addEventListener("DOMContentLoaded", () => {
    const info = data.playlists;
    console.log(info);

    const playlistContainer = document.getElementById("playlist-container");
    console.log(playlistContainer);

    data.playlists.forEach((playlist) => {
        const tile = createPlaylistTile(playlist);
        playlistContainer.appendChild(tile);
    });

    function createPlaylistTile(playlist) {
        const tile = document.createElement("div");
        tile.className = "playlist-tile";
        tile.innerHTML = `
        <img src="${playlist.playlist_art}" alt = "cover">
        <h3>${playlist.playlist_name}</h3>
        <p>Creator: ${playlist.playlist_creator}</p>
        <span class="heart-icon">&#x2665;</span>
        <span class="like-count">${playlist.likeCount}</span>
        `;

        tile.addEventListener("click", (event) => {
            openModal(playlist);


            const heartIcon = tile.querySelector(".heart-icon");
            heartIcon.addEventListener("click", (event) => {
                event.stopPropagation(); 
                const likeCountElement = heartIcon.nextElementSibling;
                let likeCount = parseInt(likeCountElement.textContent);
                likeCount++; 
                heartIcon.classList.add("liked");
                likeCountElement.textContent = likeCount;
            });


        });


        function openModal(playlist) {
            console.log("clicked tile");

            const modal = document.getElementById("playlist-modal");
            document.getElementById("modal-cover").src = playlist.playlist_art;
            document.getElementById("modal-name").textContent = playlist.playlist_name;
            document.getElementById(
                "modal-creator"
            ).textContent = `Creator : ${playlist.playlist_creator}`;

            const songList = document.getElementById("modal-songs");
            songList.innerHTML = "";

            playlist.songs.forEach((song) => {
                const songItem = document.createElement("p");
                songItem.textContent = `${song.title} - ${song.artist} - ${song.duration}`;
                songList.appendChild(songItem);
            });

            modal.style.display = "block";
            }

            // Event listener to close the modal
            document.querySelector(".close-button").addEventListener("click", () => {
                document.getElementById("playlist-modal").style.display = "none";
            });

            //shuffle songs
            document.getElementById("shuffle-button").addEventListener("click", () => {
                const songList = document.getElementById("modal-songs");
                const songs = Array.from(songList.children);
                songs.sort(() => Math.random() - 0.5);
                songList.innerHTML = "";
                songs.forEach((song) => songList.appendChild(song));
            });

        return tile;
    }
});


function getRandomPlaylist() {
    const randomPlaylist = data.playlists;
    const randomIndex = Math.floor(Math.random() * randomPlaylist.length);
    return randomPlaylist[randomIndex];
    }
    
    function displayPlaylistDetails(playlist) {
    const randomPlaylistContainer = document.getElementById('random-playlist-container');



    randomPlaylistContainer.innerHTML = `
    <h2>${playlist.playlist_name}</h2>
    <p>Created by: ${playlist.playlist_creator}</p>
    <img src="${playlist.playlist_art}" alt="${playlist.playlist_name} cover art">
    `;

    const randomSongsContainer = document.getElementById('random-songs-container');

    randomSongsContainer.className = "random";
    
    randomSongsContainer.innerHTML = `
    <h3>Songs:</h3>
   <div>
    ${playlist.songs.map(song => `
    <div class="song-item">
    <div class="div2">
    <img class="song-cover" src="${song.cover_art}" alt="${song.title} cover art">
    <div class="div3">
    <p class="song-details"><strong>${song.title}</strong> by ${song.artist}</p>
    <p class="song-details"><strong>${song.duration}</p>
    </div>
    </div>
    </div>
    `).join('')}
    </div>
    `;



    }
    
    document.addEventListener('DOMContentLoaded', () => {
    const generatePlaylist = getRandomPlaylist();
    displayPlaylistDetails(generatePlaylist);
    });

    