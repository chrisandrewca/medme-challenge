import { getRandomInt } from '../utils';

const generateParticipants = (count) => {

	const names = [
		'Chris',
		'Emma',
		'Yuhan',
		'Rui',
		'Andrew',
		'Bailey',
		'Jordan',
		'Ryan',
		'Kaylie',
		'Mona',
		'Katie',
		'John',
		'Tim',
		'Sarah',
		'Connor'
	];

	const participants = [];
	for (let i = 0; i < count; i++) {

		const nameIndex = getRandomInt(0, names.length - 1);
		participants.push(`${names[nameIndex]}-${i}`);
	}

	return participants;
};

export const createRound = ({ participantCount }) => ({
	id: 0,
	finished: false,
	finishedMatchCount: 0,
	matches: [],
	participants: generateParticipants(participantCount),
	remainingParticipants: []
});

const createMatch = ({ id, home, away }) => ({
	id,
	home,
	away,
	winner: ''
});

/*
 if there were teams...
 prior to findMatches we'd call formTeams
*/

export const findMatchesForRound = (round) => {

	// 1v1
	const participants = [
		...round.participants,
		...round.remainingParticipants,
		...round.matches.map(match => match.winner)
	];

	round.remainingParticipants = [];

	for (let i = 0; i < participants.length; i++) {

		if (i < participants.length - 1) {
			round.matches.push(
				createMatch({
					id: i + 1,
					home: participants[i++],
					away: participants[i],
				}));
		} else {
			round.remainingParticipants.push(participants[i]);
		}
	}
};

export const reportWinner = (round, matchId, winner) => {

	const match = round.matches.find(match => match.id === matchId);

	if (!match.winner) {
		round.finishedMatchCount++;
	}

	match.winner = winner;

	if (round.finishedMatchCount === round.matches.length) {

		round.finished = true;
	}
};