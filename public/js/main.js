window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const playerList = document.getElementsByClassName("player-list")[0];

    searchInput.addEventListener("keyup", async () => {
        const input = searchInput.value.toString().trim();
        if(input != "" || input == undefined ){
            try {
                const res = await axios.get(`/api/search_player/${input}`);
                const data = res.data.results;
                
                if(data.length > 0 ){
                    playerList.innerHTML = data.map((player) => `
                        <div class='player'>
                            <img src='../res/icons/football-player.png' alt='${player.name}.png'>
                            <h2 class='player-name' data=''>
                                ${player.name}
                            </h2>
                            <h2 class='player-team' data=''>
                                ${player.team}
                            </h2>                        
                        </div>                    
                    `).join("");
                    // console.log(data);
                }else{
                    throw new Error("Player not found");
                }

            } catch (error) {
                // console.log(error);
                playerList.innerHTML = `
                    <div class='player'>
                        <h2>
                            <code>${error}</code>
                        </h2>
                    </div>
                `;
            }
        }else{
            playerList.innerHTML = "";
        }

    });

});
