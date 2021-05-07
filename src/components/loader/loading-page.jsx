import React, { useEffect, useState } from "react";
import { Orbitals } from "react-spinners-css";

const gradient =
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";

export const Loading = () => {
  const [loadingValue, setLoadingValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loadingValue < 100) setLoadingValue(loadingValue + 0.02);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [loadingValue]);

  return <Orbitals color={gradient} size={900} />;
};
