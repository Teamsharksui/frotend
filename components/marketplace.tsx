"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon, MenuIcon, XIcon, PlusIcon } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard-p' },
  { name: 'Lands', icon: MapIcon, href: '/lands' },
  { name: 'Marketplace', icon: ShoppingCartIcon, href: '/marketplace' },
  { name: 'Wallet', icon: WalletIcon, href: '/wallet' },
  { name: 'Settings', icon: SettingsIcon, href: '/settings' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
]

interface Product {
  id: number
  name: string
  price: number
  unit: string
  image: string
  description: string
}

const initialProducts: Product[] = [
  { id: 1, name: 'Organic Apples', price: 50, unit: 'kg', image: '/placeholder.svg?height=100&width=100', description: 'Fresh, organic apples from local orchards.' },
  { id: 2, name: 'Fresh Eggs', price: 30, unit: 'dozen', image: '/placeholder.svg?height=100&width=100', description: 'Free-range eggs from happy chickens.' },
  { id: 3, name: 'Grass-fed Beef', price: 200, unit: 'kg', image: '/placeholder.svg?height=100&width=100', description: 'Premium grass-fed beef from local farms.' },
  { id: 4, name: 'Organic Tomatoes', price: 40, unit: 'kg', image: '/placeholder.svg?height=100&width=100', description: 'Juicy, organic tomatoes grown without pesticides.' },
]

export function Marketplace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({ name: '', price: 0, unit: '', image: '/placeholder.svg?height=100&width=100', description: '' })
  // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)


  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
  }


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleAddProduct = () => {
    const id = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1
    setProducts([...products, { id, ...newProduct }])
    setNewProduct({ name: '', price: 0, unit: '', image: '/placeholder.svg?height=100&width=100', description: '' })
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/landing-page-dark" className="text-2xl font-bold text-green-400">ACTIV-B</Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="text-green-300 hover:text-green-100 hover:bg-gray-700">
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-300">{user.name}</span>
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button onClick={toggleSidebar} className="md:hidden text-green-300">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-gray-800 p-4 z-50 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold text-green-400">Menu</span>
              <Button onClick={toggleSidebar} className="text-green-300">
                <XIcon className="h-6 w-6" />
              </Button>
            </div>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="w-full text-left text-green-300 hover:text-green-100 hover:bg-gray-700 mb-2">
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-300 mb-6"
        >
          Agricultural Marketplace
        </motion.h1>

        {/* Add Product Button */}
        <div className="mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <PlusIcon className="h-5 w-5 mr-2" />
                List New Product
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-green-300 border-green-500">
              <DialogHeader>
                <DialogTitle>List New Product</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price (SUI)
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                    className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="unit" className="text-right">
                    Unit
                  </Label>
                  <Input
                    id="unit"
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                    className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                  />
                </div>
              </div>
              <Button onClick={handleAddProduct} className="w-full bg-green-600 hover:bg-green-700 text-white">
                Add Product
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-gray-800 border-green-700 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-green-300">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                      <p className="text-green-300 mb-2">Price: {product.price} SUI/{product.unit}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 text-green-300 border-green-500">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
                    <p className="text-green-300 mb-2">Price: {product.price} SUI/{product.unit}</p>
                    <p className="text-green-300 mb-4">{product.description}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 ACTIV-B Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}