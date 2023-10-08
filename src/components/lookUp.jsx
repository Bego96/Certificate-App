import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi';
import Supplier from './Supplier';

// SEARCH CRITERIA COMPONENT 

const SearchCriteria = () => {
    return (
        <div className='border'>
            <form className=''>
                    <div className='flex justify-between'>
                        <div className='w-1/3 mx-2'>
                            <label for="name">Supplier name</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="name" />
                            </div>
                        </div>
                        <div className='w-1/3 mx-2'>
                            <label for="index">Supplier index</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="index" />
                            </div>
                        </div>
                        <div className='w-1/3 mx-2'>
                            <label for="city">Supplier city</label>
                            <div className='h-10 w-full'>
                                <input type="text" className='h-full border w-full' name="city" />
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


// SUPPLIER LIST COMPONENT

const SupplierList = () => {

    const [suppliers, setSuppliers] = useState([
		{	
			id: 1,
			supplierName: "ANDEMIS GmbH 1, Stuttgart",
			city: "Stuttgart"
		},
		{
			id: 2,
			supplierName: "DAMLER AG 1, Berlin",
			city: "Berlin"
		},
		{
			id: 3,
			supplierName: "ANDEMIS GmbH 1, Stuttgart",
			city: "Stuttgart"
		},
	])

    const selectedItem = (id) => {
        console.log(id)
    }

    return (
        <>
        <table class="text-slate-600 block text-left w-[100%] overflow-x-auto p-2">
				<thead class=" flex w-full border-[1px]">
					<tr class="flex w-full ">
						<th class="p-2	mobile:p-4	mobile:w-10"></th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Supplier name</th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Supplier index</th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">City</th>
					</tr>
				</thead>
		
				<tbody class=" flex flex-col items-center overflow-y-auto" style={{ overflowY: 'overlay' }}>
					{
						suppliers.map((supplier, index) => {
                            let id = index;
							return (
                                <Supplier id={id} selectedItem={selectedItem} key={supplier.id} index={supplier.id} supplierName={supplier.supplierName} city={supplier.city}/>
							)
						})
					}
				</tbody>
			</table>
            <div className='flex mt-6 p-2'>
            <div className='w-[30%] h-10 mr-1'>
                <input type="submit" value="Select" className='w-full text-white bg-amber-500 h-full cursor-pointer'/>
            </div>
            <div className='w-[30%] h-10'>
                <input type="submit" value="Cancel" className='w-full bg-slate-100 border border-slate-400 h-full cursor-pointer'/>
            </div>
        </div>
        </>
    )
}

// LOOK UP COMPONENT

const LookUp = (props) => {

    const [searchCriteriaVisible, setSearchCriteriaVisible] = useState(false);
    const [supplierListVisible, setSupplierListVisible] = useState(false);


    const toggleSearchCriteria = () => {
        setSearchCriteriaVisible(!searchCriteriaVisible);
    }

    const toggleSupplierList = () => {
        setSupplierListVisible(!supplierListVisible);
    }

    return (
        <div className='absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-white w-full border p-1'>
            <div className='flex justify-between items-center bg-slate-100 border border-slate-300 p-2'>
                <h2>Search for supplies</h2>
                <AiOutlineClose size={20} onClick={() => props.openingLookUp()} className='cursor-pointer'/>
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
                    supplierListVisible ? <BiSolidUpArrow size={10}/> : <BiSolidDownArrow size={10}/>
                }
                    <h2 className='ml-4'>Supplier list</h2>
                </div>
                <div className='border-b border-l border-r'>
                    {supplierListVisible && <SupplierList />}
                </div>
                
            </div>
        </div>
    )
}

export default LookUp;