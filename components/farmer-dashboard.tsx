'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import LayoutDarkGreen from './layout-dark-green'

const salesData = [
  { month: 'Jan', productSales: 4000, rentalIncome: 2400 },
  { month: 'Feb', productSales: 3000, rentalIncome: 1398 },
  { month: 'Mar', productSales: 2000, rentalIncome: 9800 },
  { month: 'Apr', productSales: 2780, rentalIncome: 3908 },
  { month: 'May', productSales: 1890, rentalIncome: 4800 },
  { month: 'Jun', productSales: 2390, rentalIncome: 3800 },
]

export function FarmerDashboardComponent() {
  const [earnings, setEarnings] = React.useState(0)
  const targetEarnings = 10000

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEarnings(prev => Math.min(prev + 100, targetEarnings))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Farmer Dashboard</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-300">Earnings Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-green-400">Current Earnings</span>
                  <span className="text-green-300">${earnings.toFixed(2)}</span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Progress 
                    value={(earnings / targetEarnings) * 100} 
                    className="h-2 bg-gray-700" 
                    indicatorClassName="bg-green-500" 
                  />
                </motion.div>
                <div className="text-right text-green-400">
                  Target: ${targetEarnings.toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-300">Sales and Rental Income</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                  <XAxis dataKey="month" stroke="#68D391" />
                  <YAxis stroke="#68D391" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #2D3748' }}
                    labelStyle={{ color: '#68D391' }}
                  />
                  <Line type="monotone" dataKey="productSales" stroke="#38A169" strokeWidth={2} />
                  <Line type="monotone" dataKey="rentalIncome" stroke="#4299E1" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </LayoutDarkGreen>
  )
}