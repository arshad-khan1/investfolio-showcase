import React from "react";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="md:px-20 lg:px-40 section-padding bg-white">
      <div className="container mx-auto px-4 py-4">
        <h2 className="section-title">About Me</h2>

        {/* <h2 className="text-3xl font-bold text-navy mb-4">About Me</h2> */}

        <p className="text-xl text-gray-800 mb-2">
          I’m a finance enthusiast with a strong foundation in investment
          banking, valuation, and financial modeling. Currently pursuing an MBA
          in Finance, I’m passionate about driving strategic decision-making and
          unlocking value through high-impact financial analysis.
        </p>

        <p className="text-xl text-gray-800 mb-2">
          To me, finance is more than just numbers—it's about understanding
          business dynamics, structuring deals, and enabling sustainable growth.
          My academic and practical exposure has deepened my expertise in
          corporate finance, M&A, and data-driven decision-making.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-navy mb-4">
            What I Bring to the Table:
          </h3>
          <ul className="space-y-3 text-xl">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 flex-shrink-0 text-navy mt-1 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l-2-2 1.4-1.4L9 9.2l4.6-4.6L15 6l-6 6z" />
              </svg>
              <div>
                <p className="font-semibold text-navy">
                  Valuation &amp; Financial Analysis
                </p>
                <p className="text-gray-700">
                  Proficient in DCF modeling, trading comparables, and
                  fundamental analysis.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 flex-shrink-0 text-navy mt-1 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l-2-2 1.4-1.4L9 9.2l4.6-4.6L15 6l-6 6z" />
              </svg>
              <div>
                <p className="font-semibold text-navy">
                  Index Valuation &amp; Equity Research
                </p>
                <p className="text-gray-700">
                  Skilled in interpreting market trends and assessing financial
                  statements.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <svg
                className="w-5 h-5 flex-shrink-0 text-navy mt-1 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l-2-2 1.4-1.4L9 9.2l4.6-4.6L15 6l-6 6z" />
              </svg>
              <div>
                <p className="font-semibold text-navy">
                  Strategic Consulting &amp; Data Analysis
                </p>
                <p className="text-gray-700">
                  Leveraging analytical tools to solve complex financial
                  challenges.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
