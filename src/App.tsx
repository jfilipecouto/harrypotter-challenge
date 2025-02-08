import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layout/Layout";
import { ConfigProvider } from "antd";

const AllCharacters = lazy(() => import("./pages/AllCharacters/AllCharacters"));
const Students = lazy(() => import("./pages/Students/Students"));
const Staff = lazy(() => import("./pages/Staff/Staff"));
const CharacterDetails = lazy(() => import("./pages/Character/Character"));

const App: React.FC = () => {
  const themeConfig = {
    token: {
      fontFamily: "HarryP, serif",
    },
  };
  return (
    <Router>
      <ConfigProvider theme={themeConfig}>
        <Layout>
          <Routes>
            <Route path="/" element={<AllCharacters />} />
            <Route path="/students" element={<Students />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </Layout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
