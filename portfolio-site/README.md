# 정민성 포트폴리오 웹사이트

정민성님의 개인 포트폴리오를 기반으로 제작된 현대적이고 반응형인 웹사이트입니다.

## 🌟 주요 기능

### ✨ 디자인 & UX
- **현대적인 디자인**: 그라디언트와 부드러운 애니메이션이 적용된 모던한 UI
- **다크/라이트 테마**: 사용자 선호에 따른 테마 전환 기능
- **완전한 반응형**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **부드러운 애니메이션**: 스크롤 기반 요소 등장 효과 및 호버 효과

### 🎯 인터랙티브 요소
- **타이핑 애니메이션**: 히어로 섹션의 동적 텍스트 효과
- **탭 인터페이스**: 활동 섹션의 외부/교내 활동 분류
- **부드러운 스크롤**: 네비게이션 클릭 시 해당 섹션으로 자연스러운 이동
- **스크롤 하이라이트**: 현재 보고 있는 섹션에 따른 네비게이션 하이라이트

### 📱 사용성
- **모바일 친화적**: 햄버거 메뉴와 터치 최적화
- **키보드 네비게이션**: 접근성을 고려한 키보드 조작 지원
- **빠른 연락**: 전화, 이메일, GitHub 링크의 원클릭 접근
- **이메일 복사**: 우클릭으로 이메일 주소 클립보드 복사

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업과 접근성 고려
- **CSS3**: 
  - CSS Grid & Flexbox 레이아웃
  - CSS Variables로 테마 시스템 구현
  - 고급 애니메이션 및 트랜지션
  - 미디어 쿼리를 활용한 반응형 디자인
- **Vanilla JavaScript**: 
  - ES6+ 문법 활용
  - Intersection Observer API
  - Local Storage를 이용한 테마 기억
  - 성능 최적화된 이벤트 핸들링

## 📂 파일 구조

```
portfolio-site/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 모든 스타일시트
├── js/
│   └── script.js       # JavaScript 인터랙션
└── README.md           # 프로젝트 설명서
```

## 🚀 시작하기

### 1. 파일 다운로드
포트폴리오 사이트 폴더를 로컬에 다운로드합니다.

### 2. 로컬 서버 실행
웹브라우저에서 `index.html` 파일을 직접 열거나, 로컬 서버를 사용하세요:

```bash
# Python을 사용한 로컬 서버
cd portfolio-site
python -m http.server 8000

# Node.js live-server 사용 (설치 필요)
npx live-server

# VS Code Live Server 확장 사용
```

### 3. 웹브라우저에서 확인
`http://localhost:8000` 또는 해당 주소로 접속하여 포트폴리오를 확인합니다.

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하
- **Small Mobile**: 480px 이하

## 🎨 커스터마이징

### 색상 테마 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정:

```css
:root {
    --primary-color: #667eea;    /* 메인 색상 */
    --secondary-color: #764ba2;  /* 보조 색상 */
    --accent-color: #f093fb;     /* 강조 색상 */
    /* ... 기타 색상 변수들 */
}
```

### 콘텐츠 수정
`index.html` 파일에서 개인 정보, 프로젝트, 경력 등을 수정할 수 있습니다.

### 타이핑 애니메이션 텍스트 변경
`js/script.js` 파일의 `typewriterTexts` 배열 수정:

```javascript
const typewriterTexts = [
    "여기에 원하는 텍스트 입력",
    "두 번째 텍스트",
    // ... 더 많은 텍스트 추가 가능
];
```

## 🌐 배포

### GitHub Pages
1. GitHub 저장소 생성
2. 파일들을 저장소에 업로드
3. Settings > Pages에서 GitHub Pages 활성화

### Netlify
1. [Netlify](https://netlify.com)에 폴더 드래그 앤 드롭
2. 자동으로 배포 완료

### Vercel
1. [Vercel](https://vercel.com)에 프로젝트 import
2. 자동 배포 및 도메인 제공

## 📞 지원

이 포트폴리오 웹사이트는 정민성님의 실제 정보를 바탕으로 제작되었습니다.

**연락처:**
- 📧 이메일: joungminsung080830@gmail.com
- 📱 전화: 010-8308-0275
- 🐙 GitHub: [github.com/joungminsung](https://github.com/joungminsung)

## ⚡ 성능 최적화

- **이미지 최적화**: WebP 형식 지원 및 lazy loading
- **CSS 최적화**: Critical CSS 인라인 적용
- **JavaScript 최적화**: 이벤트 쓰로틀링 및 debouncing
- **폰트 최적화**: Google Fonts preconnect 및 display swap

## 🔧 브라우저 지원

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**작지만 편리함을 만드는 프론트엔드 개발자 정민성의 포트폴리오입니다.**