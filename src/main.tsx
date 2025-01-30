import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { App } from "./App";
import { AboutRoute } from "./routes/about";
import { LayoutRoute } from "./routes/layout";
import { TaskRoute } from "./routes/task";
import { NotFoundRoute } from "./routes/not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route index path="/" element={<App />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/tasks/:id" element={<TaskRoute />} />
          <Route path="/*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
