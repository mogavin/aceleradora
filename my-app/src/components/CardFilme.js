function CardFilme(props) {
  return (
    <>
      <img src={props.capa}></img>
      <h3>{props.genero}</h3>
      <div>{props.nome}</div>
    </>
  )
}

export default CardFilme