import React, { useState, useEffect } from 'react';
import { Grid, Button } from "@material-ui/core";
import { getGames, initGame } from "./data.js";

function Games() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGames(setData);
  }, []);

  function updateURL(identity) {
    window.location = `/games/${identity}`;
  }

  if (data) {

    let games = [];
    for (let i=0; i<data.length; i++) {
      games.push(
        <Grid item xs={12}>
          <a href={`/games/${data[i].identity}`}>
            <Button>
              {data[i].identity}
            </Button>
          </a>
        </Grid>
      );
    }

    return (
      <Grid container>
        {games}
        <Grid item xs={12}>
          <Button onClick={()=>{initGame(updateURL)}}>
            Create New Game
          </Button>
        </Grid>
      </Grid>
    );
  } else {
    return (null);
  }
}

export default Games;
