import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <nav>
        <Navbar/>
      </nav>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="card bg-base-100 shadow-2xl p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-warning mb-6 sm:mb-8">
            Biz haqimizda
          </h1>

          <figure className="w-full h-48 sm:h-64 lg:h-[350px] mb-8 sm:mb-10 rounded-2xl overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/03/34/22/14/360_F_334221495_H02hLLEkLNnX952kVkLv1zOo4YfgCgnK.jpg"
              alt="Biz haqimizda"
              className="w-full h-full object-cover"
            />
          </figure>

          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Bizning maqsadimiz — har bir xonadonga mazali, sog'lom va ishonchli
            taomlar retseptlarini yetkazish. Bu loyiha mehr bilan pishiriladigan
            ovqatlar oilani birlashtiradi degan g'oya asosida yaratilgan.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Platformamizda siz dunyoning turli burchaklaridan eng sara
            retseptlarni topishingiz mumkin. Har bir taom sinchiklab tanlab
            olinadi, bir necha bor sinovdan o'tkaziladi va faqat shundan keyin
            sizga taqdim etiladi.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Biz sifatga, soddalikka va foydalanuvchi qulayligiga katta e'tibor
            beramiz. Har bir retsept aniq o'lchovlar, tushunarli bosqichlar va
            foydali maslahatlar bilan boyitilgan.
          </p>

          <div className="divider"></div>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-warning">
            Nega aynan biz?
          </h2>

          <ul className="list-disc mx-4 sm:mx-6 space-y-2 text-base sm:text-lg">
            <li>Oson va tez tayyorlanadigan retseptlar</li>
            <li>Sinovdan o'tgan va ishonchli taomlar</li>
            <li>Dunyo oshxonalaridan eng yaxshi tanlovlar</li>
            <li>Doimiy yangilanib boriladigan kontent</li>
          </ul>

          <div className="divider"></div>

          <p className="text-base sm:text-lg leading-relaxed text-center italic px-2 sm:px-0">
            "Mazali ovqat — bu shunchaki taom emas, bu mehr va e'tibor
            mahsulidir."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;