export const PokemonList = (props) => {
    return (
        <div id="pokemon-list" className="grid grid-cols-4 gap-4">
        {props.children}
        </div>
    )
} 