import React from "react";
import ReactDOM from "react-dom";
import Lesson from "../components/Lesson/Lesson";
import {cleanup} from "@testing-library/react";


afterEach(cleanup);

it("Renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Lesson></Lesson>, div)
});

