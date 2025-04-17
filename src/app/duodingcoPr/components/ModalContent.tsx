// "use client";

// import ButtonUp from "@/components/ButtonUp";
// import { motion, AnimatePresence, MotionProps } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { RefObject } from "react";
export interface ModalContentProps {
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  scrollAnimationProps: MotionProps;
}

// //duodingco
// export default function ModalContent({
//   onClose,
//   modalRef,
//   scrollAnimationProps,
// }: ModalContentProps) {
//   return (
//     <AnimatePresence>
//       <motion.div
//         ref={modalRef}
//         className="fixed inset-0 z-[9999] bg-[#efefef] sm:p-12 p-3 overflow-auto"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="text-black relative flex items-center justify-center py-8">
//           <h2 className="sm:text-3xl font-bold my-24">duodingco</h2>
//           <button
//             onClick={() => onClose()}
//             className="absolute top-5 right-5 text-lg font-bold sm:text-xl"
//           >
//             ✕
//           </button>
//         </div>
//         <section className="flex flex-col  items-center ">
//           <div className="flex flex-col text-sm sm:text-base  text-gray-700 w-full max-w-[800px]">
//             {/* 간단 소개박스 */}
//             <motion.div
//               {...scrollAnimationProps}
//               className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2"
//             >
//               <div className="flex flex-col border-b border-black pb-2">
//                 <p>
//                   Frontend : React, Next.js, TypeScript, Tailwind CSS, Zustand
//                 </p>
//                 <p>Data Fetching : React Query Database : Supabase</p>
//                 <p>패키지매니저 : npm</p>
//               </div>
//               <div className="flex flex-col border-b border-black pb-2">
//                 <Link
//                   href="https://duo-dingco-beta.vercel.app/"
//                   className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <p>duo-dingco 사이트 바로가기</p>
//                 </Link>
//                 <Link
//                   href="https://github.com/reizvoll/Duo_Dingco"
//                   className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <p>gitHub 바로가기</p>
//                 </Link>
//               </div>
//               <Link
//                 href="https://winwin0219.tistory.com/entry/React-%EC%8B%AC%ED%99%94-Intro-%EC%8B%A4%EB%AC%B4%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EC%88%98%EC%A4%80%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Trouble-Shooting"
//                 className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <p>트러블슈팅 - 7개</p>
//               </Link>
//             </motion.div>
//             {/* 주요역할 */}
//             <motion.div {...scrollAnimationProps}>
//               <h1 className="my-24 font-bold sm:text-3xl text-xl  w-full flex justify-center">
//                 주요 역할
//               </h1>
//               <div className="border-b border-black py-4">
//                 <p className="font-bold sm:text-xl text-base">
//                   단어 학습 기능 제공
//                 </p>
//                 <p className="sm:text-base text-sm">
//                   사용자가 단어를 학습할 수 있는 기능을 카드 형식으로 제공
//                 </p>
//               </div>
//               <div className="border-b border-black py-4">
//                 <p className="font-bold sm:text-xl text-base">북마크 관리</p>
//                 <p className="sm:text-base text-sm">
//                   사용자가 게시글을 북마크하여 나중에 다시 학습할 수 있도록
//                   하고, 북마크 상태를 실시간으로 업데이트
//                 </p>
//               </div>
//               <div className="  py-4">
//                 <p className="font-bold sm:text-xl text-base">
//                   뜨끈하게 올라온 학습리스트
//                 </p>
//                 <p className="sm:text-base text-sm">
//                   Supabase의 시간순 정렬 로직을 활용해 최신 학습 내역을 한눈에
//                   확인할 수 있도록 구현한 페이지입니다.
//                 </p>
//               </div>
//             </motion.div>
//             {/* 학습 리스트 페이지 (LearnListPage) 소개 */}
//             <div className="flex flex-col ">
//               <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
//                 학습 리스트 페이지 (LearnListPage)
//               </h1>
//               <div className=" sm:text-base text-sm mb-4">
//                 사용자가 학습 카드 리스트에서 단어 목록, 작성자 정보, 단어
//                 개수를 확인하고, Supabase Auth와 Zustand를 활용하여 로그인 후
//                 세션을 관리하며, 동적 라우팅을 통해 상세 페이지로 이동할 수
//                 있도록 구현하였습니다.
//               </div>
//               <Image
//                 src="/images/duodingco/duodingcoLearning.png"
//                 alt="duodingcoLearning"
//                 width={800}
//                 height={500}
//                 layout="responsive"
//                 className="rounded-2xl"
//                 style={{ height: "auto" }}
//               />
//               <p className="sm:text-base text-sm mt-4">
//                 북마크 기능을 통해 사용자가 즐겨찾기를 추가하거나 삭제하여 개인
//                 학습 관리 API를 통한 데이터 패칭 및 JSON 파싱과 함께, 로딩 및
//                 에러 상태를 관리하여 사용자 경험을 극대화하였습니다.
//               </p>
//             </div>
//             {/*    상세 페이지(LearnDetailPage) 소개 */}
//             <div>
//               <h1 className="font-bold py-24 sm:text-3xl text-xl w-full flex justify-center">
//                 상세 페이지(LearnDetailPage)
//               </h1>
//               <div className=" py-4 sm:text-base text-sm ">
//                 북마크 기능과 작성자 정보를 활용하여 상세 정보 및 사용자
//                 프로필을 연동했습니다. <br />
//                 리액트 훅을 활용하여 효율적으로 상태를 관리해 UI의 반응성을
//                 강화했습니다. 학습 카드는 단어와 뜻이 3D 플립 카드
//                 애니메이션으로 전환되도록 설계하여 학습자의 집중력과 흥미를
//                 높였습니다. 추가적으로 키보드 이벤트를 통한 카드 탐색 및 뒤집기
//                 기능도 개발하였으며, 이 기능은 곧 적용될 예정입니다.
//               </div>
//               <div className="flex flex-col gap-2 ">
//                 <Image
//                   src="/images/duodingco/duodingcoLearningDetail.png"
//                   alt="duodingcoLearningDetail"
//                   width={800}
//                   height={500}
//                   style={{ height: "auto" }}
//                   layout="responsive"
//                   className="rounded-2xl"
//                 />
//                 <Image
//                   src="/images/duodingco/duodingcoLearningDeatailMove.png"
//                   alt="duodingcoLearningDeatailMove"
//                   width={800}
//                   height={500}
//                   layout="responsive"
//                   style={{ height: "auto" }}
//                   className="rounded-2xl"
//                 />
//                 <p className=" py-4 sm:text-base text-sm ">
//                   동적 세그먼트를 적용해 URL을 기반으로 상세 페이지로 이동할 수
//                   있도록 구현하고, 비동기 데이터 패칭 및 에러 핸들링을 통해
//                   애플리케이션의 안정성을 높였습니다.{" "}
//                 </p>
//                 <Image
//                   src="/images/duodingco/duodingcoLearningEnd.png"
//                   alt="duodingcoLearningEnd"
//                   width={800}
//                   height={500}
//                   layout="responsive"
//                   style={{ height: "auto" }}
//                   className="rounded-2xl"
//                 />
//                 <p className=" py-4 sm:text-base text-sm ">
//                   학습이 완료되면 <strong>뒤로가기</strong> 버튼이{" "}
//                   <strong>완료하기</strong> 버튼으로 변경되어, 사용자가 더
//                   직관적으로 흐름을 이해할 수 있도록 UX에 신경썼습니다.
//                 </p>

