// 메인 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 검색 기능
    const searchInput = document.querySelector('.search-input');
    const gymCards = document.querySelectorAll('.gym-card');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        gymCards.forEach(card => {
            const gymName = card.querySelector('.gym-name').textContent.toLowerCase();
            const gymLocation = card.querySelector('.gym-location').textContent.toLowerCase();
            const gymDescription = card.querySelector('.gym-description').textContent.toLowerCase();
            
            if (gymName.includes(searchTerm) || 
                gymLocation.includes(searchTerm) || 
                gymDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 필터 버튼 클릭 이벤트
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 필터 버튼 활성화 토글
            this.classList.toggle('active');
            
            // 실제 필터링 로직은 서버와 연동하여 구현
            console.log('Filter clicked:', this.textContent.trim());
            
            // TODO: 서버에 필터 조건 전송 및 결과 업데이트
        });
    });

    // 헬스장 카드 클릭 이벤트 (상세 페이지로 이동)
    gymCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 버튼 클릭 시에는 카드 전체 클릭 이벤트 무시
            if (e.target.classList.contains('btn-view-detail')) {
                return;
            }
            
            const gymName = this.querySelector('.gym-name').textContent;
            console.log('Gym card clicked:', gymName);
            
            // TODO: 헬스장 상세 페이지로 이동
            // window.location.href = 'gym-detail.html?id=' + gymId;
        });
    });

    // 상세보기 버튼 클릭 이벤트
    const detailButtons = document.querySelectorAll('.btn-view-detail');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
            
            const card = this.closest('.gym-card');
            const gymName = card.querySelector('.gym-name').textContent;
            console.log('Detail button clicked for:', gymName);
            
            // TODO: 헬스장 상세 페이지로 이동
            // window.location.href = 'gym-detail.html?id=' + gymId;
        });
    });

    // 로그인 버튼 클릭 이벤트
    const loginBtn = document.querySelector('.btn-secondary');
    loginBtn.addEventListener('click', function() {
        console.log('Login button clicked');
        // TODO: 로그인 페이지로 이동
        // window.location.href = 'login.html';
    });

    // 회원가입 버튼 클릭 이벤트
    const signupBtn = document.querySelector('.btn-primary');
    signupBtn.addEventListener('click', function() {
        console.log('Signup button clicked');
        // TODO: 회원가입 페이지로 이동
        // window.location.href = 'signup.html';
    });

    // 필터 버튼 활성화 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .filter-btn.active {
            background-color: var(--accent-orange);
            color: white;
            border-color: var(--accent-orange);
        }
    `;
    document.head.appendChild(style);

    // 스크롤 애니메이션
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

    // 카드에 초기 스타일 적용 및 관찰 시작
    gymCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// 헬스장 데이터 (나중에 서버에서 가져올 데이터)
const gymData = [
    {
        id: 1,
        name: '피트니스 센터 강남점',
        location: '서울 강남구',
        description: '최신 시설을 갖춘 프리미엄 헬스장',
        rating: 4.8,
        reviewCount: 324,
        badges: ['무료주차', '주중전용', '사우나', '탁구'],
        facilities: ['주차', '샤워실', '락커', '최신기구'],
        prices: {
            '1month': 89000,
            '3months': 79000,
            '6months': 69000
        },
        thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400'
    },
    // 추가 헬스장 데이터...
];

// 헬스장 카드 동적 생성 함수 (서버 데이터 사용 시)
function createGymCard(gym) {
    return `
        <div class="gym-card" data-gym-id="${gym.id}">
            <div class="gym-image">
                <img src="${gym.thumbnail}" alt="${gym.name}">
                <div class="gym-badges">
                    ${gym.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                </div>
            </div>
            <div class="gym-content">
                <div class="gym-header">
                    <h3 class="gym-name">${gym.name}</h3>
                    <div class="gym-rating">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1L10 6H15L11 9L12.5 14L8 11L3.5 14L5 9L1 6H6L8 1Z" fill="#FF6B1A"/>
                        </svg>
                        <span>${gym.rating}</span>
                        <span class="review-count">(${gym.reviewCount})</span>
                    </div>
                </div>
                <p class="gym-location">📍 ${gym.location}</p>
                <p class="gym-description">${gym.description}</p>
                
                <div class="gym-facilities">
                    ${gym.facilities.map(facility => `
                        <div class="facility-icon" title="${facility}">
                            <span>${facility}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="gym-footer">
                    <div class="gym-price">
                        <span class="price-label">1개월</span>
                        <span class="price-value">월 ${gym.prices['1month'].toLocaleString()}원</span>
                    </div>
                    <button class="btn-view-detail">상세보기</button>
                </div>
            </div>
        </div>
    `;
}
