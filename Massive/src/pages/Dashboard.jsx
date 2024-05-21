import React from "react";
import Navbar from "../components/Navbar";
import HeaderDashboard from "../components/HeaderDashboard";
import Summary from "../components/Summary";
import IncomeChart from "../components/IncomeChart";
import ExpenseChart from "../components/ExpenseChart";
import Footer2 from "../components/Footer2";
import "../css/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <HeaderDashboard />
      <Summary />
      <div className="charts">
        <IncomeChart />
        <ExpenseChart />
      </div>
      <Footer2 />
    </div>
  );
}

export default Dashboard;
