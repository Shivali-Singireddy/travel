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
          <p className="text-base text-gray-800 leading-relaxed">
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
              <li>Thursday: Road to Hana Tour</li>
              <li>Friday: Signed up for Waihee Ridge Tour and then left for Haleakala</li>
              <li>Saturday: Waihee Ridge Tour and catch evening flight</li>
            </ul>

            <p className="text-base text-gray-800 leading-relaxed mt-4">
              If I were to plan this again, I would try to arrive on Tuesday to try to sign up for the Īao Valley tour on Wednesday since I’ve heard amazing things about this hike as well.
              Now that we’ve gotten into where to stay, let’s dig into our itinerary for the trip:
            </p>
          </div>
        </section>

        {/* Section: Itinerary Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Day 0: Arrive in Maui and Relax at the Beach
          </h2>

          <p className="text-base text-gray-800 leading-relaxed mt-4">
            After landing at Maui airport, we took a bus to the city center of Paia, which was luckily just a 15-minute walk from the hostel. 
            Depending on where you are staying there are different buses to different parts of the island. 
            They run maybe once every one to two hours depending on which bus you are taking. 
            You can also take an Uber if you have a lot of luggage, but since we were going on a quick weekend trip we did not have that much.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mt-4">
            Once you arrive at your accommodation and check in, I would spend the rest of the day relaxing at the beach and soaking in the Maui sun. 
            I personally walked to Ho’okipa Beach from our hostel and found it super relaxing. 
            It was about an hour walk from Aloha Surf and I ended up getting a ride back for free.
          </p>
          
        </section>

        {/* Section: Road to Hana */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Day 1: Road to Hana
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            The Road to Hana is perhaps one of the most iconic activities to do while in Maui. 
            The road is 64 miles stretch of 600 twists and turns and 50 one lane bridges. 
            The scenery is filled with waterfalls and rainforest on the northeast coast.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Tip:</strong> One of the reasons I recommend doing this with a guided tour is because this drive is difficult with all the sharp turns, and the person volunteering to drive may get stressed and tired during the drive and will miss out on the views. 
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Luckily for us, our hostel did run a tour for this, so we were able to relax and enjoy the ride. 
            It also removed the stress of having to plan which waterholes we need to stop at and what we needed to see. 
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Our first stop on this tour was at Twin Falls, a waterfall hole you can swim in. 
            There are numerous of these waterfall swimming holes along the road to Hana and you can honestly choose to stop in any of them.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            After we enjoyed swimming in the water hole for a little bit, we continued on the tour until we stopped at some Rainbow Eucalyptus Trees. 
            This was honestly one of my favorite stops on the tour because I had never seen these types of trees before. 
            I’m not sure the exactly location my tour group stopped at, but I know that these trees can be found at Ke’anae Arboretum.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            Next we stopped by Ke’anae Peninsula which had some beautiful rock formations.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            After that we stopped at a local shop: Aunty Sandy's famous banana bread. 
            I was skeptical at first because I did not really see why the banana bread in this particular area would be so much better than the bread I might be able to get at home, but I was proven wrong. 
            Luckily, one of the other travelers on our tour shared some of their banana bread with me and it was honestly so good I had to buy more at the next stop. 
            There are multiple stops for banana bread, so if you aren’t able to find this particular one don’t worry as there are more stops further down the road.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            After this we made a quick stop at Upper Waikani Falls (3 Bears Falls). After that we went to a beach and another waterfall swimming hole before turning back to make our way back to Paia.
          </p>
          <p className="text-base text-gray-800 leading-relaxed">
            One stop we didn’t make but drove past was the 7 sacred waterfalls. If I were to go on this drive again, I would try to choose a tour that covered this.
          </p>
        </section>

        {/* Section: Haleakalā */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Day 2: Haleakalā National Park
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            We did Haleakala on our own and rented a car...
          </p>
        </section>

        {/* Section: Waihee Ridge */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Day 3: Waihee Ridge
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Waihee Ridge was my favorite part of the whole trip. We did it with the hostel crew, and it was the perfect end to our 3-day adventure. 
            The combination of hiking, stunning lush green valleys, panoramic ridge views, and a good group of people made it the most memorable. 
            The hike itself is 3-4 miles round trip, however it never felt strenuous. 
            In fact the trail was so nice that I ran it on the way down with my hands up to feel the breeze. 
            Did I look crazy? Probably. Was it worth it? 100%.
          </p>
        </section>

      </main>
    </div>
  )
}
