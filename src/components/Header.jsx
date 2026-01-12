import "./Header.css";

export default function Header({ totalTrips, totalCountries }) {
  return (
    <header className="header">
      <h1>✈️ 나의 여행 기록</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">{totalTrips ?? 0}</span>
          <span className="stat-label">여행지</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{totalCountries ?? 0}</span>
          <span className="stat-label">국가</span>
        </div>
      </div>
    </header>
  );
}
