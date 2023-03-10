const elementoInserirLivros = document.querySelector('#livros')

function exibirLivros(listaLivros){
	elementoInserirLivros.innerHTML = '';
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
					<div class="tags">
						<span class="tag">${livro.categoria}</span>
					</div>
			</div>
		`;
	})
}