import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiPaperPlane, BiMessageDetail, BiUser } from "react-icons/bi";
import { IoCheckmarkCircle } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendToTelegram = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const BOT_TOKEN = "8227905007:AAGkohqSa5HoNfokQ6TBUkqDPWIR1IMUeRY"
    const CHAT_ID = "5409529185"

    const text = `📩 Yangi xabar:\n\n👤 Ism: ${name}\n💬 Xabar: ${message}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
          }),
        }
      );

      setName("");
      setMessage("");
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 via-base-100 to-base-200">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="card bg-base-100 shadow-2xl border border-base-content/5 p-6 sm:p-8 lg:p-10">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 bg-warning/10 px-4 sm:px-6 py-2 rounded-full border border-warning/30">
              <BiMessageDetail className="text-warning text-lg sm:text-xl" />
              <span className="text-xs sm:text-sm font-semibold text-warning uppercase tracking-wider">
                Aloqa
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-warning via-orange-500 to-warning bg-clip-text text-transparent">
                Biz bilan bog'lanish
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 sm:w-16 bg-warning rounded-full"></div>
              <BiPaperPlane className="text-warning text-xl sm:text-2xl" />
              <div className="h-1 w-12 sm:w-16 bg-warning rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-warning/5 to-orange-500/5 border border-warning/20 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10">
            <p className="text-center text-sm sm:text-base lg:text-lg text-base-content/80 leading-relaxed">
              Savolingiz, taklifingiz yoki fikringiz bormi? Quyidagi forma orqali
              bizga yozing — xabaringiz to'g'ridan-to'g'ri Telegram'ga keladi.
              <span className="block mt-2 font-semibold text-warning">
                📞 Telefon raqamingizni kiritishni unutmang!
              </span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={sendToTelegram} className="space-y-5 sm:space-y-6">
            
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base sm:text-lg font-semibold flex items-center gap-2">
                  <BiUser className="text-warning text-xl" />
                  Ismingiz
                </span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
                className="input input-bordered input-warning w-full text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-warning/50 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base sm:text-lg font-semibold flex items-center gap-2">
                  <BiMessageDetail className="text-warning text-xl" />
                  Xabaringiz va Telefon raqamingiz
                </span>
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Telefon raqamingizni va xabaringizni yozing..."
                className="textarea textarea-bordered textarea-warning w-full h-32 sm:h-40 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-warning/50 transition-all resize-none"
              ></textarea>
              <label className="label">
                <span className="label-text-alt text-xs sm:text-sm text-base-content/60">
                  Masalan: +998 90 123 45 67 - Sizning xabaringiz...
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning btn-lg w-full sm:w-auto px-8 sm:px-10 text-base sm:text-lg font-bold shadow-lg hover:shadow-warning/50 transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <BiPaperPlane className="text-xl" />
                    Yuborish
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {success && (
              <div className="alert alert-success shadow-lg animate-pulse">
                <IoCheckmarkCircle className="text-2xl sm:text-3xl" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Muvaffaqiyatli!</h3>
                  <div className="text-xs sm:text-sm">Xabaringiz yuborildi. Tez orada javob beramiz!</div>
                </div>
              </div>
            )}
          </form>
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;