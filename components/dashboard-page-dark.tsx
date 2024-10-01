"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard-p' },
  { name: 'Lands', icon: MapIcon, href: '/lands' },
  { name: 'Marketplace', icon: ShoppingCartIcon, href: '/marketplace' },
  { name: 'Wallet', icon: WalletIcon, href: '/wallet' },
  { name: 'Settings', icon: SettingsIcon, href: '/settings' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
]

const appSections = [
  { 
    title: 'Manage Your Lands', 
    description: 'View and manage your agricultural lands, track crop rotations, and plan harvests.',
    href: '/lands'
  },
  { 
    title: 'Explore Marketplace', 
    description: 'Buy and sell agricultural products, equipment, and services in our community marketplace.',
    href: '/marketplace'
  },
  { 
    title: 'Financial Overview', 
    description: 'Track your earnings, expenses, and manage your ACTIV-B wallet.',
    href: '/wallet'
  },
  { 
    title: 'Community Hub', 
    description: 'Connect with other farmers, share knowledge, and participate in discussions.',
    href: '/community'
  },
]

export function DashboardPageDark() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  // Mock user data - replace with actual user data in a real application
  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const connectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true)
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
        {/* Dashboard Header */}
        <div className="bg-gray-800 shadow rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-green-300">Welcome to Your Dashboard</h1>
          <p className="text-green-400 mt-2">User ID: {user.id}</p>
          <Button 
            onClick={connectWallet} 
            className="mt-4 bg-green-600 hover:bg-green-700 text-white"
          >
            {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </Button>
        </div>

        {/* App Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appSections.map((section, index) => (
            <Card key={index} className="bg-gray-800 border-green-700 hover:border-green-500 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-300">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">{section.description}</p>
                <Link href={section.href}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Go to {section.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Total Land Area', 'Active Listings', 'Pending Orders', 'Wallet Balance'].map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-green-700">
                <CardHeader>
                  <CardTitle className="text-lg text-green-300">{stat}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-400">
                    {index === 3 ? '1,234 SUI' : index * 100 + 50}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Recent Activity</h2>
          <Card className="bg-gray-800 border-green-700">
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-700">
                {['New order received', 'Marketplace listing updated', 'Wallet funded', 'Land lease agreement signed'].map((activity, index) => (
                  <li key={index} className="p-4 hover:bg-gray-750">
                    <p className="text-green-300">{activity}</p>
                    <p className="text-sm text-green-400">2 hours ago</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">ACTIV-B</h3>
              <p className="text-sm text-gray-300">Connecting the agricultural community since 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/app" className="text-gray-300 hover:text-green-400">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-green-400">About Us</Link></li>
                <li><Link href="/services-page-dark" className="text-gray-300 hover:text-green-400">Services</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-gray-300 hover:text-green-400">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-green-400">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-300 hover:text-green-400">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-gray-300 hover:text-green-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-gray-300 hover:text-green-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="text-gray-300 hover:text-green-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; 2023 ACTIV-B. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}