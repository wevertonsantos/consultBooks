const livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI();

const elementoInserirLivros = document.querySelector('#livros')

async function getBuscarLivrosAPI(){
	const res = await fetch(endpointAPI)
	const livros = await res.json()
	console.table(livros)
	exibirLivros(livros)
}

function exibirLivros(listaLivros){
	listaLivros.forEach(livro => {
		elementoInserirLivros.innerHTML +=
		`
			<div class="livro">
					<img class="img__livro"
					src="${livro.imagem}"
					alt="${livro.alt}">
					<div class="titulo__livro">
						<h2>${livro.titulo}</h2>
					</div>
			</div>
		`
	})
}