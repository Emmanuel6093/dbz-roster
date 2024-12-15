import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-orange-100/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="animate-spin">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loadingscreenball.jpg-WjQpabrIiyHlJyony3H2SMSi0r3WbA.jpeg"
          alt="Dragon Ball Loading"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  )
}

