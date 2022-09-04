import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catolog } from "./pages/CatalogPage";
import { Home } from "./pages/HomePage";
import { Resource } from "./pages/ResourcePage";

import { Paths } from "./types/enums";

export const RouteMap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME_PAGE} element={<Home />} />
        <Route path={Paths.CATOLOG_PAGE} element={<Catolog />} />
        <Route path={Paths.RESOURCE_PAGE} element={<Resource />} />
      </Routes>
    </BrowserRouter>
  );
};
