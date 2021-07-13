import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Team from "../Team/Team";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((team) => setTeams(team.teams));
  }, []);
  return (
    <div className="homeBody">
      <Header flag={1}></Header>
      <div className="teamArea">
        <Grid container spacing={3}>
          {teams.map((team) => (
            <Grid item xs={4}>
              <Team key={team.idTeam} team={team}></Team>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
