export function EyeIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 18 14"
    >
      <path
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M1.017 7.594c-.114-.18-.17-.27-.202-.408a.977.977 0 010-.372c.032-.139.088-.229.202-.408.938-1.485 3.73-5.24 7.983-5.24 4.255 0 7.046 3.755 7.984 5.24.113.18.17.27.202.408a.976.976 0 010 .372c-.032.139-.089.229-.202.408-.938 1.485-3.73 5.24-7.984 5.24s-7.045-3.755-7.983-5.24z"
      ></path>
      <path
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M9 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
    </svg>
  );
}
