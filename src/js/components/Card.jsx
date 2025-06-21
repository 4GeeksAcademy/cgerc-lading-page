
const Card = (props) => {
  return (
  <div className="card h-100">
    <img src={props.imageUrl} className="card-img-top" alt="..." height={200}/>
    <div className="card-body">
      <h5 className="card-title text-center">{props.title}</h5>
      <p className="card-text text-center">{props.description}</p>
    </div>
    <div className="card-footer text-center">
      <button className="btn btn-primary">Más información</button>
    </div>
  </div>
  )
}

export default Card;



