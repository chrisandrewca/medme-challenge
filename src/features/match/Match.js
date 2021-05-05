import { useState } from 'react';
import styles from './Match.module.css';

export const Match = ({ id, home, away, winner }) => {

	// remove after propagate to state store
	const [matchWinner, setMatchWinner] = useState(winner);

	const handleWinner = (e, id) => {

		console.log({ winnerIs: e.target.value, id });

		if (!e.target.value) return;

		setMatchWinner(e.target.value);
		// propagate w/ id
		// dispatch() via useDispatch()
	};

	return (
		<div id={id} className={styles.match}>
			<p>Home: {home}</p>
			<p>Away: {away}</p>
			<p>Winner: {winner ? winner : 'In-Progress'}</p>
			<select onChange={(e) => handleWinner(e, id)}>
				<option>Undecided</option>
				<option value={home}>{home}</option>
				<option value={away}>{away}</option>
			</select>
		</div>
	);
};