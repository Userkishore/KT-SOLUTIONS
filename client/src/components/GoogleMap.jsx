const GoogleMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Visit Our Store
        </h2>

        <div className="rounded-xl overflow-hidden shadow-xl">

          <iframe
            title="KT Solutions Location"
            src="https://www.google.com/maps?q=Macherla&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default GoogleMap;