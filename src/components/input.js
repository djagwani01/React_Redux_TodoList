import React from 'react'

const Input = (props) => {
	return(
			<input 
      		type="text" 
      		placeholder="Enter Items"
      		onChange={props.onHandleChange} />
		  )
}

export default Input