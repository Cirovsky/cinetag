import { BannerProvider } from "common/contexts/bannerContext";
import DefautPage from "components/DefaultPage";
import Footer from "components/Footer";
import Header from "components/Header";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {

  return (

    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DefautPage />}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
