"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DogoCard from "../components/DogoCard";
import { motion, AnimatePresence } from "framer-motion";

export default function DogoPr() {
  const [open, setOpen] = useState(false);

  // 클라이언트 측에서만 Portal을 렌더링하기 위해 상태를 관리합니다.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white p-10 overflow-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-lg font-bold"
          >
            ✕
          </button>
          <h2 className="text-3xl font-bold mb-4">dogo project</h2>
          <div className="text-lg text-gray-700">
            <div>
              <p>Frontend : React, Next.js, TypeScript, Tailwind CSS</p>
              <p>Data Fetching : React Query</p>
              <p>Database : Supabase</p>
              <p>패키지매니저 : npm</p>
            </div>
            <div>
              <p>
                1. 로그인 및 회원가입 기능 구현 - zustand 이용하여 유저정보 관리
              </p>
              <p>
                Supabase를 활용하여 로그인, 회원가입 기능을 구현하고, 인증된
                사용자만 이용가능
              </p>
            </div>
            <div>
              <p>2. 아이디 찾기 및 비밀번호 재설정 - otp 이용</p>
              <p>사용자가 계정 복구 과정에서 불편함 개선</p>
            </div>
            <div>
              <p>3. 모달 기능 구현</p>
              <p>
                사용자가 예약을 진행하면서 필요한 정보를 즉시 확인할 수 있도록
                모달을 활용
              </p>
            </div>
            <div>
              <p>4. 문의하기 기능 구현</p>
              <p>
                사용자에게 편리한 피드백 채널을 제공하여 문제를 신속하게 해결
                가능
              </p>
            </div>
            <section>
              <h1>03. 진행 과정 : Auth</h1>
              <div>
                <div>
                  <p>- 로그인 페이지</p>
                  <p>
                    유효성 검사를 사용하여 에러 메시지를 나타내고, 로그인 성공
                    시 메인 페이지로 리디렉션
                  </p>
                </div>
                <div>
                  <p>- 회원가입 페이지</p>
                  <p>
                    RBAC을 적용, 이메일 형식과 비밀번호 정책을 엄격히 검증하여
                    정확한 회원가입 보장
                  </p>
                </div>
                <div>
                  <p>- 소셜 로그인</p>
                  <p>
                    카카오 로그인을 통해 사용자 인증을 간편하게 진행하며,
                    Supabase를 이용해 소셜 로그인 시 유저 정보를 자동 등록.
                    (이를 통해 별도의 회원가입 절차 없이 바로 서비스 이용이
                    가능하며, 사용자 경험을 더욱 간편하게 개선)
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h1>03. 진행 과정 : Auth</h1>
              <div>
                - 아이디 찾기: 사용자가 이름과 전화번호를 입력하면, Supabase의
                사용자 정보와 일치하는 경우 해당 이메일을 찾아 반환하도록 구현
              </div>
              <div>
                - 비밀번호 재설정: 사용자가 비밀번호를 잊어버린 경우, OTP 인증을
                통해 비밀번호를 안전하게 재설정 가능하며, 실시간 유효성 검사를
                적용
              </div>
            </section>
            <section>
              <h1>03. 진행 과정 : Modal</h1>
              <div>
                - 객실상세이미지 모달, "자세히보기" 모달을 구현하여 사용자에게
                직관적인 UI 제공, 상태 관리와 애니메이션을 통해 원활한 사용자
                경험 제공
              </div>
            </section>
            <section>
              <h1>03. 진행 과정 : Inquiry</h1>
              <div>
                - 문의하기 시스템: 특정 카테고리(예: 호텔 시설, 예약, 결제 등)
                문의를 사용자만 가능하게 구축, 관리자/사업자만 문의를 처리하며,
                답변할 수 있는 시스템 구축
              </div>
            </section>
          </div>
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
