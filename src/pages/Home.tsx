import { Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Home() {
  // Ajout du hook pour le SEO de la page d'accueil
  useDocumentMeta({
    title: 'CycloShop | Le spécialiste du vélo urbain',
    description: 'Retrouvez tout l\'équipement pour rouler en ville toute l\'année sur CycloShop.'
  })

  return (
    <div className="page">
      <h1>CycloShop</h1>
      <p>Tout l'équipement pour rouler en ville, toute l'année.</p>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {/* Le lien pointe maintenant vers l'URL propre via le slug */}
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}