//                 <Image
//                   src="/images/duodingco/duodingcoLearningAlert.png"
//                   alt="duodingcoLearningEnd"
//                   width={800}
//                   height={500}
//                   style={{ height: "auto" }}
//                   layout="responsive"
//                   className="rounded-2xl"
//                 />
//               </div>
//             </div>
//             {/* 핫러닝 페이지 (HotLearningPage)소개 */}
//             <div className="py-24 ">
//               <h1 className="font-bold py-24 sm:text-3xl text-xl w-full flex justify-center">
//                 핫러닝 페이지 (HotLearningPage)
//               </h1>
//               <p className=" py-4 sm:text-base text-sm">
//                 최신 단어 집합을 실시간으로 업데이트하여 사용자가 최신 등록된
//                 단어를 한눈에 확인할 수 있도록 하며, 카드형 UI를 통해 작성자
//                 정보, 단어 개수, 북마크 상태 등 다양한 정보를 직관적으로 표시해
//                 주었습니다.
//               </p>
//               <Image
//                 src="/images/duodingco/duodingcoHot.png"
//                 alt="duodingcoHot"
//                 width={800}
//                 height={500}
//                 style={{ height: "auto" }}
//                 layout="responsive"
//                 className="rounded-2xl"
//               />
//               <p className=" py-4 sm:text-base text-sm">
//                 Supabase를 활용하여 실시간으로 북마크 및 사용자 정보를
//                 동기화하고, 사용자 맞춤형 컨텐츠 제공을 통해 동기부여 반응형
//                 디자인을 적용하여 다양한 디바이스에서 지원하며, API 호출 후 상태
//                 업데이트를 통해 데이터 동기화 처리를 안정적으로 수행했습니다.
//               </p>
//             </div>
//           </div>
//         </section>
//         <ButtonUp modalRef={modalRef} />
//       </motion.div>
//     </AnimatePresence>
//   );
// }
// DuodingcoModal.tsx

