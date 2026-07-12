import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface ProjectData {
  week: number;
  path: string;
  title: string;
  subject: string;
  description: string;
  tags: string[];
  color: string;
  bg: string;
  border: string;
  badge: string;
}

export default function ProjectItem({ project, isLast }: { project: ProjectData, isLast?: boolean }) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[23px] top-12 bottom-[-24px] w-[2px] bg-gradient-to-b from-pink-200 via-pink-100 to-transparent" />
      )}
      
      {/* Timeline dot */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative z-10 flex-shrink-0 mt-2"
      >
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-sm border-4 border-white ${project.badge} relative`}>
          <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-pink-400"></span>
          W{project.week}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex-1 pb-12"
      >
        <Link
          to={project.path}
          className={`group block rounded-2xl border border-gray-100 bg-white p-6 md:p-8 hover:shadow-[0_8px_30px_rgb(236,72,153,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
        >
          {/* Subtle background glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

          {/* Gradient line */}
          <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${project.color} mb-5`} />

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              {/* Title with slightly more academic/serif-like elegance if wanted, but bold sans works well */}
              <h3 className="font-bold text-gray-800 text-xl md:text-2xl mb-2 group-hover:text-pink-700 transition-colors tracking-tight">
                {project.title}
              </h3>
              
              {/* Subject */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                {project.subject}
              </div>
            </div>
            
            <span className="text-pink-300 group-hover:text-pink-500 group-hover:translate-x-2 transition-all text-2xl mt-1 hidden md:block">
              →
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1.5 ${project.bg} ${project.border} border text-gray-600 rounded-full font-medium transition-colors`}
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
