'use client'

import DiscoverPage from '@/components/shared/DiscoverPage'

const Discover = () => {
  return (
    <>
      <section className="bg-gray-900 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper">
          <h3 className="h3-bold text-center sm:text-left text-white">Discover Events</h3>
          <p className="p-regular-20 mt-2 text-gray-400">Find amazing events happening around you</p>
        </div>
      </section>

      <section className="wrapper my-8">
        <DiscoverPage />
      </section>
    </>
  )
}

export default Discover