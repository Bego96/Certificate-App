import {BiSearch} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import LookUp from './lookUp';
import { BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi';
import UserList from './UserList';


// SEARCH CRITERIA COMPONENT 

const SearchCriteria = () => {
    return (
        <div className='border'>
            <form className=''>
                    <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 p-2 laptop:p-0'>
                        <div className='tablet:mx-2'>
                            <label for="name">Name</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="name" />
                            </div>
                        </div>
                        <div className='tablet:mx-2'>
                            <label for="firstName">First Name</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="firstName" />
                            </div>
                        </div>
                        <div className='tablet:mx-2'>
                            <label for="userId">User ID</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="userId" />
                            </div>
                        </div>
                        <div className='tablet:mx-2'>
                            <label for="department">Department</label>
                            <div className='h-10 w-full'>
                                <input type="text" placeholder="ITM" className='h-full border w-full' name="department" />
                            </div>
                        </div>
                        <div className='tablet:mx-2'>
                            <label for="plant">Plant</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="plant" />
                            </div>
                        </div>
                    </div>
                        <div className='flex mt-6 p-2'>
                            <div className='w-[30%] h-10 mr-1'>
                                <input type="submit" value="Search" className='w-full text-white bg-blue-400 h-full cursor-pointer'/>
                            </div>
                            <div className='w-[30%] h-10'>
                                <input type="submit" value="Reset" className='w-full bg-slate-100 border border-slate-400 h-full cursor-pointer'/>
                            </div>
                        </div>
                    </form>
        </div>
    )
}

// USER LOOK UP COMPONENT

const UserLookUp = (props) => {

    const [searchCriteriaVisible, setSearchCriteriaVisible] = useState(false);
    const [userListVisible, setUserListVisible] = useState(false);


    const toggleSearchCriteria = () => {
        setSearchCriteriaVisible(!searchCriteriaVisible);
    }

    const toggleSupplierList = () => {
        setUserListVisible(!userListVisible);
    }

    return (
        <div className='z-40 absolute top-0 left-0 w-full bg-slate-300 h-screen  block bg-opacity-50'>
            <div className='bg-white w-full tablet:w-[80%] laptop:w-[55%] desktop:w-[40%] border p-1 mx-auto mt-[5%] border-slate-300'>
                <div className='flex justify-between items-center bg-slate-100 border border-slate-300 p-2'>
                    <h2>Search for supplies</h2>
                    <AiOutlineClose size={20} onClick={() => props.openingUserLookUp()} className='cursor-pointer'/>
                </div>
                <div className='p-4'>
                    <div className='bg-blue-400 text-white p-2 flex items-center cursor-pointer' onClick={toggleSearchCriteria}>
                    {
                        searchCriteriaVisible ? <BiSolidUpArrow size={10}/> : <BiSolidDownArrow size={10}/>
                    }
                        <h2 className='ml-4'>Search criteria</h2>
                    </div>
                    {searchCriteriaVisible && <SearchCriteria />}
                </div>
                <div className='p-4'>
                    <div className='bg-blue-400 text-white p-2 flex items-center cursor-pointer' onClick={toggleSupplierList}>
                    {
                        userListVisible ? <BiSolidUpArrow size={10}/> : <BiSolidDownArrow size={10}/>
                    }
                        <h2 className='ml-4'>Supplier list</h2>
                    </div>
                    <div className='border-b border-l border-r'>
                        {userListVisible && <UserList />}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

// NEW CERTIFICATE COMPONENT

const NewCertificate = () => {

    const [openLookUp, setOpenLookUp] = useState(false);
    const [openUserLookUp, setUserLookUp] = useState(false);

    const openingLookUp = () => {
        setOpenLookUp(!openLookUp);
    }

    const openingUserLookUp = () => {
        setUserLookUp(prevState => !prevState)
    }

    console.log(openUserLookUp);

    return (
        <>
        <div className="w-full">
        {openLookUp && <LookUp openingLookUp={openingLookUp} />}
            {openUserLookUp && <UserLookUp openingUserLookUp={openingUserLookUp} />}
            <div className='w-[full] p-4 tablet:p-8 tablet:w-[80%] laptop:w-[55%] desktop:w-[40%] mx-auto'>
                <div className='mb-10'>
                    <Link to="/Certificate-overview"><IoIosArrowRoundBack size={55} className='mb-10 cursor-pointer '/></Link>
                </div>
                <div className='mb-10'>
                    <h2 className='text-2xl'>New certificate</h2>
                </div>
                <div className='w-[full] relative'>
                    <div className='relative'>
                        <form>
                            <div className='w-full mb-4'>
                                <label for="supplier">Supplier</label>
                                <div className='flex items-center h-10'>
                                    <input type="text" name="supplier" className='w-full h-full border-t-[1px] border-b-[1px] border-l-[1px]' />
                                    <span className='p-[11px] box-border bg-slate-100 border-b-[1px] border-l-[1px] border-t-[1px] cursor-pointer' onClick={() => openingLookUp()}><BiSearch className=''/></span>
                                    <span className='p-[11px] bg-slate-100 border-[1px] cursor-pointer'><IoClose className='' /></span>
                                </div>
                            </div>
                            <div className='w-full h-10 mb-10'>
                                <label for="certType">Certificate type</label>
                                <select name="certType" id="certType" className='w-full h-full border-[1px] cursor-pointer'>
                                    <option value="" disabled selected className='cursor-pointer'>Choose type</option>
                                    <option value="saab" className='cursor-pointer'>CCC certificate</option>
                                    <option value="opel" className='cursor-pointer'>Permission of printing</option>
                                    <option value="audi" className='cursor-pointer'>OHSAS 18001</option>
                                </select>
                            </div>
                            <div className='w-full h-10 mb-10'>
                                <label for="validation">Valid from:</label>
                                <input type="date" id="validation" name="validation" className='cursor-pointer w-full h-full border-[1px]'/>
                            </div>
                            <div className='w-full h-10 mb-10'>
                                <label for="birthday">Valid to:</label>
                                <input type="date" id="validation" name="validation" className='cursor-pointer w-full h-full border-[1px]'/>
                            </div>
                            <div className='w-full laptop:w-[40%] h-10 mt-16'>
                                <input type="submit" value="Submit" className='w-full text-white bg-blue-400 h-full cursor-pointer'/>
                            </div>   
                        </form>
                        <div className='w-full laptop:w-[40%] h-10 mt-16'>
                            <button className='w-full text-white bg-green-400 h-full cursor-pointer' onClick={() => openingUserLookUp()}>Add participant</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewCertificate;