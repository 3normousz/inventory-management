"use client";
import CardPopularProducts from "./cardPopularProducts";
import CardSalesSummary from "./cardSalesSummary";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardExpenseSummary from "./cardExpenseSummary";
import StatCard from "./statCard";
import { Package, TrendingDown, TrendingUp } from "lucide-react";

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
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500"></div>
    </div>
  );
};

export default Dashboard;
