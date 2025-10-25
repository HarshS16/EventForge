import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-gray-900 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper">
          <h3 className="h3-bold text-center sm:text-left text-white">Create New Event</h3>
          <p className="p-regular-20 mt-2 text-gray-400">Share your event with the community</p>
        </div>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent