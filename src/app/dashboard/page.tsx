import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui"

const stats = [
  { label: "전체 사용자", value: "1,204" },
  { label: "오늘 방문자", value: "342" },
  { label: "전환율", value: "4.8%" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">대시보드 개요</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </div>
  )
}
