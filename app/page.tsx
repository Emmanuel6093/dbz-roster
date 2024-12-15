import Link from 'next/link'
import { Button } from "@/components/ui/button"
import FeaturedCharacters from './components/featured-characters'

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-100">
      <header className="bg-orange-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">DBZ Fan Site</Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-yellow-300">Home</Link>
            <Link href="/characters" className="text-white hover:text-yellow-300">Characters</Link>
            <Link href="/about" className="text-white hover:text-yellow-300">About</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Dragon Ball Z Fan Website!</h1>
          <p className="text-xl">Explore the world of Dragon Ball Z, learn about your favorite characters, and test your knowledge!</p>
        </section>

        <FeaturedCharacters />

        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Explore More</h2>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/characters">All Characters</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white mt-16 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 DBZ Fan Website. Created with passion by a true fan.</p>
        </div>
      </footer>
    </div>
  )
}

