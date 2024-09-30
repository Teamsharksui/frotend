'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDark } from './layout-dark'

export function ServicesPageDark() {
  return (
    <LayoutDark>
      <div className="min-h-screen bg-gray-900 text-green-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Agricultural marketplace"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Agricultural Marketplace</h2>
              <p className="text-green-400 mb-4">
                Our state-of-the-art marketplace connects farmers, suppliers, and traders, enabling seamless transactions and fostering a vibrant agricultural ecosystem.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Explore Marketplace</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Resource Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Optimize your agricultural resources with our advanced management tools and analytics.
                </p>
                <Button variant="outline" className="border-green-600 text-green-300 hover:bg-green-700 hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Crop Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Plan your crops effectively with our AI-powered crop rotation and planning services.
                </p>
                <Button variant="outline" className="border-green-600 text-green-300 hover:bg-green-700 hover:text-white">
                  Start Planning
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Stay ahead with our real-time market insights and price forecasting tools.
                </p>
                <Button variant="outline" className="border-green-600 text-green-300 hover:bg-green-700 hover:text-white">
                  View Insights
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Sustainable Farming Practices</h2>
            <p className="text-green-400 mb-8">
              We offer guidance and resources to help you implement sustainable farming practices that benefit both your business and the environment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Organic Farming', 'Water Conservation', 'Soil Management', 'Biodiversity'].map((practice, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=128&width=128&text=${practice}`}
                      alt={practice}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{practice}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-green-400 mb-8">
              Join ACTIV-B today and transform your agricultural business with our comprehensive suite of services.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </LayoutDark>
  )
}