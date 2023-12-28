import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../../public/animation/Animation - 1703788916637.json";
import contactAnimation from "../../../../public/animation/Animation - 1703790422718.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgvvdlo");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 500 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;





































































































// import "./contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-us">
//       <h1 className="title">
//         <span className="icon-envelope-o"></span>
//         contact us
//       </h1>

//       <p className="sub-title">
       
//         contact us for more information Get notified when I publish something
//         new, and unsubscribe at any time.
//       </p>
//       <div className="flex">
//         <form className="">
//           <div className="flex">
//             <label htmlFor="email">Email Address</label>
//             <input  required type="email" id="email" />
//           </div>
//           <div  className="flex" style={{marginTop:'24px'}}>
//             <label htmlFor="message"> For Message</label>
//             <textarea required  name ='' id="message"></textarea>
//           </div>
//           <button className="submit"> submit</button>
//         </form>
//         <div className="animation"></div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
