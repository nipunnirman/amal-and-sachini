"use client"


export default function ButterflyFlight() {
  return (
    <div className="butterfly-flight" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <div className={`butterfly-trail butterfly-trail-${index}`} key={index}>
          <svg className="fluttering-butterfly" viewBox="0 0 80 70" focusable="false">
            <g className="butterfly-wing butterfly-wing-left">
              <path d="M39 34C24 6 3 6 7 26C9 37 20 42 36 40C14 37 13 60 25 61C35 61 39 46 39 34Z" />
              <path className="butterfly-vein" d="M38 36L13 19M37 40L24 53M29 32L23 20" />
            </g>
            <g className="butterfly-wing butterfly-wing-right">
              <path d="M41 34C56 6 77 6 73 26C71 37 60 42 44 40C66 37 67 60 55 61C45 61 41 46 41 34Z" />
              <path className="butterfly-vein" d="M42 36L67 19M43 40L56 53M51 32L57 20" />
            </g>
            <path className="butterfly-body" d="M40 27C37 32 37 45 40 52C43 45 43 32 40 27Z" />
            <path className="butterfly-vein" d="M39 28Q34 17 31 20M41 28Q46 17 49 20" />
          </svg>
        </div>
      ))}
    </div>
  )
}
