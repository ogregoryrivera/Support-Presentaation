import React from 'react'
import './Presentation.scss';

function Presentation() {
  return (
    <>
    <div className='presentation'>
        <article className='txt-pres'>
            <div>
                <p className='partie'>Partie 1</p>
                <p className='titre'>Présentation</p>
            </div>
            <p className='texte'>
                Dans ce projet de recherche je souhaite réaliser une publicité fictive pourune marque de bijoux. L’image de la marque serait une balance entre le luxueux et l’excentrique dans un message personnelle et une attirance artistique. Je veux explorer l’image projetée par l’humain : la face qu’elle montre et elle qu’elle cache. Dans cette publicité, je souhaite faire l’étalage de trois produits : un bracelet, unebague et une paire de boucles d’oreilles chacun avec leur propre personnalité.Le style visuel que je vise avec ce projet est un mélange avec le maximalisme et le minimalisme. Un style qui ose, mais qui reste contrôlé ce qui revient à la balance avec le luxueux et l’excentrique mentionnée au début du texte.
            </p>
        </article>

        <div>
            <iframe 
                width="1185" 
                height="667" 
                src="https://www.youtube.com/embed/HMTKMWHLbdQ?si=dAhtWPeO8wBtll7N" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>

        </div>
    </>
    
  )
}

export default Presentation