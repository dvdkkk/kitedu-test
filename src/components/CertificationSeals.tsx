import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const SealExcellence: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradients */}
        <linearGradient id="goldOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#C5A47E" />
          <stop offset="100%" stopColor="#8D6E45" />
        </linearGradient>
        <radialGradient id="goldCenterGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="35%" stopColor="#FFE082" />
          <stop offset="70%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="#D4A017" />
        </radialGradient>
        <linearGradient id="blueRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B3C85" />
          <stop offset="50%" stopColor="#002159" />
          <stop offset="100%" stopColor="#0B2B61" />
        </linearGradient>
        <filter id="sealShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Main Outer Seal Shadow & Base Circle */}
      <g filter="url(#sealShadow)">
        {/* Outer Gold Decorative Teeth / Rim */}
        <circle cx="200" cy="200" r="192" fill="url(#goldOuterGrad)" />
        <circle cx="200" cy="200" r="186" fill="#001845" />
        
        {/* Blue Ring */}
        <circle cx="200" cy="200" r="182" fill="url(#blueRingGrad)" />
        <circle cx="200" cy="200" r="182" stroke="url(#goldOuterGrad)" strokeWidth="3" fill="none" />
        <circle cx="200" cy="200" r="138" stroke="url(#goldOuterGrad)" strokeWidth="3" fill="none" strokeDasharray="3 3" />

        {/* Inner Gold Circle */}
        <circle cx="200" cy="200" r="132" fill="url(#goldCenterGrad)" />
        <circle cx="200" cy="200" r="132" stroke="#B28900" strokeWidth="2" fill="none" />
        <circle cx="200" cy="200" r="124" stroke="#FFE082" strokeWidth="1.5" fill="none" opacity="0.8" />
      </g>

      {/* Outer Ring Curved Text */}
      <path id="topCurve" d="M 50,200 A 150,150 0 1,1 350,200" fill="none" />
      <path id="bottomCurve" d="M 352,200 A 152,152 0 0,1 48,200" fill="none" />

      {/* Top Stars */}
      <g fill="#FFE082">
        <polygon points="200,32 203,40 212,40 205,45 207,53 200,48 193,53 195,45 188,40 197,40" />
        <polygon points="160,40 162,47 170,47 164,51 166,58 160,54 154,58 156,51 150,47 158,47" />
        <polygon points="240,40 242,47 250,47 244,51 246,58 240,54 234,58 236,51 230,47 238,47" />
        <polygon points="122,58 124,65 132,65 126,69 128,76 122,72 116,76 118,69 112,65 120,65" />
        <polygon points="278,58 280,65 288,65 282,69 284,76 278,72 272,76 274,69 268,65 276,65" />
      </g>

      {/* Bottom Text in Blue Ring */}
      <text fill="#FFE082" fontSize="21" fontWeight="900" letterSpacing="1.5">
        <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
          고용노동부 | 직업능력심사평가원
        </textPath>
      </text>

      {/* Center Trophy Icon Graphic */}
      <g transform="translate(182, 90) scale(1.5)">
        <path d="M6 9 C6 13 10 16 12 16 C14 16 18 13 18 9 L18 3 L6 3 Z" fill="#002159" />
        <path d="M6 5 L2 5 C2 8 4 10 6 10 Z" fill="none" stroke="#002159" strokeWidth="1.5" />
        <path d="M18 5 L22 5 C22 8 20 10 18 10 Z" fill="none" stroke="#002159" strokeWidth="1.5" />
        <rect x="10.5" y="16" width="3" height="4" fill="#002159" />
        <rect x="8" y="20" width="8" height="2" fill="#002159" />
      </g>

      {/* Laurel Wreath Left & Right */}
      <g fill="#002159" opacity="0.25">
        <path d="M 110,180 C 100,160 110,130 130,120 C 120,135 120,165 130,180 Z" />
        <path d="M 290,180 C 300,160 290,130 270,120 C 280,135 280,165 270,180 Z" />
      </g>

      {/* Center Main Title */}
      <text x="200" y="195" textAnchor="middle" fill="#002159" fontSize="48" fontWeight="900" letterSpacing="-1">
        우 수
      </text>
      <text x="200" y="250" textAnchor="middle" fill="#002159" fontSize="48" fontWeight="900" letterSpacing="-1">
        훈련기관
      </text>

      {/* Certificate Number & Date */}
      <text x="200" y="285" textAnchor="middle" fill="#002159" fontSize="20" fontWeight="800">
        2022나-105-03
      </text>
      <text x="200" y="308" textAnchor="middle" fill="#002159" fontSize="18" fontWeight="700">
        (2023.01.~2027.12.)
      </text>
    </svg>
  );
};

