'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, TruckIcon, PackageIcon, DollarSignIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const orders = [
  { id: 1, product: 'Organic Apples', quantity: 50, status: 'Delivered', stages: [true, true, true, true] },
  { id: 2, product: 'Free-range Eggs', quantity: 100, status: 'Shipped', stages: [true, true, true, false] },
  { id: 3, product: 'Artisanal Cheese', quantity: 20, status: 'Processing', stages: [true, true, false, false] },
  { id: 4, product: 'Fresh Tomatoes', quantity: 75, status: 'Payment Confirmed', stages: [true, false, false, false] },
]

const stages = [
  { name: 'Payment Confirmed', icon: DollarSignIcon },
  { name: 'Processing', icon: PackageIcon },
  { name: 'Shipped', icon: TruckIcon },
  { name: 'Delivered', icon: CheckIcon },
]

export function OrderTrackingComponent() {
  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Order Tracking</h1>

        {orders.map((order, orderIndex) => (
          <motion.div
            key={order.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * orderIndex }}
          >
            <Card className="bg-gray-800 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-300">{order.product}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">Quantity: {order.quantity}</p>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-700"></div>
                  <div className="relative z-10 flex justify-between">
                    {stages.map((stage, index) => (
                      <motion.div
                        key={stage.name}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: order.stages[index] ? 1 : 0.8, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className={`flex flex-col items-center ${order.stages[index] ? 'text-green-400' : 'text-gray-500'}`}
                      >
                        <div className={`rounded-full p-2 ${order.stages[index] ? 'bg-green-600' : 'bg-gray-700'}`}>
                          <stage.icon className="h-6 w-6" />
                        </div>
                        <span className="mt-2 text-xs text-center">{stage.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-green-300 font-semibold">Status: {order.status}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </LayoutDarkGreen>
  )
}