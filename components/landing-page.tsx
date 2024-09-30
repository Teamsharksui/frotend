'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Users, ShoppingCart, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ACTIV-B</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-green-300">Features</Link>
            <Link href="#services" className="hover:text-green-300">Services</Link>
            <Link href="#about" className="hover:text-green-300">About</Link>
            <Link href="#contact" className="hover:text-green-300">Contact</Link>
          </nav>
          <div className="space-x-2">
            <Button variant="outline" className="text-white border-white hover:bg-green-700">Log In</Button>
            <Button className="bg-green-600 hover:bg-green-500">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect with Agriculture</h1>
            <p className="text-xl mb-8">Find jobs, hire labor, and trade agricultural products all in one place</p>
            <Button className="bg-green-600 hover:bg-green-500 text-lg px-8 py-3">Get Started</Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose ACTIV-B?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Leaf className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">We promote eco-friendly and sustainable agricultural methods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-gray-600">Connect with a thriving community of agricultural professionals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShoppingCart className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Efficient Marketplace</h3>
                <p className="text-gray-600">Buy and sell agricultural products with ease and transparency.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-800 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Find Agricultural Jobs</h3>
                <p className="mb-4">Discover opportunities in the agricultural sector, from seasonal work to permanent positions.</p>
                <Button variant="outline" className="text-white border-white hover:bg-green-700">Search Jobs</Button>
              </div>
              <div className="bg-green-700 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Hire Agricultural Labor</h3>
                <p className="mb-4">Find skilled workers for your farm or agricultural business quickly and efficiently.</p>
                <Button variant="outline" className="text-white border-white hover:bg-green-600">Post a Job</Button>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Buy & Sell Products</h3>
                <p className="mb-4">Trade agricultural products in our secure and user-friendly online marketplace.</p>
                <Button variant="outline" className="text-white border-white hover:bg-green-500">Visit Marketplace</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center text-white">
          <div className="container mx-auto px-4">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">About ACTIV-B</h2>
              <p className="text-lg mb-4">
                ACTIV-B is a comprehensive platform designed to revolutionize the agricultural industry. We bring together job seekers, employers, and traders in one unified ecosystem.
              </p>
              <p className="text-lg mb-4">
                Our mission is to empower agricultural communities by providing easy access to opportunities, resources, and markets. We believe in sustainable practices and fostering connections that drive the industry forward.
              </p>
              <Button className="bg-green-600 hover:bg-green-500">Learn More About Us</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="italic mb-4">ACTIV-B helped me find the perfect job on a local organic farm. The platform is easy to use and full of opportunities!</p>
                <p className="font-semibold">- Sarah Johnson, Farm Worker</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="italic mb-4">As a farm owner, I have found reliable workers through ACTIV-B. It is streamlined our hiring process significantly.</p>
                <p className="font-semibold">- Michael Brown, Farm Owner</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="italic mb-4">The marketplace on ACTIV-B has expanded my customer base. It is a game-changer for small-scale producers like me.</p>
                <p className="font-semibold">- Emily Chen, Organic Farmer</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" className="bg-white text-black" />
                  <Input type="email" placeholder="Your Email" className="bg-white text-black" />
                  <Textarea placeholder="Your Message" className="bg-white text-black" />
                  <Button className="bg-green-600 hover:bg-green-500 w-full">Send Message</Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567</p>
                  <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@ACTIV-B.com</p>
                  <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> 123 Farm Road, Agritown, AG 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ACTIV-B</h3>
              <p className="text-sm">Connecting the agricultural community since 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-green-300">Home</Link></li>
                <li><Link href="#" className="hover:text-green-300">About Us</Link></li>
                <li><Link href="#" className="hover:text-green-300">Services</Link></li>
                <li><Link href="#" className="hover:text-green-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-green-300">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-green-300">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-300">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2023 ACTIV-B. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}