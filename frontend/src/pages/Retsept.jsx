import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Retsept = () => {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    desc: "",
    cook: "",
    publishing_date: "",
    img: "",
    cook_time: "",
    category: "",
    ingredients: ["", "", "", "", ""],
    steps: ["", "", "", "", ""],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, field) => {
    const updated = [...form[field]];
    updated[index] = e.target.value;
    setForm({ ...form, [field]: updated });
  };

  const addRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const newRecipe = {
      ...form,
      rating: Number(form.rating),
      cook_time: Number(form.cook_time),
    };

    try {
      await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      });

      setForm({
        name: "",
        rating: "",
        desc: "",
        cook: "",
        publishing_date: "",
        img: "",
        cook_time: "",
        category: "",
        ingredients: ["", "", "", "", ""],
        steps: ["", "", "", "", ""],
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      {/* Padding mobil qurilmalar uchun px-4 qilib o'zgartirildi */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="card bg-base-100 shadow-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-warning mb-8">
            Yangi retsept qo‘shish
          </h1>

          <form onSubmit={addRecipe} className="space-y-6">
            {/* Inputlar gridi: Mobilda 1 ustun, Kompyuterda 2 ustun */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Taom nomi"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="rating"
                type="number"
                step="0.1"
                value={form.rating}
                onChange={handleChange}
                placeholder="Rating (masalan 4.9)"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="desc"
                value={form.desc}
                onChange={handleChange}
                placeholder="Qisqacha tavsif"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="cook"
                value={form.cook}
                onChange={handleChange}
                placeholder="Oshpaz"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="publishing_date"
                value={form.publishing_date}
                onChange={handleChange}
                placeholder="Nashr sanasi"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="img"
                value={form.img}
                onChange={handleChange}
                placeholder="Rasm URL"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="cook_time"
                type="number"
                value={form.cook_time}
                onChange={handleChange}
                placeholder="Pishirish vaqti (daqiqa)"
                className="input input-bordered input-warning w-full"
                required
              />
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Kategoriya"
                className="input input-bordered input-warning w-full"
                required
              />
            </div>

            {/* Masalliqlar va Bosqichlar: Mobilda 1 ustun, Kompyuterda 2 ustun */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-warning">
                  Masalliqlar (5 ta)
                </h3>
                {form.ingredients.map((ing, i) => (
                  <input
                    key={i}
                    value={ing}
                    onChange={(e) => handleArrayChange(e, i, "ingredients")}
                    placeholder={`Ingredient ${i + 1}`}
                    className="input input-bordered input-warning w-full mb-2"
                    required
                  />
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-warning">
                  Tayyorlash bosqichlari (5 ta)
                </h3>
                {form.steps.map((step, i) => (
                  <input
                    key={i}
                    value={step}
                    onChange={(e) => handleArrayChange(e, i, "steps")}
                    placeholder={`Step ${i + 1}`}
                    className="input input-bordered input-warning w-full mb-2"
                    required
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning btn-md md:btn-lg px-6 md:px-10 w-full md:w-auto"
              >
                {loading ? "Qo‘shilmoqda..." : "Retsept qo‘shish"}
              </button>
            </div>

            {success && (
              <p className="text-center text-success text-lg mt-4 font-medium">
                ✅ Retsept muvaffaqiyatli qo‘shildi!
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retsept;