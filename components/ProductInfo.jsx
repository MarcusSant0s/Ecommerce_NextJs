'use client'
import React, {useState} from 'react'



const ProductInfo = ({details}) => {


    // Using useState to keep track of the open FAQ item
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Dummy data for the FAQs
  const faqs = [
    {
      question: "Medidas",
      answer:
        "Corrupti et natus ipsam voluptates recusandae ea. Corrupti ut voluptatum voluptatem. Ut aut delectus eius praesentium et saepe quam sit ea. Minus consequatur officia non temporibus asperiores ducimus in neque. Vel ad aut tenetur sequi quo aut nulla praesentium. Occaecati dolorem qui qui ut incidunt impedit quis omnis.",
    },
    {
      question: "Descrição",
      answer:details
    },
    {
      question: "Material",
      answer:
        "Tenetur est rem rerum facilis aspernatur harum sunt. Iusto omnis ut voluptatem neque maiores non ipsa. Non aut nam voluptas exercitationem perferendis natus. Rerum in aut velit aut enim ipsam maxime occaecati architecto. Ut dolor in et nemo dignissimos dolorum voluptates.",
    },

  ];

  // Function to toggle FAQ open state
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mt-10 w-full ">
        <div className="flex flex-col gap-y-12 md:grid md:grid-flow-row md:grid-cols-2 md:gap-8 lg:grid-cols-[0.8fr_1fr]">

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex-col items-stretch justify-start border-b border-gray-200"
              >
                <div
                  className="flex cursor-pointer items-center justify-between px-4 py-4 md:pb-7 md:pt-3"
                  onClick={() => toggleFaq(index)}
                >
                  <p className="text-lg font-medium md:text-xl select-none">
                    {faq.question}
                  </p>
                  <div className="ml-6 flex h-6 w-7 self-start md:w-6">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`rotate-90 transition-transform duration-500 ${openFaqIndex === index ? "-rotate-90" : ""}`}
                    >
                      <path
                        d="M16 12l-8 8 8 8"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === index && (
                  <div className="px-4 sm:px-8 py-4">
                    <p className="text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );


}

export default ProductInfo
