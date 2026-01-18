'use client';

import { useMemo, useState } from 'react';
import { Capability, capabilities } from '../../data/capabilities';
import { CapabilityCard } from './CapabilityCard';

type Filters = {
  categories: Set<Capability['categorie']>;
  niveaux: Set<Capability['niveau']>;
  recherche: string;
};

const categories: Capability['categorie'][] = [
  'Développement',
  'Analyse',
  'Créativité',
  'Productivité',
  'Connaissances'
];

const niveaux: Capability['niveau'][] = ['Exploratoire', 'Opérationnel', 'Expert'];

export function CapabilityExplorer() {
  const [filters, setFilters] = useState<Filters>({
    categories: new Set(categories),
    niveaux: new Set(niveaux),
    recherche: ''
  });

  const toggleCategory = (categorie: Capability['categorie']) => {
    setFilters((prev) => {
      const categoriesCopy = new Set(prev.categories);
      categoriesCopy.has(categorie)
        ? categoriesCopy.delete(categorie)
        : categoriesCopy.add(categorie);
      return { ...prev, categories: categoriesCopy };
    });
  };

  const toggleNiveau = (niveau: Capability['niveau']) => {
    setFilters((prev) => {
      const niveauxCopy = new Set(prev.niveaux);
      niveauxCopy.has(niveau) ? niveauxCopy.delete(niveau) : niveauxCopy.add(niveau);
      return { ...prev, niveaux: niveauxCopy };
    });
  };

  const updateRecherche = (value: string) => {
    setFilters((prev) => ({ ...prev, recherche: value }));
  };

  const filteredCapabilities = useMemo(() => {
    const rechercheLower = filters.recherche.toLowerCase();
    return capabilities.filter((item) => {
      const matchesCategory = filters.categories.has(item.categorie);
      const matchesNiveau = filters.niveaux.has(item.niveau);
      const matchesRecherche =
        rechercheLower.length === 0 ||
        item.titre.toLowerCase().includes(rechercheLower) ||
        item.description.toLowerCase().includes(rechercheLower) ||
        item.exemples.some((example) => example.toLowerCase().includes(rechercheLower));

      return matchesCategory && matchesNiveau && matchesRecherche;
    });
  }, [filters]);

  return (
    <section className="explorer">
      <div className="explorer__filters" aria-label="Filtres">
        <div className="explorer__search">
          <label htmlFor="search" className="explorer__label">
            Rechercher
          </label>
          <input
            id="search"
            type="search"
            placeholder="Capacité, exemple ou mot-clé"
            value={filters.recherche}
            onChange={(event) => updateRecherche(event.target.value)}
            aria-describedby="search-hint"
          />
          <span id="search-hint" className="explorer__hint">
            Résultats filtrés en temps réel
          </span>
        </div>
        <fieldset>
          <legend>Domaines</legend>
          <div className="explorer__chips">
            {categories.map((categorie) => {
              const active = filters.categories.has(categorie);
              return (
                <button
                  key={categorie}
                  type="button"
                  onClick={() => toggleCategory(categorie)}
                  className={`chip ${active ? 'chip--active' : ''}`}
                  aria-pressed={active}
                >
                  {categorie}
                </button>
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend>Niveaux d&apos;intervention</legend>
          <div className="explorer__chips">
            {niveaux.map((niveau) => {
              const active = filters.niveaux.has(niveau);
              return (
                <button
                  key={niveau}
                  type="button"
                  onClick={() => toggleNiveau(niveau)}
                  className={`chip ${active ? 'chip--active' : ''}`}
                  aria-pressed={active}
                >
                  {niveau}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="explorer__results" aria-live="polite">
        {filteredCapabilities.length === 0 ? (
          <p className="explorer__empty">Aucune capacité ne correspond à ces filtres pour le moment.</p>
        ) : (
          filteredCapabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))
        )}
      </div>
    </section>
  );
}
