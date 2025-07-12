export default function ContactFormSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between md:items-stretch shadow-xl rounded-2xl bg-white border border-gray-200">
        {/* Form */}
        <div className="flex-1 p-8 flex flex-col justify-center rounded-l-2xl">
          <h2 className="text-black font-bebas text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-base font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" required placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Mobile Number <span className="text-red-500">*</span></label>
              <input type="tel" required placeholder="Enter Your Mobile Number" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">City <span className="text-red-500">*</span></label>
              <input type="text" required placeholder="Enter Your City Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Project Size (SQ Feet) <span className="text-red-500">*</span></label>
              <input type="text" required placeholder="Enter Your Project Size" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Project location <span className="text-red-500">*</span></label>
              <input type="text" required placeholder="Enter Your Project location" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Your Requirements <span className="text-red-500">*</span></label>
              <textarea required placeholder="Enter Your Requirements" className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <button type="submit" className="mt-2 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-900 transition">Submit</button>
          </form>
        </div>
        {/* Map */}
        <div className="flex-1 p-4 flex items-center justify-center rounded-r-2xl">
          <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.954866750857!2d80.992578!3d26.873175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzIzLjQiTiA4MMKwNTknMzMuMyJF!5e0!3m2!1sen!2sin!4v1752338550592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 