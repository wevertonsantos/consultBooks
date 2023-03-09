const btnLivrosFront = document.querySelector('#livros-front-end')

btnLivrosFront.addEventListener('click', filtrarLivrosFront)

function filtrarLivros(){
	const livrosFiltrados = livros.filter(livro =>
			livro.categoria == 'front-end')
			console.table(livrosFiltrados)
}
