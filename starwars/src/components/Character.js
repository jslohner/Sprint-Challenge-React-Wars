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
				<p>Origin - Name:{props.character.origin.name} URL:{props.character.origin.url}</p>
				<p>Location - Name:{props.character.location.name} URL:{props.character.location.url}</p>
				{/* <p>Episodes - {props.character.episode}</p> */}
				<p>Character URL - {props.character.url}</p>
				<p>When Created - {props.character.created}</p>
			</div>
		</CharacterStyle>
	);
}


// props.character.id = key
// props.character.name
// props.character.status
// props.character.species
// props.character.type
// props.character.gender
// props.character.origin - origin.name, origin.url
// props.character.location - location.name, location.url
// props.character.image

// props.character.episode - array

// props.character.url
// props.character.created

// id: 1
// name: "Rick Sanchez"
// status: "Alive"
// species: "Human"
// type: ""
// gender: "Male"
// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
// location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
// image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// episode: (31) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
// url: "https://rickandmortyapi.com/api/character/1"
// created: "2017-11-04T18:48:46.250Z"
