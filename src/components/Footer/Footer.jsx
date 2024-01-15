import { Link } from "react-router-dom"
import AdvantagesItem from "../Advantages/AdvantagesItem"


const Footer = () => {
  return (
    <>
    <div>Footer</div>
    <Link to='/'>Home | </Link>
    <Link to='/about'>About</Link>
    <AdvantagesItem />
    </>
  )
}

export default Footer