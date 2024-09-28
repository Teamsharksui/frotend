'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, XIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const products = [
  { id: 1, name: 'Organic Apples', seller: 'Green Farms', price: 2.99, status: 'Pending' },
  { id: 2, name: 'Free-range Eggs', seller: 'Happy Hens', price: 3.50, status: 'Approved' },
  { id: 3, name: 'Artisanal Cheese', seller: 'Dairy Delights', price: 6.99, status: 'Pending' },
  { id: 4, name: 'Organic Honey', seller: 'Busy Bees', price: 8.50, status: 'Rejected' },
  { id: 5, name: 'Fresh Tomatoes', seller: 'Sunshine Farms', price: 1.99, status: 'Pending' },
  { id: 6, name: 'Grass-fed Beef', seller: 'Green Pastures', price: 12.99, status: 'Approved' },
]

export function ProductListingsManagementComponent() {
  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold text-green-300">Product Listings Management</h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-800 border-green-500 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-green-300">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-green-400">Seller: {product.seller}</p>
                    <p className="text-green-400">Price: ${product.price.toFixed(2)}</p>
                    <p className="text-green-400">Status: {product.status}</p>
                    <div className="flex justify-between mt-4">
                      <Button 
                        className="bg-green-600 hover:bg-green-500 text-white"
                        onClick={() => console.log(`Approved ${product.name}`)}
                      >
                        <CheckIcon className="mr-2 h-4 w-4" /> Approve
                      </Button>
                      <Button 
                        className="bg-red-600 hover:bg-red-500 text-white"
                        onClick={() => console.log(`Rejected ${product.name}`)}
                      >
                        <XIcon className="mr-2 h-4 w-4" /> Reject
                      </Button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </LayoutDarkGreen>
  )
}