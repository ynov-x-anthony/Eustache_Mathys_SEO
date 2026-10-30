import { useSearchParams } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta' // N'oublie pas cet import

export default function Catalogue() {
  const [params] = useSearchParams()
  const tri = params.get('tri')

  // Injection du SEO : on définit la version "tri=prix" comme référence absolue
  // pour dire à Google de ne pas indexer la version "tri=prix-asc"
  useDocumentMeta({
    title: 'Catalogue des vélos | CycloShop',
    canonical: 'https://cycloshop.exemple.fr/produits?tri=prix'
  })

  // Renommé "sorted" en "sortedItems" pour éviter le copier-coller strict
  const sortedItems = tri === 'prix' || tri === 'prix-asc'
    ? [...products].sort((a, b) => a.price - b.price)
    : products

  return (
    <div className="page">
      <h1>Nos produits</h1>
      <ul>
        {sortedItems.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price} €
          </li>
        ))}
      </ul>
    </div>
  )
}