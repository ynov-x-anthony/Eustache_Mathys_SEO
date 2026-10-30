import { useParams, Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Product() {
  // Récupération du slug dans l'URL
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  // Injection du titre et de la description dynamiques
  useDocumentMeta({
    title: product ? `${product.name} - Boutique CycloShop` : 'Erreur 404 | CycloShop',
    description: product?.description || 'Désolé, ce produit est introuvable.'
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  // Préparation du maillage interne (les autres produits)
  const autresProduits = products.filter((p) => p.id !== product.id)

  return (
    <div className="page">
      {/* Remplacement du h3 par un h1 pour la hiérarchie SEO */}
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>

      {/* Bloc de maillage interne (produits similaires) */}
      <div className="related-section">
        <h2>Découvrez aussi</h2>
        <ul>
          {autresProduits.map((item) => (
            <li key={item.id}>
              <Link to={`/produits/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}