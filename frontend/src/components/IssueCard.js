function IssueCard({ issue, onResolve }) {
  return (
    <div className="card">
      <b>{issue.category}</b> | {issue.priority} | {issue.status}
      <br />
      {issue.description}

      {onResolve && (
        <button onClick={() => onResolve(issue.id)}>Resolve</button>
      )}
    </div>
  );
}

export default IssueCard;
