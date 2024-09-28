"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, MessageCircle, Tractor, Sprout, DollarSign, User } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const products = [
  { id: 1, name: 'Organic Apples', price: 2.99, seller: 'Green Farms', available: 100 },
  { id: 2, name: 'Free-range Eggs', price: 3.50, seller: 'Happy Hens', available: 50 },
  { id: 3, name: 'Artisanal Cheese', price: 6.99, seller: 'Dairy Delights', available: 30 },
]

const equipment = [
  { id: 1, name: 'Tractor', price: 100, status: 'Available' },
  { id: 2, name: 'Harvester', price: 150, status: 'Rented' },
  { id: 3, name: 'Irrigation System', price: 80, status: 'Available' },
]

const investments = [
  { id: 1, name: 'Vertical Farm Project', goal: 100000, current: 75000 },
  { id: 2, name: 'Organic Fertilizer Production', goal: 50000, current: 30000 },
  { id: 3, name: 'Smart Irrigation System', goal: 75000, current: 60000 },
]

const userTypes = ['Farmer', 'Marketer', 'Trader', 'Investor']

export function InteractiveMarketplaceComponent() {
  const [selectedUserType, setSelectedUserType] = useState('Farmer')
  const [cart, setCart] = useState([])
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }])
      setNewMessage('')
      // Simulate a response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Thanks for your message!', sender: 'Seller' }])
      }, 1000)
    }
  }

  const renderNavigation = () => {
    switch (selectedUserType) {
      case 'Farmer':
        return (
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <Sprout className="mr-2 h-4 w-4" />
              My Crops
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <Tractor className="mr-2 h-4 w-4" />
              Equipment
            </Button>
          </div>
        )
      case 'Marketer':
        return (
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Campaigns
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <MessageCircle className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </div>
        )
      case 'Trader':
        return (
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <DollarSign className="mr-2 h-4 w-4" />
              Transactions
            </Button>
          </div>
        )
      case 'Investor':
        return (
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <DollarSign className="mr-2 h-4 w-4" />
              Portfolio
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-800">
              <Sprout className="mr-2 h-4 w-4" />
              Opportunities
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <LayoutDarkGreen>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-300">Marketplace</h1>
          <div className="flex items-center space-x-4">
            <select
              value={selectedUserType}
              onChange={(e) => setSelectedUserType(e.target.value)}
              className="p-2 border rounded-md bg-gray-800 text-green-300 border-green-500"
            >
              {userTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {renderNavigation()}
            <Button
              onClick={() => setChatOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat
            </Button>
          </div>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="bg-gray-800 border-b border-green-500">
            <TabsTrigger value="products" className="text-green-300 data-[state=active]:bg-green-700">Products</TabsTrigger>
            <TabsTrigger value="equipment" className="text-green-300 data-[state=active]:bg-green-700">Equipment</TabsTrigger>
            <TabsTrigger value="investments" className="text-green-300 data-[state=active]:bg-green-700">Investments</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <p className="text-green-400">Price: ${product.price}</p>
                      <p className="text-green-400">Seller: {product.seller}</p>
                      <p className="text-green-400">Available: {product.available}</p>
                      <div className="mt-4 flex justify-between">
                        <Button onClick={() => addToCart(product)} className="bg-green-600 hover:bg-green-700 text-white">Add to Cart</Button>
                        <Button variant="outline" onClick={() => setChatOpen(true)} className="border-green-500 text-green-300 hover:bg-green-700">Chat with Seller</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="equipment">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="bg-gray-800 border-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-300">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-400">Price: ${item.price}/day</p>
                      <Badge
                        className={item.status === 'Available' ? 'bg-green-600' : 'bg-red-600'}
                      >
                        {item.status}
                      </Badge>
                      <div className="mt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-green-600 hover:bg-green-700 text-white">Rent Now</Button>
                          </DialogTrigger>
                          <DialogContent className="bg-gray-800 border-green-500">
                            <DialogHeader>
                              <DialogTitle className="text-green-300">Rent {item.name}</DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                              <p className="text-green-400">Price: ${item.price}/day</p>
                              <p className="text-green-400">Status: {item.status}</p>
                              {/* Add a form for rental details here */}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="investments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investments.map((investment) => (
                <motion.div
                  key={investment.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="bg-gray-800 border-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-300">{investment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-400">Goal: ${investment.goal}</p>
                      <p className="text-green-400">Current: ${investment.current}</p>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <Progress
                          value={(investment.current / investment.goal) * 100}
                          className="mt-2 bg-gray-700"
                          indicatorClassName="bg-green-500"
                        />
                      </motion.div>
                      <div className="mt-4">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">Invest Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-4 right-4 w-80 h-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-green-500"
            >
              <div className="flex flex-col h-full">
                <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                  <h3 className="font-bold">Chat</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setChatOpen(false)}
                    className="text-white hover:bg-green-700"
                  >
                    Close
                  </Button>
                </div>
                <div className="flex-grow overflow-y-auto p-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        message.sender === 'You' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <span
                        className={`inline-block p-2 rounded-lg ${
                          message.sender === 'You'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-700 text-green-300'
                        }`}
                      >
                        {message.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-green-500">
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-grow mr-2 bg-gray-700 text-green-300 border-green-500"
                    />
                    <Button onClick={sendMessage} className="bg-green-600 hover:bg-green-700 text-white">Send</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutDarkGreen>
  )
}