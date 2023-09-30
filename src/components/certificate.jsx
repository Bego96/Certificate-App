const Certificate = (props) => {
    return (
        <tr class="flex w-full border-l-[1px] border-b-[1px] border-r-[1px]">
			<td class="p-4 w-1/4">{props.supplier}</td>
			<td class="p-4 w-1/4">{props.certificateType}</td>
			<td class="p-4 w-1/4">{props.validFrom}</td>
			<td class="p-4 w-1/4">{props.validTo}</td>
		</tr>
    )
}

export default Certificate;