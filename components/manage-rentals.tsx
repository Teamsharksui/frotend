'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FilterIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const rentals = [
  { id: 1, type: 'Land', name: 'North Field', area: '50 acres', status: 'Active', endDate: '2023-12-31' },
  { id: 2, type: 'Equipment', name: 'Tractor Model X', details: 'Heavy Duty', status: 'Returned', endDate: '2023-10-15' },
  { id: 3, type: 'Land', name: 'South Pasture', area: '30 acres', status: 'Pending', endDate: '2024-03-01' },
  { id: 4, type: 'Equipment', name: 'Harvester 3000', details: 'High Capacity', status: 'Active', endDate: '2023-11-30' },
]

export function ManageRentalsComponent() {
  const [filter, setFilter] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredRentals = filter === 'All' ? rentals : rentals.filter(rental => rental.type === filter)

  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-300">Manage Rentals</h1>
          <Button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-green-600 hover:bg-green-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            <FilterIcon className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Card className="bg-gray-800 border-green-500 mb-4">
                <CardContent className="pt-6">
                  <div className="flex space-x-2">
                    {['All', 'Land', 'Equipment'].map((option) => (
                      <Button
                        key={option}
                        onClick={() => setFilter(option)}
                        variant={filter === option ? 'default' : 'outline'}
                        className={`${
                          filter === option 
                            ? 'bg-green-600 hover:bg-green-500 text-white' 
                            : 'border-green-500 text-green-300 hover:bg-green-800'
                        } transition-all duration-300`}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRentals.map((rental) => (
            <motion.div
              key={rental.id}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-300">{rental.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-400">{rental.type}</p>
                  <p className="text-green-400">{rental.type === 'Land' ? `Area: ${rental.area}` : `Details: ${rental.details}`}</p>
                  <p className="text-green-400">End Date: {rental.endDate}</p>
                  <div className="mt-4">
                    <Badge 
                      className={`${
                        rental.status === 'Active' ? 'bg-green-600' :
                        rental.status === 'Pending' ? 'bg-yellow-600' :
                        'bg-red-600'
                      } text-white`}
                    >
                      {rental.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </LayoutDarkGreen>
  )
}