export const SealBha: React.FC<{ className?: string }> = ({ className = "w-36 h-36" }) => {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bhaRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E5BBA" />
          <stop offset="50%" stopColor="#0D3B80" />
          <stop offset="100%" stopColor="#1B4D9B" />
        </linearGradient>
        <radialGradient id="bhaCenterGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="85%" stopColor="#F4F8FF" />
          <stop offset="100%" stopColor="#E3EDFC" />
        </radialGradient>
        <filter id="bhaShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Main Base Circles */}
      <g filter="url(#bhaShadow)">
        <circle cx="200" cy="200" r="192" fill="#5B93E4" />
        <circle cx="200" cy="200" r="186" fill="#0D3B80" />
        <circle cx="200" cy="200" r="182" fill="url(#bhaRingGrad)" />
        <circle cx="200" cy="200" r="182" stroke="#89B5F7" strokeWidth="2.5" fill="none" />
        <circle cx="200" cy="200" r="138" stroke="#89B5F7" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />

        {/* Inner White Circle */}
        <circle cx="200" cy="200" r="132" fill="url(#bhaCenterGrad)" />
        <circle cx="200" cy="200" r="132" stroke="#1E5BBA" strokeWidth="2" fill="none" />
        <circle cx="200" cy="200" r="124" stroke="#D0E2FF" strokeWidth="1.5" fill="none" />
      </g>

      {/* Outer Ring Curved Text */}
      <path id="bhaBottomCurve" d="M 352,200 A 152,152 0 0,1 48,200" fill="none" />

      {/* Top Laurel Wreath Leaves on Ring */}
      <g fill="#FFFFFF" opacity="0.9">
        <path d="M 170,45 C 180,40 190,45 200,50 C 190,52 180,50 170,45 Z" />
        <path d="M 230,45 C 220,40 210,45 200,50 C 210,52 220,50 230,45 Z" />
        <circle cx="200" cy="38" r="4" fill="#FFFFFF" />
      </g>

      {/* Bottom Ring Text */}
      <text fill="#FFFFFF" fontSize="21" fontWeight="900" letterSpacing="1.5">
        <textPath href="#bhaBottomCurve" startOffset="50%" textAnchor="middle">
          고용노동부 | 직업능력심사평가원
        </textPath>
      </text>

      {/* Center BHA Logo Graphic */}
      <g transform="translate(100, 100)">
        {/* Figure Dots */}
        <circle cx="95" cy="25" r="9" fill="#00A3FF" />
        <circle cx="125" cy="25" r="9" fill="#00A3FF" />

        {/* BHA Bold Lettering */}
        <text x="100" y="80" textAnchor="middle" fill="#0B3C85" fontSize="72" fontWeight="900" letterSpacing="-3">
          BHA
        </text>
      </g>

      {/* Subtitle Text */}
      <text x="200" y="210" textAnchor="middle" fill="#1E5BBA" fontSize="24" fontWeight="800" letterSpacing="0.5">
        Best
      </text>
      <text x="200" y="238" textAnchor="middle" fill="#1E5BBA" fontSize="26" fontWeight="900" letterSpacing="-0.5">
        HRD Academy
      </text>

      {/* Cert Number & Date */}
      <text x="200" y="276" textAnchor="middle" fill="#0D3B80" fontSize="20" fontWeight="800">
        2022A-002-02
      </text>
      <text x="200" y="300" textAnchor="middle" fill="#0D3B80" fontSize="18" fontWeight="700">
        [2023.01.~2027.12.]
      </text>
    </svg>
  );
};

export const CertificationSealsSection: React.FC = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-[#12151e] via-[#1a1e2c] to-[#12151e] rounded-3xl p-6 sm:p-10 border border-[#c5a47e]/30 shadow-[0_0_40px_rgba(197,164,126,0.15)] relative overflow-hidden">
      {/* Background Decorative Blur Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a47e]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Side: 2 Prominent Official Certification Seals */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 shrink-0 w-full lg:w-auto">
          {/* SEAL 1 CARD */}
          <div className="flex flex-col items-center group">
            <div className="relative p-3 sm:p-4 rounded-3xl bg-[#0a0b0d]/80 border border-[#c5a47e]/30 shadow-2xl group-hover:border-[#c5a47e]/60 transition-all group-hover:scale-105 duration-300">
              <SealExcellence className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-xl" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#c5a47e] text-[#0a0b0d] text-[11px] font-black tracking-tight whitespace-nowrap shadow-md">
                5년 인증 최고등급
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm font-extrabold text-white text-center">
              고용노동부 우수훈련기관
            </p>
            <p className="text-[11px] text-gray-400 font-medium text-center">
              2023.01 ~ 2027.12 (5년)
            </p>
          </div>

          {/* SEAL 2 CARD */}
          <div className="flex flex-col items-center group">
            <div className="relative p-3 sm:p-4 rounded-3xl bg-[#0a0b0d]/80 border border-blue-400/30 shadow-2xl group-hover:border-blue-400/60 transition-all group-hover:scale-105 duration-300">
              <SealBha className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-xl" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-white text-[11px] font-black tracking-tight whitespace-nowrap shadow-md">
                BHA 베스트 아카데미
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm font-extrabold text-white text-center">
              BHA 베스트 직업훈련기관
            </p>
            <p className="text-[11px] text-gray-400 font-medium text-center">
              2023.01 ~ 2027.12 (5년)
            </p>
          </div>
        </div>

        {/* Right Side: Persuasive Trust Copy & Call to Enroll */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a47e]/15 border border-[#c5a47e]/40 text-[#f7e7ce] text-xs font-black tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#c5a47e]" />
            <span>고용노동부 인정 최고 등급 훈련기관 인증</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
            대한민국 훈련기관 중 <span className="text-gradient-gold">상위 최우수 등급</span><br className="hidden sm:block" />
            검증된 국비지원 IT 교육기관입니다
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
            한국정보교육원은 고용노동부 및 직업능력심사평가원이 엄격한 심사를 통해 선정한 <strong className="text-white font-bold">5년 인증 우수훈련기관</strong>이자 <strong className="text-white font-bold">BHA(Best HRD Academy) 베스트 직업훈련기관</strong>입니다.<br className="hidden sm:block" />
            수준 높은 교수진과 실무 위주 AI × Java 커리큘럼, 압도적인 취업률로 여러분의 IT 개발자 커리어 시작을 함께합니다.
          </p>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">95%~100% 국비지원</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">매월 훈련장려금 지급 지원</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">1:1 맞춤 취업 컨설팅 & 이력서 첨삭</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">협력 IT 기업 채용 연계 혜택</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
