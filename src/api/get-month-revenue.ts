import { api } from "@/lib/axios";

export interface GetMonthReceiptResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthReceiptResponse>(
    "/metrics/month-receipt"
  );

  return response.data;
}
