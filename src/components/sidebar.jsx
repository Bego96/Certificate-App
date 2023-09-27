import{ AiFillHome} from 'react-icons/ai'
import HomeNavigation from './homeNavigation';
import { useState  } from 'react';
import Home from './home';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = (props) => {

    const [homePage, setHomePage] = useState(true)


    return (
        <div className="bg-slate-200 h-screen absolute top-0 left-0 w-[100%] tablet:w-[50%] laptop:w-[30%] desktop:w-[20%]">
            <div className="px-10 py-4 bg-blue-500 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] mb-10 flex justify-between items-center">
                <h1 className='text-2xl'>DCCS Tuzla</h1>
                <AiOutlineClose size={25} onClick={() => props.toggleSidebar()}/>
            </div>
            <div className="pr-10">
                <Home />
            </div>
        </div>
    )
}

export default Sidebar;