import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import QuickStart from './pages/Home/QuickStart';
import UnderTheHood from './pages/Home/UnderTheHood'; // Import UnderTheHood if needed
import TermsAndConditions from './components/Presets/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Presets/PrivacyPolicy'; // Import PrivacyPolicy
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
        <Routes>
        <Route path="/landingPage" element={<Welcome />} />
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/under-the-hood" element={<UnderTheHood />} />
        <Route path="/quickstart" element={<QuickStart />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    );
};

export default App;
