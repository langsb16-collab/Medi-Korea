# Medi Trip Korea 🏥

한국 의료관광을 희망하는 해외 환자를 위한 다국어 의료관광 유치 플랫폼

> **Official Korean Medical Tourism Guide Platform**

## 📋 프로젝트 개요

Medi Trip Korea는 해외 환자에게 한국 의료 서비스를 소개하고, 시술별 가격/효과 정보를 제공하며, 실시간 상담 신청까지 가능한 통합 의료관광 플랫폼입니다.

### 주요 목표
- ✅ 한국 의료·시술 정보를 다국어로 명확하게 제공
- ✅ 해외 환자의 상담 신청·예약 전환율 극대화
- ✅ 운영자가 실시간으로 해외 환자를 응대할 수 있는 관리 시스템
- ✅ PC·Mobile 모두 최적화된 반응형 디자인

## 🌐 URL 정보

### 개발 환경
- **메인 페이지**: https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai
- **관리자 페이지**: https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/admin
- **API 엔드포인트**: https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api

### 프로덕션 배포 (예정)
- Cloudflare Pages를 통한 글로벌 엣지 배포
- 커스텀 도메인 설정 가능

## 🌍 지원 언어 (6개 국어)

| 언어 | 코드 | 아이콘 |
|------|------|--------|
| 한국어 | ko | 🇰🇷 |
| English | en | 🇬🇧 |
| 中文 | zh | 🇨🇳 |
| 日本語 | ja | 🇯🇵 |
| Tiếng Việt | vi | 🇻🇳 |
| العربية | ar | 🇸🇦 |

언어 전환은 우측 상단의 언어 선택기를 통해 가능합니다.

## ✨ 주요 기능

### 1️⃣ 사용자 기능

#### 🏥 의료 서비스 카테고리 (10개)
- **성형외과** (Plastic Surgery): 쌍꺼풀, 코성형, 안면윤곽, 지방흡입, 가슴성형
- **피부과** (Dermatology): 레이저토닝, 리쥬란, 물광주사, 보톡스, 울쎄라
- **건강검진** (Health Check-up): VIP종합검진, PET-CT, 심장검진, 뇌 MRI/CT
- **치과** (Dental): 임플란트, 라미네이트, 교정, 미백
- **한방** (Korean Medicine): 추나요법, 침/약침, 한약처방
- **탈모** (Hair Loss): 모발이식, 두피관리
- **안과** (Ophthalmology): 라식/라섹, 백내장 수술
- **정형외과** (Orthopedics): 관절치료, 스포츠 손상
- **산부인과** (Obstetrics): 난임치료, 여성검진
- **비뇨의학과** (Urology): 남성수술, 전립선치료

#### 📝 상담 신청 시스템
- 이름, 이메일, 전화번호, 국가 정보 입력
- 문의 내용 작성
- **파일 첨부 기능** (의료기록, 사진 등 업로드 가능)
- 다국어 지원으로 자동 언어 태깅
- 실시간 업로드 진행률 표시

#### 💬 실시간 상담 연동
- **WhatsApp 플로팅 버튼** (우측 하단 고정)
- LINE, WeChat, Telegram 연동 준비
- 소셜 미디어 공유 기능

#### 📱 반응형 디자인
- 모바일 우선 설계 (Mobile-First Design)
- 태블릿, 데스크톱 완벽 지원
- 터치 친화적 UI/UX

### 2️⃣ 관리자 기능 (/admin)

#### 📊 대시보드 통계
- 전체 상담 신청 수
- 상태별 분류 (대기중, 연락완료, 처리완료, 취소)
- 실시간 업데이트

#### 📋 상담 관리
- 모든 상담 신청 내역 조회
- 상태별 필터링
- 상담 상태 변경 (Pending → Contacted → Completed)
- 환자 정보 및 첨부파일 확인

#### 📈 통계 분석 (향후 추가 예정)
- 국가별/언어별 유입 분석
- 시술별 클릭률
- 상담 전환율

## 🛠 기술 스택

### Frontend
- **Framework**: Hono (TypeScript)
- **Styling**: TailwindCSS (CDN)
- **Icons**: Font Awesome
- **HTTP Client**: Axios
- **Responsive**: Mobile-First Design

