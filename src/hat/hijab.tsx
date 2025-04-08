import React from "react";

export default function hatHijab(props: { color: string }): SVGElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "-4px",
        left: "14.8%",
        width: "73%",
        height: "98%",
        zIndex: 2
      }}
      width="247"
      height="294"
      viewBox="0 0 247 294"
      fill="none"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M87.1787 187C89.0454 195 135.246 217.5 135.246 217.5L135.531 217.311C134.565 216.732 132.251 215.536 129.13 213.923C116.486 207.386 90.5826 193.994 87.1787 187Z" fill={color} />
      <path d="M205.463 74.2065C202.494 59.2065 164.909 2.50007 120.501 2.5C63.6071 2.5 35.1444 61 28.5006 91.5C21.8568 122 57.0019 217.5 68.0011 227.5C-93.5007 276.998 93.5 291.5 93.5 291.5C93.5 291.5 239.001 283.998 244.501 276.998C241.001 257.998 205.904 238 205.904 238L170.001 227.5L136.027 217.687C136 217.728 135.75 217.67 135.246 217.5C135.246 217.5 89.0454 195 87.1787 187C83.5006 181 72.3896 139.584 68.0006 101.999C64.4841 71.8852 70.7019 71.0897 77.9418 70.1635C79.7382 69.9337 81.5976 69.6958 83.3868 69C96.8868 66.5 127.014 40.5 127.014 40.5C127.014 40.5 147.222 57.5 159.514 62C169.867 65.7901 178.501 65.5 181.001 72C187.11 87.8839 187.36 164.011 183.501 178C179.641 191.989 167.501 201.5 167.501 201.5L135.531 217.311C135.879 217.519 136.053 217.647 136.027 217.687L170.001 227.5L205.904 238C200.443 231.345 200.373 221.963 205.463 198.5C213.322 147 208.729 90.7065 205.463 74.2065Z" fill={color} />
      <path d="M87.1787 187C83.5006 181 72.3896 139.584 68.0006 101.999C64.4841 71.8852 70.7019 71.0897 77.9418 70.1635C79.7382 69.9337 81.5976 69.6958 83.3868 69C96.8868 66.5 127.014 40.5 127.014 40.5C127.014 40.5 147.222 57.5 159.514 62C169.867 65.7901 178.501 65.5 181.001 72C187.11 87.8839 187.36 164.011 183.501 178C179.641 191.989 167.501 201.5 167.501 201.5L135.531 217.311M87.1787 187C89.0454 195 135.246 217.5 135.246 217.5M87.1787 187C90.5826 193.994 116.486 207.386 129.13 213.923C132.251 215.536 134.565 216.732 135.531 217.311M205.904 238C205.904 238 241.001 257.998 244.501 276.998C239.001 283.998 93.5 291.5 93.5 291.5C93.5 291.5 -93.5007 276.998 68.0011 227.5C57.0019 217.5 21.8568 122 28.5006 91.5C35.1444 61 63.6071 2.5 120.501 2.5C164.909 2.50007 202.494 59.2065 205.463 74.2065C208.729 90.7065 213.322 147 205.463 198.5M205.904 238L170.001 227.5L136.027 217.687M205.904 238C200.29 231.158 200.373 221.434 205.904 196.489C205.142 199.989 205.463 198.5 205.463 198.5M205.904 238C200.443 231.345 200.373 221.963 205.463 198.5M135.246 217.5L135.531 217.311M135.246 217.5C135.75 217.67 136 217.728 136.027 217.687M135.246 217.5L136.027 217.687M135.531 217.311C135.879 217.519 136.053 217.647 136.027 217.687" stroke="#000" stroke-width="4"/>
    </svg>
  );
}
