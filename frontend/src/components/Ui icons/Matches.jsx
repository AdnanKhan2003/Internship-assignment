export function MatchesIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 20 18"
    >
      <path
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M10 11.917H6.25c-1.163 0-1.744 0-2.218.143a3.333 3.333 0 00-2.222 2.222c-.143.473-.143 1.055-.143 2.218M13.333 14L15 15.667l3.333-3.334m-6.25-7.083a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      ></path>
    </svg>
  );
}
