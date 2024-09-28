'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SeedlingIcon, LeafIcon, TreeIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const investmentHistory = [
  { id: 1, project: 'Vertical Farming Startup', amount: 50000, date: '2023-01-15', status: 'Completed', icon: SeedlingIcon },
  { id: 2, project: 'Organic Fertilizer Production', amount: 75000, date: '2023-03-22', status: 'Ongoing', icon: LeafIcon },
  { id: 3, project: 'Smart Irrigation System', amount: 100000, date: '2023-05-10', status: 'Completed', icon: TreeIcon },
  { id: 4, project: 'Farm-to-Table Marketplace', amount: 60000, date: '2023-07-05', status: 'Ongoing', icon: LeafIcon },
  { id: 5, project: 'Precision Agriculture Drones', amount: 120000, date: '2023-09-18', status: 'Completed', icon: TreeIcon },
]

export function InvestmentHistoryComponent() {
  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Investment History</h1>

        <Card className="bg-gray-800 border-green-500">
          <CardHeader>
            <CardTitle className="text-green-300">Past Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-green-500"></div>
              {investmentHistory.map((investment, index) => (
                <motion.div
                  key={investment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8 flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white"
                  >
                    <investment.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-semibold text-green-300">{investment.project}</h3>
                    <p className="text-green-400">Amount: ${investment.amount.toLocaleString()}</p>
                    <p className="text-green-400">Date: {investment.date}</p>
                    <p className={`${
                      investment.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                    } font-semibold`}>
                      Status: {investment.status}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-300">Investment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-green-300">Total Invested</h4>
                  <p className="text-2xl font-bold text-green-400">
                    ${investmentHistory.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300">Completed Projects</h4>
                  <p className="text-2xl font-bold text-green-400">
                    {investmentHistory.filter(inv => inv.status === 'Completed').length}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300">Ongoing Projects</h4>
                  <p className="text-2xl font-bold text-green-400">
                    {investmentHistory.filter(inv => inv.status === 'Ongoing').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </LayoutDarkGreen>
  )
}