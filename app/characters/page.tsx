import Image from 'next/image'
import Link from 'next/link'

// This is mock data. In a real application, you'd fetch this from an API or database.
const characters = [
  { id: 1, name: 'Goku', image: '/placeholder.svg' },
  { id: 2, name: 'Vegeta', image: '/placeholder.svg' },
  { id: 3, name: 'Frieza', image: '/placeholder.svg' },
  { id: 4, name: 'Piccolo', image: '/placeholder.svg' },
  { id: 5, name: 'Gohan', image: '/placeholder.svg' },
  { id: 6, name: 'Trunks', image: '/placeholder.svg' },
]

export default function Characters() {
  return (
    <div className="min-h-screen bg-orange-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Dragon Ball Z Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <Link href={`/characters/${character.id}`} key={character.id} className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center">{character.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

