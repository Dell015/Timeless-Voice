export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        {[12, 21, 31, 22, 13, 20, 11].map((height, i) => <i key={i} style={{ height }} />)}
      </span>
      <span>Timeless <em>Voices</em></span>
    </span>
  );
}
