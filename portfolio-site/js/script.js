// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 요소들 선택
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const typewriter = document.getElementById('typewriter');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // 타이핑 애니메이션 텍스트들
    const typewriterTexts = [
        "복잡함보다 실용성을 추구합니다",
        "작지만 확실한 편리함을 만듭니다",
        "협업과 소통이 능숙한 개발자입니다",
        "새로움보다 필요함을 중시합니다"
    ];

    // 모바일 네비게이션 토글
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 다크/라이트 테마 토글
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // 아이콘 변경
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        // 로컬 스토리지에 테마 저장
        localStorage.setItem('theme', newTheme);
    });

    // 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // 타이핑 애니메이션 함수
    function typeWriter(text, element, speed = 50) {
        return new Promise((resolve) => {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    setTimeout(resolve, 1000); // 1초 대기 후 다음 텍스트
                }
            }
            type();
        });
    }

    // 텍스트 지우기 애니메이션
    function eraseText(element, speed = 30) {
        return new Promise((resolve) => {
            const text = element.textContent;
            let i = text.length;
            
            function erase() {
                if (i > 0) {
                    element.textContent = text.substring(0, i - 1);
                    i--;
                    setTimeout(erase, speed);
                } else {
                    setTimeout(resolve, 500); // 0.5초 대기
                }
            }
            erase();
        });
    }

    // 타이핑 애니메이션 시작
    async function startTypewriterAnimation() {
        let currentIndex = 0;
        
        while (true) {
            await typeWriter(typewriterTexts[currentIndex], typewriter, 80);
            await eraseText(typewriter, 50);
            currentIndex = (currentIndex + 1) % typewriterTexts.length;
        }
    }

    // 타이핑 애니메이션 시작 (약간의 지연 후)
    setTimeout(startTypewriterAnimation, 1000);

    // 탭 기능 (활동 섹션)
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 모든 탭 버튼에서 active 클래스 제거
            tabBtns.forEach(tab => tab.classList.remove('active'));
            // 클릭된 탭 버튼에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 탭 콘텐츠 숨기기
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 선택된 탭 콘텐츠 보이기
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 스크롤 이벤트 - 네비게이션 배경 변경
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = savedTheme === 'dark' 
                ? 'rgba(15, 23, 42, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = savedTheme === 'dark' 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
    });

    // 스크롤 시 섹션 하이라이트
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // 모든 네비게이션 링크에서 active 클래스 제거
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // 현재 섹션에 해당하는 네비게이션 링크에 active 클래스 추가
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // 부드러운 스크롤 (구형 브라우저 대응)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 네비게이션 높이만큼 오프셋
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 스크롤 애니메이션 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들 관찰 시작 (부드럽게 조정)
    const animatedElements = document.querySelectorAll('.skill-category, .activity-card, .project-card, .contact-card, .education-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(el);
    });

    // 스킬 아이템 호버 효과 (자연스럽게 조정)
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 연락처 카드 클릭 이벤트
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            const btn = this.querySelector('.contact-btn');
            if (btn) {
                btn.click();
            }
        });
    });

    // 이메일 주소 복사 기능
    const emailElements = document.querySelectorAll('[href^="mailto:"]');
    emailElements.forEach(emailEl => {
        emailEl.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const email = this.textContent || this.href.replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('이메일 주소가 복사되었습니다!');
                });
            } else {
                // 구형 브라우저 대응
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification('이메일 주소가 복사되었습니다!');
            }
        });
    });

    // 알림 메시지 표시 함수
    function showNotification(message) {
        // 기존 알림이 있다면 제거
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: var(--shadow);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(notification);

        // 애니메이션으로 표시
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 3초 후 자동 제거
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // 키보드 네비게이션 지원
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Tab 키 네비게이션 개선
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });

    // 마우스 사용 시 포커스 스타일 제거
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });

    // 페이지 로드 완료 후 초기 애니메이션
    window.addEventListener('load', function() {
        // 히어로 섹션 애니메이션
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    // 성능 최적화 - 스크롤 이벤트 쓰로틀링
    let ticking = false;
    
    function updateScrollEffects() {
        highlightNavLink();
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    console.log('🚀 포트폴리오 사이트가 성공적으로 로드되었습니다!');
});

// 포커스 스타일 CSS 추가
const focusStyles = document.createElement('style');
focusStyles.textContent = `
    body:not(.using-keyboard) *:focus {
        outline: none;
    }
    
    .using-keyboard *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .notification {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .notification {
            transition: none !important;
        }
    }
`;
document.head.appendChild(focusStyles);