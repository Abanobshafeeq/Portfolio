function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section_heading">
      {eyebrow && <p>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      <span className="section_underline" aria-hidden="true" />
    </div>
  );
}

export default SectionHeading;
