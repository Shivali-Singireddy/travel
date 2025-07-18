import Image from 'next/image'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'

export default function MauiPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="relative w-full" style={{ aspectRatio: '3 / 4', maxWidth: 1000 }}>
        {/* Image itself */}
        <Image
          src={maui_post}
          alt="Maui Post"
          width={800}
          height={600} // adjust this to match your 3:4 ratio
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          priority
        />
      </div>

      {/* Text Section */}
      <div className="mt-8 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold text-purple-900 mb-6 text-center">4 day itinerary in Maui</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Hostel Stay & Tours</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            We stayed at a hostel for this one and it was honestly the move. They do free tours so you don’t have to do any planning. While the tours are free, it’s recommended you tip ~$20-$30 which is reasonable given that outside tours are at least $100. The main things we did were Road to Hana, Haleakala, and Waihee Ridge.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Another positive about a tour is that you don’t have to drive Road to Hana, which is difficult to drive due to lots of twists and turns and the driver also misses the views.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Road to Hana</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            Road to Hana has a bunch of waterfalls with waterholes that you can swim in, the most famous one being the 7 sacred pools.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Haleakala</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            We did Haleakala on our own and rented a car. Haleakala also has no food or service after a certain point so it’s important that you pack lunch or buy to go to eat there, unless you plan on coming back down the mountain and going back up.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            There are two sides to Haleakala: the dry side and the wet/more rainforest side. We chose the dry side and went to the Leleiwi Overlook and the Kalahaku Lookout. We also did part of the Sliding Sands Trail. The descent is much faster than the ascent so expect the return trek to take about 1.5 times as long as the time it took to get to your current location and budget time accordingly.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            There are two options for sunset. Either you can watch at the Pu’u Ulaulu summit or Leleiwi Overlook. The summit is the more popular destination as it’s known for its sunrise. In fact, it’s gotten so crowded for sunrise that you now have to make reservations in advance if you want to go for sunrise although it’s only $1, but you don’t need a reservation for sunset. The other option is Leleiwi Overlook. The cool thing here is that right before sunset, you can observe the Brocken Spectre which can only be seen in high mountains and when certain light conditions are met.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            While we did not go to the wet side, I read that the Pipiwau Trail (2-4 hours) was a big highlight on that side.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Waihee Ridge & Other Hikes</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            My favorite part of Maui was Waihee Ridge which was a 3-4 mile hike we did with the hostel. The views were spectacular and the trail was so nice I ran it on my way down.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Another hike I would recommend that we didn’t have time for is Iao Valley.
          </p>
        </section>
      </div>
    </div>
  )
}
