import React from "react";
import tuzalib_keting from "../assets/tuzaling.png";

const DailyRec = () => {
  return (
    <div className="py-8">
      <h1 className="text-5xl text-center font-bold text-warning mb-12">
        Kun tavsiyasi
      </h1>
      <div className="max-w-[90%] mx-auto flex flex-co  items-center gap-6">
        <figure className="flex-1">
          <img
            src={tuzalib_keting}
            className="w-[600px] h-auto rounded-2xl shadow-lg object-cover"
            alt="Tuzalib keting"
          />
        </figure>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-error mb-4">
            Biz kasal bo'lganimizda, sho'rva universal tanlovdir
          </h2>
          <p className="text-base text-base-content/80 leading-relaxed">
          Sho'rva har doim oddiy ovqat emas edi. Biror kishi kasal bo'lsa, a
            issiq kosa sho'rva ba'zan so'zlar kabi tasalli keltirishi mumkin
            mumkin emas. Dunyoning qayerida ekanligingiz muhim emas - odamlar
            birovga osh tayyorlash yoki xizmat qilishning oddiy mehrini tushunish
            kim o'zini yomon his qiladi. Tovuq sho'rva, sabzavotli sho'rva yoki miso xushbo'yligi
            sho'rva odamning g'amxo'rligini his qilishi mumkin. Suyuqlikning issiqligi
            tomoqni tinchitadi, oziq moddalar esa tanani davolashga yordam beradi. Xatto .. bo'lganda ham
            siz kasal odam bilan bir xil tilda gapirmaysiz,
            osh taklif qilish - bu hamma tushunadigan imo-ishora. Sho'rva ham
            xotiralarni olib yuradi. Ko'pchiligimiz bolaligimizda kasal bo'lganimizni eslaymiz va
            ota-ona yoki bobo-buvining mavjudligi bizni eng sevimli sho'rvaga aylantiradi.
            Bu g'amxo'rlik hissi universaldir. Bu oddiy harakat,
            lekin bu sevgi, g'amxo'rlik va g'amxo'rlikni ko'rsatadi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyRec;
