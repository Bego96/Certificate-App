import { GiHamburgerMenu} from 'react-icons/gi';
import {RxHamburgerMenu} from 'react-icons/rx';

const Header = (props) => {
    return (
        <div className="box-border flex justify-between items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] bg-slate-200 px-4 laptop:px-10 py-4">
            <div className="flex items-center">
                <RxHamburgerMenu size={24} onClick={() => props.toggleSidebar()} className='cursor-pointer'/>
                <h1 className='text-2xl ml-4 tablet:ml-10 '>DCCS Tuzla</h1>
            </div>
            <div>
            <label for="language" className="mr-2">Language:</label>
            <select name="language" id="language" className="rounded-none">
                <option value="english">English</option>
                <option value="bosnian">Bosnian</option>
            </select>
            </div>
        </div>
    )
}

export default Header;