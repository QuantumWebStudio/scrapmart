"use client";

const About = () => {
  return (
    <section
      id="about"
      className=" min-h-dvh relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://example.com/scrap-warehouse.jpg')", // Replace with actual image URL
      }}
    >
      <div className="bg-black  rounded-xl bg-opacity-60 p-8  shadow-lg max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Scrap Mart</h2>
        <p className="text-lg leading-relaxed">
          Welcome to <strong>SCRAP MART</strong>, your trusted partner in scrap
          management. Founded as a solution to the growing need for sustainable
          scrap collection and recycling, we are committed to bridging the gap
          between scrap collectors and businesses. Our mission is to ensure that
          waste materials find a second life, while creating a greener, more
          sustainable environment for future generations.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          At <strong>SCRAP MART</strong>, we pride ourselves on innovation,
          transparency, and eco-friendly practices. Join us on our journey to
          reshape how scrap is managed and recycled.
        </p>
      </div>
    </section>
  );
};

export default About;
