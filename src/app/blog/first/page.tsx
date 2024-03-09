import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function BlogFirstPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAccordion = () => {
      const accordionHeaders = document.querySelectorAll(".accordion-header");

      accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
          const content = header.nextElementSibling;
          if (content) {
            content.classList.toggle("hidden");
          }
        });
      });
    };

    // Only run the accordion functionality on the client-side
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        if (content) {
          content.classList.toggle("hidden");
        }
      });
    });

    // Clean up the event listeners on component unmount
    return () => {
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", handleAccordion);
      });
    };
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Mastering Head and Neck Ultrasound</title>
        <meta
          name="description"
          content="Learn advanced techniques for head and neck ultrasound examinations with our interactive online course."
        />
      </Head>
      <main className="bg-gray-900 text-white">
        <section className="hero py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hero-content">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Mastering Head and Neck Ultrasound
                </h1>
                <p className="text-lg mb-8">
                  Take your skills to the next level with our comprehensive
                  course on head and neck ultrasound examinations.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded">
                  Enroll Now
                </button>
              </div>
              <div className="hero-image">
                <Image
                  src="/images/ultrasound.jpg"
                  alt="Head and Neck Ultrasound"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="features bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Course Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">
                  Interactive Case Studies
                </h3>
                <p>
                  Practice with real-world case studies and get feedback on your
                  technique.
                </p>
              </li>
              <li className="bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">Expert Instruction</h3>
                <p>
                  Learn from experienced radiologists with years of expertise in
                  head and neck ultrasound.
                </p>
              </li>
              <li className="bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">
                  Continuing Education Credits
                </h3>
                <p>
                  Earn continuing education credits upon successful completion
                  of the course.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="curriculum py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Course Curriculum</h2>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-header bg-gray-700 p-4 rounded-lg shadow cursor-pointer">
                  <h3 className="text-xl font-bold mb-0">
                    Introduction to Head and Neck Ultrasound
                  </h3>
                </div>
                <div className="accordion-content bg-gray-800 p-4 rounded-lg shadow mt-2">
                  <p>
                    Overview of the anatomy, indications, and techniques for
                    head and neck ultrasound examinations.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header bg-gray-700 p-4 rounded-lg shadow cursor-pointer">
                  <h3 className="text-xl font-bold mb-0">Thyroid Ultrasound</h3>
                </div>
                <div className="accordion-content bg-gray-800 p-4 rounded-lg shadow mt-2 hidden">
                  <p>
                    Detailed exploration of thyroid ultrasound, including
                    evaluation of nodules and cancer screening.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header bg-gray-700 p-4 rounded-lg shadow cursor-pointer">
                  <h3 className="text-xl font-bold mb-0">Neck Ultrasound</h3>
                </div>
                <div className="accordion-content bg-gray-800 p-4 rounded-lg shadow mt-2 hidden">
                  <p>
                    Techniques for evaluating lymph nodes, salivary glands, and
                    other neck structures.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header bg-gray-700 p-4 rounded-lg shadow cursor-pointer">
                  <h3 className="text-xl font-bold mb-0">
                    Advanced Techniques
                  </h3>
                </div>
                <div className="accordion-content bg-gray-800 p-4 rounded-lg shadow mt-2 hidden">
                  <p>
                    Learn about Doppler ultrasound, elastography, and other
                    advanced techniques for head and neck imaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-gray-700 p-6 rounded-lg shadow">
                <p className="mb-4">
                  "This course has transformed my approach to head and neck
                  ultrasound examinations. The interactive case studies were
                  invaluable in honing my skills."
                </p>
                <cite className="font-bold">- Dr. Emily Johnson</cite>
              </blockquote>
              <blockquote className="bg-gray-700 p-6 rounded-lg shadow">
                <p className="mb-4">
                  "The expert instruction and comprehensive curriculum make this
                  course a must-take for any radiologist interested in advancing
                  their ultrasound practice."
                </p>
                <cite className="font-bold">- Dr. Michael Thompson</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="notification py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Stay Updated on New Releases
            </h2>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white rounded-l-lg py-3 px-4 mb-4 md:mb-0 md:mr-2 flex-grow"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="enroll bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Enroll Today</h2>
            <p className="mb-8">
              Take your radiology practice to new heights with our "Mastering
              Head and Neck Ultrasound" course.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded">
              Enroll Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
