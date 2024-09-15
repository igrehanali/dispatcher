const testimonials = [
  {
    name: "Mike B.",
    role: "Trucker",
    message:
      "I highly recommend this truck dispatcher company—their rates are unbeatable and their services are top-notch. Thank you.",
  },
  {
    name: "John P.",
    role: "Trucker",
    message:
      "The support team was extremely helpful and responsive, answering all of my questions and providing expert guidance along the way.",
  },
  {
    name: "Jonathan T.",
    role: "Truck Owner",
    message:
      "I was able to find new loads quickly and easily, thanks to the extensive network of providers available with them!",
  },
  // Add more testimonials to reach at least 10
  {
    name: "Sarah K.",
    role: "Freight Manager",
    message:
      "I appreciate their prompt support and the overall smooth process of working with this logistics company.",
  },
  {
    name: "Tom W.",
    role: "Logistics Coordinator",
    message:
      "Their team is very knowledgeable and helped streamline our shipping process with minimal hassle.",
  },
  {
    name: "Lisa M.",
    role: "Truck Owner",
    message:
      "Their online platform makes it easy to find and book loads. I highly recommend them.",
  },
  {
    name: "Robert F.",
    role: "Fleet Manager",
    message:
      "This company helped us improve our operations and save a lot on transportation costs. Their service is invaluable.",
  },
  {
    name: "Nina S.",
    role: "Freight Broker",
    message:
      "The communication and support from their team are outstanding. We rely on them for a large part of our shipping needs.",
  },
  {
    name: "James C.",
    role: "Dispatcher",
    message:
      "Their platform is easy to use, and the rates are always competitive. I've had a great experience working with them.",
  },
  {
    name: "Alex H.",
    role: "Logistics Specialist",
    message:
      "I was able to manage multiple shipments efficiently using their services. Their team is responsive and reliable.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-white" id="Reviews">
      <div className="text-center">
        <h2 className="text-[#51CFED] font-bold text-xl md:text-3xl">
          TESTIMONIAL
        </h2>
        <h3 className="text-black text-4xl md:text-5xl font-semibold leading-tight my-8">
          Our Clients Say!
        </h3>
      </div>

      {/* Testimonial Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 py-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[290px] lg:w-[280px] flex-shrink-0 bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  {/* Placeholder for user avatar */}
                  <span className="text-2xl text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="text-black font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
              <p className="text-gray-600 mt-4">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