### Backend
- **Runtime**: Cloudflare Workers
- **Framework**: Hono
- **API**: RESTful API
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2 (파일 업로드)

### Infrastructure
- **Deployment**: Cloudflare Pages
- **Edge Network**: Global CDN
- **Development**: Wrangler CLI
- **Process Manager**: PM2

## 📂 데이터 모델

### 데이터베이스 구조 (D1 SQLite)

#### 1. procedures (시술 정보)
```sql
- id: 고유 ID
- category: 카테고리 (plastic_surgery, dermatology, etc.)
- name_ko, name_en, name_zh, name_ja, name_vi, name_ar: 다국어 이름
- description_ko ~ description_ar: 다국어 설명
- price_min, price_max: 가격 범위 (USD)
- duration: 시술 시간
- recovery_days: 회복 기간
- image_url: 이미지 URL
```

#### 2. consultations (상담 신청)
```sql
- id: 고유 ID
- name: 환자 이름
- email: 이메일
- phone: 전화번호
- country: 국가
- language: 언어 (ko, en, zh, ja, vi, ar)
- procedure_id: 관심 시술 ID
- message: 문의 내용
- file_urls: 첨부 파일 URL 배열 (JSON)
- status: 상태 (pending, contacted, completed, cancelled)
- created_at, updated_at: 타임스탬프
```

#### 3. hospitals (병원 정보)
```sql
- id: 고유 ID
- name_ko, name_en: 병원명
- specialties: 전문 분야 (JSON 배열)
- address: 주소
- phone: 전화번호
- website: 웹사이트
- rating: 평점
- certifications: 인증 정보
```

#### 4. reviews (후기)
```sql
- id: 고유 ID
- hospital_id: 병원 ID
- procedure_id: 시술 ID
- patient_name: 환자명
- patient_country: 국가
- rating: 평점 (1-5)
- comment_ko ~ comment_ar: 다국어 후기
- before_image_url, after_image_url: Before/After 이미지
```

## 🚀 개발 환경 설정

### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn
- Wrangler CLI (자동 설치됨)

### 설치 및 실행

1. **프로젝트 클론**
```bash
cd /home/user/webapp
```

2. **의존성 설치** (이미 설치됨)
```bash
npm install
```

3. **데이터베이스 초기화**
```bash
# 마이그레이션 실행
npm run db:migrate:local

# 시드 데이터 삽입
npm run db:seed
```

4. **개발 서버 시작**
```bash
# 방법 1: PM2로 백그라운드 실행 (추천)
npm run clean-port
npm run build
pm2 start ecosystem.config.cjs

# 방법 2: 직접 실행
npm run build
npm run dev:sandbox
```

5. **접속**
- 로컬: http://localhost:3000
- 공용 URL: https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai

### 유용한 명령어

```bash
# 빌드
npm run build

# 데이터베이스 초기화
npm run db:reset

# 포트 정리
npm run clean-port

# 서버 테스트
npm run test

# PM2 관리
pm2 list                        # 프로세스 목록
pm2 logs --nostream             # 로그 확인
pm2 restart medi-trip-korea     # 재시작
pm2 delete medi-trip-korea      # 중지 및 제거
```

## 📡 API 엔드포인트

### Public API

#### GET /api/translations/:lang
다국어 번역 데이터 조회
```bash
curl https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/translations/ko
```

#### GET /api/procedures
모든 시술 정보 조회
```bash
# 전체 조회
curl https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/procedures

# 카테고리별 조회
curl https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/procedures?category=plastic_surgery&lang=en
```

#### POST /api/consultations
상담 신청
```bash
curl -X POST https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "country": "USA",
    "language": "en",
    "message": "I am interested in rhinoplasty",
    "file_urls": []
  }'
```

#### POST /api/upload
파일 업로드 (R2 스토리지)
```bash
curl -X POST https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/upload \
  -F "file=@/path/to/file.jpg"
```

### Admin API

