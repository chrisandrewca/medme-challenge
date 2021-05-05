import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  createRound,
  findMatchesForRound,
  selectRounds
} from './tournamentSlice';

import { Match } from './features/match/Match';
// import { createRound, findMatchesForRound } from './api/API';

function App() {

  // const round = createRound({ participantCount: 51 });
  // console.log({ round });

  // findMatchesForRound(round);
  // console.log({ round });

  // const round2 = createRound({ participantCount: 26 });
  // console.log({ round2 });

  // findMatchesForRound(round2);
  // console.log({ round2 });

  const dispatch = useDispatch();
  const rounds = useSelector(selectRounds);

  dispatch(createRound({ participantCount: 51 }));

  // locally applied column definitions for tournament grid
  let gridTemplateColumns = '';
  for (let i = 0; i < 2; i++) { // TODO 2 rounds
    gridTemplateColumns += '200px ';
  }

  let roundOffsets = [0];
  for (let i = 1; i < 2; i++) {
    roundOffsets.push(`${roundOffsets[i - 1] + 75}px`);
  }

  return (
    <div className="App" style={{ gridTemplateColumns }}>
      {
        rounds.map((round, i) => (
          <div className="round" style={{ border: "1px solid orange", marginTop: roundOffsets[i] }}>
            {
              round.matches.map(match => (
                <Match
                  id={match.id}
                  home={match.home}
                  away={match.away}
                  winner={match.winner}
                  onMatchWinner={handleMatchWinner}
                />))
            }
          </div>
        ))
      }
    </div>
  );
}

export default App;
