import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Pricing from "../screens/Pricing";
import ContactUs from "../screens/ContactUs";
import Portfolio from "../screens/Portfolio";
import Blogs from "../screens/Blogs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TermsAndConditions from "../screens/TermsAndConditions";

// Services Pages
import Services from "../screens/Services";
import WebDesign from "../screens/Services/WebDesign";
import CMSDevelopment from "../screens/Services/CMSDevelopment";
import DigitalMarketing from "../screens/Services/DigitalMarketing";
import SocialMediaMarketing from "../screens/Services/SocialMediaMarketing";
import SEO from "../screens/Services/SEO";
import CustomDevelopment from "../screens/Services/CustomDevelopment";
import MobileAppDevelopment from "../screens/Services/MobileAppDevelopment";
import LogoDesign from "../screens/Services/LogoDesign";
import CategoryBlogs from "../screens/CategoryBlogs";
import BlogDetail from "../screens/BlogDetail";

// Import your components/pages

const AppRouter = () => {
  return (
    // <Router basename="/united-revamp">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Services Pages Start */}
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/cms-development" element={<CMSDevelopment />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/services/search-engine-optimization" element={<SEO />} />
        <Route
          path="/services/custom-development"
          element={<CustomDevelopment />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        {/* Services Pages End */}

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Blogs Start */}
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route
          path="/blog/category/:categorySlug"
          element={<CategoryBlogs />}
        />
        {/* Blogs Start */}

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
