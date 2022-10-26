

let attackTypeComparisons = {
    normal: {
        ghost: null,
        rock: 'weak',
        steel: 'weak'
    },
    fire: {
        fire: 'weak',
        water: 'weak',
        Rock: 'weak',
        Dragon: 'weak',
        Grass: 'strong',
        ice: 'strong',
        bug: 'strong',
        steel: 'strong',
    },
    water: {
        water: 'weak',
        grass: 'weak',
        dragon: 'weak',
        fire: 'strong',
        ground: 'strong',
        rock: 'strong',
    },
    grass: {
        fire: 'weak',
        grass: 'weak',
        poison: 'weak',
        flying: 'weak',
        nug: 'weak',
        dragon: 'weak',
        steel: 'weak',
        water: 'strong',
        ground: 'strong',
        rock: 'strong',
    },
    electric: {
        ground: null,
        grass: 'weak',
        electric: 'weak',
        dragon: 'weak',
        water: 'strong',
        flying: 'strong',
    },
    ice: {
        fire: 'weak',
        water: 'weak',
        ice: 'weak',
        steel: 'weak',
        grass: 'strong',
        ground: 'strong',
        flying: 'strong',
        dragon: 'strong',
    },
    fighting: {
        ghost: null,
        poison: 'weak',
        flying: 'weak',
        psychic: 'weak',
        bug: 'weak',
        fairy: 'weak',
        normal: 'strong',
        ice: 'strong',
        rock: 'strong',
        dragon: 'strong',
        steel: 'strong',
    },
    poison: {
        steel: null,
        poison: 'weak',
        ground: 'weak',
        rock: 'weak',
        ghost: 'weak',
        grass: 'strong',
        fairy: 'strong',
    },
    ground: {
        flying: null,
        grass: 'weak',
        bug: 'weak',
        fire: 'strong',
        electric: 'strong',
        poison: 'strong',
        rock: 'strong',
        steel: 'strong',
    },
    flying: {
        electric: 'weak',
        rock: 'weak',
        steel: 'weak',
        grass: 'strong',
        fighting: 'strong',
        bug: 'strong',
    },
    psychic: {
        psychic: 'weak',
        steel: 'weak',
        fighting: 'strong',
        poison: 'strong',
    },
    bug: {
        fire: 'weak',
        fighting: 'weak',
        poison: 'weak',
        flying: 'weak',
        ghost: 'weak',
        steel: 'weak',
        fairy: 'weak',
        grass: 'strong',
        psychic: 'strong',
        dark: 'strong',
    },
    rock: {
        fighting: 'weak',
        ground: 'weak',
        steel: 'weak',
        fire: 'strong',
        ice: 'strong',
        flying: 'strong',
        bug: 'strong',
    },
    ghost: {
        x: normal,
        dark: 'weak',
        psychic: 'strong',
        ghost: 'strong',
    },
    dragon: {
        x: fairy,
        steel: 'weak',
        dragon: 'strong',
    },
    dark: {
        dark: 'weak',
        fairy: 'weak',
        fighting: 'weak',
        psychic: 'strong',
        ghost: 'strong',
    },
    steel: {
        fire: 'weak',
        water: 'weak',
        electric: 'weak',
        steel: 'weak',
        ice: 'strong',
        rock: 'strong',
        fairy: 'strong',
    },
    fairy: {
        fire: 'weak',
        poison: 'weak',
        steel: 'weak',
        fighting: 'strong',
        dragon: 'strong',
        dark: 'strong',
    },
}