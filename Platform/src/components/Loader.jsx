import React from "react";
import { Triangle } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div>
      <Triangle
        height="80"
        width="80"
        color="#A020F0"
        ariaLabel="triangle-loading"
        wrapperClass="loader"
        wrapperStyle={{
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
        visible={true}
      />
    </div>
  );
};
