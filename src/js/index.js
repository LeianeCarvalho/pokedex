const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        
        // Verifica se há um cartão aberto antes de tentar fechar
        if (cartaoPokemonAberto) {
            cartaoPokemonAberto.classList.remove('aberto')
        }

        const idPokemonSelecionado = pokemon.getAttribute('id')
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        
        // Verifica se o cartão a ser aberto existe
        if (cartaoPokemonParaAbrir) {
            cartaoPokemonParaAbrir.classList.add('aberto')
        }

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        
        if (pokemonAtivoNaListagem) {
            pokemonAtivoNaListagem.classList.remove('ativo')
        }

        pokemon.classList.add('ativo')
    })
})
