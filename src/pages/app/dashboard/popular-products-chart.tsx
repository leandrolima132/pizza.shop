import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { BarChart } from "lucide-react";

const mockData = [
  // Mock de dados para o gráfico com receita aleatória aumentando e diminuindo
  { product: "Calabresa", amount: 40 },
  { product: "Marguerita", amount: 45 },
  { product: "Portuguesa", amount: 45 },
  { product: "Quatro Queijos", amount: 40 },
  { product: "Frango com Catupiry", amount: 42 },
  { product: "Napolitana", amount: 42 },
  { product: "Bacon", amount: 35 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
        <CardDescription>Os 5 produtos com mais vendas</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 14 }}>
            <Pie
              data={mockData}
              dataKey={"amount"}
              nameKey={"product"}
              cx={"50%"}
              cy={"50%"}
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              fill={colors.emerald["500"]}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {mockData[index].product.length > 12
                      ? mockData[index].product.substring(0, 12).concat("...")
                      : mockData[index].product}{" "}
                    ({value})
                  </text>
                );
              }}
              labelLine={false}
            >
              {mockData.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="stroke-background hover:opacity-80"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
