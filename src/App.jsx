import './App.css';

const assignments = [
  {
    title: "Play Analyses Video",
    type: "Quest",
    totalCards: 4,
  },
  {
    title: "Lightning Design",
    type: "Quest",
    totalCards: 6,
  },
  {
    title: "Final Game Design Challenge",
    type: "Quest",
    totalCards: 9,
  },
  {
    title: "A Slice of Everyday Life Pitch",
    type: "Quest",
    totalCards: 3,
  },
  {
    title: "In-Class Presentation",
    type: "Mission",
    totalCards: 1,
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
    title: "Blog Post",
    type: "Mission",
    totalCards: 1,
  },
  {
    title: "Design or Research Projects",
    type: "Mission",
    totalCards: 4,
  },
  {
    title: "Game Sprint",
    type: "Mission",
    totalCards: 1,
  },
];

function App() {
  // State to track earned cards for each assignment
  const [earnedCards, setEarnedCards] = React.useState(Array(assignments.length).fill(""));
  
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
    <div className="App">

      <div className="header-container">
        <h1>XP Tracker</h1>
        <p>Track your earned XP from required assignments & optional missions below!</p>
      </div>
      
      <div className="table-container">
      <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "2rem" }}>
        <thead>
          <tr>
            <th>Assignment Title</th>
            <th>Assignment Type</th>
            <th>Total Possible Cards</th>
            <th>Total Possible XP</th>
            <th>Earned Cards</th>
            <th>Earned XP</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => {
            const totalXP = assignment.totalCards * 50;
            const earned = earnedCards[index];
            const earnedXP = calcEarnedXP(earned);
            return (
              <tr key={index}>
                <td>{assignment.title}</td>
                <td>{assignment.type}</td>
                <td>{assignment.totalCards}</td>
                <td>{totalXP}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max={assignment.totalCards}
                    value={earned}
                    onChange={(e) => handleChange(index, e.target.value)}
                    style={{ width: "60px" }}
                  />
                </td>
                <td>{earnedXP}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

      <div className="results-container">
        <p>Total Earned XP: {totalEarnedXP}</p>
        <p>Total Possible XP: {totalPossibleXP}</p>
      </div>

    </div>
  );
}

export default App;
