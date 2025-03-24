import { useState } from 'react'

const Toggle = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <div className="flex justify-center items-center gap-[35px] pt-[35px] pr-[150px] pb-[20px] pl-[10px]">
            <button 
            onClick={handleToggle} id="toggle-button" 
            className="w-10 h-6 rounded-full border-none bg-primary relative flex items-center p-[3px] cursor-pointer transition-colors duration-300 ease-in-out">
                {isActive ? 'Activo' : 'Inactivo'}
                <span className="w-[18px] h-[18px] bg-textPrimary border-none rounded-full absolute ml-[3px] transition-transform duration-300 ease-in-out"></span>
            </button>
            <div>Light mode</div>
        </div>

    )
}

export default Toggle;