#### GET /api/admin/consultations
모든 상담 내역 조회 (관리자)
```bash
# 전체 조회
curl https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/admin/consultations

# 상태별 조회
curl https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/admin/consultations?status=pending
```

#### PUT /api/admin/consultations/:id
상담 상태 업데이트
```bash
curl -X PUT https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai/api/admin/consultations/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "contacted"}'
```

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx              # 메인 Hono 애플리케이션
│   └── renderer.tsx           # JSX 렌더러 (기본)
├── public/
│   └── static/
│       └── style.css          # 커스텀 CSS
├── migrations/
│   └── 0001_initial_schema.sql  # 데이터베이스 스키마
├── dist/                      # 빌드 결과물 (자동 생성)
│   ├── _worker.js             # Cloudflare Workers 번들
│   └── _routes.json           # 라우팅 설정
├── .wrangler/                 # Wrangler 로컬 스토리지 (자동 생성)
│   └── state/v3/d1/           # 로컬 D1 데이터베이스
├── package.json               # npm 설정 및 스크립트
├── wrangler.jsonc             # Cloudflare 설정
├── ecosystem.config.cjs       # PM2 설정
├── seed.sql                   # 시드 데이터
├── tsconfig.json              # TypeScript 설정
├── vite.config.ts             # Vite 빌드 설정
└── README.md                  # 프로젝트 문서 (이 파일)
```

## 🎨 주요 페이지

### 1. 메인 랜딩 페이지 (/)
- Hero 섹션: 타이틀, 설명, CTA 버튼
- Why Korea 섹션: 한국 의료의 4가지 장점
- 카테고리 섹션: 10개 의료 카테고리 (아이콘 카드)
- 시술 목록 섹션: 모든 시술 정보 (카드 형태)
- 상담 신청 폼: 이름, 이메일, 국가, 파일 업로드
- 플로팅 WhatsApp 버튼
- 푸터: 소셜 미디어 링크

### 2. 관리자 대시보드 (/admin)
- 통계 카드: 전체/대기/연락/완료 건수
- 필터: 상태별 필터링
- 테이블: 모든 상담 신청 내역
- 액션: 상태 변경 드롭다운

## 🌟 완료된 기능

✅ **다국어 지원** (한/영/중/일/베/아랍어)
✅ **시술 정보 DB** (30+ 시술, 카테고리별 분류)
✅ **상담 신청 시스템** (이름, 이메일, 국가, 메시지)
✅ **파일 업로드 기능** (R2 스토리지, 진행률 표시)
✅ **관리자 페이지** (상담 관리, 통계, 상태 변경)
✅ **반응형 디자인** (모바일/태블릿/데스크톱)
✅ **WhatsApp 연동** (플로팅 버튼)
✅ **D1 데이터베이스** (SQLite, 로컬/프로덕션)
✅ **API 엔드포인트** (RESTful API)
✅ **PM2 프로세스 관리**

## 🔜 향후 추가 예정 기능

### Phase 2
- [ ] 소셜 로그인 (Google, Apple, Facebook, LINE, WeChat, Kakao)
- [ ] 실시간 채팅 시스템 (Freshchat, Tidio, Sendbird)
- [ ] 후기 시스템 (Before/After 이미지)
- [ ] 병원 상세 페이지
- [ ] 예약 시스템
- [ ] 결제 연동

### Phase 3
- [ ] 다국어 자동 번역 (AI 기반)
- [ ] 챗봇 자동 응답
- [ ] 이메일 알림 (상담 신청 시)
- [ ] SMS 알림 (국제 SMS)
- [ ] 통계 대시보드 (Google Analytics 연동)
- [ ] SEO 최적화 (메타 태그, 사이트맵)

### Phase 4
- [ ] 모바일 앱 (React Native)
- [ ] 화상 상담 기능
- [ ] VIP 전담 매니저 시스템
- [ ] 의료관광 패키지 상품
- [ ] 항공권/호텔 예약 연동
- [ ] 통역 서비스 매칭

## 🚀 Cloudflare Pages 배포 가이드

### 사전 준비
1. Cloudflare 계정 생성
2. Cloudflare API 토큰 발급 (Deploy 탭에서)

### 배포 단계

#### 1. 프로덕션 D1 데이터베이스 생성
```bash
npx wrangler d1 create webapp-production

