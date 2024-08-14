import { Link, useNavigate } from "react-router-dom"
import { Navbar_Element } from "../Shared/NavBar/helper/constant"


function useNavBar() {
  const navigate=useNavigate()
  const renderElement=Navbar_Element.map((element)=>{
    return <Link className="font-mono text-4xl min-w-[49px]" key={element.title}to={element.path}>{element.title}</Link>
  })
  
  return {
    renderElement,
    navigate,
  }
}

export default useNavBar
