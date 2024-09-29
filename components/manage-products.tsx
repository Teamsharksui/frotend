"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2 } from 'lucide-react'
import { LayoutDarkGreenComponent } from './layout-dark-green'

interface Product {
  id: number
  name: string
  price: number
  stock: number
}

const initialProducts: Product[] = [
  { id: 1, name: 'Organic Apples', price: 2.99, stock: 100 },
  { id: 2, name: 'Free-range Eggs', price: 3.50, stock: 50 },
  { id: 3, name: 'Artisanal Cheese', price: 6.99, stock: 30 },
]

export function ManageProductsComponent() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [newProduct, setNewProduct] = useState<Product>({ id: 0, name: '', price: 0, stock: 0 })
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const addProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }])
    setNewProduct({ id: 0, name: '', price: 0, stock: 0 })
  }

  const updateProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p))
      setEditingProduct(null)
    }
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <LayoutDarkGreenComponent>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold text-green-300 mb-8">Manage Products</h1>

        <Card className="bg-gray-800 border-green-500 mb-8">
          <CardHeader>
            <CardTitle className="text-green-300">Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="bg-gray-700 text-green-300 border-green-500"
              />
              <Input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                className="bg-gray-700 text-green-300 border-green-500"
              />
              <Input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                className="bg-gray-700 text-green-300 border-green-500"
              />
              <Button onClick={addProduct} className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-green-500">
          <CardHeader>
            <CardTitle className="text-green-300">Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-green-300">Name</TableHead>
                  <TableHead className="text-green-300">Price</TableHead>
                  <TableHead className="text-green-300">Stock</TableHead>
                  <TableHead className="text-green-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="text-green-300">{product.name}</TableCell>
                    <TableCell className="text-green-300">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-green-300">{product.stock}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              onClick={() => setEditingProduct(product)}
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-gray-800 border-green-500">
                            <DialogHeader>
                              <DialogTitle className="text-green-300">Edit Product</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <Input
                                placeholder="Product Name"
                                value={editingProduct?.name || ''}
                                onChange={(e) => setEditingProduct(prev => prev ? { ...prev, name: e.target.value } : null)}
                                className="bg-gray-700 text-green-300 border-green-500"
                              />
                              <Input
                                type="number"
                                placeholder="Price"
                                value={editingProduct?.price || 0}
                                onChange={(e) => setEditingProduct(prev => prev ? { ...prev, price: parseFloat(e.target.value) } : null)}
                                className="bg-gray-700 text-green-300 border-green-500"
                              />
                              <Input
                                type="number"
                                placeholder="Stock"
                                value={editingProduct?.stock || 0}
                                onChange={(e) => setEditingProduct(prev => prev ? { ...prev, stock: parseInt(e.target.value) } : null)}
                                className="bg-gray-700 text-green-300 border-green-500"
                              />
                              <Button onClick={updateProduct} className="bg-green-600 hover:bg-green-700 text-white">
                                Update Product
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          onClick={() => deleteProduct(product.id)}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </LayoutDarkGreenComponent>
  )
}