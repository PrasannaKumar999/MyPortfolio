import React from "react";
import { ContactStyles } from "../styles/components/ContactStyles";

export const Contact = () => {
  const contactDetails = [
    {
      title: "Call me",
      description: "7036770673",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            class="jsx-f5bdca191b037f2b"
          ></path>
        </svg>
      ),
      action: "call",
    },
    {
      title: "Email me",
      description: "prasannakumar1530@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect
            width="20"
            height="16"
            x="2"
            y="4"
            rx="2"
            class="jsx-f5bdca191b037f2b"
          ></rect>
          <path
            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
            class="jsx-f5bdca191b037f2b"
          ></path>
        </svg>
      ),
      action: "email",
    },
    {
      title: "Address",
      description: "Hyderabad, India",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-map-pin"
        >
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            class="jsx-f5bdca191b037f2b"
          ></path>
          <circle cx="12" cy="10" r="3" class="jsx-f5bdca191b037f2b"></circle>
        </svg>
      ),
    },
  ];
  return (
    <>
      <style jsx>{ContactStyles}</style>
      <div className="ContactMainContainer">
        <div className="contactHeader">Contact</div>
        <div className="textContainer">
          <div className="txtDiscuss">
            Let's Discuss Your <span>Project</span>{" "}
          </div>
          <div className="textBottom">
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual
          </div>
        </div>
        <div className="contactBottomContainer">
          <div className="leftContainer">
            {contactDetails.map((ele) => (
              <div className="contactDetailContainer">
                <div className="icon">{ele?.icon}</div>
                <div className="detailContainer">
                  <div className="detailHeader">{ele?.title}</div>
                  <div className="detailDesc">
                    {ele?.description == "call" ? (
                      <a href="tel:7036770673">{ele.description}</a>
                    ) : (
                      <a href={`mailto:${ele.description}`}>
                        {ele.description}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rightContainer">
            <input
              type="text"
              className="inputContainer"
              placeholder="Full name"
            />
            <div className="inputsContainer">
              <input
                type="text"
                className="inputContainer"
                placeholder="Your email"
              />
              <input
                type="text"
                className="inputContainer"
                placeholder="Phone number"
              />
            </div>
            <textarea
              className="inputContainer textView"
              placeholder="Your message"
            />
          </div>
        </div>
        <div className="btnSubmitMsg">Submit Message</div>
      </div>
    </>
  );
};
