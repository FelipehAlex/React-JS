
import '../../pages/PokeList/poke-list.css';


function Card({ pokemon }) {
  return (

    <a className="pokemon">

      <section className="pokemon-status">
        <h2>{pokemon.name}</h2>

        <ul>
          <li>Grass</li>
          <li>Poison</li>
        </ul>
      </section>
  
      <section className="pokemon-image">
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </section>
  
    </a>
  
  );
}

export default Card;
