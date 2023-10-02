import {IoIosArrowRoundBack} from 'react-icons/io'

const CertificateEdit = (props) => {
    console.log(props.recordId)

    const goBack = () => {
        let close = false;
        props.closeEdit();
    }
    // id from props will be used for look up among certificate records in order to edit record associated with prop's id.
    return (
        <div className="absolute top-0 left-0 z-30 bg-white w-[100%] ">
            <div className="w-[95%] tablet:w-[70%] laptop:w-[50%] desktop:w-[40%] mx-auto">
                <IoIosArrowRoundBack size={55} className='mb-10 cursor-pointer ' onClick={() => goBack()}/>
                
                <div className='mb-10'>
                    <h2 className='text-2xl'>Edit certificate</h2>
                </div>
                <div className='w-[full] '>
                    <div>
                        <form>
                            <div className='w-full mb-4'>
                                <label for="supplier">Supplier</label>
                                <div className='flex items-center h-10'>
                                    <input type="text" name="supplier" className='w-full h-full border-[1px]' />
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
        </div>
       
    )
}

export default CertificateEdit;