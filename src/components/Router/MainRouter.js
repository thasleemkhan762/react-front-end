import React from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayouts from "../AdminPanel/AdminLayouts";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="admin" element={<AdminLayouts />} />
    </Routes>
  );
};

export default MainRouter;
