import React from "react";
import {FiInstagram, FiFacebook, FiLinkedin, FiX, FiYoutube} from "react-icons/fi"
const chefs = [
  { name: "Jennifer Baker", role: "ASOSIY TARKIB", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s" },
  { name: "Chef 2", role: "ASOSIY TARKIB", img: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" },
  { name: "Chef 3", role: "ASOSIY TARKIB", img: "https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Chef 4", role: "ASOSIY TARKIB", img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Chef 5", role: "ASOSIY TARKIB", img: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg" },
  { name: "Chef 6", role: "RAQOBATCHILAR", img: "https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Chef 7", role: "RAQOBATCHILAR", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NV9q05F16g50huet5CWXj-AtbmH30NTR4A&s" },
  { name: "Chef 8", role: "RAQOBATCHILAR", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmt7mgLLJbU_An415Sur0-Iq8kRKQzzAwCw&s" },
  { name: "Chef 9", role: "Ta'tib ko'ruvchilar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCEA-EgV4ocW1dEvqPyYwau7oDdeZSXzKkw&s" },
  { name: "Chef 10", role: "Ta'tib ko'ruvchilar", img: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg" },
  { name: "Chef 11", role: "Ta'tib ko'ruvchilar", img: "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.jpg?s=612x612&w=0&k=20&c=fAox0qvGFqgFl1QbUXQ4Y6t_yW5Bl4HqFnvmD6uppHI=" },
];

const Oshpazlar = () => {
  const roles = ["ASOSIY TARKIB", "RAQOBATCHILAR", "Ta'tib ko'ruvchilar"];

  return (
    <div className="max-w-[90%] mx-auto bg-gradient-to-r from-warning/40 to-warning p-10 text-base-content rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-warning mb-8 flex justify-between">
          <span>Haqiqiy jamoa</span>
          <span className="text-base-100">Mashxur retseptchilar</span>
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="mb-4">
            Bizning hamjamiyatimiz bizni ajratib turadigan asosiy tarkibiy qism ekanligini bilamiz.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://www.orexca.com/img/cuisine/plov/uzbek-pilaf.jpg"
                alt="osh"
                className="w-30 h-30 rounded-full border-none"
              />
              <div>
                <h3 className="font-bold underline">O'zbekcha osh</h3>
                <p className="text-sm">
                  "Menga bu o'zbek taomi bo'lgan Osh juda ham yoqdi. Uni jufti halolimga tashladim, qilib berdi. Oila davrasida mazza qilib yevoldide."
                </p>
                <p className="text-xs font-bold mt-1">
                  MAYK VAZOVSKIY★, UNIVERSITET O'QUVCHISI, 2026 YIL
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6 text-base-content justify-flex-end">
              <span className="font-bold flex items-center gap-[10px]"><FiFacebook/> 3.9M</span>
              <span className="font-bold flex items-center gap-[10px]"><FiInstagram/> 2.2M</span>
              <span className="font-bold flex items-center gap-[10px]"><FiLinkedin/> 1.3M</span>
              <span className="font-bold flex items-center gap-[10px]"><FiX/> 678.4K</span>
              <span className="font-bold flex items-center gap-[10px]"><FiYoutube/> 1.8M</span>
            </div>
          </div>

          <div>
            {roles.map((role) => (
              <div key={role} className="mb-6">
                <h4 className="text-base-100 font-bold uppercase mb-2">
                  {role} →
                </h4>
                <div className="flex gap-4">
                  {chefs
                    .filter((chef) => chef.role === role)
                    .map((chef, idx) => (
                      <div key={idx} className="w-25 h-25 rounded-full">
                        <img
                          src={chef.img}
                          alt={chef.name}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oshpazlar;
