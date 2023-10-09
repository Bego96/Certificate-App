import { useState } from 'react';
import Person from './Person';
import Participants from './participants';

const Persons = (props) => {

	const selectedItem = (id) => {
        console.log(id)
		props.selectedItem(id);
    }
	return (
		<>
		<table class="text-slate-600 block text-left w-[100%] overflow-x-auto p-2">
			<thead class=" flex w-full border-[1px]">
				<tr class="flex w-full ">
					<th class="p-2	mobile:p-4	mobile:w-10"></th>
					<th class="p-2	mobile:p-4	mobile:w-1/4">Name</th>
					<th class="p-2	mobile:p-4	mobile:w-1/4">First name</th>
					<th class="p-2	mobile:p-4	mobile:w-1/4">User ID</th>
					<th class="p-2	mobile:p-4	mobile:w-1/4">Department</th>
					<th class="p-2	mobile:p-4	mobile:w-1/4">Plant</th>
				</tr>
			</thead>
	
			<tbody class=" flex flex-col items-center overflow-y-auto" style={{ overflowY: 'overlay' }}>
				{

					props.users.map((user, index) => {
						let id = index;
						return (
							<Person id={id} userId={user.userId} selectedItem={selectedItem} key={user.id} index={user.id} name={user.name} firstName={user.firstName} department={user.department} plant={user.plant}/>
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

const UserList = (props) => {
	
	console.log(props.lookUpUsers)

    const selectedItem = (id) => {
        console.log(id)
    }

    return (
		<>
		{
			
			props.lookUpUsers && props.lookUpUsers.length > 0 ? (
				<Participants lookUpUsers={props.lookUpUsers} />
			) : (
				<Persons users={props.users} selectedItem={selectedItem} />
			)

			
		}
        </>
        
    )
}

export default UserList;