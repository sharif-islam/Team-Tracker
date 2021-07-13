import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./TeanDetail.css";

const TeamDetail = () => {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  console.log("id " + id);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((team) => setTeams(team.teams));
  }, []);
  const team = teams.find((pd) => pd.idTeam === id);
  console.log(team);
  const mainTeam = team || "{}";
  const { strGender } = mainTeam;
  return (
    <div class="body">
      <Header flag={2} team={mainTeam}></Header>
      <div className="teamDetails">
        <div className="teamDetail">
          <h3>{mainTeam.strAlternate}</h3>
          <p>Founded : {mainTeam.intFormedYear}</p>
          <p>Country : {mainTeam.strCountry}</p>
          <p>Sports Type : {mainTeam.strSport}</p>
          <p>Gender : {strGender}</p>
        </div>
        {strGender === "Male" ? (
          <div className="showImage">
            <img src="https://i.ibb.co/f9QmTV6/male.png" alt="" />
          </div>
        ) : (
          <div className="showImage">
            <img src="https://i.ibb.co/RjCXwgR/female.png" alt="" />
          </div>
        )}
      </div>
      <div className="container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quod ea ipsa debitis, esse illum suscipit neque rem assumenda illo
          vero. Eos aliquam labore velit deleniti debitis officia id
          voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde perferendis enim animi consequuntur dicta assumenda itaque quasi
          molestias sapiente mollitia nisi quas eius, labore, alias eligendi?
          Delectus sit dicta obcaecati!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ipsam laudantium totam facilis veritatis mollitia
          molestias, tempora saepe id dicta molestiae expedita ullam iusto
          corporis praesentium distinctio, laboriosam iste sunt quas.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laudantium
          totam facilis veritatis mollitia molestias, tempora saepe id dicta
          molestiae expedita ullam iusto corporis praesentium distinctio,
          laboriosam iste sunt quas.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          laudantium totam facilis veritatis mollitia molestias, tempora saepe
          id dicta molestiae expedita ullam iusto corporis praesentium
          distinctio, laboriosam iste sunt quas.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ipsam laudantium totam facilis veritatis
          mollitia molestias, tempora saepe id dicta molestiae expedita ullam
          iusto corporis praesentium distinctio, laboriosam iste sunt quas.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laudantium
          totam facilis veritatis mollitia molestias, tempora saepe id dicta
          molestiae expedita ullam iusto corporis praesentium distinctio,
          laboriosam iste sunt quas.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ipsam laudantium totam facilis veritatis mollitia
          molestias, tempora saepe id dicta molestiae expedita ullam iusto
          corporis praesentium distinctio, laboriosam iste sunt quas.
        </p>
      </div>
    </div>
  );
};

export default TeamDetail;
