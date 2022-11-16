import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { imgRoute } from "../helpers/imgRoute,";


import "./heroeItem.css";

export default function HeroeItem({hero}) {

    const imgUrl = imgRoute(hero.imageId);
  
  return (
    <div className="col-md-4  col-sm-12  mb-3 mt-2 animate__animated animate__fadeIn ">
      <Card >
        <CardContent>
          <Typography variant="h5" component="div">
            {hero.superhero}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {hero.publisher}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Alter ego: {hero.alter_ego}
          </Typography>
          <img
            src={imgUrl}
            alt={hero.superhero}
          />

          {hero.alter_ego !== hero.characters && (
            <p className="mt-2 mb-0">Personajes: {hero.characters}</p>
          )}

          <p className="text-muted mt-2 mb-0">{hero.first_appearance}</p>
        </CardContent>
        <CardActions>
          <Link className="btn btn-primary" to={`/hero/${hero._id}`}>
            Leer más...
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
