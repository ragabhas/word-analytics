export default function Statistics({ stats }) {
  const {
    numberOfWords,
    numberOfCharachters,
    instagramCharachtersLeft,
    facebookCharachtersLeft,
  } = stats;
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharachters} label="Charachters" />
      <Stat number={instagramCharachtersLeft} label="Instagram" />
      <Stat number={facebookCharachtersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number >= 0 ? "" : "stat__number--limit"}`}
      >
        {number}
      </span>
      <h3 className="second-heading">{label}</h3>
    </section>
  );
}
