"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-white font-roboto'>
            <div className='w-full flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href="/" className='h-10 w-10 relative aspect-square'>
                    <Image src="https://z6wq97uuc3.ufs.sh/f/y5YCUuJIIDF5eaoyVoWNRo3z1YfE8agdqBrXWTtwZK4iLQs9" alt="VVD Logo" fill className='object-contain' />
                </Link>
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden"
                ><Menu /></button>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="fixed inset-0 z-40 bg-orange-400 text-white flex flex-col items-center justify-center space-y-6"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >


                            <nav className="text-center space-y-8 text-lg flex flex-col items-center justify-center">
                                <a href="#">Service</a>
                                <a href="#">Projekte</a>
                                <a href="#">Profil</a>
                                <a href="#">Podcast</a>
                                <a href="#">Premium Zugang</a>
                                <a href="#">Blog</a>
                                <a href="#">Kontakt</a>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-orange-400 bg-white rounded-full p-2"
                                >
                                    <X />
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}
