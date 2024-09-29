'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutDarkGreenComponent } from './layout-dark-green'

const items = [
  { id: 1, name: 'North Field', type: 'Land', area: '50 acres', status: 'Available' },
  { id: 2, name: 'Tractor Model X', type: 'Equipment', details: 'Heavy Duty', status: 'Rented' },
  { id: 3, name: 'South Pasture', type: 'Land', area: '30 acres', status: 'Available' },
  { id: 4, name: 'Harvester 3000', type: 'Equipment', details: 'High Capacity', status: 'Available' },
  { id: 5, name: 'East Orchard', type: 'Land', area: '20 acres', status: 'Rented' },
  { id: 6, name: 'Irrigation System', type: 'Equipment', details: 'Smart Control', status: 'Available' },
]

export function LandEquipmentManagementComponent() {
  return (
    <LayoutDarkGreenComponent>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Land & Equipment Management</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(104, 211, 145, 0.5)' }}
            >
              <Card className="bg-gray-800 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-300">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-400 mb-2">{item.type}</p>
                  <p className="text-green-400 mb-4">
                    {item.type === 'Land' ? `Area: ${item.area}` : `Details: ${item.details}`}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <Badge 
                      className={`${
                        item.status === 'Available' ? 'bg-green-600' : 'bg-yellow-600'
                      } text-white`}
                    >
                      {item.status}
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </LayoutDarkGreenComponent>
  )
}