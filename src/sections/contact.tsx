import { useRef, useState } from "react";
import { BottomContact } from "../components/bottom-3d-model/bottomModel";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
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
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!
      );

      setFormdata({ name: "", email: "", yourmsg: "" });
      toast.success("Form Sent");
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Error Sending Form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="form" className="px-4 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="flex justify-center">
        <div className="mt-5 border-2 rounded-full px-6 py-2 bg-gray-700/45 text-center text-sm sm:text-base">
          📄 Have questions or ideas? Let’s talk! 🚀
        </div>
      </div>
      <div className="flex justify-center text-center text-2xl sm:text-3xl lg:text-4xl mt-4 font-semibold">
        Get in Touch – Let’s Connect
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 mt-8 items-center">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-gray-950 p-6 sm:p-10 rounded-lg shadow-lg">
          <form
            onSubmit={handlesubmit}
            ref={formRef}
            className="text-white space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-lg sm:text-xl font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What's your good name?"
                className="w-full text-white bg-gray-700/45 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formdata.name}
                onChange={handlechange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg sm:text-xl font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="What's your email address?"
                className="w-full text-white bg-gray-700/45 rounded-lg h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formdata.email}
                onChange={handlechange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg sm:text-xl font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="yourmsg"
                placeholder="How can I help you?"
                className="w-full text-white bg-gray-700/45 rounded-lg h-32 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formdata.yourmsg}
                onChange={handlechange}
              ></textarea>
            </div>

            {/* Button */}
            <button
              className="w-full sm:w-auto px-6 py-2 border-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right 3D Model */}
        <figure>
          <div className="size-186 items-center  justify-center">
            <BottomContact />
          </div>
        </figure>
      </div>
    </div>
  );
}
