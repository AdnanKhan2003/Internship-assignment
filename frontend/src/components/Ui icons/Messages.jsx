export function MessagesIcon({ fill, classes = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 18 18"
    >
      <path
        stroke="#4F4F4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        d="M1.5 5.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C3.4 1.5 4.1 1.5 5.5 1.5h7c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093C16.5 3.4 16.5 4.1 16.5 5.5V10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092C14.6 14 13.9 14 12.5 14H7.07c-.52 0-.78 0-1.029.051a2.5 2.5 0 00-.635.223c-.226.115-.429.278-.835.603l-1.988 1.59c-.347.277-.52.416-.666.416a.417.417 0 01-.326-.157c-.091-.114-.091-.336-.091-.78V5.5z"
      ></path>
    </svg>
  );
}
