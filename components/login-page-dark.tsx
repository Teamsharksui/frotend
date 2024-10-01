'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import  { LayoutDark } from './layout-dark'

export function LoginPageDarkComponent() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle login logic here
  }

  return (
    <LayoutDark>
      <div className="flex items-center justify-center py-12 bg-gray-900">
        <Card className="w-full max-w-md bg-gray-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-300">Login to ACTIV-B</CardTitle>
            <CardDescription className="text-green-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-300">Email or Username</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email or username"
                  required
                  className="bg-gray-700 border-green-600 text-green-100 placeholder-green-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-green-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="bg-gray-700 border-green-600 text-green-100 placeholder-green-400"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Log in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/forgot-password" className="text-sm text-green-400 hover:text-green-300">
              Forgot password?
            </Link>
            <Link href="/signup" className="text-sm text-green-400 hover:text-green-300">
              Don&apos;t have an account? Sign up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </LayoutDark>
  )
}