import React from 'react';

class Listing extends React.Component
{
	constructor(props)
	{
		super(props)
		this.createListing=this.createListing.bind(this);
	}
	


	createListing(tasks)
	{
		return <li className="List" key={tasks.key}>
		{tasks.text}
		<input className="Checker" type="checkbox" onChange={()=>this.props.delete(tasks.key)}/>
		
		</li>
	}

	render()
	{
		const entries=this.props.entries;
		const listItems=entries.map(this.createListing)
		return(
				<ol>{listItems}
				</ol>
			)
	}
}
export default Listing