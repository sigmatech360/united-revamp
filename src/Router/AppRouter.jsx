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
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../screens/NotFound";
import WordpressDevelopmentFlorida from "../screens/locationpages/WordpressDevelopmentFlorida";
import AppDevelopmentFlorida from "../screens/locationpages/AppDevelopmentFlorida";
import WordpressDevelopment from "../screens/Services/WordpressDevelopment";
import EcommerceDevelopment from "../screens/Services/EcommerceDevelopment";
import Frontenddevelopment from "../screens/Services/Frontenddevelopment";
import BackendDevelopment from "../screens/Services/BackendDevelopment";
import DomainRegisteration from "../screens/Services/DomainRegisteration";
import DomainTransfer from "../screens/Services/DomainTransfer";
import ReactDevelopmentFlorida from "../screens/locationpages/ReactDevelopmentFlorida";
import WebAppDevelopment from "../screens/Services/WebAppDevelopment";
import BrandStrategy from "../screens/Services/BrandStrategy";
import BrandVoice from "../screens/Services/BrandVoice";
import EcommerceDevelopmentFlorida from "../screens/locationpages/EcommerceDevelopmentFlorida";
import DomainRegisterationFlorida from "../screens/locationpages/DomainRegisterationFlorida";
import LogoDesignNew from "../screens/Services/LogoDesignNew";
import WebDesignNew from "../screens/Services/WebDesignNew";

// Import your components/pages

const AppRouter = () => {
  return (
    // <Router basename="/united-revamp">
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Services Pages Start */}


        {/* CMS Development & Inner Pages */}
        <Route path="/cms-development" element={<CMSDevelopment />} />
        <Route path="/wordpress-development" element={<WordpressDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />



        <Route path="/digital-marketing" element={<DigitalMarketing />}/>
        <Route
          path="/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/search-engine-optimization" element={<SEO />} />


        {/* Custom Development & Inner Pages */}
        <Route path="/custom-development" element={<CustomDevelopment />}/>
        <Route path="/frontend-development" element={<Frontenddevelopment />}/>
        <Route path="/backend-development" element={<BackendDevelopment />}/>


        <Route path="/mobile-app-development" element={<MobileAppDevelopment />}/>
        <Route path="/web-app-development" element={<WebAppDevelopment />}/>


        {/* Hosting & Domain Inner Pages */}
        <Route path="/domain-registeration" element={<DomainRegisteration />} />
        <Route path="/domain-transfer" element={<DomainTransfer />} />


        {/* Branding Inner Pages */}
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/brand-voice" element={<BrandVoice />} />



        {/* <Route path="/logo-design" element={<LogoDesign />} /> */}
        {/* <Route path="/web-design" element={<WebDesign />} /> */}
        <Route path="/logo-design" element={<LogoDesignNew />} />
        <Route path="/web-design" element={<WebDesignNew />} />


        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />


        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route
          path="/blog/category/:categorySlug"
          element={<CategoryBlogs />}
        />


        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />


        {/* Location Pages Start */}
        <Route path="/app-development-florida" element={<AppDevelopmentFlorida />} />
        <Route path="/wordpress-development-florida" element={<WordpressDevelopmentFlorida />} />
        <Route path="/react-development-florida" element={<ReactDevelopmentFlorida />} />
        <Route path="/ecommerce-development-florida" element={<EcommerceDevelopmentFlorida />} />
        <Route path="/domain-registeration-florida" element={<DomainRegisterationFlorida />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
