const getRandomFilm = async (url) => {
  const rndFilm = await fetch(`${url}films/`)
    .then(res => res.json())
    .then(data => fetchFilmByRandomId(url, data['count']));
  return rndFilm;
};

const fetchFilmByRandomId = async (url, qty) => {
  const rnd = Math.floor(Math.random() * qty) + 1;
  const fetchedRndFilm = await fetch(`${url}films/${rnd}`)
    .then(res => res.json())
    .then(data => data);
  return fetchedRndFilm;
};

export default getRandomFilm;
