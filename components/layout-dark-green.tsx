'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { HomeIcon, MapIcon, ShoppingCartIcon, WalletIcon, SettingsIcon, UserIcon, MenuIcon } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard' },
  { name: 'Lands', icon: MapIcon, href: '/lands' },
  { name: 'Marketplace', icon: ShoppingCartIcon, href: '/marketplace' },
  { name: 'Wallet', icon: WalletIcon, href: '/wallet' },
  { name: 'Settings', icon: SettingsIcon, href: '/settings' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
]

interface LayoutDarkGreenProps {
  children: React.ReactNode
}

export function LayoutDarkGreenComponent({ children }: LayoutDarkGreenProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-green-900 text-green-100">
      {/* Sidebar for desktop */}
      <motion.nav
        className="hidden md:flex flex-col w-16 hover:w-64 transition-all duration-300 ease-in-out bg-gray-800 p-4 overflow-hidden"
        animate={{ width: isSidebarOpen ? 256 : 64 }}
      >
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <motion.div
              className="flex items-center space-x-4 py-2 px-2 rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-6 w-6 text-green-300 group-hover:text-green-100 transition-colors duration-200" />
              <span className="text-green-300 group-hover:text-green-100 transition-colors duration-200">
                {item.name}
              </span>
            </motion.div>
          </Link>
        ))}
      </motion.nav>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-green-300 hover:text-green-100 hover:bg-green-700"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className="flex items-center space-x-4 py-2 px-2 rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="h-6 w-6 text-green-300 group-hover:text-green-100 transition-colors duration-200" />
                  <span className="text-green-300 group-hover:text-green-100 transition-colors duration-200">
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}