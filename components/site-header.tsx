"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import "./Navbar.css"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSegment, setActiveSegment] = useState("Personas")

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <div className="navbar-wrapper">
      <div className={`navbar-container navbar-static ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}>
        {/* Top Navigation Row */}
        <div className="top-nav">
          <div className="top-nav-segments">
            <a
              href="#personas"
              onClick={(e) => {
                e.preventDefault()
                setActiveSegment("Personas")
              }}
              className={`segment-link ${activeSegment === "Personas" ? "active" : ""}`}
            >
              Personas
            </a>
            <a
              href="#emprendedores"
              onClick={(e) => {
                e.preventDefault()
                setActiveSegment("Emprendedores")
              }}
              className={`segment-link ${activeSegment === "Emprendedores" ? "active" : ""}`}
            >
              Emprendedores
            </a>
            <a
              href="#empresas"
              onClick={(e) => {
                e.preventDefault()
                setActiveSegment("Empresas")
              }}
              className={`segment-link ${activeSegment === "Empresas" ? "active" : ""}`}
            >
              Empresas
            </a>
            <a
              href="#internacional"
              onClick={(e) => {
                e.preventDefault()
                setActiveSegment("Internacional")
              }}
              className={`segment-link ${activeSegment === "Internacional" ? "active" : ""}`}
            >
              Internacional
            </a>
          </div>
          <a href="#ayuda" className="top-nav-help">
            Centro de ayuda
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </a>
        </div>

        {/* Main Navigation Row */}
        <nav className="main-nav">
          <div className="main-nav-left">
            <Link href="/" className="nav-brand-link">
              <img src="/logo.png" alt="Starken Logo" className="nav-logo" />
            </Link>
          </div>

          <div className="main-links">
            <a href="#envios" className="main-link">
              Envíos
              <svg
                className="chevron-down"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <a href="#puntos" className="main-link active">
              Puntos red Starken
            </a>
            <a href="#servicios" className="main-link">
              Servicios
            </a>
            <a href="#tarifas" className="main-link">
              Tarifas
            </a>
          </div>

          <div className="main-nav-right">
            <div className="nav-actions">
              <Link href="#" className="btn-ingresar">
                Ingresar
              </Link>
            </div>

            {/* Hamburger Menu Toggle Button */}
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/logo.png" alt="Starken Logo" className="mobile-menu-logo" />
              <button
                className="mobile-menu-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="mobile-menu-content">
              <div className="mobile-menu-links">
                <a
                  href="#envios"
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Envíos</span>
                  <svg
                    className="chevron-right"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <a
                  href="#puntos"
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Puntos red Starken</span>
                  <svg
                    className="chevron-right"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <a
                  href="#servicios"
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Servicios</span>
                  <svg
                    className="chevron-right"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
                <a
                  href="#tarifas"
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Tarifas</span>
                  <svg
                    className="chevron-right"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>

              <div className="mobile-menu-divider"></div>

              <a
                href="#ayuda"
                className="mobile-menu-help"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Centro de ayuda</span>
              </a>

              <div className="mobile-menu-actions">
                <Link
                  href="#"
                  className="mobile-btn-ingresar"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
