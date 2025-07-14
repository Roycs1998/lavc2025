
'use client'

import Link from 'next/link'

const BackToHomeButton = () => {
  return (
    <div className="fixed top-4 left-4 z-[1000]">
      <Link
        href="/"
        className="bg-[#3a3480] hover:bg-purple-800 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 text-sm font-medium"
      >
        ← Regresar al Home
      </Link>
    </div>
  )
}

export default BackToHomeButton
