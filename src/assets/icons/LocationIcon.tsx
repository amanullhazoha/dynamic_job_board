"use client";

const LocationIcon = () => {
  const theme = localStorage.getItem("theme");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="192"
        r="32"
        fill={theme === "light" ? "#000" : "#fff"}
      />
      <path
        fill={theme === "light" ? "#000" : "#fff"}
        d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"
      />
    </svg>
  );
};

export default LocationIcon;
