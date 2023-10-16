import React, { useEffect, useState } from "react";

const UseFetchData = (url) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);
  return [value];
};

export default UseFetchData;
