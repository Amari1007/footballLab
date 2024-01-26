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
                    // If anything other than an
                    // array with players in it 
                    // is sent, an error is thrown
                    playerList.innerHTML = data.map((player) => `
                        <div class='player' data-id='${player.id}'>
                            <img src='../res/icons/football-player.png' alt='${player.name}.png'>
                            <h2 class='player-name'>
                                ${player.name}
                            </h2>
                            <h2 class='player-team'>
                                ${player.team}
                            </h2>
                        </div>
                    `).join("");
                    // console.log(data);                    

                    // Run this when a player is selected
                    const player = document.getElementsByClassName("player");
                    // Convert array-like object
                    Array.from(player).map((element) =>
                        element.addEventListener("click", ()=>{
                            const playerId = element.dataset.id;
                            location.assign(`/i/player-view/${playerId}`);
                        })
                    );

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
