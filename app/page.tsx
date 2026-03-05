"use client";

import { motion } from "motion/react";
import { Github, Mail, ArrowDown } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";

export default function Home() {
    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({ behavior: "smooth" });
    };
    const projects = [
        {
            title: "Steady x Study",
            description:
                "2024後期個人制作 日々の目標設計をサポートする事で、勉強のモチベーションを保つ事を目的としたWebアプリケーション",
            image: "/img/steady.jpg",
            technologies: ["Next", "TypeScript", "supabase"],
            githubUrl: "https://github.com/takajirou/steadyxstudy",
        },
        {
            title: "ECoin",
            description:
                "2025前期個人制作 ユーザーに日々の小さなタスクと報酬を与える事で、環境問題を解決する事を目的としたモバイルアプリ",
            image: "/img/ecoin.png",
            technologies: ["React Native", "Go"],
            githubUrl: "https://github.com/takajirou/steadyxstudy",
        },
        {
            title: "JSolve",
            description:
                "2025後期個人制作 競プロ/コーディングテスト対策をする人に向けてのJS特化競プロ学習Webサイト",
            image: "/img/jsolve.png",
            technologies: ["Next", "Node", "prisma"],
            liveUrl: "https://j-solve.vercel.app/problems",
            githubUrl: "https://github.com/takajirou/JSolve",
        },
        {
            title: "たべごろ",
            description: "2025後期チーム制作",
            image: "/img/tabegoro.png",
            technologies: ["Next", "Node", "prisma"],
            liveUrl: "https://tabegoro.vercel.app/",
            githubUrl: "https://github.com/team-baba-nasi/production",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800"
            >
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl tracking-wider"
                    >
                        Takagi Soujirou&#39;s
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-6"
                    >
                        <a
                            href="#about"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            Works
                        </a>
                        {/* <a
                            href="#contact"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            Contact
                        </a> */}
                    </motion.div>
                </nav>
            </motion.header>

            <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
                            <span className="block">I&#39;m Fullstack</span>
                            <span className="block text-neutral-400">
                                Developer
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
                    >
                        「なぜそうなっているのか」を問い続けながら、
                        <br />
                        日常の課題をコードで解きほぐすことが好きです。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex gap-4 justify-center mb-12"
                    >
                        <motion.a
                            href="https://github.com/takajirou"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="mailto:soujirou.takagi@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </motion.a>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        onClick={scrollToProjects}
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                    >
                        <span>つくったものを見る</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </div>
            </section>

            <section id="about" className="py-24 px-6 bg-neutral-900/50">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>

                        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                            <div className="space-y-4 text-neutral-400 leading-relaxed flex-1">
                                <p>
                                    どうも、高木 湊二郎(たかぎ
                                    そうじろう)です！気になったことは深掘りせずにいられない、
                                    そんな性格のエンジニアです！
                                </p>
                                <p>
                                    フロントもバックもモバイルも、面白そうなものを興味の向くままに何でも触ってきました。
                                    「不便だな」「こうだったら良くない？」という日常のひっかかりが、
                                    だいたいものづくりのきっかけになっています。
                                </p>
                                <p>
                                    人前はもともと苦手だったんですが、それを言い訳にしたくなくて
                                    LTに登壇したりイベントスタッフに飛び込んだりしてきました。
                                    コードも会話も、どっちも得意になりたいなと思っています。
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="shrink-0"
                            >
                                <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-neutral-700">
                                    <Image
                                        src="/img/face_256x256.png"
                                        alt="soujirou takagi"
                                        width={256}
                                        height={256}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "React",
                                "Next",
                                "TypeScript",
                                "NodeJS",
                                "Go",
                                "Tailwind CSS",
                                "Figma",
                                "Git",
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                    className="p-4 bg-neutral-800 rounded-lg text-center hover:bg-neutral-700 transition-colors"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            <section id="projects" className="py-24 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl mb-4">
                            Selected Works
                        </h2>
                        <p className="text-neutral-400">
                            これまでに手がけた主要なプロジェクト
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
