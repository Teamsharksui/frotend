'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { LayoutDarkGreenComponent } from './layout-dark-green'

const investmentData = [
  { name: 'Jan', returns: 4000, funding: 2400 },
  { name: 'Feb', returns: 3000, funding: 1398 },
  { name: 'Mar', returns: 2000, funding: 9800 },
  { name: 'Apr', returns: 2780, funding: 3908 },
  { name: 'May', returns: 1890, funding: 4800 },
  { name: 'Jun', returns: 2390, funding: 3800 },
]

const portfolioData = [
  { name: 'Agritech', value: 400 },
  { name: 'Sustainable Farming', value: 300 },
  { name: 'Organic Products', value: 300 },
  { name: 'Farm Equipment', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function InvestmentDashboardComponent() {
  return (
    <LayoutDarkGreenComponent>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Investment Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-300">Active Investments</CardTitle>
              </CardHeader>
              <CardContent>
                {['Project A', 'Project B', 'Project C'].map((project, index) => (
                  <div key={project} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-green-400">{project}</span>
                      <span className="text-green-300">{Math.floor(Math.random() * 100)}%</span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                    >
                    <Progress value={Math.floor(Math.random() * 100)} className="h-2 bg-gray-700" />
                    </motion.div>
                  </div>
                ))}
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
                <CardTitle className="text-green-300">Portfolio Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #2D3748' }}
                      labelStyle={{ color: '#68D391' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4">
                  {portfolioData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center mr-4">
                      <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-green-400 text-sm">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-300">Investment Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                  <XAxis dataKey="name" stroke="#68D391" />
                  <YAxis stroke="#68D391" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #2D3748' }}
                    labelStyle={{ color: '#68D391' }}
                  />
                  <Line type="monotone" dataKey="returns" stroke="#38A169" strokeWidth={2} animationDuration={1500} />
                  <Line type="monotone" dataKey="funding" stroke="#4299E1" strokeWidth={2} animationDuration={1500} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </LayoutDarkGreenComponent>
  )
}