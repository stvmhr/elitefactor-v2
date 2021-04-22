import * as React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import Trainers from '../components/trainers'

const IndexPage = () => (
  <Layout pageName="index">
    <Seo title="Accueil" />
    <section className="elite__wrapper section__wrapper--small">
      <h2 style={{ color: '#fff', marginBottom: '8px' }}>Le Élite</h2>
      <div className="line__red"></div>
      <p className="desktop-only">
        Elite Factor est une entreprise qui contribue à la performance des gens
        actifs, des athlètes et des employés sur le marché du travail.
      </p>
      <p className="desktop-only">
        Depuis son ouverture en 2012, l’expertise retrouvée au Centre Elite
        Factor a fait sa popularité auprès des gens actifs, athlètes de tous les
        niveaux et entreprises de la région. Au quotidien, l’équipe du centre
        travaille avec une multitude de gens avec des besoins spécifiques mais
        qui au final, recherchent un but commun : la performance. C’est avec
        cette optique en tête que nous nous efforçons de créer des entraînements
        qui répondent aux besoins de tous.
      </p>
      <p className="mobile-only">
        Depuis son ouverture en 2012, l’expertise des entraîneurs du Centre
        Elite Factor a fait sa popularité auprès des gens actifs, athlètes et
        entreprises de la région.
      </p>
      <StaticImage
        src="../images/home/mobile/elite-1.jpg"
        quality={95}
        className="mobile-only"
        alt="Elite"
        style={{ marginBottom: '4px', borderRadius: '5px' }}
      />
    </section>
    <section className="section__wrapper--small">
      <h3 style={{ color: '#fff', textAlign: 'center' }}>
        "Don’t count the days;
        <br /> make the days count."
        <br />
        <i style={{ fontSize: '16px' }}>Mohamed Ali</i>{' '}
      </h3>
    </section>
    <section className="section__wrapper--small">
      <h2 style={{ marginBottom: '8px' }}>Athlètes</h2>
      <div className="line__red"></div>
      <p className="desktop-only">
        <strong>Une longue tradition d’athlètes</strong>
      </p>
      <p className="desktop-only">
        Une carrière sportive demande du courage, de la discipline et une
        préparation adaptée à ses besoins. Le jeune sportif n’a pas les mêmes
        besoins que l’athlète professionnel, il doit s’entrainer selon son
        niveau de développement. L’athlète professionnel doit continuer à
        progresser malgré l’âge, les blessures et les engagements que requiert
        sa carrière.
      </p>
      <p className="desktop-only">
        Le Centre Elite Factor mise sur une équipe hautement qualifiée afin
        d’analyser chaque sportif, de planifier des plans personnalisés aux
        besoins de ceux-ci et ce, peu importe le sport pratiqué. Que vos
        objectifs soient d’optimiser les performances, de contribuer au
        développement de votre jeune sportif ou la réathlétisation en vue d’un
        retour au jeu suite à une blessure, notre équipe est là pour vous.
      </p>
      <p className="mobile-only">
        Le Centre Elite Factor mise sur une équipe hautement qualifiée afin
        d’évaluer les besoins de chaque sportif et de planifier des plans
        personnalisés spécifiques aux sports pratiqués.
      </p>
      <StaticImage
        src="../images/home/mobile/athlete-1.jpg"
        className="mobile-only"
        alt="Athletes"
        style={{
          marginBottom: '4px',
          borderRadius: '5px',
        }}
      />
    </section>
    <section className="section__wrapper--small">
      <h2 style={{ marginBottom: '8px' }}>Entreprises</h2>
      <div className="line__red"></div>
      <p className="desktop-only">
        Des employés en santé, une entreprise performante.
      </p>
      <p className="desktop-only">
        Le bien-être des employés est un enjeu majeur pour toute entreprise. Il
        est maintenant reconnu que lorsque vos employés adoptent de saines
        habitudes de vie, les répercussions se font sentir dans toutes les
        sphères de leur vie, mais aussi dans votre entreprise.
      </p>
      <p className="desktop-only">
        Le service mobile en entreprise est la stratégie gagnante afin de
        rejoindre le plus de gens possible dans le but d’atteindre une forme
        optimale tout en plaçant de l’avant le concept de conciliation
        travail/famille.
      </p>
      <p className="desktop-only">
        Notre gamme de services diversifiés vous permet de renforcer de bonnes
        habitudes de vie auprès de vos employés et ainsi favoriser la
        performance de votre équipe au quotidien!
      </p>
      <p className="mobile-only">
        Notre service mobile en entreprise est la stratégie gagnante afin
        d’aider un plus grand nombre de personnes à atteindre une forme optimale
        et de permettre la conciliation travail/famille.
      </p>
      <StaticImage
        src="../images/home/mobile/entreprise-1.jpg"
        className="mobile-only"
        alt="Entreprise"
        style={{
          marginBottom: '4px',
          borderRadius: '5px',
        }}
      />
    </section>
    <section className="events__wrapper">
      <div className="events__content">
        <p className="events__title">Nouveauté</p>
        <div className="events__redline--small-line"></div>
        <h2 style={{ marginBottom: '8px' }}>Entrainement en ligne</h2>
        <p>
          Entrainement à la maison + Groupe Facebook + Aucun matériel + Facilité
        </p>

        <div className="rendezVousButton">
          <a href="#rendezvous">Besoin d'information ?</a>
        </div>
      </div>
    </section>

    <Trainers />
  </Layout>
)

export default IndexPage
