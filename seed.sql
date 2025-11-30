-- Seed data for medical procedures (시술 정보 샘플 데이터)

-- Plastic Surgery (성형외과)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('plastic_surgery', '쌍꺼풀 수술', 'Double Eyelid Surgery', '双眼皮手术', '二重まぶた手術', 'Phẫu thuật mí mắt', 'جراحة الجفن المزدوج', '자연스러운 쌍꺼풀 라인 형성', 'Create natural double eyelid line', 1500, 3000, '1-2 hours', '5-7 days'),
('plastic_surgery', '코 성형', 'Rhinoplasty', '隆鼻手术', '鼻整形', 'Phẫu thuật nâng mũi', 'عملية تجميل الأنف', '코 라인을 자연스럽게 교정', 'Natural nose line correction', 3000, 6000, '2-3 hours', '7-14 days'),
('plastic_surgery', '안면윤곽', 'Facial Contouring', '面部轮廓整形', '輪郭形成', 'Tạo đường nét khuôn mặt', 'نحت الوجه', 'V라인, 광대 축소 등', 'V-line, zygoma reduction', 5000, 10000, '3-4 hours', '14-21 days'),
('plastic_surgery', '지방흡입', 'Liposuction', '吸脂手术', '脂肪吸引', 'Hút mỡ', 'شفط الدهون', '복부, 팔, 허벅지 지방 제거', 'Remove fat from abdomen, arms, thighs', 2000, 5000, '2-3 hours', '7-14 days'),
('plastic_surgery', '가슴 성형', 'Breast Augmentation', '隆胸手术', '豊胸手術', 'Nâng ngực', 'تكبير الثدي', '자연스러운 가슴 라인 형성', 'Natural breast line enhancement', 4000, 8000, '2-3 hours', '14-21 days');

-- Dermatology (피부과)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('dermatology', '레이저 토닝', 'Laser Toning', '激光美白', 'レーザートーニング', 'Làm trắng da laser', 'تفتيح البشرة بالليزر', '피부 톤 개선 및 미백', 'Skin tone improvement and whitening', 200, 500, '30-60 minutes', '0-1 days'),
('dermatology', '리쥬란 힐러', 'Rejuran Healer', '水光针', 'リジュラン', 'Tiêm trẻ hóa da', 'حقن تجديد البشرة', '피부 재생 및 탄력 개선', 'Skin regeneration and elasticity', 400, 800, '30-45 minutes', '1-3 days'),
('dermatology', '물광 주사', 'Skin Booster', '水光注射', 'スキンブースター', 'Tiêm căng bóng da', 'حقن نضارة البشرة', '피부 수분 공급 및 광채', 'Skin hydration and glow', 300, 600, '30-45 minutes', '0-2 days'),
('dermatology', '보톡스', 'Botox', '肉毒杆菌', 'ボトックス', 'Tiêm Botox', 'البوتوكس', '주름 개선 및 예방', 'Wrinkle improvement and prevention', 250, 600, '15-30 minutes', '0-1 days'),
('dermatology', '울쎄라 리프팅', 'Ultherapy Lifting', '超声刀提拉', 'ウルセラリフティング', 'Nâng cơ Ulthera', 'شد الوجه بالموجات فوق الصوتية', '초음파 리프팅으로 탄력 개선', 'Ultrasound lifting for elasticity', 1500, 3000, '60-90 minutes', '0-3 days');

-- Health Check-up (건강검진)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('health_checkup', 'VIP 종합검진', 'VIP Comprehensive Check-up', 'VIP综合体检', 'VIP総合検診', 'Khám sức khỏe tổng quát VIP', 'فحص صحي شامل VIP', '최고급 종합 건강 검진', 'Premium comprehensive health screening', 1000, 3000, '4-6 hours', '0 days'),
('health_checkup', 'PET-CT 검사', 'PET-CT Scan', 'PET-CT扫描', 'PET-CT検査', 'Chụp PET-CT', 'فحص PET-CT', '암 조기 발견 정밀 검사', 'Early cancer detection scan', 1500, 2500, '2-3 hours', '0 days'),
('health_checkup', '심장 정밀검진', 'Cardiac Check-up', '心脏精密检查', '心臓精密検診', 'Khám tim mạch', 'فحص القلب', '심장 및 혈관 건강 검진', 'Heart and vascular health check', 800, 1500, '3-4 hours', '0 days'),
('health_checkup', '뇌 MRI/CT', 'Brain MRI/CT', '脑部MRI/CT', '脳MRI/CT', 'Chụp MRI/CT não', 'التصوير بالرنين المغناطيسي للدماغ', '뇌 질환 조기 발견', 'Early brain disease detection', 600, 1200, '1-2 hours', '0 days');

