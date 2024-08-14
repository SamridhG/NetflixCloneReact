import useNavBar from "../../Hooks/useNavBar"
import { ROUTE } from "../../Routes/constant"
import CustomDropdown from "../CustomDropDown/CustomDropDown"
import { Img } from "./helper/constant"

function NavBar() {
    const {renderElement,navigate}=useNavBar()
    const handleLogoClick=()=>{
      navigate(ROUTE.HOME)
    }
    const options = [
      { value: 'Sign-Out', label: 'Sign Out', icon: "ICONS.Option1Icon" },
    ];
  
    const handleDropdownChange = (selectedOption: { value: string; label: string }) => {
      console.log('Selected Option:', selectedOption);
    };
  return (
    <header className="absolute z-20 w-full flex flex-row items-center justify-between pt-0 px-0 pb-[11px] max-w-full text-left text-xl text-black bg-gradient-to-b from-black to-black">
    <div className='z-10 px-16 py-10 bg-gradient-to-b from-black' onClick={handleLogoClick}>
        <img
            className="w-56"
            src={Img.logo} alt='logo' />
    </div>
    <div className="flex-grow flex items-center justify-start gap-[120px] text-white mx-4">
        {renderElement}
    </div>
    <div className="flex items-end justify-end w-32 h-32 mx-6">
        <div className="absolute bottom-0 right-0">
            <CustomDropdown
                img='/profile-icon.png'
                options={options}
                onChange={handleDropdownChange}
                mainContainerStyle="bg-gray-800"
            />
        </div>
    </div>
</header>

  )
}

export default NavBar
