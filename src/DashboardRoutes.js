import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Deposit from "./pages/deposit";
import History from "./pages/history";
import Investments from "./pages/investments";
import Referrals from "./pages/referrals";
import Settings from "./pages/settings";
import Withdraw from "./pages/withdraw";

const DashboardRoutes = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/referral" element={<Referrals />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default DashboardRoutes;
