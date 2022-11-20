import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./members";
import AboutPage from "./about";
import TeamsPage from "./teams";
import HomePage from "./home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about/members" element={<MembersPage />}/>
        <Route path="/about/projects" element={<ProjectsPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/teampage" element={<TeamsPage />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
