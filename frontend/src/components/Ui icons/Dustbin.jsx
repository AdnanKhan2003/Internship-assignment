export function DustbinIcon({ fill, classes = "" }) {
  return (
    <svg
      className={classes}
      fill={fill || "none"}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.5H11M1 3H16M14.3333 3L13.7489 11.7661C13.6612 13.0813 13.6174 13.7389 13.3333 14.2375C13.0833 14.6765 12.706 15.0294 12.2514 15.2497C11.735 15.5 11.0759 15.5 9.75779 15.5H7.24221C5.92409 15.5 5.26503 15.5 4.74861 15.2497C4.29396 15.0294 3.91674 14.6765 3.66665 14.2375C3.38259 13.7389 3.33875 13.0813 3.25107 11.7661L2.66667 3M6.83333 6.75V10.9167M10.1667 6.75V10.9167"
        stroke="#DC4A2D"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
