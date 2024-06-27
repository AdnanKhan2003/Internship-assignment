export function BagIcon({ fill, classes = "" }) {
  return (
    <svg
      fill={fill || "none"}
      className={classes}
      width="16"
      height="16"
      viewBox="0 0 22 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 19.5V5.5C7 4.57003 7 4.10504 7.10222 3.72354C7.37962 2.68827 8.18827 1.87962 9.22354 1.60222C9.60504 1.5 10.07 1.5 11 1.5C11.93 1.5 12.395 1.5 12.7765 1.60222C13.8117 1.87962 14.6204 2.68827 14.8978 3.72354C15 4.10504 15 4.57003 15 5.5V19.5M4.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V8.7C21 7.57989 21 7.01984 20.782 6.59202C20.5903 6.21569 20.2843 5.90973 19.908 5.71799C19.4802 5.5 18.9201 5.5 17.8 5.5H4.2C3.07989 5.5 2.51984 5.5 2.09202 5.71799C1.71569 5.90973 1.40973 6.21569 1.21799 6.59202C1 7.01984 1 7.57989 1 8.7V16.3C1 17.4201 1 17.9802 1.21799 18.408C1.40973 18.7843 1.71569 19.0903 2.09202 19.282C2.51984 19.5 3.0799 19.5 4.2 19.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
