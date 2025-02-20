import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import FormControlled from "./FormControlled";
import FormUnControlled from "./FormUncontrolled";
import FormGeneral from "./FormGeneral";
import Events from "./Events";
import DynamicRouting from "./DynamicRouting";
import FormLayout from "./FormLayout";
import Header from "./Header";
import JSX from "./Jsx";

const TraditionalRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
        <Route path="form" element={<FormLayout />}>
          <Route index element={<FormControlled />} />
          <Route path="controlled" element={<FormControlled />} />
          <Route path="uncontrolled" element={<FormUnControlled />} />
          <Route path="generalform" element={<FormGeneral />} />
        </Route>

        <Route path="/" element={<Events />} />
        <Route path="/jsx" element={<JSX />} />
        <Route path="/dynamic/:id" element={<DynamicRouting />} />
        <Route path="/*" element={<h1>not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default TraditionalRouting;
