// The grid item stays still for ScrollTrigger; its child reveals independently
// of the article's existing hover and focus transforms.
function MotionCard({ className, children }) {
  return (
    <div className="motion-card">
      <div className="motion-card_reveal">
        <article className={className}>{children}</article>
      </div>
    </div>
  );
}

export default MotionCard;
