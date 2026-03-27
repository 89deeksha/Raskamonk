import { motion } from "framer-motion";
import { Smile, Star, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: <Smile size={28} />,
    value: "500+",
    label: "Happy Clients",
    desc: "நாங்கள் மீட்டுக் கொண்டுவர உதவிய புன்னகைகள் 💜",
  },
  {
    icon: <Star size={28} />,
    value: "98%",
    label: "Satisfaction",
    desc: "People trust and feel better",
  },
  {
    icon: <Users size={28} />,
    value: "50+",
    label: "Therapists",
    desc: "Experts who truly care",
  },
  {
    icon: <Clock size={28} />,
    value: "24/7",
    label: "Support",
    desc: "We’re always here for you",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/70 backdrop-blur-lg border border-purple-100 
                       shadow-lg rounded-2xl p-6 text-center 
                       hover:shadow-purple-200 transition-all duration-300"
          >
            <div className="flex justify-center mb-3 text-purple-600">
              {stat.icon}
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              {stat.value}
            </h2>

            <p className="text-gray-600 font-medium">
              {stat.label}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {stat.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
