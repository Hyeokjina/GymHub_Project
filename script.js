const gymsData = [
  {
    id: 1,
    name: "프리미엄 피트니스 센터",
    location: "서울 강남구 테헤란로 123",
    district: "강남",
    price: "월 150,000원",
    priceValue: 150000,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjEyNjYyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["웨이트 트레이닝", "유산소 운동", "개인 락커", "샤워실", "주차장"],
    description: "최신 시설과 다양한 운동 기구를 갖춘 프리미엄 헬스장입니다. 전문 트레이너의 1:1 관리를 받을 수 있습니다.",
    openHours: "평일 06:00-23:00, 주말 08:00-21:00",
    phone: "02-1234-5678",
    features: ["프리미엄", "최신시설", "PT가능"]
  },
  {
    id: 2,
    name: "스트롱 짐",
    location: "서울 마포구 홍대입구 456",
    district: "홍대",
    price: "월 90,000원",
    priceValue: 90000,
    rating: 4.6,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1641236475922-4537ef0b974e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2VudGVyJTIwd2VpZ2h0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MTI2NjIwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["웨이트 트레이닝", "유산소 운동", "샤워실", "와이파이"],
    description: "웨이트 트레이닝에 특화된 헬스장으로 다양한 프리웨이트 기구를 보유하고 있습니다.",
    openHours: "평일 06:00-24:00, 주말 08:00-22:00",
    phone: "02-2345-6789",
    features: ["웨이트 특화", "24시간", "합리적"]
  },
  {
    id: 3,
    name: "요가 앤 필라테스 스튜디오",
    location: "서울 송파구 잠실동 789",
    district: "잠실",
    price: "월 120,000원",
    priceValue: 120000,
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1641971215217-fc55b492d11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2xhc3N8ZW58MXx8fHwxNzYxMjI0NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["요가", "필라테스", "그룹수업", "개인 락커", "샤워실"],
    description: "전문 강사진과 함께하는 요가 및 필라테스 전문 스튜디오입니다. 소규모 그룹 수업으로 진행됩니다.",
    openHours: "평일 07:00-22:00, 주말 09:00-20:00",
    phone: "02-3456-7890",
    features: ["요가/필라테스", "소규모", "여성전용"]
  },
  {
    id: 4,
    name: "크로스핏 박스",
    location: "서울 용산구 이태원로 321",
    district: "이태원",
    price: "월 180,000원",
    priceValue: 180000,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1662381906696-bcad03513531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzYxMTU2Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["크로스핏", "기능성 훈련", "그룹수업", "샤워실", "주차장"],
    description: "고강도 크로스핏 트레이닝을 통해 전신 근력과 체력을 향상시킬 수 있습니다.",
    openHours: "평일 06:00-23:00, 주말 08:00-20:00",
    phone: "02-4567-8901",
    features: ["크로스핏", "그룹수업", "고강도"]
  },
  {
    id: 5,
    name: "럭셔리 휘트니스 클럽",
    location: "서울 서초구 반포대로 654",
    district: "서초",
    price: "월 200,000원",
    priceValue: 200000,
    rating: 4.9,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmaXRuZXNzJTIwY2x1YnxlbnwxfHx8fDE3NjEyNjYyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["웨이트 트레이닝", "유산소 운동", "수영장", "사우나", "개인 락커", "주차장", "카페"],
    description: "최고급 시설과 서비스를 제공하는 프리미엄 휘트니스 클럽입니다. 수영장과 사우나를 포함한 다양한 부대시설을 갖추고 있습니다.",
    openHours: "평일 06:00-23:00, 주말 07:00-22:00",
    phone: "02-5678-9012",
    features: ["럭셔리", "수영장", "사우나"]
  },
  {
    id: 6,
    name: "커뮤니티 피트니스",
    location: "서울 성동구 성수동 987",
    district: "성수",
    price: "월 70,000원",
    priceValue: 70000,
    rating: 4.5,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1758798458635-f01402b40919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3NjEyNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    facilities: ["웨이트 트레이닝", "유산소 운동", "그룹수업", "샤워실"],
    description: "합리적인 가격으로 다양한 그룹 수업과 함께 운동할 수 있는 커뮤니티 중심의 헬스장입니다.",
    openHours: "평일 06:00-23:00, 주말 08:00-21:00",
    phone: "02-6789-0123",
    features: ["합리적", "그룹수업", "커뮤니티"]
  }
];

const districts = ["강남", "홍대", "잠실", "이태원", "서초", "성수"];
const facilities = [
  "웨이트 트레이닝", "유산소 운동", "요가", "필라테스", "크로스핏",
  "수영장", "사우나", "그룹수업", "개인 락커", "샤워실", "주차장"
];

let selectedDistricts = [];
let selectedFacilities = [];
let currentSortOption = 'default'; // 'default', 'price-high', 'price-low', 'rating'

function initFilters() {
  const districtFilters = document.getElementById('districtFilters');
  districts.forEach(district => {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `
      <input type="checkbox" class="checkbox" value="${district}" onchange="toggleDistrict('${district}')">
      <span class="checkbox-label">${district}</span>
    `;
    districtFilters.appendChild(label);
  });

  const facilityFilters = document.getElementById('facilityFilters');
  facilities.forEach(facility => {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `
      <input type="checkbox" class="checkbox" value="${facility}" onchange="toggleFacility('${facility}')">
      <span class="checkbox-label">${facility}</span>
    `;
    facilityFilters.appendChild(label);
  });
}

function toggleDistrict(district) {
  const index = selectedDistricts.indexOf(district);
  if (index > -1) {
    selectedDistricts.splice(index, 1);
  } else {
    selectedDistricts.push(district);
  }
  filterGyms();
}

