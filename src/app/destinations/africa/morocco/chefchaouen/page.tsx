import Image from 'next/image'
import chefchaouen_photo from '@/app/destinations/africa/morocco/chefchaouen/chef_post.png'

export default function ChefchaouenPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAF5EF] border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      {/* Image placeholder - replace with actual image and path */}
      {/* <div className="relative w-full" style={{ aspectRatio: '3 / 2', maxWidth: 700 }}>
        <Image
          src={chefchaouen_photo}
          alt="Chefchaouen Blue Streets"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}

      <div className="mt-8 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold text-purple-900 mb-6 text-center">Chefchaouen</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Getting There</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            We took the CTM bus from Casablanca to Chefchaouen which was around $40 round trip. It was very simple to use and is pretty similar to the Greyhound.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Exploring the Blue Streets</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            One day is more than enough to walk around the blue streets of Chefchaouen. I would recommend going during the morning and taking a break at 12 for lunch to avoid prime heat. Then go back out around 4 when the shadows start coming back, lighting is softer, and it’s cooler.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            For photo locations, I recommend Sidi Bouchouka (go before 10 am or after 5pm) and Callejon El Asri. Also, visit Said’s Orange Juice Shop around 4pm to grab a refreshing orange juice and get a cute photo. The juice costs MAD 20 (~$2.00) and is perfect for the heat.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Along Avenue Hassan 1, you'll find lots of little stores and side streets filled with photo opportunities. Many places ask for a small tip (MAD 5, about $0.50) to take pictures; if you have cash, it’s worth it. Very few places accept cards, so bring enough cash.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Akchour Falls</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            To get to Akchour Falls, take a shared taxi from the taxi stop near the CTM bus station. The price is MAD 25 per person, and the process is easy – just wait for the taxi to fill up. Drivers will inform you of the price immediately.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            At Akchour, follow the crowd and street stalls along the road to the trailhead. There are two trails: left leads to the Lower Waterfalls and the Bigger Waterfall, right leads to God’s Bridge. I recommend the left trail; the right trail has a lot of elevation gain in pure sun and less rewarding views.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Near the start of both hikes are charming cafes and swimming spots that look like a fairy tale with turquoise waters, pink flowers, and quaint bridges. This area is easy for even casual hikers. You can relax by the river, swim, and try some of the best homecooked tangines I had in Morocco.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Kids often sell fresh figs nearby, which are surprisingly delicious — definitely try some!
          </p>
        </section>

        <p className="mt-8 italic text-center text-gray-600 dark:text-gray-400">
          Endless blue, endless bliss.
        </p>
      </div>
    </div>
  )
}
