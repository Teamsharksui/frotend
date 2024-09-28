'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon, EditIcon } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const products = [
  { id: 1, name: 'Organic Apples', price: 2.99, stock: 100 },
  { id: 2, name: 'Free-range Eggs', price: 3.50, stock: 50 },
  { id: 3, name: 'Artisanal Cheese', price: 6.99, stock: 30 },
]

export function ManageProductsComponent() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const openForm = (product = null) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setEditingProduct(null)
    setIsFormOpen(false)
  }

  return (
    <LayoutDarkGreen>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-300">Manage Products</h1>
          <Button 
            onClick={() => openForm()}
            className="bg-green-600 hover:bg-green-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            <PlusIcon className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-gray-800 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-300">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-400">Price: ${product.price.toFixed(2)}</p>
                  <p className="text-green-400">Stock: {product.stock}</p>
                  <Button 
                    onClick={() => openForm(product)}
                    className="mt-4 bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <EditIcon className="mr-2 h-4 w-4" /> Edit
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900 p-6 shadow-lg overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-green-300 mb-4">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-green-400">Product Name</Label>
                  <Input id="name" defaultValue={editingProduct?.name} className="bg-gray-800 text-green-100 border-green-500" />
                </div>
                <div>
                  <Label htmlFor="price" className="text-green-400">Price</Label>
                  <Input id="price" type="number" step="0.01" defaultValue={editingProduct?.price} className="bg-gray-800 text-green-100 border-green-500" />
                </div>
                <div>
                  <Label htmlFor="stock" className="text-green-400">Stock</Label>
                  <Input id="stock" type="number" defaultValue={editingProduct?.stock} className="bg-gray-800 text-green-100 border-green-500" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button onClick={closeForm} variant="outline" className="border-green-500 text-green-300 hover:bg-green-800">
                    Cancel
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
                    {editingProduct ? 'Update' : 'Add'} Product
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutDarkGreen>
  )
}