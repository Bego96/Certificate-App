import { useState, useEffect } from 'react';
import { IoIosSettings, } from 'react-icons/io';


const Person = (props) => {

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
    const element = document.querySelector(`#${elementId}`);
    
    // Function to handle the click event
    const clickHandler = () => {
        document.querySelector(`#${radioId}`).checked = true;
    };

    // Add the event listener
    element.addEventListener('click', clickHandler);

    // Remove the event listener in the cleanup function
    return () => {
        element.removeEventListener('click', clickHandler);
    };
}, []);

    return (
        <>
            <tr id={elementId} class="flex w-full border-l-[1px] border-b-[1px] border-r-[1px] items-center" onClick={() => selectedItem()}>
                <td class="p-2 mobile:p-4 mobile:w-10 relative">
                    <input type="radio" id={radioId} name="person" value={props.name}/>
                </td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.name}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.firstName}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.userId}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.department}</td>
                <td class="p-2 mobile:p-4 mobile:w-1/4">{props.plant}</td>
            </tr>
        </>
    )
}

export default Person;