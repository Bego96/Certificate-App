import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Certificate from "./certificate";
import NewCertificate from "./newCertificate";
import CertificateEdit from "./certificateEdit";

const CertificateOverview = () => {

	const [openEditForm, setOpenEditForm] = useState([false, 0]);
	
	const [certificates, setCertificates] = useState([
		{	
			id: 1,
			supplier: "ANDEMIS GmbH 1, Stuttgart",
			certificateType: "CCC certificate",
			validFrom: "15.08.2017.",
			validTo: "20.08.2017"
		},
		{
			id: 2,
			supplier: "DAMLER AG 1, Berlin",
			certificateType: "Permission of Printing",
			validFrom: "21.08.2017.",
			validTo: "26.08.2017"
		},
		{
			id: 3,
			supplier: "ANDEMIS GmbH 1, Stuttgart",
			certificateType: "OHSAS 18001",
			validFrom: "18.08.2017.",
			validTo: "24.08.2017"
		},
	])


	const deleteRecord = (id) => {
		setCertificates((prevCertificates) => {
			return prevCertificates.filter((certificate) => certificate.id !== id);
		  });
	}

	const EditRecordForm = (props) => {
		console.log(props.recordId)
		return (
			<CertificateEdit recordId={props.recordId} closeEdit={props.closeEdit}/>
		)
	}

	const openEdit = (id) => {
		const editingForm = [true, id]
		
		setOpenEditForm(editingForm);
		console.log(openEditForm[0])
		console.log("Im from props" + openEditForm[1])
		console.log("Im assigned from props " + openEditForm[1]);
	}

	const closeEdit = (close) => {
		setOpenEditForm([false, ...openEditForm])
	}

	console.log("Im assigned!" + openEditForm[1])

    return (
        
		<div class="w-[100%] relative">
			{
				openEditForm[0] ? <EditRecordForm recordId={openEditForm[1]} closeEdit={closeEdit}/> : null
			}
			<Link to="/New-certificate"><button type="button" className="py-2 px-4 bg-green-400 text-white mb-2">New certificate</button></Link>
			<table class="text-slate-600 block text-left w-[100%] overflow-x-auto">
				<thead class=" flex w-full border-[1px]">
					<tr class="flex w-full ">
						<th class="p-2	mobile:p-4	mobile:w-10"></th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Supplier</th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Certificate type</th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Valid from</th>
						<th class="p-2	mobile:p-4	mobile:w-1/4">Valid to</th>
					</tr>
				</thead>
		
				<tbody class=" flex flex-col items-center overflow-y-auto h-[50vh]" style={{ overflowY: 'overlay' }}>
					{
						certificates.map((certificate) => {
							return (
								<Certificate certificates={certificates} openEdit={openEdit} deleteRecord={deleteRecord} id={certificate.id} key={certificate.id} supplier={certificate.supplier} certificateType={certificate.certificateType} validFrom={certificate.validFrom} validTo={certificate.validTo}/>
							)
						})
					}
				</tbody>
			</table>
		</div>
    )
}

export default CertificateOverview;