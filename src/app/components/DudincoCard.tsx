type Props = {
  onClick: () => void;
};

export default function DuodincoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-96 h-96 cursor-pointer border rounded-xl shadow-md p-6 hover:shadow-lg transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <img src="/duodinco.png" alt="두고 프로젝트" />
        <h3 className="text-xl font-semibold mb-2">duodingco project</h3>
        <p className="text-sm text-gray-500">학습 웹 애플리케이션</p>
      </div>

      <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white z-10">
        <p className="text-sm text-gray-700">
          듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코듀오딩코
        </p>
      </div>
    </div>
  );
}
