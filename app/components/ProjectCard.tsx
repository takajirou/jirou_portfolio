import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    index: number;
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    index,
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800"
        >
            <div className="relative aspect-video overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ホバー時のリンク */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {liveUrl && (
                        <motion.a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">ライブ</span>
                        </motion.a>
                    )}
                    {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">GitHub</span>
                        </motion.a>
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl mb-2 text-white">{title}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
export default ProjectCard;
