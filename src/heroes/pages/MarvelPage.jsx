import { Divider } from "@mui/material";
import { HeroeList } from "../components/HeroeList";


export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comic</h1>
      <Divider />

      <div>
        <HeroeList publisher={"Marvel Comics"} />
      </div>
    </>
  );
}
