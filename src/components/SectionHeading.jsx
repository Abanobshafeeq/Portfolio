function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section_heading" data-reveal>
      <p>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
