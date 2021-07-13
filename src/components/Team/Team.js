import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Team = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 325,
      backgroundColor: "white",
      marginBottom: "10px",
      borderRadius: "10px",
    },
    media: {
      height: 150,
    },
  });

  const classes = useStyles();

  const { strAlternate, strSport, strTeamBanner, idTeam } = props.team;
  return (
    <div className="teamBody">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={strTeamBanner}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {strAlternate}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Sports Type : {strSport}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={"/Team/" + idTeam}>
            <button className="button" size="small" color="primary">
              Explore!
            </button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Team;
