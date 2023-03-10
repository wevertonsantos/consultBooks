const btnLivro = document.querySelectorAll('.buttons')

btnLivro.forEach(btn => 
	btn.addEventListener('click', filtrarLivros)
)

function filtrarLivros(){
	const elementoBtn = document.getElementById(this.id)
	const categoria = elementoBtn.value

	const livrosFiltrados = livros.filter(livro =>
			livro.categoria == categoria)
			console.table(livrosFiltrados)
}
