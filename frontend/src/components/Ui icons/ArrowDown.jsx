export function ArrowDownIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 20 20"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M5 7.5l5 5 5-5"
      ></path>
    </svg>
  );
}
