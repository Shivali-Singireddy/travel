import Image from 'next/image'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'

export default function MauiPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">

      {/* Title Section (moved above the image) */}
      <div className="mt-2 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-purple-900 mb-6">4 Day Itinerary in Maui: Hostels, Hikes & Haleakalā Sunsets</h2>
      </div>

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

      {/* Text Section */}
      <div className="mt-8 max-w-3xl text-left">
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Accommodation:</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            We stayed at the Aloha Surf Hostel for this trip, and it felt worth it to me. 
            The price was around $70 per night including tax. 
            Accommodation and food across the Hawaiian islands tend to be pricey, which isn’t surprising given that Hawaii is a remote island chain that relies heavily on imported goods. 
            Still, the experience made it a great value for what we got.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            However, what attracts me to a hostel for this island was the built-in “free” organized tours they run with the hostel. 
            I put the “free” in quotations because it is recommended that you tip ~$20-$30 to your guide. 
            However, considering that guided tours on sites such as GetYourGuide and Viator are around $100, this is still a steal.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Another reason I chose to stay at a hostel for this trip was the sense of community. 
            I really enjoyed connecting with other travelers, whether it was in my room or during the organized hostel tours. 
            After the day’s adventures, there was always a group of friendly, like-minded people hanging out in the common areas, eager to explore more of the island or just relax together. 
            It was easy to find someone up for joining in on any activity, which made the whole experience even more memorable.
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            With Aloha Surf in particular, there was a hot tub to relax our muscles in after a long hike and a cozy firepit for s’mores, which I loved. 
            Plus, every morning they had ingredients to make a free pancake breakfast with coffee. 
            Here’s my confession for this post: I actually learned to make chocolate chip pancakes for the first time (please don’t judge me, I’m a little spoiled)
          </p>
        </section>
      
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Road to Hana</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            Road to Hana has a bunch of waterfalls with waterholes...
          </p>
        </section>
      
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Haleakala</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            We did Haleakala on our own and rented a car...
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            There are two sides to Haleakala: the dry side and the wet...
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            There are two options for sunset...
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            While we did not go to the wet side, I read that the Pipiwau Trail...
          </p>
        </section>
      
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-300">Waihee Ridge & Other Hikes</h3>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            My favorite part of Maui was Waihee Ridge which was a 3-4 mile hike...
          </p>
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mt-2">
            Another hike I would recommend that we didn’t have time for is Iao Valley.
          </p>
        </section>
      </div>

  )
}
