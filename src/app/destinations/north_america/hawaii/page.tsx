import Link from 'next/link'

export default function HawaiiPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Hawaii</h1>
      <p>Welcome to the Hawaii page. Explore the beautiful islands!</p>

      {/* Clickable box linking to Maui */}
      <Link href="/destinations/north_america/hawaii/maui/page.tsx">
        <a
          className="
            mt-8 block
            border-2 border-teal-500 rounded-lg
            p-6
            text-center
            bg-teal-50 hover:bg-teal-100
            text-teal-700
            font-semibold
            cursor-pointer
            transition
            shadow-md
            hover:shadow-lg
            max-w-sm
            mx-auto
          "
          aria-label="Go to Maui page"
        >
          Explore Maui →
        </a>
      </Link>
    </div>
  )
}
