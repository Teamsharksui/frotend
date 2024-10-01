"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon, MenuIcon, XIcon, PlusIcon } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard-p' },
  { name: 'Lands', icon: MapIcon, href: '/lands' },
  { name: 'Marketplace', icon: ShoppingCartIcon, href: '/marketplace' },
  { name: 'Wallet', icon: WalletIcon, href: '/wallet' },
  { name: 'Settings', icon: SettingsIcon, href: '/settings' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
]

interface Land {
  id: number
  name: string
  size: string
  status: string
  price: string
}

const initialLands: Land[] = [
  { id: 1, name: 'Green Acres', size: '50 acres', status: 'Available', price: '1000 SUI/month' },
  { id: 2, name: 'Sunny Fields', size: '30 acres', status: 'Rented', price: '800 SUI/month' },
  { id: 3, name: 'River Valley', size: '75 acres', status: 'Available', price: '1500 SUI/month' },
]

export function Lands() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [lands, setLands] = useState<Land[]>(initialLands)
  const [newLand, setNewLand] = useState<Omit<Land, 'id'>>({ name: '', size: '', status: 'Available', price: '' })

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleAddLand = () => {
    const id = lands.length > 0 ? Math.max(...lands.map(land => land.id)) + 1 : 1
    setLands([...lands, { id, ...newLand }])
    setNewLand({ name: '', size: '', status: 'Available', price: '' })
  }

  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
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
          Land Management
        </motion.h1>

        {/* Search and Add Land */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Input
                type="text"
                placeholder="Search lands..."
                className="mb-4 md:mb-0 md:mr-4 bg-gray-700 text-green-300 border-green-500"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add New Land
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 text-green-300 border-green-500">
                  <DialogHeader>
                    <DialogTitle>Add New Land</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={newLand.name}
                        onChange={(e) => setNewLand({ ...newLand, name: e.target.value })}
                        className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="size" className="text-right">
                        Size
                      </Label>
                      <Input
                        id="size"
                        value={newLand.size}
                        onChange={(e) => setNewLand({ ...newLand, size: e.target.value })}
                        className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">
                        Price
                      </Label>
                      <Input
                        id="price"
                        value={newLand.price}
                        onChange={(e) => setNewLand({ ...newLand, price: e.target.value })}
                        className="col-span-3 bg-gray-700 text-green-300 border-green-500"
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddLand} className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Add Land
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Lands Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-800 border-green-700">
            <CardHeader>
              <CardTitle className="text-green-300">Available Lands</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-green-300">Name</TableHead>
                    <TableHead className="text-green-300">Size</TableHead>
                    <TableHead className="text-green-300">Status</TableHead>
                    <TableHead className="text-green-300">Price</TableHead>
                    <TableHead className="text-green-300">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lands.map((land) => (
                    <TableRow key={land.id}>
                      <TableCell className="text-green-300">{land.name}</TableCell>
                      <TableCell className="text-green-300">{land.size}</TableCell>
                      <TableCell className="text-green-300">{land.status}</TableCell>
                      <TableCell className="text-green-300">{land.price}</TableCell>
                      <TableCell>
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          {land.status === 'Available' ? 'Rent' : 'View Details'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 ACTIV-B Land Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}