async function getAllPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const data = await res.json();
    return data.results
  } catch (err) {
    console.error(err);
  }
}

export default getAllPokemon;