export function LocationIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 18 23"
    >
      <path
        stroke="#5D5D5D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12.5a3 3 0 100-6 3 3 0 000 6z"
      ></path>
      <path
        stroke="#5D5D5D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 21.5c4-4 8-7.582 8-12a8 8 0 10-16 0c0 4.418 4 8 8 12z"
      ></path>
    </svg>
  );
}
