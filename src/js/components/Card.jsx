
const Card = (props) => {
  return (
  <div className="card h-100">
    <img src={props.imageUrl} className="card-img-top" alt="..." height={200}/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
    <div className="card-footer">
      <button className="btn btn-primary">Find Out More!</button>
    </div>
  </div>
  )
}

export default Card;



