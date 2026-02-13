import React from "react";
import { FiInstagram, FiFacebook, FiLinkedin, FiX, FiYoutube } from "react-icons/fi";

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
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto bg-gradient-to-br from-warning/50 via-warning/70 to-warning p-6 sm:p-8 lg:p-12 text-base-content rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-base-100/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warning/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warning drop-shadow-lg">
                Haqiqiy jamoa
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-100 drop-shadow-md">
                Mashxur retseptchilar
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-base-100 rounded-full mt-4"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Story & Testimonial */}
            <div className="space-y-6">
              <div className="bg-base-100/10 backdrop-blur-sm rounded-2xl p-6 border border-base-100/20 hover:bg-base-100/15 transition-all duration-300">
                <p className="text-base sm:text-lg leading-relaxed text-base-content/90">
                  Bizning hamjamiyatimiz bizni ajratib turadigan asosiy tarkibiy qism ekanligini bilamiz.
                </p>
              </div>

              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-base-100/20 to-base-100/10 backdrop-blur-md rounded-2xl p-6 border border-base-100/30 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-warning rounded-full blur-md group-hover:blur-lg transition-all"></div>
                    <img
                      src="https://www.orexca.com/img/cuisine/plov/uzbek-pilaf.jpg"
                      alt="osh"
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-base-100 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-base-100 mb-3 underline decoration-wavy decoration-warning underline-offset-4">
                      O'zbekcha osh
                    </h3>
                    <p className="text-sm sm:text-base text-base-content/90 leading-relaxed mb-3 italic">
                      "Menga bu o'zbek taomi bo'lgan Osh juda ham yoqdi. Uni jufti halolimga tashladim, qilib berdi. Oila davrasida mazza qilib yevoldide."
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-base-content/70 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-warning rounded-full animate-pulse"></span>
                      MAYK VAZOVSKIY★, UNIVERSITET O'QUVCHISI, 2026 YIL
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Stats */}
              <div className="bg-base-100/10 backdrop-blur-sm rounded-2xl p-6 border border-base-100/20">
                <h4 className="text-sm font-semibold text-base-100 mb-4 uppercase tracking-wider">
                  Ijtimoiy tarmoqlarda
                </h4>
                <div className="flex flex-wrap gap-4 lg:gap-6">
                  {[
                    { Icon: FiFacebook, count: "3.9M", color: "hover:text-blue-500" },
                    { Icon: FiInstagram, count: "2.2M", color: "hover:text-pink-500" },
                    { Icon: FiLinkedin, count: "1.3M", color: "hover:text-blue-600" },
                    { Icon: FiX, count: "678.4K", color: "hover:text-gray-700" },
                    { Icon: FiYoutube, count: "1.8M", color: "hover:text-red-500" },
                  ].map(({ Icon, count, color }, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 text-base-content font-bold transition-all duration-300 ${color} cursor-pointer hover:scale-110`}
                    >
                      <Icon className="text-xl sm:text-2xl" />
                      <span className="text-sm sm:text-base">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Team Members */}
            <div className="space-y-6 lg:space-y-8">
              {roles.map((role, roleIdx) => (
                <div
                  key={role}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${roleIdx * 0.2}s both`
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-0.5 bg-base-100/30 group-hover:bg-base-100/50 transition-colors"></div>
                    <h4 className="text-base sm:text-lg font-bold text-base-100 uppercase tracking-wide px-4 py-2 bg-base-content/10 rounded-full group-hover:bg-base-content/20 transition-all">
                      {role}
                    </h4>
                    <div className="flex-1 h-0.5 bg-base-100/30 group-hover:bg-base-100/50 transition-colors"></div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {chefs
                      .filter((chef) => chef.role === role)
                      .map((chef, idx) => (
                        <div
                          key={idx}
                          className="relative group/avatar"
                          style={{
                            animation: `scaleIn 0.5s ease-out ${idx * 0.1}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-warning to-base-100 rounded-full blur-md opacity-0 group-hover/avatar:opacity-70 transition-all duration-300"></div>
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-base-100 shadow-lg group-hover/avatar:shadow-2xl group-hover/avatar:scale-110 group-hover/avatar:border-warning transition-all duration-300 cursor-pointer">
                            <img
                              src={chef.img}
                              alt={chef.name}
                              className="w-full h-full object-cover group-hover/avatar:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-base-content/60 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                              <span className="text-base-100 text-xs font-semibold text-center px-2">
                                {chef.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Oshpazlar;