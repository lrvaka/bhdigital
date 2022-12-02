import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import gsap from 'gsap';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Services({ serviceText }) {
  const data1 = useStaticQuery(graphql`
    {
      allSanityServices(sort: { fields: order }) {
        nodes {
          id
          title
          desc
          mainImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const allServices = data1.allSanityServices.nodes;

  const [active, setActive] = useState(allServices[0].id);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    if (document.querySelector('#services .all-services')) {
      const services = document.querySelectorAll(
        '#services .service-content .service'
      );

      const checkActivePara = () => {
        services.forEach((service) => {
          const aContent = service.querySelector('.accordion-content');
          if (service.classList.contains('active')) {
            aContent.style.maxHeight = `${aContent.scrollHeight}px`;
          } else {
            aContent.style.maxHeight = null;
          }
        });
      };
      checkActivePara();

      // const serviceAnim = () => {
      gsap.fromTo(
        '.all-services .service.active h3 .inner',
        {
          y: '100%',
          rotationX: -90,
          opacity: 0,
        },
        {
          duration: 0.8,
          y: '0%',
          rotationX: 0,
          opacity: 1,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        '.service-pics .pics.active',
        { y: '100%' },
        {
          duration: 0.8,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        '.service-pics .pics.active img',
        { scale: 1.3 },
        {
          duration: 0.8,
          scale: 1,
          ease: 'power2.out',
        }
      );
      // };
    }
  }, [active, previous]);

  return (
    <>
      <section id="services" data-scroll-section>
        <div className="wrapper">
          <p className="big split-lines">{serviceText}</p>

          <div className="all-services">
            <div className="service-pics">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  /* eslint-disable */
                  className={
                    active === service.id
                      ? 'pics active'
                      : previous === service.id
                      ? 'pics previous'
                      : 'pics'
                  }
                  /* eslint-enable */
                >
                  <GatsbyImage
                    image={service.mainImage.asset.gatsbyImageData}
                    alt={service.mainImage.alt}
                  />
                </div>
              ))}
              <div className="mask" />
            </div>

            <div className="service-content">
              {allServices.map((service) => (
                <div
                  onClick={(e) => {
                    if (e.currentTarget.classList.contains('active')) {
                      // to avoid multiple clicks
                      return;
                    }
                    service.prev = active;
                    setPrevious(active);
                    setActive(service.id);
                  }}
                  aria-hidden
                  role="button"
                  tabIndex={-1}
                  key={service.id}
                  className={
                    active === service.id
                      ? 'service active'
                      : 'service pointer-cursor-2'
                  }
                >
                  <h3>
                    <div className="inner">{service.title}</div>
                  </h3>
                  <div className="accordion-content">
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div class="cta-btn">
            <a href="#" class="button">Let's work together</a>
          </div> */}

          <div className="all-services-mobile">
            {allServices.map((service) => (
              <div className="service-mobile" key={service.id}>
                <div className="texts">
                  <h3>
                    <div className="inner build-reveal">{service.title}</div>
                  </h3>
                  <p className="split-lines">{service.desc}</p>
                </div>
                <div className="pic mask-reveal">
                  <GatsbyImage
                    image={service.mainImage.asset.gatsbyImageData}
                    alt={service.mainImage.alt}
                    className="image-gatsby"
                  />
                  <div className="mask" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
