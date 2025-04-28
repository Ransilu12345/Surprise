'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="main-page h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-8"
      >
        Just one question...
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl mb-12"
      >
        Are you ready for your birthday surprise? 🎁
      </motion.p>

      <Link href="/surprise">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-2xl text-xl shadow-lg hover:bg-purple-100 transition"
        >
          Yes, show me!
        </motion.button>
      </Link>
    </main>
  );
}
