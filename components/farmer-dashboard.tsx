"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, /*LeafIcon, DropletIcon, SunIcon*/ } from 'lucide-react'
import { LayoutDarkGreenComponent } from './layout-dark-green'

// ... (previous imports and code)

export function FarmerDashboardComponent() {
  return (
    <LayoutDarkGreenComponent>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-green-300 mb-8">Farmer Dashboard</h1>

          {/* Farm Performance Overview */}
          <Card className="bg-gray-800 border-green-500 mb-8">
            <CardHeader>
              <CardTitle className="text-green-300">Farm Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <ArrowUpIcon className="text-green-500 mr-2" />
                  <div>
                    <p className="text-green-300">Crop Yield</p>
                    <p className="text-2xl font-bold text-green-400">92%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ArrowDownIcon className="text-red-500 mr-2" />
                  <div>
                    <p className="text-green-300">Water Usage</p>
                    <p className="text-2xl font-bold text-green-400">-15%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUpIcon className="text-green-500 mr-2" />
                  <div>
                    <p className="text-green-300">Profit Margin</p>
                    <p className="text-2xl font-bold text-green-400">+8%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop Health Monitoring */}
          <Card className="bg-gray-800 border-green-500 mb-8">
            <CardHeader>
              <CardTitle className="text-green-300">Crop Health Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-300">Soil Nutrients</span>
                    <span className="text-green-400">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-300">Water Levels</span>
                    <span className="text-green-400">60%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-green-300">Sunlight Exposure</span>
                    <span className="text-green-400">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ... (rest of the component) */}

        </motion.div>
      </div>
    </LayoutDarkGreenComponent>
  )
}