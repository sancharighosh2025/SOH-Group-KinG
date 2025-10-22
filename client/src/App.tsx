import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./Layout/RouteLayout";
import OrchidGallery from "./pages/OrchidGallery";
import ARChitrakola from "./pages/ARChitrakola";
import GhotiNaBangal from "./pages/GhotiNaBangal";
import GhotiMenu from "./pages/GhotiMenu";
import MadeMyDay from "./pages/MadeMyDay";
import MadeMyDayMore from "./pages/MadeMyDayMore";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import { CartProvider } from "./contexts/CartContext";
import { ToastProvider } from "./contexts/ToastContext";

// Service pages
import DecorationServices from "./pages/services/DecorationServices";
import StageDecoration from "./pages/services/StageDecoration";
import ArtistBooking from "./pages/services/ArtistBooking";
import CateringServices from "./pages/services/CateringServices";
import AVSystem from "./pages/services/AVSystem";
import ComboPackages from "./pages/services/ComboPackages";
import CustomAddons from "./pages/services/CustomAddons";
import PackageDetails from "./pages/services/PackageDetails";
import DecorationAndAVServices from "./pages/services/DecorationAndAVServices";
import LiveSketching from "./pages/services/LiveSketching";

// If these two live in components folder:
import ServiceGallery from "./component/ServiceGallery";
import DecorationDetail from "./component/DecorationDetail";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/orchid-gallery" element={<OrchidGallery />} />
          <Route path="/ar-chitrakola" element={<ARChitrakola />} />
          <Route path="/ghoti-na-bangal" element={<GhotiNaBangal />} />
          <Route path="/ghoti/menu" element={<GhotiMenu />} />
          <Route path="/made-my-day" element={<MadeMyDay />} />
          <Route path="/made-my-day/more" element={<MadeMyDayMore />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

          {/* Service routes */}
          <Route path="/services/decoration" element={<DecorationServices />} />
          <Route path="/services/decoration-and-av" element={<DecorationAndAVServices />} />
          <Route path="/services/stage-decoration" element={<StageDecoration />} />
          <Route path="/services/artist-booking" element={<ArtistBooking />} />
          <Route path="/services/catering" element={<CateringServices />} />
          <Route path="/services/av-system" element={<AVSystem />} />
          <Route path="/services/combo-packages" element={<ComboPackages />} />
          <Route path="/services/custom-addons" element={<CustomAddons />} />
          <Route path="/services/live-sketching" element={<LiveSketching />} />
          <Route path="/services/package/:packageType" element={<PackageDetails />} />

          {/* Event management landing (optional, if you use it) */}
          <Route path="/orchid/events" element={<OrchidGallery />} />

          {/* New component routes */}
          <Route path="/components/service/:slug" element={<ServiceGallery />} />
          <Route path="/components/decor/:slug" element={<DecorationDetail />} />
        </Route>
      </Routes>
    </Router>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
