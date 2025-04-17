// // App.js
// import React, { useState, useEffect } from 'react';
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform
// } from 'framer-motion';

// /* ============================================================================
//    1. 모달 컴포넌트
//    - 모달이 등장/퇴장할 때의 애니메이션을 적용하며, 드래그하여 일정 이상 움직이면 닫힙니다.
//    - useMotionValue와 useTransform을 통해 드래그 중 배경색을 미세하게 변화시켜 Apple 느낌을 줍니다.
// ============================================================================ */
// function ModalComponent({ isOpen, onClose }) {
//   // 모달 애니메이션 상태 변형
//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: -20 },
//     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.3 } },
//   };

//   // 드래그에 따른 배경색 변화 (중심은 #ffffff, 양쪽은 약간의 회색)
//   const y = useMotionValue(0);
//   const bgColor = useTransform(y, [-150, 0, 150], ['#f7f7f7', '#ffffff', '#f7f7f7']);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="modal-overlay"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           style={{
//             position: 'fixed',
//             top: 0, left: 0, right: 0, bottom: 0,
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 100,
//           }}
//         >
//           <motion.div
//             className="modal-content"
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             drag="y"
//             dragConstraints={{ top: -150, bottom: 150 }}
//             dragElastic={0.5}
//             style={{
//               backgroundColor: bgColor,
//               padding: '20px',
//               borderRadius: '12px',
//               width: '300px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//               cursor: 'grab',
//               fontFamily: 'Helvetica, Arial, sans-serif',
//             }}
//             onDragEnd={(event, info) => {
//               if (Math.abs(info.point.y) > 150) onClose();
//             }}
//           >
//             <h2 style={{ margin: '0 0 10px', color: '#333' }}>모달 타이틀</h2>
//             <p style={{ fontSize: '14px', color: '#555' }}>Framer Motion 모달 예제입니다.</p>
//             <button
//               onClick={onClose}
//               style={{
//                 marginTop: '10px',
//                 padding: '8px 16px',
//                 backgroundColor: '#007aff',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px'
//               }}
//             >
//               닫기
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// /* ============================================================================
//    2. 드롭다운 메뉴
//    - 버튼 클릭 시 드롭다운 메뉴가 아래로 펼쳐지며, 각 메뉴 아이템이 순차적으로 나타납니다.
// ============================================================================ */
// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownVariants = {
//     hidden: { opacity: 0, height: 0, transition: { when: 'afterChildren' } },
//     visible: { opacity: 1, height: 'auto', transition: { when: 'beforeChildren' } },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//   };

