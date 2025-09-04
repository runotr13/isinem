"use client";
import NextTopLoader from "nextjs-toploader";

const ProgressBar = () => {
  return (
    <NextTopLoader
      color="#013682"
      height={4}
      showSpinner={false}
      showAtBottom={false}
    />
  );
};

export default ProgressBar;
