const scripts = [
  ["Wedding welcome", "Live hosting", "Good evening, everyone. The people in this room have known our couple at different chapters of their lives. Tonight, you get to welcome them into a new one. Please rise for the newlyweds!"],
  ["Travel narration", "Voice over", "Before the city wakes, the river is already moving. Along its banks, the first boats push off and another morning begins in the valley."],
  ["Event invitation", "Promotional read", "One stage. A whole evening of local music. Gather your friends and join us when the lights come up this Saturday."],
];

export function Work() {
  return (
    <section id="work" className="wrap chapter section-split">
      <div><h2 className="display-title">Sample scripts</h2><p className="mt-4 max-w-xs text-muted">Explore three example reads while recorded demos are being prepared.</p></div>
      <div className="script-list">{scripts.map(([name, type, script]) =>
        <details key={name}><summary><span><small>{type}</small>{name}</span><span aria-hidden="true" className="expand">+</span></summary>
          <p>{script}</p></details>)}</div>
    </section>
  );
}
