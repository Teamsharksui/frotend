'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import LayoutDarkGreen from './layout-dark-green'

const initialData = [
  { name: 'Jan', earnings: 4000, returns: 2400 },
  { name: 'Feb', earnings: 3000, returns: 1398 },
  { name: 'Mar', earnings: 2000, returns: 9800 },
  { name: 'Apr', earnings: 2780, returns: 3908 },
  { name: 'May', earnings: 1890, returns: 4800 },
  { name: 'Jun', earnings: 2390, returns: 3800 },
]

export function PortfolioTrackingComponent() {
  const [data, setData] = useState(initialData)
  const [timeframe, setTimeframe] = useState('1M')

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData]
        newData[newData.length - 1] = {
          ...newData[newData.length - 1],
          earnings: newData[newData.length - 1].earnings + Math.floor(Math.random() * 1000 - 500),
          returns: newData[newData.length - 1].returns + Math.floor(Math.random() * 1000 - 500),
        }
        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe)
    // In a real application, you would fetch new data based on the timeframe
    // For this example, we'll just randomize the existing data
    setData(currentData => 
      currentData.map(item => ({
        ...item,
        earnings: Math.floor(Math.random() * 10000),
        returns: Math.floor(Math.random() * 5000),
      }))
    )
  }

  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Portfolio Tracking</h1>

        <Card className="bg-gray-800 border-green-500">
          <CardHeader>
            <CardTitle className="text-green-300">Earnings and Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-end space-x-2">
              {['1M', '3M', '6M', '1Y', 'All'].map((tf) => (
                <Button
                  key={tf}
                  onClick={() => handleTimeframeChange(tf)}
                  variant={timeframe === tf ? 'default' : 'outline'}
                  className={`${
                    timeframe === tf 
                      ? 'bg-green-600 hover:bg-green-500 text-white' 
                      : 'border-green-500 text-green-300 hover:bg-green-800'
                  } transition-all duration-300`}
                >
                  {tf}
                </Button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#68D391" />
                <YAxis stroke="#68D391" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #2D3748' }}
                  labelStyle={{ color: '#68D391' }}
                />
                <Area type="monotone" dataKey="earnings" stroke="#38A169" fill="#38A16966" strokeWidth={2} animationDuration={1500} />
                <Area type="monotone" dataKey="returns" stroke="#4299E1" fill="#4299E166" strokeWidth={2} animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-300">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-300">
                  ${data.reduce((sum, item) => sum + item.earnings, 0).toLocaleString()}
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
                <CardTitle className="text-green-300">Total Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-300">
                  ${data.reduce((sum, item) => sum + item.returns, 0).toLocaleString()}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </LayoutDarkGreen>
  )
}