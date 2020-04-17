import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {

	const proxy = 'https://cors-anywhere.herokuapp.com';
	const url = 'https://rickandmortyapi.com/api';
	const targetData = 'character';

	const [characterData, setCharacterData] = useState([]);
	const [currentCharacter, setCurrentCharacter] = useState('');

	useEffect(() => {
		axios.get(`${proxy}/${url}/${targetData}/`)
			.then(res => {
				setCharacterData(res.data.results);
			})
			.catch(err => {
				console.log('error');
			})
	}, [])

	console.log(characterData);

	if(!characterData) {
		return (
			<h3>Data Loading</h3>
		);
	}

	return (
		<div className='App'>
			<h1 className='Header'>Characters</h1>
			<div className='AppContainer'>
				{
					characterData.map(character => {
						return <Character key={character.id} character={character}/>
					})
				}
			</div>
		</div>
	);
}

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

// https://swapi.py4e.com/api/people/
