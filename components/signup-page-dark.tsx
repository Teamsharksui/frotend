'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import { LayoutDark } from './layout-dark'

export function SignupPageDark() {
  const [currentTab, setCurrentTab] = useState("personal")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle signup logic here
  }

  return (
    <LayoutDark>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 py-12">
        <Card className="w-full max-w-4xl bg-gray-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-300">Sign up for ACTIV-B</CardTitle>
            <CardDescription className="text-green-400">
              Join our agricultural community today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Personal Information
                </TabsTrigger>
                <TabsTrigger value="kyc" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  KYC
                </TabsTrigger>
                <TabsTrigger value="role" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                  Role Selection
                </TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit} className="mt-6">
                <TabsContent value="personal">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-green-300">First Name</Label>
                        <Input id="firstName" required className="bg-gray-700 border-green-600 text-green-100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-green-300">Last Name</Label>
                        <Input id="lastName" required className="bg-gray-700 border-green-600 text-green-100" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-green-300">Email</Label>
                      <Input id="email" type="email" required className="bg-gray-700 border-green-600 text-green-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-green-300">Password</Label>
                      <Input id="password" type="password" required className="bg-gray-700 border-green-600 text-green-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-green-300">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" required className="bg-gray-700 border-green-600 text-green-100" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="kyc">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="idType" className="text-green-300">ID Type</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-700 border-green-600 text-green-100">
                          <SelectValue placeholder="Select ID type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="passport">Passport</SelectItem>
                          <SelectItem value="driverLicense">Driver&apos;s License</SelectItem>
                          <SelectItem value="nationalId">National ID</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber" className="text-green-300">ID Number</Label>
                      <Input id="idNumber" required className="bg-gray-700 border-green-600 text-green-100" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-green-300">Employment Status</Label>
                      <RadioGroup defaultValue="employed">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="employed" id="employed" />
                          <Label htmlFor="employed" className="text-green-300">Employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="self-employed" id="self-employed" />
                          <Label htmlFor="self-employed" className="text-green-300">Self-employed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unemployed" id="unemployed" />
                          <Label htmlFor="unemployed" className="text-green-300">Unemployed</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="role">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-green-300">Select Your Role</Label>
                      <RadioGroup defaultValue="farmer">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="farmer" id="farmer" />
                          <Label htmlFor="farmer" className="text-green-300">Farmer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="supplier" id="supplier" />
                          <Label htmlFor="supplier" className="text-green-300">Supplier</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="trader" id="trader" />
                          <Label htmlFor="trader" className="text-green-300">Trader</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-green-300">Years of Experience</Label>
                      <Input id="experience" type="number" min="0" className="bg-gray-700 border-green-600 text-green-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interests" className="text-green-300">Areas of Interest</Label>
                      <Textarea id="interests" className="bg-gray-700 border-green-600 text-green-100" placeholder="E.g., Organic farming, Livestock, Crop rotation" />
                    </div>
                  </div>
                </TabsContent>
                <div className="mt-6 flex justify-between">
                  <Button
                    type="button"
                    onClick={() => setCurrentTab(currentTab === "personal" ? "personal" : currentTab === "kyc" ? "personal" : "kyc")}
                    className="bg-gray-700 text-green-300 hover:bg-gray-600"
                    disabled={currentTab === "personal"}
                  >
                    Previous
                  </Button>
                  {currentTab !== "role" ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentTab(currentTab === "personal" ? "kyc" : "role")}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                      Complete Sign Up
                    </Button>
                  )}
                </div>
              </form>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/login" className="text-sm text-green-400 hover:text-green-300">
              Already have an account? Log in
            </Link>
          </CardFooter>
        </Card>
      </div>
    </LayoutDark>
  )
}