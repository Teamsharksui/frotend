"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, Search } from 'lucide-react'
import LayoutDarkGreen from './layout-dark-green'

const transactions = [
  { id: 1, date: '2023-09-15', type: 'Sale', product: 'Organic Apples', amount: 500, status: 'Completed' },
  { id: 2, date: '2023-09-16', type: 'Purchase', product: 'Fertilizer', amount: 200, status: 'Pending' },
  { id: 3, date: '2023-09-17', type: 'Sale', product: 'Free-range Eggs', amount: 300, status: 'Completed' },
  { id: 4, date: '2023-09-18', type: 'Rental', product: 'Tractor', amount: 150, status: 'In Progress' },
  { id: 5, date: '2023-09-19', type: 'Sale', product: 'Organic Tomatoes', amount: 400, status: 'Completed' },
]

export function TransactionMonitoringComponent() {
  const [sortColumn, setSortColumn] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const filteredTransactions = transactions.filter(transaction =>
    Object.values(transaction).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return (
    <LayoutDarkGreen>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-green-300 mb-8">Transaction Monitoring</h1>

          <Card className="bg-gray-800 border-green-500 mb-8">
            <CardHeader>
              <CardTitle className="text-green-300">Search Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow mr-4 bg-gray-700 text-green-300 border-green-500"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-300">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-green-300">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('date')}
                        className="text-green-300 hover:text-green-100"
                      >
                        Date
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-green-300">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('type')}
                        className="text-green-300 hover:text-green-100"
                      >
                        Type
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-green-300">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('product')}
                        className="text-green-300 hover:text-green-100"
                      >
                        Product
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-green-300">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('amount')}
                        className="text-green-300 hover:text-green-100"
                      >
                        Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-green-300">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('status')}
                        className="text-green-300 hover:text-green-100"
                      >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-green-300">{transaction.date}</TableCell>
                      <TableCell className="text-green-300">{transaction.type}</TableCell>
                      <TableCell className="text-green-300">{transaction.product}</TableCell>
                      <TableCell className="text-green-300">${transaction.amount}</TableCell>
                      <TableCell className="text-green-300">{transaction.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </LayoutDarkGreen>
  )
}