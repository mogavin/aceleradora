function ListaMusicas(props) {
	return (
		props.musicas 
		.map(
			musica => (
				<div>
					<p>{musica.autor}</p>
					<p>{musica.nome}</p>
					<p>{musica.genero}</p>
					<img src={musica.capa}/>
				</div>
			)
		)
	)
}

export default ListaMusicas