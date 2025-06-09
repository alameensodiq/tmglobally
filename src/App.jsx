import React, { useState } from "react";
import "./App.css";
import { Loader } from "./Loader.jsx";
import { Route, Routes } from "react-router-dom";

const LazyIndexPage = React.lazy(() => import("../src/Component/Home"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyIndexPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
