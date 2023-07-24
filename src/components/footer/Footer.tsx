import React from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <footer>
      <p>© 2021 - All rights reserved</p>
      <FormControlLabel
        control={
          <Switch
            name="gilad"
            onChange={() =>
              dispatch({
                type: "mode/toggleMode",
              })
            }
          />
        }
        label="Gilad Gray"
      />
    </footer>
  );
};

export default Footer;
