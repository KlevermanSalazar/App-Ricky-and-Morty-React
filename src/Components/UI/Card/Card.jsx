import React from 'react';
import './Card.css'

export const Card = ({ character }) => {
	return (
		<div className='card'>
			<figure>
				<img src={character.image} alt={character.name} title={character.name} className='card__image' />
			</figure>
			<div>
				<h2>{character.name}</h2>
        <p>{character.status}</p>
				<p>
					{character.species} - {character.gender}
				</p>
			</div>
		</div>
	)
}