-- Dental (치과)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('dental', '임플란트', 'Dental Implant', '种植牙', 'インプラント', 'Cấy ghép implant', 'زراعة الأسنان', '인공치아 식립', 'Artificial tooth implantation', 1200, 2500, '1-2 hours per tooth', '7-14 days'),
('dental', '라미네이트', 'Laminate Veneer', '贴面', 'ラミネート', 'Dán sứ veneer', 'قشور الأسنان', '심미 치아 성형', 'Cosmetic tooth shaping', 400, 800, '2-3 sessions', '3-7 days'),
('dental', '치아 교정', 'Orthodontics', '牙齿矫正', '歯列矯正', 'Niềng răng', 'تقويم الأسنان', '투명 교정, 일반 교정', 'Clear aligners, braces', 2000, 5000, '12-24 months', '0 days'),
('dental', '치아 미백', 'Teeth Whitening', '牙齿美白', 'ホワイトニング', 'Tẩy trắng răng', 'تبييض الأسنان', '치아 색상 개선', 'Tooth color enhancement', 300, 600, '1-2 hours', '0-1 days');

-- Traditional Korean Medicine (한방)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('korean_medicine', '추나요법', 'Chuna Therapy', '推拿疗法', '推拿療法', 'Trị liệu Chuna', 'علاج شونا', '척추 및 관절 교정', 'Spine and joint correction', 100, 200, '30-60 minutes', '0 days'),
('korean_medicine', '한방 침/약침', 'Acupuncture', '针灸', '鍼灸', 'Châm cứu', 'الوخز بالإبر', '통증 완화 및 치료', 'Pain relief and treatment', 80, 150, '30-45 minutes', '0 days'),
('korean_medicine', '한약 처방', 'Herbal Medicine', '中药处方', '漢方薬', 'Thuốc đông y', 'الطب العشبي', '체질 맞춤 한약', 'Customized herbal prescription', 150, 400, '1 week - 1 month', '0 days');

-- Hair Loss Treatment (탈모)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('hair_loss', '모발 이식', 'Hair Transplant', '植发', '毛髪移植', 'Cấy tóc', 'زراعة الشعر', '자연스러운 모발 이식', 'Natural hair transplantation', 3000, 8000, '4-8 hours', '7-14 days'),
('hair_loss', '두피 관리', 'Scalp Care', '头皮护理', '頭皮ケア', 'Chăm sóc da đầu', 'عناية فروة الرأس', '탈모 예방 두피 치료', 'Hair loss prevention treatment', 200, 500, '60-90 minutes', '0 days');

-- Ophthalmology (안과)
INSERT INTO procedures (category, name_ko, name_en, name_zh, name_ja, name_vi, name_ar, description_ko, description_en, price_min, price_max, duration, recovery_days) VALUES
('ophthalmology', '라식/라섹', 'LASIK/LASEK', '激光近视手术', 'レーシック/ラゼック', 'Mổ mắt cận LASIK', 'عملية الليزك', '시력 교정 수술', 'Vision correction surgery', 2000, 4000, '30-60 minutes', '3-7 days'),
('ophthalmology', '백내장 수술', 'Cataract Surgery', '白内障手术', '白内障手術', 'Phẫu thuật đục thủy tinh thể', 'جراحة الساد', '백내장 제거 및 인공 수정체 삽입', 'Cataract removal and lens implant', 2500, 5000, '30-45 minutes', '7-14 days');

-- Sample hospitals
INSERT INTO hospitals (name_ko, name_en, specialties, address, phone, rating) VALUES
('서울 성형외과', 'Seoul Plastic Surgery', '["plastic_surgery", "dermatology"]', 'Gangnam-gu, Seoul', '+82-2-1234-5678', 4.8),
('강남 피부과', 'Gangnam Dermatology', '["dermatology"]', 'Gangnam-gu, Seoul', '+82-2-2345-6789', 4.7),
('VIP 건강검진센터', 'VIP Health Check Center', '["health_checkup"]', 'Seocho-gu, Seoul', '+82-2-3456-7890', 4.9),
('서울 치과', 'Seoul Dental Clinic', '["dental"]', 'Jung-gu, Seoul', '+82-2-4567-8901', 4.6);
