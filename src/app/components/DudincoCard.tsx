type Props = {
  onClick: () => void;
};

export default function DuodincoCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-[660px] h-[320px] cursor-pointer border rounded-xl shadow-lg   hover: transition relative overflow-hidden group"
    >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <img src="/duodincoproject.png" alt="두고 프로젝트" />
        <div className="p-4">
          <h3 className="text-3xl font-semibold mb-2 ">Duo_Dingco project</h3>
          <p className="text-xl text-gray-500">
            학습 웹 애플리케이션학습 웹 애플리케이션
          </p>
        </div>
      </div>

      <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white z-10">
        <div className="flex justify-center items-center h-full">
          <p className="text-base text-gray-700 flex justify-center">
            듀오딩코 프로젝트는 사용자가 다양한 단어를 학습하고, 이를 북마크하여
            학습 상태를 관리할 수 있는 플랫폼입니다. 사용자는 로그인하여
            게시글을 확인하고, 단어 카드 학습을 진행하며, 필요한 게시글은
            북마크하여 나중에 다시 볼 수 있습니다. 이 프로젝트는 Supabase를
            이용한 인증 및 데이터베이스 연동, Zustand를 활용한 상태 관리,
            Next.js의 동적 라우팅을 활용한 페이지 구성이 특징입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
