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
import { ThemeProvider } from "./ThemeContext";
import API from "./API";

const TraditionalRouting = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="form" element={<FormLayout />}>
            <Route index element={<FormGeneral />} />
            <Route path="controlled" element={<FormControlled />} />
            <Route path="uncontrolled" element={<FormUnControlled />} />
          </Route>
          <Route path="/" element={<Events />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/api" element={<API />} />
          <Route path="/dynamic/:id" element={<DynamicRouting />} />
          <Route path="/*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default TraditionalRouting;