function toggleFacility(facility) {
  const index = selectedFacilities.indexOf(facility);
  if (index > -1) {
    selectedFacilities.splice(index, 1);
  } else {
    selectedFacilities.push(facility);
  }
  filterGyms();
}

function changeSortOption(option) {
  currentSortOption = option;
  
  // 라디오 버튼 체크 상태 업데이트
  document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
    radio.checked = radio.value === option;
  });
  
  filterGyms();
}

function filterGyms() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();

  let filtered = gymsData.filter(gym => {
    if (searchQuery && !gym.name.toLowerCase().includes(searchQuery) && 
        !gym.location.toLowerCase().includes(searchQuery) && 
        !gym.description.toLowerCase().includes(searchQuery)) {
      return false;
    }

    if (selectedDistricts.length > 0 && !selectedDistricts.includes(gym.district)) {
      return false;
    }

    if (selectedFacilities.length > 0) {
      if (!selectedFacilities.every(f => gym.facilities.includes(f))) {
        return false;
      }
    }

    return true;
  });

  // 정렬 적용
  if (currentSortOption === 'price-high') {
    filtered.sort((a, b) => b.priceValue - a.priceValue);
  } else if (currentSortOption === 'price-low') {
    filtered.sort((a, b) => a.priceValue - b.priceValue);
  } else if (currentSortOption === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayGyms(filtered);
}

function displayGyms(gyms) {
  const gymGrid = document.getElementById('gymGrid');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');

  resultCount.textContent = gyms.length;

  if (gyms.length === 0) {
    gymGrid.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }

  gymGrid.classList.remove('hidden');
  emptyState.classList.add('hidden');

  gymGrid.innerHTML = gyms.map(gym => `
    <div class="gym-card" onclick="showGymDetail(${gym.id})">
      <div class="gym-image-container">
        <img src="${gym.image}" alt="${gym.name}" class="gym-image">
        <div class="gym-badges">
          ${gym.features.slice(0, 2).map(feature => `<span class="badge">${feature}</span>`).join('')}
        </div>
      </div>
      <div class="gym-content">
        <h3 class="gym-name">${gym.name}</h3>
        <div class="gym-location">
          <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>${gym.location}</span>
        </div>
        <div class="gym-rating">
          <div class="rating-stars">
            <svg class="star-icon" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="rating-value">${gym.rating}</span>
          </div>
          <span class="reviews-count">(${gym.reviews}개 리뷰)</span>
        </div>
        <p class="gym-description">${gym.description}</p>
        <div class="facilities-tags">
          ${gym.facilities.slice(0, 3).map(facility => `<span class="facility-tag">${facility}</span>`).join('')}
          ${gym.facilities.length > 3 ? `<span class="facility-tag">+${gym.facilities.length - 3}</span>` : ''}
        </div>
        <div class="gym-price">${gym.price}</div>
        <button class="view-details-btn">자세히 보기</button>
      </div>
    </div>
  `).join('');
}

function showGymDetail(gymId) {
  const gym = gymsData.find(g => g.id === gymId);
  if (!gym) return;

  document.getElementById('modalGymName').textContent = gym.name;
  document.getElementById('modalGymContent').innerHTML = `
    <div class="modal-section">
      <img src="${gym.image}" alt="${gym.name}" class="modal-image">
    </div>
    <div class="modal-section" style="display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <svg class="star-icon" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span style="font-weight: 600;">${gym.rating}</span>
        <span style="color: #6b7280;">(${gym.reviews}개 리뷰)</span>
      </div>
      <div class="gym-price">${gym.price}</div>
    </div>
    <div class="modal-section">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${gym.features.map(feature => `<span class="badge" style="background: #e5e7eb;">${feature}</span>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h4 style="margin-bottom: 0.5rem;">소개</h4>
      <p style="color: #6b7280;">${gym.description}</p>
    </div>
    <div class="modal-section">
      <h4 style="margin-bottom: 0.75rem;">시설 및 서비스</h4>
      <div class="info-grid">
        ${gym.facilities.map(facility => `
          <div class="info-item">
            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>${facility}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="contact-section">
      <div class="contact-item">
        <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div>
          <div class="contact-label">주소</div>
          <div class="contact-value">${gym.location}</div>
        </div>
      </div>
      <div class="contact-item">
        <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <div>
          <div class="contact-label">전화번호</div>
          <div class="contact-value">${gym.phone}</div>
        </div>
      </div>
      <div class="contact-item">
        <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <div class="contact-label">운영시간</div>
          <div class="contact-value">${gym.openHours}</div>
        </div>
      </div>
    </div>
    <div class="action-buttons">
      <button class="action-btn action-btn-primary" onclick="alert('전화 문의: ${gym.phone}')">전화 문의</button>
      <button class="action-btn action-btn-secondary" onclick="alert('방문 예약 기능은 준비 중입니다.')">방문 예약</button>
    </div>
  `;

  document.getElementById('gymModal').classList.add('active');
}

function showModal(type) {
  console.log('showModal called with:', type);
  if (type === 'login') {
    document.getElementById('loginModal').classList.add('active');
  } else if (type === 'signup') {
    document.getElementById('signupModal').classList.add('active');
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function switchModal(closeId, openId) {
  closeModal(closeId);
  document.getElementById(openId).classList.add('active');
}

function resetFilters() {
  selectedDistricts = [];
  selectedFacilities = [];
  currentSortOption = 'default';
  document.getElementById('searchInput').value = '';
  
  document.querySelectorAll('.checkbox').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="sortOption"]').forEach(radio => {
    radio.checked = radio.value === 'default';
  });
  
  filterGyms();
}

// Initialize
initFilters();
displayGyms(gymsData);