'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-orange-100 flex items-center justify-center z-50">
      <div className="animate-spin">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loadingscreenball.jpg-WjQpabrIiyHlJyony3H2SMSi0r3WbA.jpeg"
          alt="Dragon Ball Loading"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  )
}

