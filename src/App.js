import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import ResourcePage from "./pages/Resource/ResourcePage";
import CompetitorAnalysis from "./pages/Features/CompetitorAnalysis";
import SalesAnalysis from "./pages/Features/SalesAnalysis";
import ContactUs from "./pages/contact/ContactUs";
import GotoTopButton from "./components/goToTopButton/GotoTopButton";
// import IndividualBlog from "./pages/IndividualBlog/IndividualBlog";
import UnveilingCustomer from "./pages/IndividualBlog/unveilingCustomer/UnveilingCustomer";
import LeverageSalesAnalysis from "./pages/IndividualBlog/leverageSalesAnalysis/LeverageSalesAnalysis";
import DynamicRetailPrice from "./pages/IndividualBlog/dynamicRetailPrice/DynamicRetailPrice";
import SalesStockAnalysis from "./pages/IndividualBlog/salesStockAnalysis/SalesStockAnalysis";
import AwardWinning from "./pages/IndividualBlog/awardWinning/AwardWinning";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/errorPage/ErrorPage";
import HomePage from "./pages/home/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcePage />} />

        <Route path="/unveiling-customer-insights-market-basket-analysis" element={<UnveilingCustomer />} />
        <Route path="/leveraging-sales-analysis-and-competitor-price-index-for-business-growth" element={<LeverageSalesAnalysis />} />
        <Route path="/dynamics-of-retail-price-index-and-consumer-price" element={<DynamicRetailPrice />} />
        <Route path="/sales-and-stocks-analysis" element={<SalesStockAnalysis />} />
        <Route path="/award-winning-company-orbio-solutions" element={<AwardWinning />} />

        <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route path="/sales-analysis" element={<SalesAnalysis />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <GotoTopButton />
    </div>
  );
}

export default App;
