import { GiHamburgerMenu} from 'react-icons/gi';
import { BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi';
import { useState } from 'react';

const HomeNavigation = () => {

    const [openList, setOpenList] = useState(false);



    return (
        <div className="text-blue-600 pl-8">
            <div className="flex items-center w-full justify-between" onClick={() => setOpenList(!openList)}>
                <div className='flex items-center'>
                    <GiHamburgerMenu color='#3b82f6' size={24}/>
                    <p className="ml-2">Machine learning</p>
                </div>
                {
                    openList ? <BiSolidUpArrow /> : <BiSolidDownArrow/>
                }
            </div>
            {
                openList ? 
                <ul className="pl-8 mt-8">
                <li>Example 1</li>
                <li>Example 2</li>
                <li>Example 3</li>
                </ul> : null
            }
            
        </div>
    )
}

export default HomeNavigation;