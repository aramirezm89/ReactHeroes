import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../api/heroes/heroesApi";
import { imgRoute } from "../helpers/imgRoute,";

export const HeroPage = () => {
  
  const { id } = useParams();

  const [hero, setHero] = useState({});
  const [imgUrl, setimgUrl] = useState();

  useEffect(() => {
    try {
      getHeroById(id).then(({ data }) => {
        setHero(data.hero);
        setimgUrl(x => imgRoute(data.hero.imageId))
      });
    
    } catch (error) {
      console.log(error);
      throw new Error("Error al realizar la peticion");
    }
  }, []);
 

  return (

    <div className="row d-md-flex mt-4 ">
      <div className="col-md-6 col-sm-12  text-center">
        <h2>
          {hero.superhero} - <small>{hero.alter_ego}</small>
        </h2>
        <Divider />
        <img
          className="mt-2 mb-4"
          style={{ maxHeight: "600px", maxWidth: "400px" }}
          src={imgUrl}
          alt={hero.superhero}
        />
      </div>
      <div className="col-md-6 col-sm-12  text-center">
        <h2>{hero.publisher}</h2>
        <Divider />
        <div className="card mt-2">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Primera aparición: {hero.first_appearance}
              </li>
              <li className="list-group-item">Personajes: {hero.characters}</li>
              <li className="list-group-item">Alter ego : {hero.alter_ego}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
