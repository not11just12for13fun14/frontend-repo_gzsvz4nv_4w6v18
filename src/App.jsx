import { useMemo } from 'react'

function Petals() {
  const petals = useMemo(() => Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // vw
    size: 18 + Math.random() * 18, // px
    delay: Math.random() * 6, // s
    duration: 10 + Math.random() * 10, // s
    rotation: Math.random() * 360,
  })), [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal absolute top-[-10%] select-none"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            rotate: `${p.rotation}deg`,
          }}
        >🌹</span>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
      <Petals />

      {/* Soft glow background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-60 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>

      <main className="relative z-10 flex items-center justify-center px-4 py-14 sm:py-20">
        <section className="w-full max-w-3xl">
          {/* Decorative header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-rose-200 shadow-sm">
              <span className="i-heart text-rose-500">💖</span>
              <span className="text-sm font-medium text-rose-600">Selamat Ulang Tahun</span>
              <span className="i-heart text-rose-500">💖</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Untukmu yang Spesial
            </h1>
            <p className="mt-2 text-rose-500">Dengan aksen mawar dan penuh kasih</p>
          </div>

          {/* Card */}
          <div className="relative">
            {/* Corner roses */}
            <div className="absolute -top-6 -left-6 hidden sm:block">
              <RoseCorner direction="left" />
            </div>
            <div className="absolute -top-6 -right-6 hidden sm:block">
              <RoseCorner direction="right" />
            </div>

            <div className="rounded-2xl border border-rose-200/70 bg-white/70 backdrop-blur-md shadow-xl p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-rose-700 text-center mb-4">Ade Fauzi</h2>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-6" />

              <p className="leading-relaxed text-rose-700/90 text-base sm:text-lg whitespace-pre-line">
                {`Selamat ulang tahun ya. Kamu itu seperti bunga mawar yang indah, selalu membawa warna dan ketenangan setiap kali aku melihatmu. Terima kasih karena kamu sudah nemenin aku dan selalu sabar saat di dekat aku. Maaf kalau hari ini aku hanya bisa kasih ini, tapi semuanya aku tulis dari hati. Dan buat kamu, Ade Fauzi… kamu adalah alasan kecil kenapa hari-hari aku jadi lebih berarti. Aku sangat rindu kamu, lebih dari yang bisa aku ucapkan. Semoga kamu selalu bahagia, dan semoga aku bisa tetap jadi orang yang bikin kamu tersenyum.`}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  <span>🌹</span>
                  <span className="text-sm font-medium">Dengan cinta yang tulus</span>
                </div>
                <div className="text-2xl">💐 💞 💐</div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-sm text-rose-500">Semoga harimu dipenuhi senyum dan bunga mawar.</p>
        </section>
      </main>
    </div>
  )
}

function RoseCorner({ direction = 'left' }) {
  const isLeft = direction === 'left'
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isLeft ? '' : 'scale-x-[-1]'}
    >
      <defs>
        <linearGradient id="roseGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <path d="M10 80 C 10 40, 40 10, 80 10" stroke="url(#roseGradient)" strokeWidth="2.5" fill="none" />
      <g transform="translate(56,16)">
        <circle cx="0" cy="0" r="10" fill="#f43f5e" />
        <circle cx="-4" cy="-2" r="8" fill="#fb7185" />
        <circle cx="3" cy="2" r="6" fill="#fda4af" />
      </g>
      <path d="M48 36 C 44 42, 40 46, 34 50" stroke="#84cc16" strokeWidth="3" fill="none" />
      <path d="M40 44 Q 36 40, 30 40 Q 34 46, 40 44" fill="#86efac" />
    </svg>
  )
}
