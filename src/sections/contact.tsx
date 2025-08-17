import { BottomContact } from "../components/bottom-3d-model/bottomModel";

export function Contact() {
  return (
    <div id="form">
      <div className="flex-center text-4xl mt-3 font-semibold">
        Get in Touch – Let’s Connect
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-10">
          <div className="p-2  bg-gray-950 w-150 flex-center  mt-5 ml-10 rounded-lg">
            <form>
              <div className="mt-10 text-2xl">
                <label>Your Name</label>
              </div>
              <input
                type="text"
                name="Your Name"
                placeholder="   Whats Your Good Name?"
                className="text-white bg-gray-700/45 w-86 rounded-lg h-10"
              />
              <div>
                <div className="mt-10 text-2xl">
                  <label>Your Email</label>
                </div>
                <input
                  type="text"
                  name="Your Name"
                  placeholder="   Whats Your Email Address?"
                  className="text-white bg-gray-700/45 w-86 rounded-lg h-10"
                />
              </div>
              <div>
                <div>
                  <div className="mt-10 text-2xl">
                    <label>Your Message</label>
                  </div>
                  <textarea
                    name="Your Name"
                    placeholder="How Can I Help You?"
                    className="text-white bg-gray-700/45 w-86 rounded-lg h-45 p-3 align-top"
                  ></textarea>
                </div>
              </div>
              <button className="flex-center border-2 bg-white text-black rounded-lg w-56 h-10 ml-15 mt-8 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Right 3-D Model */}
        <figure>
          <div className="size-186 items-center items-start justify-center">
            <BottomContact />
          </div>
        </figure>
      </div>
    </div>
  );
}
