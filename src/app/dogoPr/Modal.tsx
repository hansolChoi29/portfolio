"use client";

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import DogoCard from "../components/DogoCard";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DogoPr() {
  const [open, setOpen] = useState(false);
  // 클라이언트 측에서만 Portal을 렌더링하기 위해 상태를 관리합니다.
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollAnimationProps = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { root: modalRef.current || undefined, once: true, amount: 0.5 },
    transition: { duration: 1 },
  };

  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={modalRef}
          className="fixed inset-0 z-[9999] bg-[#efefef] sm:p-12 p-16 overflow-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex items-center justify-center py-8">
            <h2 className="sm:text-3xl font-bold my-24">dogo-project</h2>
            <button
              onClick={() => setOpen(false)}
              className="absolute  text-lg font-bold mr-24 sm:absolute right-5 sm:right-[10px] sm:text-lx"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center">
            {/* 모달 내용 컨테이너: 반응형을 위해 w-full과 max-w-[800px] 적용 */}
            <div className="flex flex-col text-sm sm:text-xl  text-gray-700 w-full max-w-[800px]">
              <motion.section
                {...scrollAnimationProps}
                className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2"
              >
                <p>Frontend : React, Next.js, TypeScript, Tailwind CSS</p>
                <p>Data Fetching : React Query</p>
                <p>Database : Supabase</p>
                <p>패키지매니저 : npm</p>
                <p>
                  서비스 링크 :
                  <Link
                    href="https://do-go-project.vercel.app/"
                    className="font-bold text-[#7571f4] ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    do-go-project 바로가기
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://github.com/Noonsae/DoGo_project"
                    className="text-[#7571f4]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gitHub 바로가기
                  </Link>
                </p>
              </motion.section>

              <motion.section {...scrollAnimationProps}>
                <h1 className="my-24 font-bold sm:text-3xl text-xl  w-full flex justify-center">
                  주요 역할
                </h1>
                <div className="border-b border-black py-4">
                  <p className="font-bold sm:text-xl text-base">
                    로그인 / 회원가입 - zustand 이용하여 유저정보 관리
                  </p>
                  <p className="sm:text-base text-sm">
                    Supabase를 활용하여 로그인, 회원가입 기능을 구현하고
                    serverAction 이용하여 클라이언트와 서버 간의 요청을 원활하게
                    해주었습니다.
                  </p>
                </div>
                <div className="border-b border-black py-4">
                  <p className="font-bold sm:text-xl text-base">
                    아이디 찾기 / 비밀번호 재설정 - otp 이용
                  </p>
                  <p className="sm:text-base text-sm">
                    유저정보를 이용하여 계정을 찾거나 재설정해줄 수 있도록
                    구현해 주었습니다.
                  </p>
                </div>
                <div className="border-b border-black py-4">
                  <p className="font-bold sm:text-xl text-base">
                    모달 기능 구현
                  </p>
                  <p className="sm:text-base text-sm">
                    사용자가 예약을 진행하면서 필요한 정보를 즉시 확인할 수
                    있도록 모달을 활용하여 객실정보를 알려주었습니다.
                  </p>
                </div>
                <div className="py-4">
                  <p className="font-bold sm:text-xl text-base">
                    문의하기 기능 구현
                  </p>
                  <p className="sm:text-base text-sm">
                    데이터베이스 테이블에 문의내용과 답변이 저장되는 형식으로,
                    user만 문의가 가능하도록 하였고 마이페이지에서 확인
                    가능합니다.
                  </p>
                </div>
              </motion.section>

              <section className="flex flex-col gap-24 py-24">
                <h1 className="font-bold sm:text-3xl text-xl w-full flex justify-center">
                  진행 과정 : Auth
                </h1>
                <div className="flex flex-col gap-2 ">
                  <p className="font-bold sm:text-xl text-base ">
                    로그인 페이지
                  </p>
                  <Image
                    src="/images/dogo/dogoSignin.png"
                    alt="dogoSignin"
                    width={800}
                    height={500}
                    style={{ height: "auto" }}
                    layout="responsive"
                    className="rounded-2xl w-full max-w-[800px]"
                  />
                  <p className="sm:text-base text-sm">
                    user 테이블의 role 칼럼을 이용하여 user, bussiness 인지
                    구분하도록 하였습니다. user일 경우, 소셜 로그인 가능하게
                    하여 사용자의 편의를 신경 썼습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className="font-bold sm:text-xl text-base">
                    회원가입 페이지
                  </p>
                  <Image
                    src="/images/dogo/dogoSignup.png"
                    alt="dogoSignup"
                    width={800}
                    height={500}
                    style={{ height: "auto" }}
                    layout="responsive"
                    className="rounded-2xl w-full max-w-[800px]"
                  />
                  <p className="sm:text-base text-sm">
                    RBAC을 적용하여 일반회원과 사업자 회원가입을 구분하였습니다.
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
                    이메일 형식과 비밀번호 정책을 엄격히 검증하여 정확한
                    회원가입 보장하였습니다.
                  </p>
                  <p className="sm:text-sm text-xs ">
                    (모든 input은 실시간유효성 검사가 적용되어 있습니다.)
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold sm:text-xl text-base">소셜 로그인</p>
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
                    가장 난감했던던 부분입니다. <br />
                    유저정보를 각각의 DB에서 관리해주는 게 아닌, role컬럼 하나로
                    공유하고 있어서 유저의 구분에 따른 소셜로그인이 구현되지
                    않았던 문제입니다.
                    <br /> 해결방안으로 Supabase 트리거를 이용하여 소셜 로그인
                    시 kakao에서 제공하고 있는 meta데이터 제외한 정보는
                    마이페이지에서 입력하여 데이터베이스에 저장되는 구조로
                    설계하였습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="font-bold sm:text-xl text-base">
                      아이디 찾기
                    </p>
                    <p className="sm:text-base text-sm">
                      사용자가 이름과 전화번호를 입력하면, Supabase의 사용자
                      정보와 일치하는 경우 해당 이메일을 찾아 반환하도록
                      구현하였습니다.
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
                    <p className="sm:text-base text-sm">
                      정보를 기입하고 아이디찾기 버튼을 클릭하면 조회중으로
                      바뀌어 사용자에게 편의를 제공해 주었습니다.{" "}
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
                    <p className="sm:text-base text-sm">
                      데이터베이스의 유저정보를 대조하여 일치하면 아이디를
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
                    <p className="sm:text-base text-sm">
                      대조하여 일치하지 않으면 에러 모달로 바뀝니다.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold sm:text-xl text-base">
                    비밀번호 재설정
                  </p>
                  <p className="sm:text-base text-sm">
                    사용자가 비밀번호를 잊어버린 경우, OTP 인증을 통해
                    비밀번호를 안전하게 재설정 가능하도록 구현했습니다.
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
                    <p className="sm:text-base text-sm">
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
                    <p className="sm:text-sm text-xs ">
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
              </section>

              <section className="py-24 ">
                <h1 className="font-bold mb-4 sm:text-3xl text-xl w-full flex justify-center">
                  진행 과정 : Modal
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
                    객실상세이미지 모달, 자세히보기 모달을 구현하여 사용자에게
                    직관적인 UI 제공해 주었습니다. 사진을 좌우 버튼을 누르면
                    스라이드가 가능하도록 해주었습니다.
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
                    탭을 누르면 네이게이션되도록 해주었습니다.
                  </p>
                </div>
              </section>

              <section className="py-24">
                <h1 className="font-bold mb-4 sm:text-3xl text-xl w-full flex justify-center">
                  진행 과정 : 문의하기(Inquiry)
                </h1>
                <div className="sm:text-base text-sm mb-4">
                  특정 카테고리(예: 호텔 시설, 예약, 결제 등) 문의를 사용자만
                  가능하게 구축, 관리자/사업자만 문의를 처리하며, 답변할 수 있는
                  시스템 구축
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
                </div>
              </section>
            </div>
          </div>
          <button
            onClick={() => {
              if (modalRef.current) {
                modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="fixed sm:bottom-[50px] bottom-[50px] sm:right-[130px] right-[30px] z-[10000]  text-white sm:text-sm text-sm px-4 py-2  hover:animate-bounce transition "
          >
            <img src="/icons/arrow.svg" className="w-12 h-12 " />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="gap-6">
        <DogoCard onClick={() => setOpen(true)} />
      </div>
      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
