import { motion } from "framer-motion";

// 예시 데이터: 실제 사용하시는 이미지 경로나 내용을 변경하세요.
const projectScreenshots = [
  {
    title: "프로젝트 1",
    image: "/images/project1.png",
    description: "프로젝트 1의 간략한 설명입니다.",
  },
  {
    title: "프로젝트 2",
    image: "/images/project2.png",
    description: "프로젝트 2의 간략한 설명입니다.",
  },
  {
    title: "프로젝트 3",
    image: "/images/project3.png",
    description: "프로젝트 3의 간략한 설명입니다.",
  },
];

export function ProjectShowcase() {
  return (
    <div className="flex flex-col gap-10">
      {projectScreenshots.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <h2 className="text-2xl mt-4">{project.title}</h2>
          <p className="mt-2 text-center px-4">{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
