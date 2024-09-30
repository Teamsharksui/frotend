'use client'

import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { LayoutDark } from './layout-dark'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard-p' },
  { name: 'Lands', icon: MapIcon, href: '/land-e' },
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

export function DashboardPageDarkComponent() {
  // Mock user data - replace with actual user data in a real application
  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
  }

  return (
    <LayoutDark>
      <div className="min-h-screen bg-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="bg-gray-800 shadow rounded-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-green-300">Welcome to Your Dashboard</h1>
            <p className="text-green-400 mt-2">User ID: {user.id}</p>
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
      </div>
    </LayoutDark>
  )
}