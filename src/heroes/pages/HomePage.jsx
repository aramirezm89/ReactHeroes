import { Divider } from "@mui/material"


export const HomePage = () => {
  return (
    <div className="container animate__animated animate__fadeIn ">
      <h1>Bienvenido a la enciclopedia de héroes</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-2">
          <img
            src="https://laverdadnoticias.com/__export/1600138404442/sites/laverdad/img/2020/09/14/liga_de_la_justicia.jpg_429976299.jpg"
            alt="DC"
          ></img>
        </div>
        <div className="col-md-6 col-sm-12 mb-2">
          <img
            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Marvel-Comics-Characters-That-Need-to-be-in-the-MCU.jpg"
            alt="Marvel"
          />
        </div>
      </div>

      <Divider />
      <img
        style={{ width: "100%" }}
        src="https://c4.wallpaperflare.com/wallpaper/714/1005/287/marvel-comics-the-avengers-dc-comics-transformers-wallpaper-thumb.jpg"
        alt="home"
      />
    </div>
  );
}
