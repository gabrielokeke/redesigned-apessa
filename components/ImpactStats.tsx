'use client';
import { motion } from 'framer-motion';

const stats = [
  { number: '10,000+', label: 'Adolescents et jeunes impactés' },
  { number: '346,000', label: 'Adultes formés' },
  { number: '15+', label: 'Interventions' },
  { number: '11', label: 'Collèges et lycées' },
];

const ImpactStats = () => {
  return (
    <section className="bg-gradient-to-t from-red-50 to-white text-red-500 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12">
        {stats.map(({ number, label }, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-4xl md:text-5xl font-extrabold">{number}</p>
            <p className="mt-2 text-lg md:text-xl font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
