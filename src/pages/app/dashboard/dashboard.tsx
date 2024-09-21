import { Helmet } from "react-helmet-async";
import { MonthReceiptCard } from "./month-receipt-card";
import { MonthOrderAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { ReceiptChart } from "./receipt-chart";
import { PopularProductsChart } from "./popular-products-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthReceiptCard />
          <MonthOrderAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <ReceiptChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
