export default function PageHeading({ eyebrow, title, description, children }) {
  return (
    <section className="pagehead">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
      </div>
      <div>
        <p className="lead">{description}</p>
        {children}
      </div>
    </section>
  );
}
