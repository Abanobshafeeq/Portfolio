// Static grid and reveal layers keep scroll, filtering, and hover transforms apart.
function MotionCard({ className, wrapperClass = '', children, ...props }) {
  return (
    <div className={'motion-card ' + wrapperClass} {...props}>
      <div className="motion-card_reveal">
        <article className={className}>{children}</article>
      </div>
    </div>
  );
}

export default MotionCard;