//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           padding: '8px 16px',
//           backgroundColor: '#007aff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '6px',
//           cursor: 'pointer',
//           fontSize: '14px',
//           fontFamily: 'Helvetica, Arial, sans-serif'
//         }}
//       >
//         드롭다운 토글
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={dropdownVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             style={{
//               background: '#f9f9f9',
//               overflow: 'hidden',
//               marginTop: '10px',
//               borderRadius: '8px',
//               border: '1px solid #c7c7cc',
//               fontFamily: 'Helvetica, Arial, sans-serif'
//             }}
//           >
//             {['메뉴1', '메뉴2', '메뉴3'].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 style={{ padding: '10px 16px', borderBottom: index < 2 ? '1px solid #c7c7cc' : 'none' }}
//               >
//                 {item}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ============================================================================
//    3. Hover & Tap 버튼
//    - 마우스 오버 시 크기가 살짝 커지고, 클릭 시 약간 축소되는 효과를 줍니다.
//    - Apple의 깔끔한 파란색(#007aff) 버튼 스타일로 디자인했습니다.
// ============================================================================ */
// function HoverButton() {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       style={{
//         padding: '10px 20px',
//         marginBottom: '20px',
//         fontSize: '16px',
//         backgroundColor: '#007aff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontFamily: 'Helvetica, Arial, sans-serif'
//       }}
//     >
//       Hover & Tap 버튼
//     </motion.button>
//   );
// }

// /* ============================================================================
//    4. 드래그 가능한 카드
//    - 수평 드래그 기능과 드래그에 따른 배경색 변화를 확인할 수 있습니다.
//    - 배경은 기본적으로 화이트(#ffffff)에서 약간의 회색(#f7f7f7)로 변화합니다.
// ============================================================================ */
// function DraggableCard() {
//   const x = useMotionValue(0);
//   const bgColor = useTransform(x, [-100, 0, 100], ['#f7f7f7', '#ffffff', '#f7f7f7']);

//   return (
//     <motion.div
//       drag="x"
//       style={{
//         x,
//         backgroundColor: bgColor,
//         padding: '20px',
//         marginBottom: '20px',
//         width: '200px',
//         borderRadius: '12px',
//         boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//         cursor: 'grab',
//         textAlign: 'center',
//         fontFamily: 'Helvetica, Arial, sans-serif'
//       }}
//     >
//       드래그 카드
//     </motion.div>
//   );
// }

// /* ============================================================================
//    5. 리스트 애니메이션
//    - 리스트 아이템들이 순차적으로 나타나는 효과를 줍니다.
//    - 아이템은 Apple의 심플한 느낌을 주는 밝은 그레이(#f9f9f9) 배경과 #c7c7cc 구분선 사용.
// ============================================================================ */
// function ListAnimation() {
//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 5 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <motion.ul
//       variants={listVariants}
//       initial="hidden"
//       animate="visible"
//       style={{
//         listStyle: 'none',
//         padding: 0,
//         marginBottom: '20px',
//         fontFamily: 'Helvetica, Arial, sans-serif'
//       }}
//     >
//       {['아이템 1', '아이템 2', '아이템 3', '아이템 4'].map((item, index) => (
//         <motion.li
//           key={index}
//           variants={itemVariants}
//           style={{
//             padding: '10px 16px',
//             background: '#f9f9f9',
//             marginBottom: '5px',
//             borderRadius: '6px',
//             border: '1px solid #c7c7cc'
//           }}
//         >
//           {item}
//         </motion.li>
//       ))}
//     </motion.ul>
//   );
// }

// /* ============================================================================
//    6. 슬라이드 사이드바
//    - 토글 버튼 클릭 시 왼쪽에서 사이드바가 슬라이드 인/아웃 됩니다.
//    - 깔끔한 화이트 배경에 부드러운 애니메이션을 적용했습니다.
// ============================================================================ */
// function SlideSidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarVariants = {
//     hidden: { x: '-100%' },
//     visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
//   };

//   return (
//     <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center', fontFamily: 'Helvetica, Arial, sans-serif' }}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           marginRight: '20px',
//           padding: '8px 16px',
//           backgroundColor: '#007aff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '6px',
//           cursor: 'pointer'
//         }}
//       >
//         사이드바 토글
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={sidebarVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             style={{
//               background: '#ffffff',
//               width: '200px',
//               padding: '20px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//               border: '1px solid #c7c7cc'
//             }}
//           >
//             슬라이드 사이드바
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ============================================================================
//    7. 로딩 스피너
//    - rotate 애니메이션을 무한 반복하여 스피너 효과를 구현합니다.
//    - Apple의 파란색(#007aff)을 포인트로 사용했습니다.
// ============================================================================ */
// function LoadingSpinner() {
//   return (
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
//       style={{
//         width: '50px',
//         height: '50px',
//         border: '5px solid #e5e5ea',
//         borderTop: '5px solid #007aff',
//         borderRadius: '50%',
//         marginBottom: '20px'
//       }}
//     />
//   );
// }

// /* ============================================================================
//    8. 토스트 알림
//    - 버튼 클릭 시 우측 상단에 토스트 메시지가 나타났다가 3초 후 자동으로 사라집니다.
//    - 깔끔한 다크톤과 미세한 반투명 효과로 Apple 느낌을 줍니다.
// ============================================================================ */
// function ToastNotification() {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     if (isVisible) {
//       const timer = setTimeout(() => setIsVisible(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible]);

//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <button
//         onClick={() => setIsVisible(true)}
//         style={{
//           padding: '8px 16px',
//           backgroundColor: '#007aff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '6px',
//           cursor: 'pointer',
//           fontFamily: 'Helvetica, Arial, sans-serif'
//         }}
//       >
//         토스트 알림 띄우기
//       </button>
//       <div style={{ position: 'fixed', top: '20px', right: '20px' }}>
//         <AnimatePresence>
//           {isVisible && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               style={{
//                 background: 'rgba(51, 51, 51, 0.9)',
//                 color: '#fff',
//                 padding: '10px 20px',
//                 borderRadius: '8px',
//                 fontFamily: 'Helvetica, Arial, sans-serif'
//               }}
//             >
//               토스트 알림 메시지
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// /* ============================================================================
//    9. 공유 레이아웃 애니메이션
//    - 여러 아이템 중 하나를 클릭하면, 해당 아이템이 확대되어 상세 정보를 보여줍니다.
//    - layoutId를 이용해 자연스러운 전환 효과를 구현합니다.
// ============================================================================ */
// function SharedLayoutDemo() {
//   const [selected, setSelected] = useState(null);
//   const items = ['항목 1', '항목 2', '항목 3'];

//   return (
//     <div style={{ marginBottom: '20px', fontFamily: 'Helvetica, Arial, sans-serif' }}>
//       <div style={{ display: 'flex', gap: '10px' }}>
//         {items.map((item) => (
//           <motion.div
//             key={item}
//             layoutId={item}
//             onClick={() => setSelected(item)}
//             style={{
//               padding: '20px',
//               background: '#ffffff',
//               border: '1px solid #c7c7cc',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               flex: 1,
//               textAlign: 'center'
//             }}
//           >
//             {item}
//           </motion.div>
//         ))}
//       </div>
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             layoutId={selected}
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               background: '#ffffff',
//               padding: '40px',
//               borderRadius: '12px',
//               boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
//               zIndex: 100,
//               border: '1px solid #c7c7cc',
//               fontFamily: 'Helvetica, Arial, sans-serif'
//             }}
//             onClick={() => setSelected(null)}
//           >
//             <h3 style={{ margin: '0 0 10px', color: '#333' }}>{selected} 상세보기</h3>
//             <p style={{ fontSize: '14px', color: '#555' }}>자세한 설명...</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ============================================================================
//    10. 인터랙티브 프로그레스 바
//    - 사용자가 드래그하여 진행률을 변경할 수 있는 인터랙티브한 프로그레스 바를 구현합니다.
//    - 진행 바 색상은 Apple의 파란색(#007aff), 배경은 연한 그레이(#e5e5ea)로 구성했습니다.
// ============================================================================ */
// function ProgressBar() {
//   const [progress, setProgress] = useState(0);
//   const handleDrag = (event, info) => {
//     const newProgress = Math.min(Math.max(info.point.x / 300, 0), 1);
//     setProgress(newProgress);
//   };

//   return (
//     <div style={{ marginBottom: '20px', fontFamily: 'Helvetica, Arial, sans-serif' }}>
//       <p style={{ margin: '0 0 10px' }}>진행률: {(progress * 100).toFixed(0)}%</p>
//       <div style={{ background: '#e5e5ea', width: '300px', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
//         <motion.div
//           drag="x"
//           dragConstraints={{ left: 0, right: 300 }}
//           onDrag={handleDrag}
//           style={{
//             background: '#007aff',
//             width: `${progress * 300}px`,
//             height: '100%'
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// /* ============================================================================
//    메인 App 컴포넌트
//    - 위의 10가지 예시 컴포넌트를 모두 렌더링합니다.
// ============================================================================ */
// function App() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
//       <h1 style={{ color: '#333', marginBottom: '30px' }}>실무용 Framer Motion 예제 모음 (Apple 스타일)</h1>

//       {/* 1. 모달 컴포넌트 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>1. 모달 컴포넌트</h2>
//         <button
//           onClick={() => setModalOpen(true)}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007aff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer'
//           }}
//         >
//           모달 열기
//         </button>
//         <ModalComponent isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//       </section>

//       {/* 2. 드롭다운 메뉴 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>2. 드롭다운 메뉴</h2>
//         <DropdownMenu />
//       </section>

//       {/* 3. Hover & Tap 버튼 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>3. Hover & Tap 버튼</h2>
//         <HoverButton />
//       </section>

//       {/* 4. 드래그 가능한 카드 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>4. 드래그 가능한 카드</h2>
//         <DraggableCard />
//       </section>

//       {/* 5. 리스트 애니메이션 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>5. 리스트 애니메이션</h2>
//         <ListAnimation />
//       </section>

//       {/* 6. 슬라이드 사이드바 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>6. 슬라이드 사이드바</h2>
//         <SlideSidebar />
//       </section>

//       {/* 7. 로딩 스피너 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>7. 로딩 스피너</h2>
//         <LoadingSpinner />
//       </section>

//       {/* 8. 토스트 알림 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>8. 토스트 알림</h2>
//         <ToastNotification />
//       </section>

//       {/* 9. 공유 레이아웃 애니메이션 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>9. 공유 레이아웃 애니메이션</h2>
//         <SharedLayoutDemo />
//       </section>

//       {/* 10. 인터랙티브 프로그레스 바 */}
//       <section style={{ marginBottom: '40px' }}>
//         <h2 style={{ color: '#007aff' }}>10. 인터랙티브 프로그레스 바</h2>
//         <ProgressBar />
//       </section>
//     </div>
//   );
// }

// export default App;
