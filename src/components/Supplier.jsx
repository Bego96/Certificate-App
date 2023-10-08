import { useState, useEffect } from 'react';
import { IoIosSettings, } from 'react-icons/io';


const Supplier = (props) => {

    const elementId = props.city+"id"+props.id
    const radioId = props.city+props.id

   const selectedItem = () => {
        const id = props.index;
        props.selectedItem(id);
        console.log(elementId)
        console.log(radioId)
   }

   
   useEffect(() => {

        document.querySelector(`#${elementId}`).addEventListener('click', () => {
            document.querySelector(`#${radioId}`).checked = true;
        });


   },[]);

    return (
        <>
            <tr id={elementId} class="flex w-full border-l-[1px] border-b-[1px] border-r-[1px] items-center" onClick={() => selectedItem()}>
                <td class="p-2 mobile:p-4 mobile:w-10 relative">
                    <input type="radio" id={radioId} name="supplier" value={props.supplierName}/>
                </td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.supplierName}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.index}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.city}</td>
            </tr>
        </>
    )
}

export default Supplier;