window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const playerList = document.getElementsByClassName("player-list")[0];

    searchInput.addEventListener("keyup", async () => {
        if(searchInput.value != "" || searchInput.value == undefined ){
            try {
                const res = await axios.get("/app/test")
                if(res.status == 200){
                    const players = res.data.players;
    
                    playerList.innerHTML = players.map( player =>`
                        <div class='player'>
                            <img src="../res/icons/football-player.png" alt="playerName.png" onerror="">
                            <h3>${player.name}</h3>
                            <h3>${player.team}</h3>
                        </div>
                    `).join("");
                    
                }else{
                    throw new Error();
                }
                console.log(res);            
            } catch (error) {
                console.log(error);
                playerList.innerHTML = `
                    <div class='player'>
                        <h2>
                            <code>Player not found</code>
                        </h2>
                    </div>
                `;
            }
        }else{
            playerList.innerHTML = "";
        }

    });

});
