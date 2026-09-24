const windowTitles = {
  dashboard: "atlas / overview",
  studio: "northwind.studio",
  tasks: "taskflow / workspace",
};

function DashboardPreview() {
  return (
    <div className="mock-dashboard">
      <div className="mock-sidebar">a.<b /><b /><b /></div>
      <div className="mock-dashboard-main">
        <span>Overview</span>
        <div className="mock-stats">
          <b>24.8k<small>Visitors</small></b>
          <b>1,482<small>Orders</small></b>
          <b>+18.6%<small>Growth</small></b>
        </div>
        <div className="mock-chart">
          {[32, 48, 39, 61, 46, 74, 63, 85, 72, 96, 83, 110].map((height, i) => (
            <i key={i} style={{ height }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StudioPreview() {
  return (
    <div className="mock-studio">
      <span>INDEPENDENT CREATIVE STUDIO</span>
      <strong>Ideas into<br /><em>experiences.</em></strong>
      <div className="studio-orbit" />
      <small>Strategy. Design. Digital. ↗</small>
    </div>
  );
}

function TasksPreview() {
  const taskNames = ["Design system", "API integration", "New components"];

  return (
    <div className="mock-board">
      {["To do", "In progress", "Done"].map((label, i) => (
        <div key={label}>
          <span><i />{label}</span>
          {Array.from({ length: i === 1 ? 2 : 3 }, (_, j) => (
            <div className="mock-task" key={j}>
              <b />
              <p>{taskNames[(i + j) % taskNames.length]}</p>
              <small />
              <em>AM</em>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ProjectPreview({ type }) {
  return (
    <div className={`project-preview ${type}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-toolbar"><i /><i /><i /><span>{windowTitles[type]}</span></div>
        {type === "dashboard" && <DashboardPreview />}
        {type === "studio" && <StudioPreview />}
        {type === "tasks" && <TasksPreview />}
      </div>
    </div>
  );
}
