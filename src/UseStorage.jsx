import React, { useEffect, useState } from "react";

function useStorage(initValue) {
  const [value, setValue] = useState(initValue);

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("storage called");
    localStorage.setItem("values", value);
    sessionStorage.setItem("values", value);
  },[value]);

  return [value, handleSetValue];
}

export default useStorage;
