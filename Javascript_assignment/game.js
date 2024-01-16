async function fetchSeasons() {
    try {
      const response = await fetch('https://www.balldontlie.io/api/v1/games');
      const data = await response.json();
      console.log('Games API Response:', data);
  
      const seasonSelect = document.getElementById('season-select');
  
      const uniqueSeasons = [...new Set(data.data.map(game => game.season.start_year))];
      
      uniqueSeasons.forEach(startYear => {
        const option = document.createElement('option');
        option.value = startYear;
        option.text = `${startYear}-${startYear + 1}`;
        seasonSelect.add(option);
      });
    } catch (error) {
      console.error('Error fetching seasons:', error);
    }
  }
  
  (async () => {
    await fetchSeasons();
  })();
  
  
  
   
      async function fetchAndRenderGames() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const seasonSelect = document.getElementById('season-select');
        const selectedSeason = seasonSelect.value;
  
        const response = await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${startDate}&end_date=${endDate}&seasons[]=${selectedSeason}`);
        const data = await response.json();
        const gameListContainer = document.getElementById('game-list');
  
        if (data.data.length === 0) {
          gameListContainer.innerHTML = '<p class="no-games">No Games Found</p>';
          return;
        }
  
        gameListContainer.innerHTML = '';
  
        data.data.forEach(game => {
          const gameCard = document.createElement('div');
          gameCard.classList.add('game-card');
  
          const teams = game.teams.map(team => `${team.full_name} (${team.won ? 'WON' : team.lost ? 'LOST' : 'TIE'})`).join(' vs ');
  
          const gameTitle = document.createElement('h3');
          gameTitle.textContent = `${game.date} - ${teams}`;
          gameCard.appendChild(gameTitle);
  
          const gameTime = document.createElement('p');
          gameTime.textContent = `Time: ${game.date} ${game.status}`;
          gameCard.appendChild(gameTime);
  
          const gameScore = document.createElement('p');
          gameScore.textContent = `Score: ${game.home_team_score} - ${game.visitor_team_score}`;
          gameCard.appendChild(gameScore);
  
          gameListContainer.appendChild(gameCard);
        });
      }
  
      (async () => {
        await fetchSeasons();
      })();