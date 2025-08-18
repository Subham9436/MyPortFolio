import { useRef, useState } from "react";
import { BottomContact } from "../components/bottom-3d-model/bottomModel";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    yourmsg: "",
  });

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
      );

      setFormdata({
        name: "",
        email: "",
        yourmsg: "",
      });
      toast.success("Form Sent");
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Error Sending Form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="form">
      <div className="flex-center">
        <div className=" mt-5 border-2 rounded-full w-85 bg-gray-700/45 flex-center">
          📄Have questions or ideas? Let’s talk!🚀
        </div>
      </div>
      <div className="flex-center text-4xl mt-3 font-semibold">
        Get in Touch – Let’s Connect
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-10">
          <div className="p-2  bg-gray-950 w-150 flex-center  mt-5 ml-10 rounded-lg">
            <form onSubmit={handlesubmit} ref={formRef} className="text-white">
              <div className="mt-10 text-2xl">
                <label>Your Name</label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="  Whats Your Good Name?"
                className="text-white bg-gray-700/45 w-86 rounded-lg h-10"
                value={formdata.name}
                onChange={handlechange}
              />
              <div>
                <div className="mt-10 text-2xl">
                  <label>Your Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="  Whats Your Email Address?"
                  className="text-white bg-gray-700/45 w-86 rounded-lg h-10"
                  value={formdata.email}
                  onChange={handlechange}
                />
              </div>
              <div>
                <div>
                  <div className="mt-10 text-2xl">
                    <label>Your Message</label>
                  </div>
                  <textarea
                    name="yourmsg"
                    placeholder="How Can I Help You?"
                    className="text-white bg-gray-700/45 w-86 rounded-lg h-45 p-3 align-top"
                    value={formdata.yourmsg}
                    onChange={handlechange}
                  ></textarea>
                </div>
              </div>
              <button
                className="flex-center border-2 bg-white text-black rounded-lg w-56 h-10 ml-15 mt-8 font-semibold"
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Right 3-D Model */}
        <figure>
          <div className="size-186 items-center  justify-center">
            <BottomContact />
          </div>
        </figure>
      </div>
    </div>
  );
}
