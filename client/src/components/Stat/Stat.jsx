import "./Stat.css";

const statsData = [
  { id: 1, num: "300+", label: "LEETCODE SOLVED" },
  { id: 2, num: "150+", label: "CODECHEF SOLVED" },
  { id: 3, num: "199", label: "CONTRIBUTIONS, LAST YR" },
  { id: 4, num: "2", label: "NPTEL CERTIFICATIONS" }
];

function Stat() {
  return (
    <section className="stats" id="stats">
      <div className="container">
        
        <div className="sec-head">
          <span className="sec-num" style={{ color: "var(--debit)" }}>/ BALANCE</span>
          <h2 className="sec-title">Running totals</h2>
        </div>

        <div className="stat-grid">
          {statsData.map((stat) => (
            <div className="stat-cell" key={stat.id}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stat;
