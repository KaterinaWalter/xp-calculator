import './App.css';                       // Site‑wide styles
import React, { useState } from 'react';  // React and its useState hook
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Quests (REQUIRED) & Missions (OPTIONAL)
const assignments = [
  {
    title: "Final Game Project",
    type: "Quest",
    totalCards: 9,
  },
  {
    title: "Lightning Design Challenge",
    type: "Quest",
    totalCards: 6,
  },
  {
    title: "Play Analysis Video",
    type: "Quest",
    totalCards: 4,
  },
  {
    title: "Slice of Life Pitch",
    type: "Quest",
    totalCards: 3,
  },
  {
    title: "Design or Research Projects",
    type: "Mission",
    totalCards: 4,
  },
  {
    title: "Mini Digital Game",
    type: "Mission",
    totalCards: 4,
  },
  {
    title: "Short Video",
    type: "Mission",
    totalCards: 2,
  },
  {
    title: "In-Class Presentation",
    type: "Mission",
    totalCards: 1,
  },
  {
    title: "Blog Post",
    type: "Mission",
    totalCards: 1,
  },
  {
    title: "Game Sprint",
    type: "Mission",
    totalCards: 1,
  },
];


function App() {
  // State to track earned cards for each assignment
  const [earnedCards, setEarnedCards] = useState(Array(assignments.length).fill(""));
  
  // Function to handle changes in earned cards
  const handleChange = (index, value) => {
    const updatedCards = [...earnedCards];
    updatedCards[index] = value;
    setEarnedCards(updatedCards);
  }

  // 50 XP per earned card
  const calcEarnedXP = (cards) => {
    const num = parseInt(cards, 10);
    return isNaN(num) ? 0 : num * 50;
  }

  // Calculate total earned XP
  const totalEarnedXP = earnedCards.reduce((total, cards) => total + calcEarnedXP(cards), 0);
  
  // Calculate total possible XP
  const totalPossibleXP = assignments.reduce((total, assignment) => total + (assignment.totalCards * 50), 0);
  
  return (
    <div className="App d-flex flex-column min-vh-100">
      
      <div className="main-container container-fluid">
        
        <Header />

        <div className="info-section row">
            <div className="description-container col-8">
              <p>
              Enter your <strong>earned cards</strong> from completing required <span className="quests-label">Quests </span>
              and optional <span className="missions-label">Missions</span> below to calculate your <strong>Total XP</strong> for the course!
              <em> Each card grants 50 XP.</em>
              </p>
            </div>
            <div className="results-container col-4">
              <p><span className="total-xp-label">TOTAL XP: </span>
              <span className="total-xp-value">{totalEarnedXP}</span>
              </p>
            </div>
        </div>

        <div className="tables-container row gx-3 gy-1">
          
          <div className="col-md-6">
          <table className="quests-table">
            <thead>
              <tr>
                <th><span className="quests-label">Quests</span></th>
                <th>Earned<br></br>Cards</th>
                <th>Earned<br></br>XP</th>
              </tr>
            </thead>
            <tbody>
              {assignments
                .map((assignment, index) => ({ ...assignment, index }))
                .filter((assignment) => assignment.type === "Quest")
                .map((assignment) => {
                  const totalXP = assignment.totalCards * 50;
                  const earned = earnedCards[assignment.index];
                  const earnedXP = calcEarnedXP(earned);
                  return (
                    <tr key={assignment.index}>
                      <td className="assignment-label">{assignment.title}</td>
                      <td>
                        <span className="earned-cards">
                          <input
                            type="number"
                            min="0"
                            max={assignment.totalCards}
                            value={earned}
                            onChange={(e) => handleChange(assignment.index, e.target.value)}
                          />
                        </span>
                        /<span className="total-cards">{assignment.totalCards}</span>
                      </td>
                      <td>
                        <span className="earned-xp">{earnedXP}</span>
                        /<span className="total-xp">{totalXP}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </div>
       
          <div className="col-md-6">
          <table className="missions-table">
            <thead>
              <tr>
                <th><span className="missions-label">Missions</span></th>
                <th>Earned<br></br>Cards</th>
                <th>Earned<br></br>XP</th>
              </tr>
            </thead>
            <tbody>
              {assignments
                .map((assignment, index) => ({ ...assignment, index }))
                .filter((assignment) => assignment.type === "Mission")
                .map((assignment) => {
                  const totalXP = assignment.totalCards * 50;
                  const earned = earnedCards[assignment.index];
                  const earnedXP = calcEarnedXP(earned);
                  return (
                    <tr key={assignment.index}>
                      <td className="assignment-label">{assignment.title}</td>
                      <td>
                        <span className="earned-cards">
                          <input
                            type="number"
                            min="0"
                            max={assignment.totalCards}
                            value={earned}
                            onChange={(e) => handleChange(assignment.index, e.target.value)}
                          />
                        </span>
                        /<span className="total-cards">{assignment.totalCards}</span>
                      </td>
                      <td>
                        <span className="earned-xp">{earnedXP}</span>
                        /<span className="total-xp">{totalXP}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </div>
     
        </div>

        <br></br>

      </div>

      <Footer />

    </div>
  );
}

export default App;
