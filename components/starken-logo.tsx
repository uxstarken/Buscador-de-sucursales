import React from "react"

export function StarkenLogo({ className = "h-8 w-auto", color = "#008643" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Starken Logo"
    >
      {/* Icono de flechas que forman la 'a' y el isotipo de Starken */}
      {/* Letra 's' */}
      <path
        d="M20.5 13.2C19.2 12.4 17.5 12 15.6 12C12.4 12 10.2 13.5 10.2 16.1C10.2 18.4 11.8 19.5 14.8 20.3L16.6 20.8C20.8 21.9 23 23.8 23 27.2C23 31.4 19.4 34 14.5 34C11.8 34 9.4 33.2 7.5 31.8L9.2 27.8C10.8 29.1 12.8 29.8 14.7 29.8C17.3 29.8 19 28.6 19 26.6C19 24.5 17.5 23.4 14.6 22.6L12.8 22.1C8.8 21 6.8 19.1 6.8 15.8C6.8 11.9 10.3 8 15.7 8C18.2 8 20.4 8.7 22.1 9.8L20.5 13.2Z"
        fill={color}
      />
      {/* Letra 't' */}
      <path
        d="M29.5 9V12.8H34.5V16.8H29.5V26.8C29.5 28.8 30.5 29.6 32.5 29.6H34.5V33.6C33.2 33.8 31.6 34 29.8 34C25.5 34 25 31.2 25 27.2V16.8H21.5V12.8H25V9H29.5Z"
        fill={color}
      />
      {/* Símbolo de doble flecha 'a' (Isotipo Starken) */}
      <g transform="translate(37, 7.5)">
        {/* Flecha superior hacia la derecha */}
        <path
          d="M6 3.5H23C26.3 3.5 29 6.2 29 9.5V16H25V9.5C25 8.4 24.1 7.5 23 7.5H6.8L10 10.7L7.2 13.5L0 6.3L7.2 0L10 2.8L6 3.5Z"
          fill={color}
        />
        {/* Flecha inferior hacia la izquierda */}
        <path
          d="M23 22.5H6C2.7 22.5 0 19.8 0 16.5V10H4V16.5C4 17.6 4.9 18.5 6 18.5H22.2L19 15.3L21.8 12.5L29 19.7L21.8 26L19 23.2L23 22.5Z"
          fill={color}
        />
      </g>
      {/* Letra 'r' */}
      <path
        d="M72.5 12.8H76.8V16.2C78.2 13.6 80.8 12.4 83.8 12.4C84.8 12.4 85.5 12.6 86 12.8V17.2C85.2 17 84.2 16.8 83.2 16.8C79.5 16.8 77 19.2 77 24V33.5H72.5V12.8Z"
        fill={color}
      />
      {/* Letra 'k' */}
      <path
        d="M89 5.5H93.5V20.2L99.8 12.8H105.8L98.5 21L106.5 33.5H100.8L94.8 23.8L93.5 25.2V33.5H89V5.5Z"
        fill={color}
      />
      {/* Letra 'e' */}
      <path
        d="M120.2 24.5H112.5C112.8 27.8 114.8 29.8 118 29.8C120 29.8 121.8 29 123 27.8L125.8 30.5C123.8 32.8 121.2 34 117.8 34C111.8 34 108 29.8 108 23.2C108 16.8 112 12.2 117.8 12.2C124 12.2 127 16.8 127 23.2C127 23.7 127 24.1 126.8 24.5H120.2ZM120.2 21.2C120 18.5 118.5 16.2 116 16.2C113.8 16.2 112.5 18.5 112.5 21.2H120.2Z"
        fill={color}
      />
      {/* Letra 'n' */}
      <path
        d="M131 12.8H135.2V16C136.8 13.6 139.8 12.2 143.5 12.2C149.2 12.2 152.5 15.8 152.5 21.8V33.5H148V22.2C148 18.2 145.8 16.2 142.2 16.2C138.2 16.2 135.5 19 135.5 24V33.5H131V12.8Z"
        fill={color}
      />
    </svg>
  )
}
