// JavaScript specific to player.html
(async () => {
    const players = await fetchPlayers();
    renderPlayers(players);
  })();
  