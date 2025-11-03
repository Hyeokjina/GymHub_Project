// 헬스장 운영 관리 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 차트 생성
    createRevenueChart();
    createMemberChart();

    // 필터 이벤트 설정
    setupFilters();

    // 테이블 이벤트 설정
    setupTableEvents();

    // 탭 이벤트 설정
    setupTabs();

    // 상담 확인 버튼
    setupConsultationButtons();

    // 카드 애니메이션
    animateCards();
});

// 매출 차트 생성
function createRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    
    if (!ctx) return;

    const revenueData = {
        labels: ['4월', '5월', '6월', '7월', '8월', '9월', '10월'],
        datasets: [{
            label: '매출 (원)',
            data: [14000000, 14500000, 15200000, 14800000, 16000000, 16500000, 17200000],
            backgroundColor: function(context) {
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                
                if (!chartArea) return null;
                
                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, 'rgba(255, 107, 26, 0.1)');
                gradient.addColorStop(1, 'rgba(255, 107, 26, 0.8)');
                return gradient;
            },
            borderColor: '#FF6B1A',
            borderWidth: 2,
            borderRadius: 8
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: revenueData,
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
                            return context.parsed.y.toLocaleString() + '원';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#b0b0b0',
                        font: { size: 12 },
                        callback: function(value) {
                            return (value / 1000000) + '백만';
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
                        display: false
                    }
                }
            }
        }
    });
}

// 회원 현황 차트 생성
function createMemberChart() {
    const ctx = document.getElementById('memberChart');
    
    if (!ctx) return;

    const memberData = {
        labels: ['정상', '만료임박', '만료', '신규'],
        datasets: [{
            data: [155, 25, 12, 13],
            backgroundColor: [
                'rgba(74, 222, 128, 0.8)',
                'rgba(251, 191, 36, 0.8)',
                'rgba(248, 113, 113, 0.8)',
                'rgba(255, 107, 26, 0.8)'
            ],
            borderColor: [
                '#4ade80',
                '#fbbf24',
                '#f87171',
                '#FF6B1A'
            ],
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: memberData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#b0b0b0',
                        font: { size: 12 },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#FF6B1A',
                    bodyColor: '#fff',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value}명 (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

// 필터 이벤트 설정
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 active 제거
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 추가
            this.classList.add('active');
            
            const status = this.dataset.status;
            console.log('Filter changed:', status);
            
            // TODO: 테이블 필터링 로직
            filterTable(status);
        });
    });
}

// 테이블 필터링
function filterTable(status) {
    const rows = document.querySelectorAll('.data-table tbody tr');
    
    rows.forEach(row => {
        if (status === 'all') {
            row.style.display = '';
        } else {
            const statusBadge = row.querySelector('.status-badge');
            const rowStatus = getStatusFromBadge(statusBadge);
            
            row.style.display = rowStatus === status ? '' : 'none';
        }
    });
}

// 배지에서 상태 추출
function getStatusFromBadge(badge) {
    if (!badge) return 'all';
    
    if (badge.classList.contains('active')) return 'active';
    if (badge.classList.contains('warning')) return 'expiring';
    if (badge.classList.contains('expired')) return 'expired';
    if (badge.classList.contains('new')) return 'new';
    
    return 'all';
}

// 테이블 이벤트 설정
function setupTableEvents() {
    // 회원 등록 버튼
    const addMemberBtn = document.querySelector('.btn-primary');
    if (addMemberBtn) {
        addMemberBtn.addEventListener('click', function() {
            console.log('Add new member clicked');
            // TODO: 신규 회원 등록 모달 표시
            alert('신규 회원 등록 기능은 개발 중입니다.');
        });
    }

    // 연장 버튼들
    const extendButtons = document.querySelectorAll('.btn-table');
    extendButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const row = this.closest('tr');
            const memberName = row.querySelector('.member-name').textContent;
            console.log('Extend membership for:', memberName);
            
            // TODO: 회원권 연장 모달 표시
            if (confirm(`${memberName}님의 회원권을 연장하시겠습니까?`)) {
                alert('회원권 연장이 완료되었습니다.');
            }
        });
    });

    // 행 클릭 이벤트
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const memberName = this.querySelector('.member-name').textContent;
            console.log('Member row clicked:', memberName);
            // TODO: 회원 상세 정보 모달 표시
        });
    });
}

