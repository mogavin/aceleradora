import React, { useState, useEffect } from 'react';
import CardFilme from './CardFilme'


function getCard(filme){
  return <CardFilme key={filme.show.id} nome={filme.show.name} genero={filme.show.genres} capa={filme.show.image.medium}/>
}


function ListaFilmes(props) {

  const [filmes, setFilme] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=%22one%20piece%22")
    .then(resp => resp.json())
    .then(respFilmes => setFilme(respFilmes))
  })

  return (
    <div>
      {filmes.map(getCard)}
    </div>
  )
}

export default ListaFilmes