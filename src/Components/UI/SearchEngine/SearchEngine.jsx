import React from 'react';
import './SearchEngine.css';

export const SearchEngine = ({ filter, setFilter }) => {
	const handleInput = (e) => {
		setFilter(e.target.value)
	}

	return (
		<div className='filter'>
			<input
				type='text'
				placeholder='Enter name character'
				autoFocus={true}
				onChange={handleInput}
				value={filter}
			/>
		</div>
	)
}