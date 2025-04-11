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
        height: "100%",
        zIndex: 2,
      }}
      width="247"
      height="294"
      viewBox="0 0 247 294"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.1781 187C100.045 195 146.245 217.5 146.245 217.5L146.531 217.311C145.564 216.732 143.251 215.536 140.129 213.923C127.486 207.386 101.582 193.994 98.1781 187Z"
        fill={color}
      />
      <path
        d="M216.462 74.2065C213.493 59.2065 175.908 2.50007 131.5 2.5C74.6065 2.5 46.1435 61 39.4997 91.5C32.8559 122 68.0013 217.5 79.0005 227.5C-82.5013 276.998 60.9998 306 60.9998 306C60.9998 306 163.499 313 204 306C233.173 300.958 265.5 300 265.5 277.5C265.5 255 216.903 238 216.903 238L181 227.5L147.027 217.687C147 217.728 146.749 217.67 146.245 217.5C146.245 217.5 100.045 195 98.1781 187C94.5 181 83.389 139.584 79 101.999C75.4835 71.8852 81.7013 71.0897 88.9412 70.1635C90.7377 69.9337 92.5971 69.6958 94.3863 69C107.886 66.5 138.013 40.5 138.013 40.5C138.013 40.5 158.221 57.5 170.513 62C180.866 65.7901 189.5 65.5 192 72C198.109 87.8839 198.36 164.011 194.5 178C190.641 191.989 178.5 201.5 178.5 201.5L146.531 217.311C146.878 217.519 147.052 217.647 147.027 217.687L181 227.5L216.903 238C211.443 231.345 211.372 221.963 216.462 198.5C224.321 147 219.728 90.7065 216.462 74.2065Z"
        fill={color}
      />
      <path
        d="M98.1781 187C94.5 181 83.389 139.584 79 101.999C75.4835 71.8852 81.7013 71.0897 88.9412 70.1635C90.7377 69.9337 92.5971 69.6958 94.3863 69C107.886 66.5 138.013 40.5 138.013 40.5C138.013 40.5 158.221 57.5 170.513 62C180.866 65.7901 189.5 65.5 192 72C198.109 87.8839 198.36 164.011 194.5 178C190.641 191.989 178.5 201.5 178.5 201.5L146.531 217.311M98.1781 187C100.045 195 146.245 217.5 146.245 217.5M98.1781 187C101.582 193.994 127.486 207.386 140.129 213.923C143.251 215.536 145.564 216.732 146.531 217.311M216.903 238C216.903 238 265.5 255 265.5 277.5C265.5 300 233.173 300.958 204 306C163.499 313 60.9998 306 60.9998 306C60.9998 306 -82.5013 276.998 79.0005 227.5C68.0013 217.5 32.8559 122 39.4997 91.5C46.1435 61 74.6065 2.5 131.5 2.5C175.908 2.50007 213.493 59.2065 216.462 74.2065C219.728 90.7065 224.321 147 216.462 198.5M216.903 238L181 227.5L147.027 217.687M216.903 238C211.289 231.158 211.373 221.434 216.903 196.489C216.141 199.989 216.462 198.5 216.462 198.5M216.903 238C211.443 231.345 211.372 221.963 216.462 198.5M146.245 217.5L146.531 217.311M146.245 217.5C146.749 217.67 147 217.728 147.027 217.687M146.245 217.5L147.027 217.687M146.531 217.311C146.878 217.519 147.052 217.647 147.027 217.687"
        stroke="#000"
        strokeWidth="4"
      />
    </svg>
  );
}