// 탭 이벤트 설정
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 active 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 추가
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            console.log('Tab changed:', filter);
            
            // TODO: 해당 섹션으로 스크롤 또는 컨텐츠 변경
            scrollToSection(filter);
        });
    });
}

// 섹션으로 스크롤
function scrollToSection(section) {
    // 간단한 구현 - 실제로는 해당 섹션 ID로 스크롤
    console.log('Scrolling to section:', section);
}

// 상담 확인 버튼
function setupConsultationButtons() {
    const confirmButtons = document.querySelectorAll('.btn-confirm');
    
    confirmButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.consultation-item');
            const name = item.querySelector('.consultation-name').textContent;
            const type = item.querySelector('.consultation-type').textContent;
            const date = item.querySelector('.consultation-date').textContent;
            
            console.log('Consultation confirmed:', { name, type, date });
            
            if (confirm(`${name}님의 ${type} 예약을 확인하시겠습니까?`)) {
                // TODO: 서버에 확인 상태 전송
                item.style.opacity = '0.5';
                this.textContent = '확인완료';
                this.disabled = true;
                this.style.background = '#4ade80';
            }
        });
    });

    // 재고 추가 버튼
    const addInventoryBtn = document.querySelector('.btn-small');
    if (addInventoryBtn) {
        addInventoryBtn.addEventListener('click', function() {
            console.log('Add inventory clicked');
            // TODO: 재고 추가 모달 표시
            alert('재고 추가 기능은 개발 중입니다.');
        });
    }

    // 락커 상세 관리 버튼
    const lockerDetailBtn = document.querySelector('.btn-full');
    if (lockerDetailBtn) {
        lockerDetailBtn.addEventListener('click', function() {
            console.log('Locker detail management clicked');
            // TODO: 락커 상세 관리 페이지로 이동
            alert('락커 상세 관리 페이지로 이동합니다.');
        });
    }
}

// 카드 애니메이션
function animateCards() {
    const cards = document.querySelectorAll('.stat-card, .content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
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

// 네비게이션 이벤트
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 모든 active 제거
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // 클릭된 항목에 active 추가
        this.classList.add('active');
        
        console.log('Navigation clicked:', this.textContent.trim());
    });
});

// 로그아웃
document.querySelector('.btn-logout').addEventListener('click', function() {
    if (confirm('로그아웃 하시겠습니까?')) {
        console.log('Logout');
        // TODO: 로그아웃 처리
        alert('로그아웃되었습니다.');
    }
});

// 관리자 대시보드 데이터
const adminDashboardData = {
    stats: {
        revenue: {
            current: 17200000,
            change: 4.2,
            trend: 'up'
        },
        members: {
            total: 205,
            new: 13,
            expiring: 25
        },
        attendance: {
            today: 156,
            rate: 76
        }
    },
    revenue: {
        monthly: [
            { month: '4월', amount: 14000000 },
            { month: '5월', amount: 14500000 },
            { month: '6월', amount: 15200000 },
            { month: '7월', amount: 14800000 },
            { month: '8월', amount: 16000000 },
            { month: '9월', amount: 16500000 },
            { month: '10월', amount: 17200000 }
        ]
    },
    members: {
        byStatus: {
            active: 155,
            expiring: 25,
            expired: 12,
            new: 13
        }
    },
    consultations: [
        {
            id: 1,
            name: '이민지',
            type: '방문 상담',
            date: '10월 29일 15:00',
            phone: '010-1234-5678'
        },
        {
            id: 2,
            name: '김태현',
            type: '전화 상담',
            date: '10월 30일 10:00',
            phone: '010-9876-5432'
        },
        {
            id: 3,
            name: '박지영',
            type: '방문 상담',
            date: '10월 31일 14:00',
            phone: '010-5555-1234'
        }
    ],
    inventory: [
        { name: '수건', current: 150, total: 200, percentage: 75 },
        { name: '운동복', current: 35, total: 100, percentage: 35 },
        { name: '생수', current: 120, total: 200, percentage: 60 },
        { name: '단백질 음료', current: 80, total: 100, percentage: 80 }
    ],
    lockers: {
        empty: 45,
        inUse: 87,
        expiring: 12,
        expired: 6,
        total: 150
    }
};

// 모바일 사이드바 토글
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// 햄버거 메뉴 (모바일)
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
