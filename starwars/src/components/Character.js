import React from 'react';
import CharacterStyle from './CharacterStyle.jsx';

export default function Character(props) {
	return (
		<CharacterStyle>
			<h2>{props.character.name}</h2>
			<img src={props.character.image}/>
			<div>
				<h3>Attributes</h3>
				<p>Status - {props.character.status}</p>
				<p>Species - {props.character.species}</p>
				<p>Type - {props.character.type}</p>
				<p>Gender - {props.character.gender}</p>
				<p>Origin - Name: {props.character.origin.name} URL: {props.character.origin.url}</p>
				<p>Location - Name: {props.character.location.name} URL: {props.character.location.url}</p>
				{/* <p>Episodes - {props.character.episode}</p> */}
				<p>Character URL - {props.character.url}</p>
				<p>When Created - {props.character.created}</p>
			</div>
		</CharacterStyle>
	);
}
