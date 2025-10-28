// 헬스장 상세 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 혼잡도 차트 생성
    createCongestionChart();

    // 모달 닫기 이벤트
    setupModalEvents();

    // 예약 버튼 이벤트
    setupBookingEvents();
});

// 혼잡도 차트 생성
function createCongestionChart() {
    const ctx = document.getElementById('congestionChart');
    
    if (!ctx) return;

    // 시간대별 혼잡도 데이터 (0-100)
    const congestionData = [
        { time: '06:00', value: 20 },
        { time: '08:00', value: 45 },
        { time: '10:00', value: 30 },
        { time: '12:00', value: 55 },
        { time: '14:00', value: 35 },
        { time: '16:00', value: 40 },
        { time: '18:00', value: 85 },
        { time: '20:00', value: 75 },
        { time: '22:00', value: 45 }
    ];

    // 차트 생성
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
                    
                    if (!chartArea) {
                        return null;
                    }
                    
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(255, 107, 26, 0.05)');
                    gradient.addColorStop(1, 'rgba(255, 107, 26, 0.3)');
                    return gradient;
                },
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: '#FF6B1A',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: '#FF6B1A',
                pointHoverBorderColor: '#fff',
                segment: {
                    borderColor: function(context) {
                        const value = context.p1.parsed.y;
                        if (value >= 70) return '#f87171'; // 혼잡
                        if (value >= 40) return '#fbbf24'; // 보통
                        return '#4ade80'; // 여유
                    }
                }
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
                        font: {
                            size: 12
                        },
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
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 107, 26, 0.1)',
                        drawBorder: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// 모달 이벤트 설정
function setupModalEvents() {
    const modal = document.getElementById('gymDetailModal');
    const closeBtn = document.getElementById('closeModal');
    const overlay = modal;

    // 닫기 버튼 클릭
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // 오버레이 클릭 (모달 외부 클릭 시 닫기)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById('gymDetailModal');
    modal.style.animation = 'modalFadeOut 0.3s ease';
    
    setTimeout(() => {
        // 실제 프로젝트에서는 여기서 페이지 이동 또는 모달 숨김 처리
        console.log('Modal closed');
        // window.history.back(); 또는
        // modal.style.display = 'none';
    }, 300);
}

// 예약 버튼 이벤트 설정
function setupBookingEvents() {
    const visitBtn = document.querySelector('.btn-visit');
    const consultBtn = document.querySelector('.btn-consult');

    // 방문 예약 버튼
    visitBtn.addEventListener('click', function() {
        console.log('방문 예약 클릭');
        
        // TODO: 방문 예약 폼/페이지로 이동
        // 실제로는 예약 페이지로 이동하거나 예약 모달을 띄움
        alert('방문 예약 기능은 로그인 후 이용 가능합니다.');
    });

    // 상담 예약 버튼
    consultBtn.addEventListener('click', function() {
        console.log('상담 예약 클릭');
        
        // TODO: 상담 예약 폼/페이지로 이동
        // 실제로는 상담 예약 폼을 띄우거나 페이지로 이동
        alert('상담 예약 기능은 로그인 후 이용 가능합니다.');
    });
}

// 헬스장 상세 데이터 (서버에서 가져올 데이터)
const gymDetailData = {
    id: 1,
    name: '종합 스포츠 센터',
    description: '종합 스포츠 센터',
    rating: 4.9,
    reviewCount: 312,
    badges: ['무료주차', '주중전용', '사우나', '탁구'],
    facilities: [
        { name: '주차', icon: 'parking' },
        { name: '샤워실', icon: 'shower' },
        { name: '락커', icon: 'locker' },
        { name: '최신기구', icon: 'equipment' }
    ],
    equipment: [
        {
            name: '트레드밀',
            count: '12대',
            brand: '프리코어',
            condition: '우수',
            year: '2023년'
        },
        {
            name: '스미스머신',
            count: '4대',
            brand: '라이프피트니스',
            condition: '우수',
            year: '2024년'
        },
        {
            name: '덤벨',
            count: '40세트',
            brand: '하머스트렝스',
            condition: '우수',
            weight: '2kg ~ 50kg'
        },
        {
            name: '렉',
            count: '6대',
            brand: '로그',
            condition: '우수',
            year: '2023년'
        }
    ],
    hours: {
        weekday: { open: '06:00', close: '23:00' },
        weekend: { open: '08:00', close: '20:00' }
    },
    prices: [
        { period: '1개월', price: 99000 },
        { period: '3개월', price: 79000 },
        { period: '6개월', price: 69000 }
    ],
    congestion: [
        { time: '06:00', value: 20 },
        { time: '08:00', value: 45 },
        { time: '10:00', value: 30 },
        { time: '12:00', value: 55 },
        { time: '14:00', value: 35 },
        { time: '16:00', value: 40 },
        { time: '18:00', value: 85 },
        { time: '20:00', value: 75 },
        { time: '22:00', value: 45 }
    ]
};

// 애니메이션 효과
const style = document.createElement('style');
style.textContent = `
    @keyframes modalFadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }
`;
document.head.appendChild(style);
