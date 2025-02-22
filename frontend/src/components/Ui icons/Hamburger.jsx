export function HamburgerIcon({ fill, classes = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      x="0"
      y="0"
      className={`inline-svg ${classes}`}
      version="1.1"
      viewBox="0 0 32 22.5"
      xmlSpace="preserve"
    >
      <g className="svg-menu-toggle">
        <path
          d="M20.945 8.75c0 .69-.5 1.25-1.117 1.25H3.141c-.617 0-1.118-.56-1.118-1.25s.5-1.25 1.118-1.25h16.688c.616 0 1.116.56 1.116 1.25zM20.923 15c0 .689-.501 1.25-1.118 1.25H3.118C2.5 16.25 2 15.689 2 15s.5-1.25 1.118-1.25h16.687c.617 0 1.118.561 1.118 1.25zM20.969 21.25c0 .689-.5 1.25-1.117 1.25H3.164c-.617 0-1.118-.561-1.118-1.25S2.546 20 3.164 20h16.688c.617 0 1.117.561 1.117 1.25z"
          className="bar"
        ></path>
        <path fill={fill || "none"} d="M0 0H80V80H0z"></path>
      </g>
    </svg>
  );
}
