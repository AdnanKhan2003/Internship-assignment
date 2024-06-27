export function CoinsIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 24 25"
    >
      <path
        stroke="#5D5D5D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M13 5.5c0 1.105-2.462 2-5.5 2S2 6.605 2 5.5m11 0c0-1.105-2.462-2-5.5-2S2 4.395 2 5.5m11 0V7M2 5.5v12c0 1.105 2.462 2 5.5 2m0-8c-.169 0-.335-.003-.5-.008-2.803-.092-5-.949-5-1.992m5.5 6c-3.038 0-5.5-.895-5.5-2M22 12c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0v7.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2V12m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2"
      ></path>
    </svg>
  );
}
