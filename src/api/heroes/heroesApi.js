import axios from "axios";

const token = localStorage.getItem("x-token") || "";

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

export const getHeroById = async (id) => {
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/${id}`;
  const hero = await axios.get(url);
  return hero;
};

export const createHero = async (data) => {
  console.log(token);
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/crear`;
  const response = await axios.post(url, data, {
    headers: {
      "x-token": token,
    },
  });

  return response;
};

export const updateHero = async (id, data) => {
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/actualizar/${id}`;
  const response = await axios.put(url, data, {
    headers: {
      "x-token": token,
    },
  });

  return response;
};

export const deleteHero = (id) =>{

  const url = `${process.env.REACT_APP_BASE_URL}/heroes/${id}`;

  const response = axios.delete(url, {
    headers: {
      "x-token": token,
    },
  });

  return response;
}