'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { LayoutDark } from './layout-dark'

export function ContactPageDarkComponent() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <LayoutDark>
      <div className="min-h-screen bg-gray-900 text-green-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <Card className="bg-gray-800 border-green-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-green-300">Name</Label>
                    <Input id="name" className="bg-gray-700 border-green-600 text-green-100" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-green-300">Email</Label>
                    <Input id="email" type="email" className="bg-gray-700 border-green-600 text-green-100" required />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-green-300">Subject</Label>
                    <Input id="subject" className="bg-gray-700 border-green-600 text-green-100" required />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-green-300">Message</Label>
                    <Textarea id="message" className="bg-gray-700 border-green-600 text-green-100" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
              <div className="relative h-64 mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="ACTIVE-B office location"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <address className="not-italic text-green-400 mb-8">
                <p>123 Agriculture Street</p>
                <p>Farmville, State 12345</p>
                <p>United States</p>
              </address>
              <div className="space-y-2">
                <p><strong className="text-green-300">Phone:</strong> <a href="tel:+11234567890" className="text-green-400 hover:text-green-300">+1 (123) 456-7890</a></p>
                <p><strong className="text-green-300">Email:</strong> <a href="mailto:info@active-b.com" className="text-green-400 hover:text-green-300">info@active-b.com</a></p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
            <p className="text-green-400 mb-8">
              Follow us on social media for the latest updates, agricultural tips, and community highlights.
            </p>
            <div className="flex justify-center space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <a key={platform} href="#" className="text-green-300 hover:text-green-100">
                  <span className="sr-only">{platform}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-green-700 rounded-full">
                    {/* Replace with actual social media icons */}
                    <span className="text-2xl">{platform[0]}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">FAQs</h2>
            <p className="text-green-400 mb-8">
              Have questions? Check out our frequently asked questions or contact us directly.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              View FAQs
            </Button>
          </div>
        </div>
      </div>
    </LayoutDark>
  )
}