import ModalContainer from "@/components/ModalContainer";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

export default function DuodingcoModal({
  onClose,
  modalRef,
  scrollAnimationProps,
}: ModalContentProps) {
  return (
    <ModalContainer
      onClose={onClose}
      modalRef={modalRef}
      scrollAnimationProps={scrollAnimationProps}
      title="duodingco"
    >
      <section className="flex flex-col items-center">
        <div className="flex flex-col text-sm sm:text-base text-gray-700 w-full max-w-[800px]">
          {/* 간단 소개 박스 */}
          <motion.div
            {...scrollAnimationProps}
            className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2"
          >
            <div className="flex flex-col border-b border-black pb-2">
              <p>
                Frontend : React, Next.js, TypeScript, Tailwind CSS, Zustand
              </p>
              <p>Data Fetching : React Query Database : Supabase</p>
              <p>패키지매니저 : npm</p>
            </div>
            <div className="flex flex-col border-b border-black pb-2">
              <Link
                href="https://duo-dingco-beta.vercel.app/"
                className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>duo-dingco 사이트 바로가기</p>
              </Link>
              <Link
                href="https://github.com/reizvoll/Duo_Dingco"
                className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>gitHub 바로가기</p>
              </Link>
            </div>
            <Link
              href="https://winwin0219.tistory.com/entry/React-%EC%8B%AC%ED%99%94-Intro-%EC%8B%A4%EB%AC%B4%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EC%88%98%EC%A4%80%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Trouble-Shooting"
              className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>트러블슈팅 - 7개</p>
            </Link>
          </motion.div>
          {/* 주요 역할 */}
          <motion.div {...scrollAnimationProps}>
            <h1 className="my-24 font-bold sm:text-3xl text-xl w-full flex justify-center">
              주요 역할
            </h1>
            <div className="border-b border-black py-4">
              <p className="font-bold sm:text-xl text-base">
                단어 학습 기능 제공
              </p>
              <p className="sm:text-base text-sm">
                사용자가 단어를 학습할 수 있는 기능을 카드 형식으로 제공
              </p>
            </div>
            <div className="border-b border-black py-4">
              <p className="font-bold sm:text-xl text-base">북마크 관리</p>
              <p className="sm:text-base text-sm">
                사용자가 게시글을 북마크하여 나중에 다시 학습할 수 있도록 하고,
                북마크 상태를 실시간으로 업데이트
              </p>
            </div>
            <div className="py-4">
              <p className="font-bold sm:text-xl text-base">
                뜨끈하게 올라온 학습리스트
              </p>
              <p className="sm:text-base text-sm">
                Supabase의 시간순 정렬 로직을 활용해 최신 학습 내역을 한눈에
                확인할 수 있도록 구현한 페이지입니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 학습 리스트 페이지 (LearnListPage) 소개 */}
        <div className="flex flex-col ">
          <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
            학습 리스트 페이지 (LearnListPage)
          </h1>
          <p className=" sm:text-base text-sm mb-4">
            사용자가 학습 카드 리스트에서 단어 목록, 작성자 정보, 단어 개수를
            확인하고, Supabase Auth와 Zustand를 활용하여 로그인 후 세션을
            관리하며, 동적 라우팅을 통해 상세 페이지로 이동할 수 있도록
            구현하였습니다.
          </p>
          <Image
            src="/images/duodingco/duodingcoLearning.png"
            alt="duodingcoLearning"
            width={800}
            height={500}
            layout="responsive"
            className="rounded-2xl"
            style={{ height: "auto" }}
          />
          <p className="sm:text-base text-sm mt-4">
            북마크 기능을 통해 사용자가 즐겨찾기를 추가하거나 삭제하여 개인 학습
            관리 API를 통한 데이터 패칭 및 JSON 파싱과 함께, 로딩 및 에러 상태를
            관리하여 사용자 경험을 극대화하였습니다.
          </p>
        </div>
        {/*    상세 페이지(LearnDetailPage) 소개 */}
        <div>
          <h1 className="font-bold py-24 sm:text-3xl text-xl w-full flex justify-center">
            상세 페이지(LearnDetailPage)
          </h1>
          <p className=" py-4 sm:text-base text-sm ">
            북마크 기능과 작성자 정보를 활용하여 상세 정보 및 사용자 프로필을
            연동했습니다. <br />
            리액트 훅을 활용하여 효율적으로 상태를 관리해 UI의 반응성을
            강화했습니다. 학습 카드는 단어와 뜻이 3D 플립 카드 애니메이션으로
            전환되도록 설계하여 학습자의 집중력과 흥미를 높였습니다. 추가적으로
            키보드 이벤트를 통한 카드 탐색 및 뒤집기 기능도 개발하였으며, 이
            기능은 곧 적용될 예정입니다.
          </p>
          <div className="flex flex-col gap-2 ">
            <Image
              src="/images/duodingco/duodingcoLearningDetail.png"
              alt="duodingcoLearningDetail"
              width={800}
              height={500}
              style={{ height: "auto" }}
              layout="responsive"
              className="rounded-2xl"
            />
            <Image
              src="/images/duodingco/duodingcoLearningDeatailMove.png"
              alt="duodingcoLearningDeatailMove"
              width={800}
              height={500}
              layout="responsive"
              style={{ height: "auto" }}
              className="rounded-2xl"
            />
            <p className=" py-4 sm:text-base text-sm ">
              동적 세그먼트를 적용해 URL을 기반으로 상세 페이지로 이동할 수
              있도록 구현하고, 비동기 데이터 패칭 및 에러 핸들링을 통해
              애플리케이션의 안정성을 높였습니다.{" "}
            </p>
            <Image
              src="/images/duodingco/duodingcoLearningEnd.png"
              alt="duodingcoLearningEnd"
              width={800}
              height={500}
              layout="responsive"
              style={{ height: "auto" }}
              className="rounded-2xl"
            />
            <p className=" py-4 sm:text-base text-sm ">
              학습이 완료되면 <strong>뒤로가기</strong> 버튼이{" "}
              <strong>완료하기</strong> 버튼으로 변경되어, 사용자가 더
              직관적으로 흐름을 이해할 수 있도록 UX에 신경썼습니다.
            </p>

            <Image
              src="/images/duodingco/duodingcoLearningAlert.png"
              alt="duodingcoLearningEnd"
              width={800}
              height={500}
              style={{ height: "auto" }}
              layout="responsive"
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* 핫러닝 페이지 (HotLearningPage)소개 */}
        <div className="py-24 ">
          <h1 className="font-bold py-24 sm:text-3xl text-xl w-full flex justify-center">
            핫러닝 페이지 (HotLearningPage)
          </h1>
          <p className=" py-4 sm:text-base text-sm">
            최신 단어 집합을 실시간으로 업데이트하여 사용자가 최신 등록된 단어를
            한눈에 확인할 수 있도록 하며, 카드형 UI를 통해 작성자 정보, 단어
            개수, 북마크 상태 등 다양한 정보를 직관적으로 표시해 주었습니다.
          </p>
          <Image
            src="/images/duodingco/duodingcoHot.png"
            alt="duodingcoHot"
            width={800}
            height={500}
            style={{ height: "auto" }}
            layout="responsive"
            className="rounded-2xl"
          />
          <p className=" py-4 sm:text-base text-sm">
            Supabase를 활용하여 실시간으로 북마크 및 사용자 정보를 동기화하고,
            사용자 맞춤형 컨텐츠 제공을 통해 동기부여 반응형 디자인을 적용하여
            다양한 디바이스에서 지원하며, API 호출 후 상태 업데이트를 통해
            데이터 동기화 처리를 안정적으로 수행했습니다.
          </p>
        </div>
      </section>
    </ModalContainer>
  );
}
