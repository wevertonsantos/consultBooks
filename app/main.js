const livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI();

async function getBuscarLivrosAPI(){
	const res = await fetch(endpointAPI)
	const livros = await res.json()
	console.table(livros)
}