import React from "react";
import ReactDOM from "react-dom";
import Signin from "../pages/signin";


it("Renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signin></Signin>, div)
});

