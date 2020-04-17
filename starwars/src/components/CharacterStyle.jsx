import styled from 'styled-components';

const CharacterStyle = styled.div`
	display: flex;
	width: 20%;
	flex-flow: column;
	margin: 0 auto;
	border: 4px solid black;
	background-color: blueviolet;

	div {
		font-size: 90%;
	}

	h2 {
		margin: 0;
		font-size: 100%;
	}

	img {
		margin: 4%;
		border: 2px solid black;
	}
`

export default CharacterStyle;
