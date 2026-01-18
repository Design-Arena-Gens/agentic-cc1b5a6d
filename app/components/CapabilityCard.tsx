'use client';

import { Capability } from '../../data/capabilities';

type Props = {
  capability: Capability;
};

export function CapabilityCard({ capability }: Props) {
  const { titre, description, categorie, niveau, exemples } = capability;

  return (
    <article
      className="capability-card"
      aria-labelledby={`capability-${capability.id}`}
    >
      <header className="capability-card__header">
        <span className="capability-card__category">{categorie}</span>
        <span className="capability-card__level" aria-label={`Niveau ${niveau}`}>
          {niveau}
        </span>
      </header>
      <h3 id={`capability-${capability.id}`}>{titre}</h3>
      <p>{description}</p>
      <footer>
        <h4>Exemples concrets</h4>
        <ul>
          {exemples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
