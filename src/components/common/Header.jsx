export default function Header() {
    return (
        <header className="container-fluid pt-4 mb-0 text-center">
            <h1 className="page-heading">XP Tracker</h1>
            <h3 className="course-heading">MSTU 4039: Game Design</h3>
            <p className="app-description">
            Track your earned XP from required <span className="quests-label">Quests </span>
            & optional <span className="missions-label">Missions </span>!
            </p>
        </header>
    );
}