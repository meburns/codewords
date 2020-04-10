import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, Button } from "@material-ui/core";
import { getGame } from "./data.js";

function Game({ match }) {
  const [background, setBackground] = useState("old-wood.jpg");
  const [data, setData] = useState(null);

  useEffect(() => {
    getGame(match.params.identity, setData);
  }, [match]);

  function cycleBackground() {
    if (background === "old-wood.jpg") {
      setBackground("big-blue.jpg");
    } else {
      setBackground("old-wood.jpg");
    }
  }

  let useStyles = makeStyles({
    root: {
      background: `url("/${background}") no-repeat`,
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      margin: "1rem 0",
      textAlign: "center"
    },
    cardText: {
      wordBreak: "break-all",
      hyphens: "auto",
      padding: "2rem 0",
      width: "100%"
    }
  });

  const classes = useStyles();

  if (data) {
    const sarr = data.words;

    const arr = [
      [1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15],
      [16,17,18,19,20],
      [21,22,23,24,25]
    ];

    function buildArr() {
      let rows = [];

      for (let i=0; i < arr.length; i++) {
        let row = arr[i];
        let fields = [];
        for (let j=0; j < row.length; j++) {
          let field = row[j];
          fields.push(
            <Grid key={j} item xs={2} className={classes.field}>
              <Card className={classes.card}>
                <Typography variant="h5" className={classes.cardText}>{sarr[field]}</Typography>
              </Card>
            </Grid>
          );
        }
        rows.push(
          <Grid key={i} container justify="space-evenly" alignItems="center" className={classes.row}>
            {fields}
          </Grid>
        );
      }

      return rows;
    }

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h2">
            {data.secrets.turn}
          </Typography>
        </Grid>
        {buildArr()}
        <Grid item xs={12}>
          <Button onClick={()=>{cycleBackground()}}>
            <Typography variant="h4">Change Background</Typography>
          </Button>
        </Grid>
      </Grid>
    );
  } else {
    return (null);
  }
}

export default Game;
