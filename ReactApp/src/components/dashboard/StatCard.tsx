import { ReactNode } from "react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  gradient?: string;
};

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendUp = true,
  gradient = "from-blue-500 to-blue-600"
}: StatCardProps) {
  return (
    <div className={`group relative overflow-hidden bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold mt-2">{value}</p>
          {trend && (
            <div className="flex items-center mt-3 space-x-1">
              {trendUp ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{trend}</span>
            </div>
          )}
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
