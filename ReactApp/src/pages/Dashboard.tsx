import { Users, UserCog, Activity, TrendingUp, BarChart3, PieChart } from "lucide-react";
import StockChart from "@/components/dashboard/StockChart";
import UsersChart from "@/components/dashboard/UsersChart";
import { ChartAreaInteractive } from "@/components/dashboard/chart-bar-interactive";
import { ChartRadialMini, ChartRadialText } from "@/components/dashboard/chart-radial-text";

import { useProductsQuery } from "@/hooks/products/useProductsQuery.hook";
import { useLocalUsers } from "@/store/useLocalUsers";

export default function Dashboard() {
  const { data } = useProductsQuery(1, 10);
  const { users: localUsers } = useLocalUsers();

  const productsCount = data?.total || 0;
  const localUsersCount = localUsers.length;
  const totalItems = productsCount + localUsersCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 dark:border-gray-700/50">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">All systems operational</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Items</p>
                <p className="text-4xl font-bold mt-2">{totalItems}</p>
                <div className="flex items-center mt-3 space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+12% from last month</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">Products</p>
                <p className="text-4xl font-bold mt-2">{productsCount}</p>
                <div className="flex items-center mt-3 space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+8% from last month</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Activity className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Local Users</p>
                <p className="text-4xl font-bold mt-2">{localUsersCount}</p>
                <div className="flex items-center mt-3 space-x-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+5% from last month</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <UserCog className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stock Performance</h3>
              </div>
            </div>
            <StockChart />
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Analytics</h3>
              </div>
            </div>
            <UsersChart />
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Distribution</h3>
              </div>
            </div>
            <ChartRadialText totalItems={totalItems} productsCount={productsCount} usersCount={localUsersCount} />
          </div>
        </div>

        {/* Interactive Chart */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-indigo-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interactive Analytics</h3>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Products</span>
                <div className="w-3 h-3 bg-emerald-500 rounded-full ml-4"></div>
                <span>Users</span>
              </div>
            </div>
          </div>
          <ChartAreaInteractive productsData={data?.data || []} usersData={localUsers} />
        </div>
      </div>
    </div>
  );
}