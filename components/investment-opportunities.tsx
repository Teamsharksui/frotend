'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRightIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const opportunities = [
  { id: 1, name: 'Vertical Farming Project', description: 'Innovative urban farming solution', fundingGoal: 500000, currentFunding: 350000, category: 'Agritech' },
  { id: 2, name: 'Organic Fertilizer Production', description: 'Eco-friendly fertilizer for sustainable farming', fundingGoal: 250000, currentFunding: 100000, category: 'Sustainable Farming' },
  { id: 3, name: 'Smart Irrigation System', description: 'AI-powered water management for crops', fundingGoal: 300000, currentFunding: 200000, category: 'Agritech' },
  { id: 4, name: 'Farm-to-Table Marketplace', description: 'Direct connection between farmers and consumers', fundingGoal: 150000, currentFunding: 75000, category: 'Organic Products' },
  { id: 5, name: 'Precision Agriculture Drones', description: 'Drone technology for efficient crop monitoring', fundingGoal: 400000, currentFunding: 300000, category: 'Farm Equipment' },
  { id: 6, name: 'Sustainable Packaging Solutions', description: 'Biodegradable packaging for agricultural products', fundingGoal: 200000, currentFunding: 150000, category: 'Sustainable Farming' },
]

export function InvestmentOpportunitiesComponent() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Investment Opportunities</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              onHoverStart={() => setHoveredId(opportunity.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Card className="bg-gray-800 border-green-500 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-green-300">{opportunity.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-green-400 mb-2">{opportunity.description}</p>
                    <p className="text-green-400 mb-4">Category: {opportunity.category}</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-green-400">Funding Progress</span>
                      <span className="text-green-300">
                        ${opportunity.currentFunding.toLocaleString()} / ${opportunity.fundingGoal.toLocaleString()}
                      </span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Progress 
                        value={(opportunity.currentFunding / opportunity.fundingGoal) * 100} 
                        className="h-2 bg-gray-700" 
                        indicatorClassName="bg-green-500" 
                      />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {hoveredId === opportunity.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-500 text-white transition-all duration-300">
                          Invest Now <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </LayoutDarkGreen>
  )
}