import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHandPaper,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                <FaHandPaper className="text-2xl text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">SignSense AI</h2>

                <p className="text-sm text-slate-400">Smart ISL Glove</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Helping bridge communication between deaf and hearing communities
              through Artificial Intelligence and wearable technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Navigation</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#workflow" className="hover:text-blue-400">
                  Workflow
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>team@signsense.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Connect</h3>

            <div className="flex gap-4">
              <button className="rounded-xl bg-slate-800 p-4 transition hover:bg-blue-600">
                <FaGithub size={22} />
              </button>

              <button className="rounded-xl bg-slate-800 p-4 transition hover:bg-blue-600">
                <FaLinkedin size={22} />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 SignSense AI. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
