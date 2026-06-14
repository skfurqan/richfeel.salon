"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".fade-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    // Parallax scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll("section")
      parallaxElements.forEach((el, index) => {
        if (index % 2 === 0) {
          ;(el as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(
          this.getAttribute("href") || ""
        )
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* HERO SECTION */}
      <header>
        <div className="hero-content">
          <h1>Premium Grooming for the Modern Man</h1>
          <p>Experience precision, hygiene, and hospitality at Korutla&apos;s most trusted men&apos;s salon</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Book Now
            </a>
            <a href="tel:+919966177706" className="btn btn-secondary">
              📞 Call Us
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Richfeel</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Richfeel A/C Handsome Care is a premium men&apos;s grooming destination established with a vision to
                redefine personal care for the modern man. We combine traditional barbering techniques with
                contemporary styling trends.
              </p>
              <p>
                Every service is delivered with precision, hygiene, and exceptional hospitality. Our team of certified
                professionals is dedicated to making you look and feel your absolute best.
              </p>
            </div>
            <div className="highlights">
              <div className="highlight-card fade-on-scroll">
                <h3>✓ Hygiene First</h3>
                <p>Sterilized tools &amp; sanitized equipment</p>
              </div>
              <div className="highlight-card fade-on-scroll">
                <h3>✓ Expert Stylists</h3>
                <p>Certified professionals with years of experience</p>
              </div>
              <div className="highlight-card fade-on-scroll">
                <h3>✓ Premium Comfort</h3>
                <p>Fully air-conditioned &amp; luxurious ambiance</p>
              </div>
              <div className="highlight-card fade-on-scroll">
                <h3>✓ Eco-Friendly</h3>
                <p>Natural products &amp; sustainable practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className="services-grid">
            <div className="service-card fade-on-scroll">
              <h3>✨ Precision Hair Design</h3>
              <p>Expert haircuts with modern styling. Our stylists craft cuts tailored to your face shape and lifestyle.</p>
              <ul>
                <li>Consultation &amp; hair analysis</li>
                <li>Custom precision cut</li>
                <li>Professional styling</li>
                <li>Home care tips</li>
              </ul>
            </div>
            <div className="service-card fade-on-scroll">
              <h3>🌿 Eco-Friendly Facials</h3>
              <p>Refresh your skin with natural, organic facial treatments designed for all skin types.</p>
              <ul>
                <li>Skin type assessment</li>
                <li>Deep cleansing &amp; exfoliation</li>
                <li>Targeted treatment</li>
                <li>Hydration &amp; protection</li>
              </ul>
            </div>
            <div className="service-card fade-on-scroll">
              <h3>💆 Hair Spa Treatment</h3>
              <p>Deep conditioning and scalp therapy to restore vitality to stressed, dry, or damaged hair.</p>
              <ul>
                <li>Hair analysis &amp; consultation</li>
                <li>Deep conditioning mask</li>
                <li>Relaxing scalp massage</li>
                <li>Post-treatment guide</li>
              </ul>
            </div>
            <div className="service-card fade-on-scroll">
              <h3>🧖 Spa &amp; Wellness</h3>
              <p>Complete relaxation and rejuvenation services for the busy professional.</p>
              <ul>
                <li>Full-body massage</li>
                <li>Facial treatments</li>
                <li>Specialty packages</li>
                <li>Custom wellness plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials">
        <div className="container">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="rating-display fade-on-scroll">
            <div className="rating-number">⭐ 4.5/5.0</div>
            <div style={{ fontSize: "1.1rem" }}>Based on 95+ verified customer reviews</div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-on-scroll">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="title">&quot;Best Salon in Korutla&quot;</div>
              <p>
                &quot;Exceptional cleanliness and amazing hospitality. The staff knows what they&apos;re doing, and I always
                leave feeling refreshed. Highly recommended!&quot;
              </p>
              <div className="author">— Ravi K.</div>
            </div>
            <div className="testimonial-card fade-on-scroll">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="title">&quot;Professional Excellence&quot;</div>
              <p>
                &quot;This is the salon everyone talks about. They get your haircut just right, and the spa services are
                incredibly relaxing. Worth every visit.&quot;
              </p>
              <div className="author">— Anand M.</div>
            </div>
            <div className="testimonial-card fade-on-scroll">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="title">&quot;Premium Experience&quot;</div>
              <p>
                &quot;I&apos;ve been to salons in bigger cities, but Richfeel gives me the same quality and
                professionalism. Highly impressed with the service.&quot;
              </p>
              <div className="author">— Suresh T.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: "50px", opacity: 0.9 }}>
            Ready to experience premium grooming? Book your appointment today!
          </p>

          <div className="contact-grid">
            <div className="contact-box fade-on-scroll">
              <h3>📞 Phone</h3>
              <a href="tel:+919966177706">+91 99661 77706</a>
              <p style={{ marginTop: "10px", opacity: 0.7, fontSize: "0.9rem" }}>Call to book or ask questions</p>
            </div>
            <div className="contact-box fade-on-scroll">
              <h3>📍 Address</h3>
              <p>
                RPG7+9J LIC Complex
                <br />
                Korutla Main Rd
                <br />
                Korutla, Telangana 505326
              </p>
            </div>
            <div className="contact-box fade-on-scroll">
              <h3>🕒 Hours</h3>
              <p>
                9:00 AM – 9:00 PM
                <br />
                Mon, Wed–Sun
                <br />
                <em style={{ opacity: 0.7 }}>Closed Tuesdays</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <h3>Richfeel A/C Handsome Care</h3>
          <p style={{ margin: "15px 0" }}>Premium Men&apos;s Grooming Salon • Korutla, Telangana</p>
          <p style={{ margin: "20px 0", fontSize: "0.9rem" }}>
            📍 RPG7+9J LIC Complex, Korutla Main Rd | 📞{" "}
            <a href="tel:+919966177706">+91 99661 77706</a>
          </p>
          <p style={{ marginTop: "30px", fontSize: "0.85rem", opacity: 0.7 }}>
            © 2026 Richfeel A/C Handsome Care. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
