import { useState } from 'react';
import { IoIosSettings, } from 'react-icons/io';



const Certificate = (props) => {


	const [toolOpen, setToolOpen] = useState(false);
	const deleteRecord = (id) => {
		let recordId = id;
		props.deleteRecord(recordId);
	}

	const openEdit = () => {
		
		props.openEdit(props.id);
		setToolOpen(false)
	}

	const Tool = () => {
		return (
			<div className="cursor-pointer absolute top-10 z-20 bg-white w-[100px] p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"><p onClick={() => openEdit()}>Edit</p>
				<p onClick={() => deleteRecord(props.id)} className="cursor-pointer">Delete</p>
			</div>
		)
	}


	

	const openTool = () => {
		setToolOpen(!toolOpen)
		
	}

    return (
        <tr class="flex w-full border-l-[1px] border-b-[1px] border-r-[1px] items-center">
			<td class="p-2 mobile:p-4 mobile:w-10 relative"><IoIosSettings className="cursor-pointer" onClick={() => openTool()}/>
				{	
					toolOpen ? <Tool /> : null
					}
			</td>
			<td class="p-2 mobile:p-4 mobile:w-1/4">{props.supplier}</td>
			<td class="p-2 mobile:p-4 mobile:w-1/4">{props.certificateType}</td>
			<td class="p-2 mobile:p-4 mobile:w-1/4">{props.validFrom}</td>
			<td class="p-2 mobile:p-4 mobile:w-1/4">{props.validTo}</td>
			
		</tr>
    )
}

export default Certificate;