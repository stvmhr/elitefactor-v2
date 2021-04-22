import './trainers.css'

import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const TrainerCaroussel = () => (
  <section className="section__wrapper--small" style={{ height: '100%' }}>
    <h2 style={{ marginBottom: '8px' }}>Entraineurs</h2>
    <div className="line__red" />
    <div className="trainers__wrapper">
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Link to="/entraineurs/pascal">
          <StaticImage
            src="../images/home/trainer-pascal.jpg"
            alt="Pascal Champagne"
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '0',
            }}
          />
        </Link>
      </div>
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Link to="/entraineurs/alexis">
          <StaticImage
            src="../images/home/trainer-alexis.jpg"
            alt="Alexis Bertrand"
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '0',
            }}
          />
        </Link>
      </div>
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Link to="/entraineurs/marc-andre">
          <StaticImage
            src="../images/home/trainer-marc.jpg"
            alt="Marc-André Vachon"
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '0',
            }}
          />
        </Link>
      </div>
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Link to="/entraineurs/stephan">
          <StaticImage
            src="../images/home/trainer-stephan.jpg"
            alt="Stephan Bouffard"
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '0',
            }}
          />
        </Link>
      </div>
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Link to="/entraineurs/valerie">
          <StaticImage
            src="../images/home/trainer-val.jpg"
            alt="Valérie Demeule"
            style={{
              position: 'relative',
              left: '0',
              top: '0',
              width: '100%',
              zIndex: '0',
            }}
          />
        </Link>
      </div>
      <div
        className="trainer__wrapper"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}></div>
    </div>
  </section>
)

export default TrainerCaroussel
