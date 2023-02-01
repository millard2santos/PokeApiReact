import './Pokemon.css'


const Pokemon = (pokemon) => {
    const {id,name,img} = pokemon.pokemon

    return (
        <article>
            <p>id: {id}</p>
            <img src={img} alt="" />
            <p>name: {name}</p>
        </article>
    )
}

export default Pokemon;