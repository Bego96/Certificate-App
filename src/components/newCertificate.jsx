import {BiSearch} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import LookUp from './lookUp';

const NewCertificate = () => {

    const [openLookUp, setOpenLookUp] = useState(false);


    const openingLookUp = () => {
        setOpenLookUp(!openLookUp);
    }



    return (
        <>
        <div className='w-[full] tablet:w-[80%] laptop:w-[55%] desktop:w-[40%] mx-auto'>
        <div className='mb-10'>
         <Link to="/Certificate-overview"><IoIosArrowRoundBack size={55} className='mb-10 cursor-pointer '/></Link>
        </div>
        <div className='mb-10'>
            <h2 className='text-2xl'>New certificate</h2>
        </div>
        <div className='w-[full] relative'>
        {
            openLookUp ? <LookUp openingLookUp={openingLookUp}/> : null
        }
            <div>
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
                    <div className='w-full laptop:w-[50%] h-10 mt-16'>
                        <input type="submit" value="Submit" className='w-full text-white bg-blue-400 h-full cursor-pointer'/>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
        </div>
        </>
    )
}

export default NewCertificate;