"use client";

import ButtonUp from "@/components/ButtonUp";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

export interface ModalContentProps {
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
  scrollAnimationProps: MotionProps;
}

//dogo-project
export default function ModalContent({
  onClose,
  modalRef,
  scrollAnimationProps,
}: ModalContentProps) {
  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        className="fixed inset-0 z-[9999] bg-[#efefef] sm:p-12 p-3 overflow-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-black relative flex items-center justify-center py-8">
          <h2 className="sm:text-3xl font-bold my-24">dogo-project</h2>
          <button
            onClick={() => onClose()}
            className="absolute top-5 right-5 text-lg font-bold sm:text-xl"
          >
            ✕
          </button>
        </div>

        <section className="flex flex-col items-center">
          <div className="flex flex-col text-sm sm:text-base  text-gray-700 w-full max-w-[800px]">
            {/* 간단 소개박스 */}
            <motion.div
              {...scrollAnimationProps}
              className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2"
            >
              <div className="flex flex-col border-b border-black pb-2">
                <p>Frontend : React, Next.js, TypeScript, Tailwind CSS</p>
                <p>Data Fetching : React Query</p>
                <p>Database : Supabase</p>
              </div>

              <div className="flex flex-col border-b border-black pb-2">
                <Link
                  href="https://do-go-project.vercel.app/"
                  className="font-bold text-[#757575] hover:text-[#ff5d5d]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>do-go-project 사이트 바로가기</p>
                </Link>
                <Link
                  href="https://github.com/Noonsae/DoGo_project"
                  className="text-[#757575] hover:text-[#ff5d5d]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>do-go-project gitHub 바로가기</p>
                </Link>
                <Link
                  href="https://www.notion.so/5-19161b5e89bb80a8b3d4debfff2f783f"
                  className="text-[#757575] hover:text-[#ff5d5d]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>5분 기록(개발기록) 바로가기</p>
                </Link>
              </div>

              <Link
                href="https://winwin0219.tistory.com/171"
                className="text-[#757575] hover:text-[#ff5d5d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>트러블 슈팅 - Redirect URL와 OAuth 토큰 유출</p>
              </Link>
              <Link
                href="https://winwin0219.tistory.com/182"
                className="text-[#757575] hover:text-[#ff5d5d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>트러블 슈팅 - 미디어 쿼리</p>
              </Link>
              <Link
                href="https://winwin0219.tistory.com/183"
                className="text-[#757575] hover:text-[#ff5d5d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>트러블 슈팅 - 로그인 및 상태 관리 문제 해결</p>
              </Link>
            </motion.div>
            {/* 주요역할 */}
            <motion.div {...scrollAnimationProps}>
              <h1 className="my-24 font-bold sm:text-3xl text-xl  w-full flex justify-center">
                주요 역할
              </h1>
              <div className="border-b border-black py-4">
                <p className="font-bold sm:text-xl text-base">
                  로그인 / 회원가입 (Zustand를 통한 유저 상태 관리)
                </p>
                <p className="sm:text-base text-sm">
                  Supabase로 로그인 및 회원가입을 구축하고, Server Action을 통해
                  클라이언트와 서버 간의 요청을 효율적으로 관리했습니다.
                </p>
              </div>
              <div className="border-b border-black py-4">
                <p className="font-bold sm:text-xl text-base">
                  아이디 찾기 / 비밀번호 재설정 (OTP 인증 활용)
                </p>
                <p className="sm:text-base text-sm">
                  사용자의 편의를 고려해 OTP 인증을 통해 계정 찾기 및 비밀번호
                  재설정 기능을 구현했습니다.
                </p>
              </div>
              <div className="border-b border-black py-4">
                <p className="font-bold sm:text-xl text-base">모달 기능 구현</p>
                <p className="sm:text-base text-sm">
                  객실 예약 과정에서 필요한 정보를 즉각적으로 제공할 수 있도록
                  모달 UI를 구현했습니다.
                </p>
              </div>
              <div className="py-4">
                <p className="font-bold sm:text-xl text-base">
                  문의하기 기능 구현
                </p>
                <p className="sm:text-base text-sm">
                  사용자가 문의를 남기면 데이터베이스에 저장되고, 관리자가 확인
                  후 답변할 수 있도록 구축하여 효율적인 커뮤니케이션을
                  지원했습니다.
                </p>
              </div>
            </motion.div>
            {/*     개발 과정 상세 (Auth) 소개 */}
            <div className="flex flex-col gap-24 py-24">
              <div className="flex flex-col gap-2 ">
                <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                  로그인 페이지 (SignInPage)
                </h1>
                <Image
                  src="/images/dogo/dogoSignin.png"
                  alt="dogoSignin"
                  width={800}
                  height={500}
                  style={{ height: "auto" }}
                  layout="responsive"
                  className="rounded-2xl w-full max-w-[800px]"
                />
                <p className="sm:text-base text-sm ">
                  사용자 편의성을 높이기 위해
                  <strong>user 테이블의 role 컬럼</strong>을 기준으로 일반
                  사용자와 비즈니스 사용자를 구분하였습니다. 일반 사용자의 경우
                  소셜 로그인 기능을 제공하여 로그인 절차를 간소화했습니다.
                  <br /> 로그인 후, 헤더가 로그인 상태에 따라 동적으로
                  렌더링되어야 했으나 SSR 방식으로는 즉각적인 상태 반영이
                  어려웠습니다. 이를 해결하기 위해 CSR 방식으로 전환하고,
                  <strong>Server Action</strong>을 활용하여 클라이언트와 서버
                  간의 원활한 통신을 구현하였습니다.
                </p>
              </div>
              <div className="flex flex-col gap-2 ">
                <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                  회원가입 페이지 (SignUpPage)
                </h1>
                <Image
                  src="/images/dogo/dogoSignup.png"
                  alt="dogoSignup"
                  width={800}
                  height={500}
                  style={{ height: "auto" }}
                  layout="responsive"
                  className="rounded-2xl w-full max-w-[800px]"
                />
                <p className="sm:text-base text-sm mb-4">
                  RBAC를 적용하여 일반회원은 소셜 가입 가능, 사업자는 일반가입만
                  가능하도록 차별화했고, 엄격한 실시간 유효성 검사로 가입 절차의
                  신뢰성을 높였습니다.
                </p>
                <Image
                  src="/images/dogo/dogoSignUpErrMess.png"
                  alt="dogoSignUpErrMess"
                  width={800}
                  height={500}
                  style={{ height: "auto" }}
                  layout="responsive"
                  className="rounded-2xl w-full max-w-[800px]"
                />
                <p className="sm:text-base text-sm">
                  이메일 형식과 비밀번호 정책을 엄격히 검증하여 정확한 회원가입
                  보장하였습니다.
                  <br />
                </p>
                <p className="sm:text-sm text-xs ">
                  (모든 input은 실시간유효성 검사가 적용되어 있습니다.)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                  소셜 로그인 (KakaoSignInPage)
                </h1>
                <Image
                  src="/images/dogo/dogoKakaoSignin.png"
                  alt="dogoKakaoSignin"
                  width={900}
                  height={800}
                  layout="fixed"
                  style={{ height: "auto" }}
                  className="rounded-2xl w-full max-w-[900px]"
                />
                <p className="sm:text-base text-sm">
                  {" "}
                  개발 과정 중 가장 어려웠던 부분은 소셜 로그인 구현이었습니다.
                  <br /> 기존에는 유저 정보를 역할에 따라 별도의 DB가 아니라{" "}
                  <strong>role 컬럼 하나로만 구분하여 관리</strong>하고 있었기
                  때문에, 역할별 소셜 로그인 구분이 제대로 이루어지지
                  않았습니다.
                  <br /> 이를 해결하기 위해{" "}
                  <strong>Supabase 트리거 기능</strong>을 활용했습니다. 소셜
                  로그인 후 카카오에서 기본적으로 제공하는 메타데이터 외에 추가
                  정보를 사용자가 마이페이지에서 입력하면, 해당 데이터를 DB에
                  저장하도록 구조를 설계하여 문제를 성공적으로 해결했습니다.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                    아이디 찾기 (FindIdModal)
                  </h1>
                  <p className="sm:text-base text-sm">
                    사용자가 이름과 전화번호를 입력하면 Supabase의 유저 정보와
                    대조하여 일치하는 이메일을 반환하도록 해주었습니다.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/dogo/dogoFindId.png"
                    alt="dogoFindId"
                    width={800}
                    height={500}
                    style={{ height: "auto" }}
                    layout="responsive"
                    className="rounded-2xl w-full max-w-[800px]"
                  />
                  <Image
                    src="/images/dogo/dogoFindId2.png"
                    alt="dogoFindId2"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                  <p className="sm:text-base text-sm mb-4">
                    입력된 사용자 정보가 데이터베이스와 일치하면 해당
                    이메일(아이디)을 사용자에게 보여줍니다. <br />
                    데이터베이스에서 일치하는 정보가 없으면 에러 메시지가
                    표시되어 사용자가 정확한 안내를 받을 수 있도록 하였습니다.
                  </p>
                  <Image
                    src="/images/dogo/dogoFindIdFinal.png"
                    alt="dogoFindIdFinal"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                  <p className="sm:text-base text-sm mb-4">
                    데이터베이스의 유저정보를 대조하여 일치하면 이메일(아이디)를
                    알려줍니다.
                  </p>
                  <Image
                    src="/images/dogo/dogoFindIdErr.png"
                    alt="dogoFindIdErr"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                  <p className="sm:text-base text-sm mb-4">
                    데이터베이스에서 일치하는 정보가 없으면 에러 모달을 표시하여
                    사용자가 정확한 안내를 받을 수 있도록 하였습니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                  비밀번호 재설정 (NewPasswordModal)
                </h1>
                <p className="sm:text-base text-sm mb-4">
                  처음 기획에서는 단순히 비밀번호 찾기 기능을 고려하였습니다.
                  그러나 인증(Auth) 시스템 특성상 비밀번호는 데이터베이스
                  내에서도 암호화되어 저장되기 때문에 직접 조회하는 방식은
                  보안상 적합하지 않았습니다.
                  <br />
                  이를 고려하여 사용자가 비밀번호를 분실했을 경우, 기존
                  비밀번호를 알려주는 방식이 아닌, OTP(일회성 비밀번호) 인증을
                  통해 새로운 비밀번호를 안전하게 설정할 수 있도록 기능을
                  재설계하여 구현하였습니다. 이로써 사용자의 계정 보안을 한층
                  강화하고 신뢰성을 확보했습니다.
                </p>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/images/dogo/dogoFindPassword.png"
                    alt="dogoFindPassword"
                    width={800}
                    height={500}
                    style={{ height: "auto" }}
                    layout="responsive"
                    className="rounded-2xl w-full max-w-[800px]"
                  />
                  <Image
                    src="/images/dogo/dogoNewPassword.png"
                    alt="dogoNewPassword"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                  <p className="sm:text-base text-sm mb-4">
                    비밀번호가 일치하면 버튼이 처리중...으로 바뀌어 사용자
                    편의를 신경쓰도록 노력하였습니다.
                  </p>
                  <Image
                    src="/images/dogo/dogoFindPasswordOtp.png"
                    alt="dogoFindPasswordOtp"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                  <p className="sm:text-base text-sm">
                    실시간 유효성 검사를 넣어주었습니다.
                  </p>
                  <p className="sm:text-sm text-xs mb-4">
                    (모든 input은 실시간유효성 검사가 적용되어 있습니다.)
                  </p>
                  <Image
                    src="/images/dogo/dogoFindPasswordFinal.png"
                    alt="dogoFindPasswordFinal"
                    width={400}
                    height={100}
                    style={{ height: "auto" }}
                    layout="fixed"
                    className="rounded-2xl w-full max-w-[400px]"
                  />
                </div>
              </div>
            </div>
            {/* Modal 소개 */}
            <div className="py-24">
              <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                RoomDetailModal
              </h1>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/images/dogo/dogoModal.png"
                  alt="dogoModal"
                  width={800}
                  height={500}
                  style={{ height: "auto" }}
                  layout="responsive"
                  className="rounded-2xl w-full max-w-[800px]"
                />
                <p className="sm:text-base text-sm mb-4">
                  사용자가 객실 이미지를 더 쉽고 직관적으로 확인할 수 있도록
                  객실 상세 이미지 모달과 <strong>자세히 보기</strong>
                  모달을 개발했습니다. 특히 이미지 좌우에 슬라이드 버튼을
                  추가하여 여러 장의 사진을 간편하게 넘겨볼 수 있도록 UX를
                  개선하였습니다.
                </p>
                <Image
                  src="/images/dogo/dogoDetailModal.png"
                  alt="dogoDetailModal"
                  width={800}
                  height={500}
                  layout="responsive"
                  style={{ height: "auto" }}
                  className="rounded-2xl w-full max-w-[800px]"
                />
                <p className="sm:text-base text-sm mb-4">
                  객실의 세부 정보를 더욱 명확하게 전달하고 예약 전 사용자가
                  필요한 모든 정보를 한눈에 파악할 수 있도록 상세 모달을 추가로
                  구현했습니다. 이 모달 내에 <strong>예약하기</strong> 버튼을
                  배치하여 모달에서 얻은 정보를 기반으로 즉시 예약 페이지로
                  연결될 수 있도록 편의성을 높였습니다.
                </p>
                <Image
                  src="/images/dogo/dogoDetailModal2.png"
                  alt="dogoDetailModal2"
                  width={400}
                  height={300}
                  style={{ height: "auto" }}
                  layout="fixed"
                  className="rounded-2xl w-full max-w-[400px]"
                />
                <p className="sm:text-base text-sm mb-4">
                  또한, 모달 내부에 탭 형태의 네비게이션을 추가하여 사용자가
                  원하는 정보를 쉽게 찾아볼 수 있도록 하였습니다. 이를 통해 상세
                  정보, 후기, 이용약관 등의 내용을 간편하게 전환하며 확인할 수
                  있는 직관적인 사용자 경험을 제공했습니다.
                </p>
              </div>
            </div>
            {/*  문의하기(Inquiry) 소개 */}
            <div className="py-24">
              <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
                문의하기(InquiryModal)
              </h1>
              <div className="sm:text-base text-sm mb-4">
                사용자들이 호텔 시설, 예약, 결제 등 특정 카테고리의 문의사항을
                간편하게 등록할 수 있도록 모달 형태의 문의 시스템을
                구현하였습니다. 이 시스템은 사용자만이 문의를 작성할 수 있도록
                권한을 제한하고, 관리자와 사업자가 이를 확인한 뒤 직접 답변할 수
                있는 구조로 개발되었습니다.
                <br />
                특히, 접근성을 높이기 위해 <strong>문의하기</strong> 버튼을 전역
                상태로 관리하여 인증(auth) 페이지를 제외한 모든 페이지에서 항상
                노출되도록 하였습니다. 사용자는 페이지 어디서나 즉시 문의사항을
                등록할 수 있습니다.
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/images/dogo/dogoInquiry.png"
                  alt="dogoInquiry"
                  width={800}
                  height={500}
                  layout="responsive"
                  style={{ height: "auto" }}
                  className="rounded-2xl w-full max-w-[800px]"
                />

                <Image
                  src="/images/dogo/dogoInquiryDropdown.png"
                  alt="dogoInquiryDropdown"
                  width={400}
                  height={800}
                  layout="fixed"
                  style={{ height: "auto" }}
                  className="rounded-2xl w-full max-w-[400px]"
                />
                <p className="mb-4">
                  문의 유형을 선택할 수 있도록 드롭다운 메뉴로 설계하였습니다.
                  추후 더 나은 사용자 경험을 제공하기 위해 shadcn/ui를 활용하여
                  디자인과 기능을 더욱 개선하는 방안도 고려하고 있습니다.
                </p>
                <Image
                  src="/images/dogo/dogoInquirySuccess.png"
                  alt="dogoInquirySuccess"
                  width={400}
                  height={800}
                  style={{ height: "auto" }}
                  layout="fixed"
                  className="rounded-2xl w-full max-w-[400px]"
                />
                <Image
                  src="/images/dogo/dogoInquiryNoSignin.png"
                  alt="dogoInquiryNoSignin"
                  width={400}
                  height={950}
                  style={{ height: "auto" }}
                  layout="fixed"
                  className="rounded-2xl w-full max-w-[400px]"
                />
                <p>
                  로그인하지 않은 사용자는 문의를 작성할 수 없으며, 모든 문의
                  내역은 사용자의 마이페이지에서 일괄 관리하여 보안성과 접근성을
                  동시에 만족시켰습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ButtonUp modalRef={modalRef} />
      </motion.div>
    </AnimatePresence>
  );
}
