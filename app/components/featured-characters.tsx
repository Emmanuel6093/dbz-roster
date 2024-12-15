import Image from 'next/image'
import Link from 'next/link'

const featuredCharacters = [
  { id: 1, name: 'Goku', image: '/placeholder.svg' },
  { id: 2, name: 'Vegeta', image: '/placeholder.svg' },
  { id: 3, name: 'Frieza', image: '/placeholder.svg' },
]

export default function FeaturedCharacters() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCharacters.map((character) => (
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
                <h3 className="text-xl font-semibold text-center">{character.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

