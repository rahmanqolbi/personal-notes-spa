import React from "react";
import { Route, Routes } from "react-router-dom";
import NoteAppHeader from "./components/NoteAppHeader";
import HomePage from "./pages/HomePage";
import ArchivesPage from "./pages/ArchivesPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <NoteAppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