# 출력된 database_id를 wrangler.jsonc에 복사
```

#### 2. R2 버킷 생성
```bash
npx wrangler r2 bucket create webapp-uploads
```

#### 3. Cloudflare Pages 프로젝트 생성
```bash
npx wrangler pages project create medi-trip-korea \
  --production-branch main \
  --compatibility-date 2024-01-01
```

#### 4. 마이그레이션 실행 (프로덕션)
```bash
npm run db:migrate:prod
```

#### 5. 배포
```bash
npm run deploy:prod
```

### 배포 후 설정
1. 환경 변수 설정 (Cloudflare Dashboard)
2. 커스텀 도메인 연결 (선택사항)
3. DNS 설정

## 🔒 보안 고려사항

- ✅ CORS 설정 (API 라우트만 허용)
- ✅ 파일 업로드 검증 (이미지, PDF, 문서만 허용)
- ✅ SQL Injection 방지 (Prepared Statements)
- ⚠️ 관리자 인증 (향후 추가 예정)
- ⚠️ Rate Limiting (향후 추가 예정)
- ⚠️ HTTPS 강제 (Cloudflare 자동)

## 📱 소셜 미디어 연동

### 현재 지원
- **WhatsApp**: `wa.me/821012345678`
- **Facebook**: 플레이스홀더
- **Instagram**: 플레이스홀더
- **YouTube**: 플레이스홀더
- **WeChat**: 플레이스홀더 (중국 사용자용)
- **LINE**: 플레이스홀더 (일본/동남아 사용자용)

### 설정 방법
`src/index.tsx` 파일에서 각 소셜 미디어 링크를 실제 계정으로 변경하세요.

## 📊 샘플 데이터

현재 데이터베이스에는 다음 샘플 데이터가 포함되어 있습니다:

### 시술 (30+)
- 성형외과: 쌍꺼풀, 코성형, 안면윤곽, 지방흡입, 가슴성형
- 피부과: 레이저토닝, 리쥬란, 물광주사, 보톡스, 울쎄라
- 건강검진: VIP종합검진, PET-CT, 심장검진, 뇌 MRI/CT
- 치과: 임플란트, 라미네이트, 교정, 미백
- 한방: 추나요법, 침/약침, 한약
- 탈모: 모발이식, 두피관리
- 안과: 라식/라섹, 백내장

### 병원 (4개)
- 서울 성형외과
- 강남 피부과
- VIP 건강검진센터
- 서울 치과

## 🎓 사용 가이드

### 환자용
1. 언어 선택 (우측 상단)
2. 카테고리 탐색 또는 시술 목록 확인
3. 상담하기 버튼 클릭
4. 정보 입력 및 파일 첨부 (선택사항)
5. 신청 완료 → 이메일 확인 대기

### 관리자용
1. `/admin` 접속
2. 상담 내역 확인
3. 상태 필터링 (대기중/연락완료/완료)
4. 상태 변경 (드롭다운)
5. 환자 정보 및 첨부파일 확인

## 🐛 문제 해결

### 서버가 시작되지 않는 경우
```bash
# 포트 정리
npm run clean-port

# PM2 재시작
pm2 delete all
npm run build
pm2 start ecosystem.config.cjs
```

### 데이터베이스 오류
```bash
# 데이터베이스 초기화
npm run db:reset
```

### 빌드 오류
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 연락처

- **Email**: info@meditripkorea.com (예시)
- **WhatsApp**: +82 10-1234-5678 (예시)
- **Website**: https://3000-ix503ttpq2rn4yqn1dqzj-d0b9e1e2.sandbox.novita.ai

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🙏 감사의 말

- **Hono Framework**: 빠르고 가벼운 웹 프레임워크
- **Cloudflare**: 글로벌 엣지 플랫폼
- **TailwindCSS**: 유틸리티 우선 CSS 프레임워크
- **Font Awesome**: 아이콘 라이브러리

---

**마지막 업데이트**: 2024-11-30
**버전**: 1.0.0
**상태**: ✅ 개발 완료, 테스트 중
