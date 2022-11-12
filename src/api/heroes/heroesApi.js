import  axios  from "axios"

export const getHeroesByPublisher = async (publisher) => {
  const url = `${process.env.REACT_APP_BASE_URL}/heroes/publisher/${publisher}`;
  const heroeList = await axios.get(url);

  return heroeList;
};
