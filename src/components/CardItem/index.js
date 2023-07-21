// Write your code here.
import './index.css'

const CardDetails = props => {
  const {cardDetails} = props
  //console.log(cardDetails)
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} cardContainer`}>
      <h1 className="head"> {title} </h1>
      <p className="para">{description}</p>
      <mg src={imgUrl} className="image" alt={title} />
    </li>
  )
}
export default CardDetails
