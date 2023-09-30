import HomeNavigation from "./homeNavigation"
import{ AiFillHome} from 'react-icons/ai'
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {

    const [showHomeNav, setShowHomeNav] = useState(true);

    return (
        <div>
            <Link to='/'>
                <div className="cursor-pointer flex items-center border-l-8 border-blue-500 px-6 py-2 mb-6" onClick={()=> {setShowHomeNav(!showHomeNav)}}>
                    <AiFillHome color='#3b82f6' size={20}/><span className="ml-2 text-blue-500 text-lg">Start</span>
                </div>
            </Link>
            {showHomeNav ? <HomeNavigation /> : null}
        </div>
    )
}

export default Home;