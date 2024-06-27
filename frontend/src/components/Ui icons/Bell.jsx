export function BellIcon({ fill, classes }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={classes}
      fill={fill || "none"}
      viewBox="0 0 26 28"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.667 27h-5.334M21 9.667a8 8 0 10-16 0c0 4.12-1.04 6.941-2.2 8.807-.98 1.574-1.47 2.36-1.452 2.58.02.244.072.336.268.482.177.13.974.13 2.57.13h17.629c1.595 0 2.392 0 2.57-.13.195-.146.247-.239.266-.482.018-.22-.471-1.006-1.45-2.58C22.038 16.608 21 13.787 21 9.667z"
      ></path>
    </svg>
  );
}
