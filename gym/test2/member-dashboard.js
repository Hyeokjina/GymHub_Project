// 회원 대시보드 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 혼잡도 차트 생성
    createCongestionChart();

    // 네비게이션 이벤트
    setupNavigation();

    // 운동 체크리스트 이벤트
    setupWorkoutChecklist();

    // 카드 애니메이션
    animateCards();
});

// 혼잡도 차트 생성
function createCongestionChart() {
    const ctx = document.getElementById('congestionChart');
    
    if (!ctx) return;

    // 시간대별 혼잡도 데이터
    const congestionData = [
        { time: '06:00', value: 15 },
        { time: '09:00', value: 45 },
        { time: '12:00', value: 55 },
        { time: '15:00', value: 35 },
        { time: '18:00', value: 85 },
        { time: '21:00', value: 75 }
    ];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: congestionData.map(d => d.time),
            datasets: [{
                label: '혼잡도',
                data: congestionData.map(d => d.value),
                borderColor: '#FF6B1A',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    
                    if (!chartArea) return null;
                    
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(255, 107, 26, 0.05)');
                    gradient.addColorStop(1, 'rgba(255, 107, 26, 0.4)');
                    return gradient;
                },
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: '#FF6B1A',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#FF6B1A',
                    bodyColor: '#fff',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            let status = '';
                            if (value >= 70) status = '혼잡';
                            else if (value >= 40) status = '보통';
                            else status = '여유';
                            return `${status} (${value}%)`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#b0b0b0',
                        font: { size: 12 },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 107, 26, 0.1)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#b0b0b0',
                        font: { size: 12 }
                    },
                    grid: {
                        color: 'rgba(255, 107, 26, 0.1)',
                        drawBorder: false
                    }
                }
            }
        }
    });
}

// 네비게이션 이벤트 설정
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모든 active 클래스 제거
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // 클릭된 항목에 active 추가
            this.classList.add('active');
            
            console.log('Navigation clicked:', this.textContent.trim());
            
            // TODO: 실제 페이지 전환 또는 컨텐츠 로드
        });
    });

    // 로그아웃 버튼
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            console.log('Logout clicked');
            // TODO: 로그아웃 처리
            if (confirm('로그아웃 하시겠습니까?')) {
                // 로그아웃 로직
                alert('로그아웃되었습니다.');
            }
        });
    }
}

// 운동 체크리스트 이벤트
function setupWorkoutChecklist() {
    const checkboxes = document.querySelectorAll('.workout-check input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const workoutItem = this.closest('.workout-item');
            const workoutName = workoutItem.querySelector('.workout-name').textContent;
            
            if (this.checked) {
                console.log(`Completed: ${workoutName}`);
                workoutItem.style.opacity = '0.7';
                
                // TODO: 서버에 완료 상태 저장
            } else {
                console.log(`Uncompleted: ${workoutName}`);
                workoutItem.style.opacity = '1';
                
                // TODO: 서버에 미완료 상태 저장
            }
        });
    });

    // 기록 추가 버튼
    const addBtn = document.querySelector('.btn-add');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            console.log('Add workout record clicked');
            // TODO: 운동 기록 추가 모달/폼 표시
            alert('운동 기록 추가 기능은 개발 중입니다.');
        });
    }
}

// 공지사항 클릭 이벤트
document.querySelectorAll('.notice-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.notice-title').textContent;
        console.log('Notice clicked:', title);
        // TODO: 공지사항 상세 페이지로 이동
    });
});

// 카드 애니메이션
function animateCards() {
    const cards = document.querySelectorAll('.info-card, .content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// 프로그레스 바 애니메이션
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill, .goal-fill');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

// 페이지 로드 시 프로그레스 바 애니메이션 실행
window.addEventListener('load', animateProgressBars);

// 회원 대시보드 데이터 (서버에서 가져올 데이터)
const memberDashboardData = {
    member: {
        name: '홍길동',
        membership: {
            type: '6개월 회원권',
            startDate: '2025.08.01',
            endDate: '2026.01.31',
            remainingDays: 89
        },
        attendance: {
            thisMonth: 18,
            goalDays: 25,
            percentage: 72
        },
        pt: {
            trainer: '김철수 코치',
            nextSession: '10월 28일 14:00',
            remainingSessions: 12,
            totalSessions: 20,
            goal: '근력 증진'
        }
    },
    congestion: [
        { time: '06:00', value: 15 },
        { time: '09:00', value: 45 },
        { time: '12:00', value: 55 },
        { time: '15:00', value: 35 },
        { time: '18:00', value: 85 },
        { time: '21:00', value: 75 }
    ],
    notices: [
        { 
            id: 1, 
            title: '추석 연휴 운영시간 안내', 
            date: '2025.10.25', 
            important: true 
        },
        { 
            id: 2, 
            title: '신규 GX 프로그램 오픈', 
            date: '2025.10.23', 
            important: false 
        },
        { 
            id: 3, 
            title: '락커 점검 완료', 
            date: '2025.10.20', 
            important: false 
        }
    ],
    todayWorkout: [
        { id: 1, name: '벤치프레스', detail: '3세트 x 12회', completed: true },
        { id: 2, name: '스쿼트', detail: '4세트 x 10회', completed: true },
        { id: 3, name: '데드리프트', detail: '3세트 x 8회', completed: false }
    ],
    goals: [
        { 
            id: 1, 
            name: '체중 5kg 감량', 
            current: 3, 
            target: 5, 
            unit: 'kg',
            percentage: 60 
        },
        { 
            id: 2, 
            name: '벤치프레스 70kg → 75kg', 
            current: 73, 
            target: 75, 
            unit: 'kg',
            percentage: 60 
        },
        { 
            id: 3, 
            name: '주 5회 운동 출석', 
            current: 4, 
            target: 5, 
            unit: '회',
            percentage: 80 
        }
    ]
};

// 모바일 사이드바 토글 (반응형)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// 햄버거 메뉴 버튼 추가 (모바일용)
if (window.innerWidth <= 768) {
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-btn';
    hamburgerBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#FF6B1A" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `;
    hamburgerBtn.onclick = toggleSidebar;
    
    document.querySelector('.main-content').prepend(hamburgerBtn);
    
    // 햄버거 버튼 스타일
    const style = document.createElement('style');
    style.textContent = `
        .hamburger-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            background: var(--bg-card);
            border: 2px solid var(--accent-orange);
            border-radius: 8px;
            padding: 8px;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(255, 107, 26, 0.4);
        }
        
        @media (min-width: 769px) {
            .hamburger-btn {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}
