"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

export function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
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
        <h1 className="text-3xl font-bold text-green-300 mb-6">Your Profile</h1>

        {/* Profile Information */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardHeader>
            <CardTitle className="text-green-300">Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Change Profile Picture
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-300">Name</label>
                <Input id="name" type="text" placeholder="John Doe" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-300">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-green-300">Bio</label>
                <Textarea id="bio" placeholder="Tell us about yourself" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Update Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Farming Experience */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardHeader>
            <CardTitle className="text-green-300">Farming Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-green-300">Years of Experience</label>
                <Input id="experience" type="number" placeholder="5" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <div>
                <label htmlFor="specialties" className="block text-sm font-medium text-green-300">Farming Specialties</label>
                <Input id="specialties" type="text" placeholder="Organic vegetables, Fruit orchards" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Update Farming Experience
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Verification */}
        <Card className="bg-gray-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-green-300">Account Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">Verify your account to unlock all features of ACTIV-B.</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Start Verification Process
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 ACTIV-B Profile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}