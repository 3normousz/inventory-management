"use client";
import CardPopularProducts from "./cardPopularProducts";
import CardSalesSummary from "./cardSalesSummary";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardExpenseSummary from "./cardExpenseSummary";
import StatCard from "./statCard";
import {
  CheckCircle,
  DollarSignIcon,
  Package,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 Oct 2023"
        details={[
          {
            title: "Total Customers",
            amount: "1,200",
            changePercentage: 30,
            IconComponent: TrendingUp,
          },
          {
            title: "Total Expenses",
            amount: "$2,000",
            changePercentage: 20,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Due & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 Oct 2023"
        details={[
          {
            title: "Due Orders",
            amount: "50",
            changePercentage: 30,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "20",
            changePercentage: 20,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Today Sales & Revenue"
        primaryIcon={<DollarSignIcon className="text-blue-600 w-6 h-6" />}
        dateRange=""
        details={[
          {
            title: "Today Sales",
            amount: "10",
            changePercentage: 30,
            IconComponent: TrendingUp,
          },
          {
            title: "Today Revenue",
            amount: "$10,000",
            changePercentage: 20,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
