import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import MainLayout from "../layouts/main-layout/MainLayout";

const AppRoutes = () => {
  const sections = [
    { id: 1, title: "Sezione 1", content: "Contenuto della sezione 1" },
    { id: 2, title: "Sezione 2", content: "Contenuto della sezione 2" },
    { id: 3, title: "Sezione 3", content: "Contenuto della sezione 3" },
  ];

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* {sections.map((section) => (
            <Route
              key={section.id}
              path={`/section/${section.id}`}
              element={
                <SectionPage title={section.title} content={section.content} />
              }
            />
          ))} */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
