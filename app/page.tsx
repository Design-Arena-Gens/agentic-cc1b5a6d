import { CapabilityExplorer } from './components/CapabilityExplorer';

export default function Home() {
  return (
    <main>
      <div className="hero">
        <span className="hero__badge">Assistant IA</span>
        <h1>Qu&rsquo;est-ce que je sais faire&nbsp;?</h1>
        <p className="hero__subtitle">
          Explorez l&rsquo;étendue de mes compétences pour accélérer vos projets, amplifier vos idées et transformer vos défis en opportunités concrètes.
        </p>
        <div className="hero__cta">
          <a href="#catalogue" className="hero__link">
            Parcourir les capacités
          </a>
          <a
            href="mailto:contact@example.com?subject=Projet%20avec%20l%27assistant%20IA"
            className="hero__secondary"
          >
            Discuter d&rsquo;un besoin
          </a>
        </div>
      </div>

      <section id="catalogue" className="catalogue">
        <header className="catalogue__header">
          <h2>Catalogue dynamique</h2>
          <p>
            Filtrez par domaine, niveau d&rsquo;intervention ou mot-clé pour découvrir comment je peux vous accompagner sur vos défis
            technologiques, créatifs ou stratégiques.
          </p>
        </header>
        <CapabilityExplorer />
      </section>

      <section className="workflow">
        <h2>Comment je collabore</h2>
        <div className="workflow__steps">
          <article>
            <h3>1. Cadrage express</h3>
            <p>
              Clarification rapide de votre objectif, de la contrainte temps/budget et des enjeux clés pour activer la meilleure stratégie.
            </p>
          </article>
          <article>
            <h3>2. Production itérative</h3>
            <p>
              Propositions successives, revues rapides et ajustements continus pour converger vers le résultat attendu en quelques cycles.
            </p>
          </article>
          <article>
            <h3>3. Livraison actionnable</h3>
            <p>
              Documentation, recommandations et plan de suivi pour assurer la mise en œuvre et la capitalisation de la solution livrée.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
