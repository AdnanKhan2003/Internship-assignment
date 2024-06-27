export default function LabelButton({ children, classes = "" }) {
  return (
    <p className={classes}>
      <span>{children}</span>
    </p>
  );
}
