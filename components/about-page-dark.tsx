'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDark } from './layout-dark'

export function AboutPageDarkComponent() {
  return (
    <LayoutDark>
      <div className="min-h-screen bg-gray-900 text-green-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About ACTIV-B</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-green-400 mb-4">
                ACTIV-B is dedicated to revolutionizing the agricultural industry by connecting farmers, suppliers, and traders on a single platform. Our mission is to promote sustainable farming practices, facilitate efficient resource management, and empower agricultural communities worldwide.
              </p>
              <p className="text-green-400">
                We strive to create a more transparent, efficient, and sustainable agricultural ecosystem that benefits all stakeholders, from small-scale farmers to large agricultural enterprises.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Farmers in a field"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400">
                  We leverage cutting-edge technology to bring innovative solutions to age-old agricultural challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400">
                  Our platform promotes sustainable farming practices to ensure long-term environmental and economic viability.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-green-700">
              <CardHeader>
                <CardTitle className="text-green-300">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400">
                  We foster a strong community of agricultural professionals, facilitating knowledge sharing and collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
            <p className="text-green-400 mb-8">
              ACTIV-B is powered by a diverse team of experts in agriculture, technology, and business. Our combined expertise drives our mission forward.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=128&width=128&text=Team Member ${member}`}
                      alt={`Team member ${member}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Team Member {member}</h3>
                  <p className="text-green-400">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutDark>
  )
}