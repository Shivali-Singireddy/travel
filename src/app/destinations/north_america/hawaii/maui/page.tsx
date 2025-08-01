import Image from 'next/image'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'

export default function MauiPostPage() {
  return  (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">

      {/* Main Title */}
      <header className="mt-2 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">
          4-Day Maui Itinerary: Hostels, Hikes & Haleakalā Sunsets
        </h1>
      </header>

      {/* Image */}
      <div className="w-full max-w-[1000px] border border-gray-300 overflow-hidden">
        <Image
          src={maui_post}
          alt="Maui Post"
          width={1000}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Content */}
      <main className="mt-8 max-w-3xl text-left">

        {/* Section: Where to Stay */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Where to Stay in Maui on a Budget
          </h2>

          <h3 className="text-xl font-semibold mb-2">Why Aloha Surf Hostel Was the Perfect Base for Our Trip</h3>
          <p className="text-base text-gray-800 leading-relaxed">
            We stayed at the Aloha Surf Hostel for this trip...
          </p>
          {/* Include other accommodation-related paragraphs here */}

          {/* Subsection: Hostel Tours */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">How the Hostel Tours Work</h3>
            <p className="text-base text-gray-800 leading-relaxed">
              Since they can’t fit everyone on every tour, they run a sign-up system. You can sign up for the next day’s tours starting around 10am, once the current day’s tour departs. Each day of the week has specific tours, which you can check on their website.
            </p>

            <p className="text-base text-gray-800 leading-relaxed mt-4">
              Here is what we did:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>Wednesday: Arrive and signed up for Road to Hana Tour</li>
              <li>Thursday: Road to Hana</li>
              <li>Friday: Signed up for Waihee Ridge and then left for Haleakala</li>
              <li>Saturday: Waihee Ridge and catch evening flight</li>
            </ul>

            <p className="text-base text-gray-800 leading-relaxed mt-4">
              If I were to plan this again, I would try to arrive on Tuesday to try to sign up for the ʻĪao Valley tour on Wednesday since I’ve heard amazing things about this hike as well.
            </p>
          </div>
        </section>

        {/* Section: Itinerary Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Our 4-Day Maui Itinerary
          </h2>

          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li><strong>Day 1:</strong> Arrival & Road to Hana Tour Sign-Up</li>
            <li><strong>Day 2:</strong> Full-Day Road to Hana Adventure</li>
            <li><strong>Day 3:</strong> Sunrise in Haleakalā & Sign-Up for Waihee Ridge</li>
            <li><strong>Day 4:</strong> Waihee Ridge Hike & Evening Departure</li>
          </ul>
        </section>

        {/* Section: Road to Hana */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Road to Hana
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Road to Hana has a bunch of waterfalls with waterholes...
          </p>
        </section>

        {/* Section: Haleakalā */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Haleakalā National Park
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            We did Haleakala on our own and rented a car...
          </p>
        </section>

        {/* Section: Waihee Ridge */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Waihee Ridge & Other Hikes
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            My favorite part of Maui was Waihee Ridge...
          </p>
        </section>

      </main>
    </div>
  )
}
