import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";
import { Label } from "@radix-ui/react-label";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const mockData = [
  // Mock de dados para o gráfico com receita aleatória aumentando e diminuindo
  { date: "01/01/2023", receipt: 100 },
  { date: "02/01/2023", receipt: 200 },
  { date: "03/01/2023", receipt: 150 },
  { date: "04/01/2023", receipt: 350 },
  { date: "05/01/2023", receipt: 140 },
  { date: "06/01/2023", receipt: 135 },
  { date: "07/01/2023", receipt: 400 },
];

export function ReceiptChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Período</Label>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={mockData} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888888"
              tickLine={false}
              axisLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888888"
              tickLine={false}
              axisLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <CartesianGrid className="!stroke-muted" vertical={false} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="receipt"
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
