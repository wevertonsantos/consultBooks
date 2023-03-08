const livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI()

async function getBuscarLivrosAPI (){
	await fetch(endpointAPI)
	.then(r => r.json())
	.then(response => console.log(response))
}