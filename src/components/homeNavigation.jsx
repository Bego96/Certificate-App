import {RxHamburgerMenu} from 'react-icons/rx';
import { BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const HomeNavigation = (props) => {

    const [openList, setOpenList] = useState(false);



    return (
        <div className="text-blue-600 pl-8">
            <div className="flex items-center w-full justify-between cursor-pointer" onClick={() => setOpenList(!openList)}>
                <div className='flex items-center'>
                    <RxHamburgerMenu color='#3b82f6' size={24}/>
                    <p className="ml-2">Machine learning</p>
                </div>
                {
                    openList ? <BiSolidUpArrow /> : <BiSolidDownArrow/>
                }
            </div>
            {
                openList ? 
                <ul className="pl-8 mt-8">
                    <Link to="/Certificate-overview"><li className='cursor-pointer my-2' onClick={() => props.toggleSidebar()}>Example 1</li></Link>
                    <li className='cursor-pointer my-2' onClick={() => props.toggleSidebar()}>Example 2</li>
                    <li className='cursor-pointer my-2' onClick={() => props.toggleSidebar()}>Example 3</li>
                </ul> : null
            }
            
        </div>
    )
}

export default HomeNavigation;