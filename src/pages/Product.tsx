import { useParams } from 'react-router-dom'
import { products } from '../data'
// Pense à vérifier le chemin d'import de useDocumentMeta selon ton projet
import { useDocumentMeta } from '../useDocumentMeta' 

export default function Product() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  // Mise à jour dynamique des balises SEO et Open Graph
  useDocumentMeta({
    title: product ? `${product.name} | CycloShop` : 'Produit introuvable',
    description: product?.description,
    ogTitle: product ? `${product.name} | CycloShop` : undefined,
    ogDescription: product?.description,
  })

  if (!product) return <p className="page">Produit introuvable.</p>

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p className="price">{product.price} €</p>
      <p>{product.description}</p>
    </div>
  )
}