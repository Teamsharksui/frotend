"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard-p' },
  { name: 'Lands', icon: MapIcon, href: '/lands' },
  { name: 'Marketplace', icon: ShoppingCartIcon, href: '/marketplace' },
  { name: 'Wallet', icon: WalletIcon, href: '/wallet' },
  { name: 'Settings', icon: SettingsIcon, href: '/settings' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
]

const transactions = [
  { id: 1, date: '2023-09-15', type: 'Received', amount: 500, from: 'Land Rent' },
  { id: 2, date: '2023-09-16', type: 'Sent', amount: 200, to: 'Marketplace Purchase' },
  { id: 3, date: '2023-09-17', type: 'Received', amount: 300, from: 'Product Sale' },
  { id: 4, date: '2023-09-18', type: 'Sent', amount: 150, to: 'Equipment Rental' },
]

export function Wallet() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [balance, setBalance] = useState(1000)

  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const connectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true)
    // For demo purposes, we're setting a random balance
    setBalance(Math.floor(Math.random() * 10000))
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className=" md:flex items-center">
            <Image src="/images/suiii.png" alt="sui" width={150} height={100} />
            <Link href="/landing-page-dark" className="text-2xl font-bold text-green-400">ACTIV-B</Link>
          </div>          
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
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="flex flex-col h-full w-64 bg-gray-900 p-4">
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
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-green-300 mb-6">Your Wallet</h1>

        {/* Wallet Balance */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardHeader>
            <CardTitle className="text-green-300">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-400">{balance} SUI</p>
            <Button 
              onClick={connectWallet} 
              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
            </Button>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="bg-gray-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-green-300">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-green-300">Date</TableHead>
                  <TableHead className="text-green-300">Type</TableHead>
                  <TableHead className="text-green-300">Amount (SUI)</TableHead>
                  <TableHead className="text-green-300">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="text-green-300">{transaction.date}</TableCell>
                    <TableCell className="text-green-300">{transaction.type}</TableCell>
                    <TableCell className="text-green-300">{transaction.amount}</TableCell>
                    <TableCell className="text-green-300">
                      {transaction.type === 'Received' ? `From: ${transaction.from}` : `To: ${transaction.to}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 ACTIV-B Wallet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}