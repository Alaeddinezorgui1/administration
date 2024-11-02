import React, { useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";
interface IProps {
  navbarComponentName: string;
}
const NavBar = (props: IProps) => {
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <div className="flex items-center max-w-full justify-between">
      <div className="container">
        <div className="input-wrap">
          <i className="fas fa-search"></i>
          <label htmlFor="product-search" id="input-label">
            {props.navbarComponentName}
          </label>
          <input
            onChange={handleInput}
            value={searchVal}
            type="text"
            name="product-search"
            id="product-search"
            placeholder="Search Products"
          />
          <i onClick={handleClearBtn} className="fas fa-times"></i>
        </div>
      </div>
      <div className="w-52">
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add {props.navbarComponentName}
        </Button>
      </div>
    </div>
  );
};
export default NavBar;
