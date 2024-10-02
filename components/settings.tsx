"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
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

export function Settings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  const user = {
    name: 'John Doe',
    id: 'ACTB1234',
    avatar: '/placeholder.svg?height=40&width=40'
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

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
        <h1 className="text-3xl font-bold text-green-300 mb-6">Settings</h1>

        {/* Account Settings */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardHeader>
            <CardTitle className="text-green-300">Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-300">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-300">Password</label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1 bg-gray-700 text-green-300 border-green-500" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Update Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="bg-gray-800 border-green-700 mb-6">
          <CardHeader>
            <CardTitle className="text-green-300">Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-green-300">Enable Notifications</span>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-300">Dark Mode</span>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delete Account */}
        <Card className="bg-gray-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-red-500">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 ACTIV-B Settings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}