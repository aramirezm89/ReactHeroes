import  axios  from "axios"

export const getHeroesByPublisher = async (publisher) => {
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/publisher/${publisher}`;
  const heroeList = await axios.get(url);

  return heroeList;
};

export const getHeroesBySuperHero = async (superhero) => {
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/superhero/${superhero}`;
  const heroeList = await axios.get(url);
  return heroeList;
};


export const getHeroById = async (id) =>{
const url = `${process.env.REACT_APP_BASE_URL}/heroes/${id}`;
const hero = await axios.get(url);
return hero;
}