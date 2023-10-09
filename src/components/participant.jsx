import { useState, useEffect } from 'react';
import { IoIosSettings, } from 'react-icons/io';


const Participant = (props) => {

    const toLowerCs = props.name;
    const lower = toLowerCs.toLowerCase()
    const elementId = lower+"id"+props.id
    const radioId = lower+props.id

    console.log(lower)
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
                    <input type="radio" id={radioId} name="person" value={props.name}/>
                </td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.name + ", " + props.firstName + " " +(props.plant)}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.department}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.email}</td>
            </tr>
        </>
    )
}

export default Participant;