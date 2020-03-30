import React, { useState } from "react";
import { SubContext } from "./Context";

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const searchHandle = () => {};

  return <SubContext.Provider>{children}</SubContext.Provider>;
};

export default SearchProvider;
