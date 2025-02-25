import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
// import FormControlled from "./FormControlled";
// import FormUnControlled from "./FormUncontrolled";
// import FormGeneral from "./FormGeneral";
// import Events from "./Events";
// import DynamicRouting from "./DynamicRouting";
// import FormLayout from "./FormLayout";
// import Header from "./Header";
// import JSX from "./Jsx";
import { ThemeProvider } from "./ThemeContext";
// import API from "./API";
// import MemoParentComponent from "./MemoParentComponent";

const FormControlled = lazy(() => import("./FormControlled"));
const FormUnControlled = lazy(() => import("./FormUnControlled"));
const FormGeneral = lazy(() => import("./FormGeneral"));
const Events = lazy(() => import("./Events"));
const DynamicRouting = lazy(() => import("./DynamicRouting"));
const FormLayout = lazy(() => import("./FormLayout"));
const Header = lazy(() => import("./Header"));
const JSX = lazy(() => import("./Jsx"));
const API = lazy(() => import("./API"));
const MemoParentComponent = lazy(() => import("./MemoParentComponent"));
const TraditionalRouting = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<h2>Loading....</h2>}>
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
            <Route path="/memocomp" element={<MemoParentComponent />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default TraditionalRouting;
