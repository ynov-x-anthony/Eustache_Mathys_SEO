import { useEffect, useState } from 'react'

const HERO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%231a5fa8'/%3E%3Ctext x='400' y='210' font-size='28' fill='white' text-anchor='middle'%3EVélo électrique pliable%3C/text%3E%3C/svg%3E"

// Mission : ouvre Lighthouse (DevTools → onglet Lighthouse → Performance) et
// corrige les 3 problèmes volontaires ci-dessous.

export default function App() {
  const [showBanner, setShowBanner] = useState(false)
  const [points, setPoints] = useState<number | null>(null)
  // Optionnel : un state pour désactiver le bouton pendant le calcul
  const [isCalculating, setIsCalculating] = useState(false)

  useEffect(() => {
    // Problème 2 (CLS) corrigé via le conteneur <div style={{ minHeight: '50px' }}> dans le JSX
    const t = setTimeout(() => setShowBanner(true), 1200)
    return () => clearTimeout(t)
  }, [])

  function calculerPoints() {
    // Problème 3 (INP) corrigé : on découpe la boucle en tranches de 2 millions d'itérations
    // pour rendre la main au thread principal (le navigateur) entre chaque exécution.
    setIsCalculating(true)
    let total = 0
    let i = 0
    
    function step() {
      const end = Math.min(i + 2_000_000, 400_000_000)
      for (; i < end; i++) total += Math.sqrt(i) % 7
      
      if (i < 400_000_000) {
        setTimeout(step, 0)
      } else {
        setPoints(Math.round(total % 1000))
        setIsCalculating(false)
      }
    }
    
    step()
  }

  return (
    <div className="page">
      {/* Correction CLS #2 : Espace réservé pour le bandeau pour éviter le décalage */}
      <div style={{ minHeight: '50px' }}>
        {showBanner && (
          <div className="banner">🎉 Livraison offerte ce week-end !</div>
        )}
      </div>

      <h1>CycloShop</h1>

      {/* Correction 1 (LCP/CLS) : ajout de width/height et de l'aspect-ratio */}
      <img 
        src={HERO} 
        alt="Vélo électrique pliable" 
        width={800} 
        height={400} 
        style={{ aspectRatio: '800 / 400', width: '100%', height: 'auto' }} 
      />

      <p>Le vélo électrique pliable le plus vendu de la boutique.</p>

      <button onClick={calculerPoints} disabled={isCalculating}>
        {isCalculating ? "Calcul en cours..." : "Calculer mes points fidélité"}
      </button>
      {points !== null && <p>Tu as {points} points fidélité.</p>}
    </div>
  )
}