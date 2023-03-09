let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI();

const elementoInserirLivros = document.querySelector('#livros')

async function getBuscarLivrosAPI(){
	const res = await fetch(endpointAPI);
	livros = await res.json()

	exibirLivros(livros)
}