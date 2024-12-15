import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

// This is a mock character data. In a real application, you'd fetch this from an API or database.
const character = {
  id: 1,
  name: 'Goku',
  race: 'Saiyan',
  role: 'Hero',
  firstAppearance: 'Dragon Ball Chapter 1',
  biography: 'Goku is the main protagonist of the Dragon Ball series. Originally sent to Earth as an infant with the mission to destroy it, Goku became the Earth\'s greatest defender and the informal leader of the Z Fighters.',
  image: '/placeholder.svg'
}

export default function CharacterDetail() {
  return (
    <div className="min-h-screen bg-orange-100 py-8">
      <div className="container mx-auto px-4">
        <Link href="/characters" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Characters</Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image src={character.image} alt={character.name} width={400} height={400} className="rounded-lg object-cover w-full h-[400px]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
              <p className="text-gray-600 mb-4">
                <strong>Race:</strong> {character.race}<br />
                <strong>Role:</strong> {character.role}<br />
                <strong>First Appearance:</strong> {character.firstAppearance}
              </p>
              <h2 className="text-2xl font-semibold mb-2">Biography</h2>
              <p className="text-gray-700 mb-4">{character.biography}</p>
              <Button>View 3D Model</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

