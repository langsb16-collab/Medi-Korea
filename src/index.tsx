import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { faqData } from './faq-data'

type Bindings = {
  UPLOADS: R2Bucket;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ==================== TRANSLATION DATA ====================
const translations = {
  ko: {
    title: 'Medi Trip Korea',
    subtitle: '한국 의료관광 공식 안내',
    hero_description: '세계 최고 수준의 한국 의료 기술과 서비스를 경험하세요',
    consult_now: '지금 상담하기',
    services: '의료 서비스',
    categories: '시술 카테고리',
    consultation: '상담 신청',
    name: '이름',
    email: '이메일',
    phone: '전화번호',
    country: '국가',
    message: '문의 내용',
    submit: '신청하기',
    file_upload: '파일 첨부 (진료기록, 사진 등)',
    why_korea: '왜 한국 의료인가?',
    advanced_tech: '최첨단 기술',
    experienced_doctors: '경험 많은 의료진',
    affordable_price: '합리적인 가격',
    safety: '안전한 시술',
    chatbot_title: '자동응답봇',
    chatbot_welcome: '무엇을 도와드릴까요?',
    chatbot_select: '질문을 선택하세요',
    categories_list: {
      plastic_surgery: '성형외과',
      dermatology: '피부과',
      health_checkup: '건강검진',
      dental: '치과',
      korean_medicine: '한방',
      hair_loss: '탈모',
      ophthalmology: '안과',
      orthopedics: '정형외과',
      obstetrics: '산부인과',
      urology: '비뇨의학과'
    },
    faq: [
      { q: 'Medi Trip Korea는 어떤 플랫폼인가요?', a: '해외 환자에게 한국의 의료·시술 정보, 병원 소개, 가격, 건강검진 패키지, 상담 신청까지 한 번에 제공하는 의료관광 종합 플랫폼입니다.' },
      { q: '어떤 언어를 지원하나요?', a: '한국어, 영어, 중국어, 일본어, 베트남어, 아랍어 총 6개 언어를 지원합니다.' },
      { q: '실시간 상담은 어디에서 가능한가요?', a: '중국은 WeChat, 다른 국가는 Telegram 등 글로벌 메신저로 1:1 실시간 상담이 가능합니다.' },
      { q: '상담 신청 방법은 어떻게 되나요?', a: '이름, 국적, 연락처, 희망 시술을 입력하고 필요 시 사진 또는 의료자료를 업로드하면 상담이 접수됩니다.' },
      { q: '시술 가격은 어떻게 확인할 수 있나요?', a: '각 시술 상세 페이지에서 예상가격, 시술시간, 회복기간 등을 간단히 확인할 수 있습니다. 정확한 비용은 상담 시 안내됩니다.' }
    ]
  },
  en: {
    title: 'Medi Trip Korea',
    subtitle: 'Official Korean Medical Tourism Guide',
    hero_description: 'Experience world-class Korean medical technology and service',
    consult_now: 'Consult Now',
    services: 'Medical Services',
    categories: 'Procedure Categories',
    consultation: 'Request Consultation',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    country: 'Country',
    message: 'Message',
    submit: 'Submit',
    file_upload: 'Attach Files (Medical records, photos, etc.)',
    why_korea: 'Why Korean Healthcare?',
    advanced_tech: 'Advanced Technology',
    experienced_doctors: 'Experienced Doctors',
    affordable_price: 'Affordable Prices',
    safety: 'Safe Procedures',
    chatbot_title: 'AI Chatbot',
    chatbot_welcome: 'How can I help you?',
    chatbot_select: 'Select a question',
    categories_list: {
      plastic_surgery: 'Plastic Surgery',
      dermatology: 'Dermatology',
      health_checkup: 'Health Check-up',
      dental: 'Dental',
      korean_medicine: 'Korean Medicine',
      hair_loss: 'Hair Loss Treatment',
      ophthalmology: 'Ophthalmology',
      orthopedics: 'Orthopedics',
      obstetrics: 'Obstetrics & Gynecology',
      urology: 'Urology'
    }
  },
  zh: {
    title: 'Medi Trip Korea',
    subtitle: '韩国医疗旅游官方指南',
    hero_description: '体验世界一流的韩国医疗技术和服务',
    consult_now: '立即咨询',
    services: '医疗服务',
    categories: '治疗项目分类',
    consultation: '咨询申请',
    name: '姓名',
    email: '邮箱',
    phone: '电话',
    country: '国家',
    message: '咨询内容',
    submit: '提交',
    file_upload: '附件上传（病历、照片等）',
    why_korea: '为什么选择韩国医疗？',
    advanced_tech: '尖端技术',
    experienced_doctors: '经验丰富的医生',
    affordable_price: '合理价格',
    safety: '安全治疗',
    chatbot_title: '智能客服',
    chatbot_welcome: '有什么可以帮您？',
    chatbot_select: '请选择问题',
    categories_list: {
      plastic_surgery: '整形外科',
      dermatology: '皮肤科',
      health_checkup: '健康体检',
      dental: '牙科',
      korean_medicine: '韩医',
      hair_loss: '脱发治疗',
      ophthalmology: '眼科',
      orthopedics: '骨科',
      obstetrics: '妇产科',
      urology: '泌尿科'
    }
  },
  ja: {
    title: 'Medi Trip Korea',
    subtitle: '韓国医療観光公式ガイド',
    hero_description: '世界最高水準の韓国医療技術とサービスを体験してください',
    consult_now: '今すぐ相談',
    services: '医療サービス',
    categories: '施術カテゴリー',
    consultation: '相談申請',
    name: '名前',
    email: 'メール',
    phone: '電話番号',
    country: '国',
    message: 'お問い合わせ内容',
    submit: '申請する',
    file_upload: 'ファイル添付（診療記録、写真など）',
    why_korea: 'なぜ韓国医療？',
    advanced_tech: '最先端技術',
    experienced_doctors: '経験豊富な医師',
    affordable_price: '合理的な価格',
    safety: '安全な施術',
    chatbot_title: 'チャットボット',
    chatbot_welcome: '何かお手伝いできますか？',
    chatbot_select: '質問を選択してください',
    categories_list: {
      plastic_surgery: '整形外科',
      dermatology: '皮膚科',
      health_checkup: '健康診断',
      dental: '歯科',
      korean_medicine: '韓方',
      hair_loss: '脱毛治療',
      ophthalmology: '眼科',
      orthopedics: '整形外科',
      obstetrics: '産婦人科',
      urology: '泌尿器科'
    }
  },
  vi: {
    title: 'Medi Trip Korea',
    subtitle: 'Hướng dẫn Du lịch Y tế Hàn Quốc Chính thức',
    hero_description: 'Trải nghiệm công nghệ và dịch vụ y tế hàng đầu thế giới của Hàn Quốc',
    consult_now: 'Tư vấn Ngay',
    services: 'Dịch vụ Y tế',
    categories: 'Danh mục Thủ thuật',
    consultation: 'Yêu cầu Tư vấn',
    name: 'Họ tên',
    email: 'Email',
    phone: 'Số điện thoại',
    country: 'Quốc gia',
    message: 'Tin nhắn',
    submit: 'Gửi',
    file_upload: 'Đính kèm Tệp (Hồ sơ y tế, hình ảnh, v.v.)',
    why_korea: 'Tại sao chọn Y tế Hàn Quốc?',
    advanced_tech: 'Công nghệ Tiên tiến',
    experienced_doctors: 'Bác sĩ Giàu kinh nghiệm',
    affordable_price: 'Giá cả Phải chăng',
    safety: 'Thủ thuật An toàn',
    chatbot_title: 'Trợ lý Ảo',
    chatbot_welcome: 'Tôi có thể giúp gì cho bạn?',
    chatbot_select: 'Chọn câu hỏi',
    categories_list: {
      plastic_surgery: 'Phẫu thuật Thẩm mỹ',
      dermatology: 'Da liễu',
      health_checkup: 'Khám Sức khỏe',
      dental: 'Nha khoa',
      korean_medicine: 'Y học Hàn Quốc',
      hair_loss: 'Điều trị Rụng tóc',
      ophthalmology: 'Nhãn khoa',
      orthopedics: 'Chỉnh hình',
      obstetrics: 'Sản phụ khoa',
      urology: 'Tiết niệu'
    }
  },
  ar: {
    title: 'Medi Trip Korea',
    subtitle: 'دليل السياحة الطبية الكورية الرسمي',
    hero_description: 'اختبر التكنولوجيا والخدمات الطبية الكورية ذات المستوى العالمي',
    consult_now: 'استشر الآن',
    services: 'الخدمات الطبية',
    categories: 'فئات الإجراءات',
    consultation: 'طلب استشارة',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    country: 'البلد',
    message: 'الرسالة',
    submit: 'إرسال',
    file_upload: 'إرفاق ملفات (السجلات الطبية، الصور، إلخ)',
    why_korea: 'لماذا الرعاية الصحية الكورية؟',
    advanced_tech: 'تكنولوجيا متقدمة',
    experienced_doctors: 'أطباء ذوو خبرة',
    affordable_price: 'أسعار معقولة',
    safety: 'إجراءات آمنة',
    chatbot_title: 'مساعد آلي',
    chatbot_welcome: 'كيف يمكنني مساعدتك؟',
    chatbot_select: 'اختر سؤالاً',
    categories_list: {
      plastic_surgery: 'الجراحة التجميلية',
      dermatology: 'الأمراض الجلدية',
      health_checkup: 'الفحص الصحي',
      dental: 'طب الأسنان',
      korean_medicine: 'الطب الكوري',
      hair_loss: 'علاج تساقط الشعر',
      ophthalmology: 'طب العيون',
      orthopedics: 'جراحة العظام',
      obstetrics: 'أمراض النساء والولادة',
      urology: 'المسالك البولية'
    }
  }
};

// ==================== API ROUTES ====================

// Get translations
app.get('/api/translations/:lang', (c) => {
  const lang = c.req.param('lang') as keyof typeof translations;
  if (translations[lang]) {
    return c.json(translations[lang]);
  }
  return c.json(translations.en);
});

// Get FAQ data for chatbot
app.get('/api/faq/:lang', (c) => {
  const lang = c.req.param('lang') as keyof typeof faqData;
  if (faqData[lang]) {
    return c.json(faqData[lang]);
  }
  return c.json(faqData.en);
});

// Get all procedures (temporary mock data - D1 will be added later)
app.get('/api/procedures', async (c) => {
  const category = c.req.query('category');
  const lang = c.req.query('lang') || 'en';
  
  // Mock data for demo
  const mockProcedures = [
    {
      id: 1,
      category: 'plastic_surgery',
      name_ko: '쌍꺼풀 수술',
      name_en: 'Double Eyelid Surgery',
      name_zh: '双眼皮手术',
      description_ko: '자연스러운 쌍꺼풀 라인 형성',
      description_en: 'Natural double eyelid line formation',
      description_zh: '形成自然的双眼皮线',
      price_min: 1500,
      price_max: 3000,
      duration: '1-2 hours',
      recovery_days: '7-10 days'
    },
    {
      id: 2,
      category: 'dermatology',
      name_ko: '레이저 토닝',
      name_en: 'Laser Toning',
      name_zh: '激光调理',
      description_ko: '피부톤 개선 및 미백',
      description_en: 'Skin tone improvement and whitening',
      description_zh: '改善肤色和美白',
      price_min: 200,
      price_max: 500,
      duration: '30-60 minutes',
      recovery_days: '0-1 days'
    }
  ];
  
  const filteredData = category 
    ? mockProcedures.filter(p => p.category === category)
    : mockProcedures;
  
  return c.json({ success: true, data: filteredData });
});

// Get single procedure (temporary mock data)
app.get('/api/procedures/:id', async (c) => {
  const id = c.req.param('id');
  
  const mockProcedure = {
    id: parseInt(id),
    category: 'plastic_surgery',
    name_ko: '쌍꺼풀 수술',
    name_en: 'Double Eyelid Surgery',
    name_zh: '双眼皮手术',
    description_ko: '자연스러운 쌍꺼풀 라인 형성',
    description_en: 'Natural double eyelid line formation',
    description_zh: '形成自然的双眼皮线',
    price_min: 1500,
    price_max: 3000,
    duration: '1-2 hours',
    recovery_days: '7-10 days'
  };
  
  return c.json({ success: true, data: mockProcedure });
});

// Submit consultation request (temporary - saves to console log)
app.post('/api/consultations', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, country, language, procedure_id, message, file_urls } = body;
    
    // Validation
    if (!name || !email || !country || !language) {
      return c.json({ success: false, error: 'Missing required fields' }, 400);
    }
    
    // Log the consultation (will be saved to D1 later)
    console.log('New consultation:', { name, email, phone, country, language, procedure_id, message, file_urls });
    
    return c.json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      consultation_id: Date.now() 
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// File upload endpoint (R2)
app.post('/api/upload', async (c) => {
  const { UPLOADS } = c.env;
  
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({ success: false, error: 'No file provided' }, 400);
    }
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    const extension = file.name.split('.').pop();
    const key = `uploads/${timestamp}-${randomString}.${extension}`;
    
    // Upload to R2
    const arrayBuffer = await file.arrayBuffer();
    await UPLOADS.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type
      }
    });
    
    return c.json({ 
      success: true, 
      file_url: key,
      message: 'File uploaded successfully' 
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get uploaded file from R2
app.get('/api/files/:key{.+}', async (c) => {
  const { UPLOADS } = c.env;
  const key = c.req.param('key');
  
  try {
    const object = await UPLOADS.get(`uploads/${key}`);
    
    if (!object) {
      return c.notFound();
    }
    
    return new Response(object.body, {
      headers: {
        'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000'
      }
    });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get all hospitals (temporary mock data)
app.get('/api/hospitals', async (c) => {
  const mockHospitals = [
    { id: 1, name: 'Seoul Medical Center', rating: 4.8, location: 'Gangnam, Seoul' },
    { id: 2, name: 'Korea Beauty Clinic', rating: 4.7, location: 'Apgujeong, Seoul' }
  ];
  
  return c.json({ success: true, data: mockHospitals });
});

// Get reviews (temporary mock data)
app.get('/api/reviews', async (c) => {
  const mockReviews = [
    { id: 1, rating: 5, comment: 'Excellent service!', created_at: new Date().toISOString() },
    { id: 2, rating: 4, comment: 'Very professional', created_at: new Date().toISOString() }
  ];
  
  return c.json({ success: true, data: mockReviews });
});

// ==================== ADMIN API ====================

// Get all consultation requests (admin) - temporary mock data
app.get('/api/admin/consultations', async (c) => {
  const mockConsultations = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      country: 'USA', 
      language: 'en', 
      status: 'pending',
      created_at: new Date().toISOString()
    }
  ];
  
  return c.json({ success: true, data: mockConsultations });
});

// Update consultation status (admin) - temporary mock
app.put('/api/admin/consultations/:id', async (c) => {
  const id = c.req.param('id');
  
  try {
    const body = await c.req.json();
    const { status } = body;
    
    if (!status) {
      return c.json({ success: false, error: 'Status is required' }, 400);
    }
    
    console.log(`Update consultation ${id} to status: ${status}`);
    
    return c.json({ success: true, message: 'Consultation updated successfully' });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// ==================== MAIN PAGE ====================
app.get('/', (c) => {
  const lang = c.req.query('lang') || 'en';
  const t = translations[lang as keyof typeof translations] || translations.en;
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${t.title} - ${t.subtitle}</title>
        <meta name="description" content="${t.hero_description}">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap');
          
          body {
            font-family: 'Noto Sans', 'Noto Sans KR', 'Noto Sans Arabic', sans-serif;
          }
          
          ${lang === 'ar' ? `
          body {
            direction: rtl;
            text-align: right;
          }
          ` : ''}
          
          .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .hero-pattern {
            background-color: #667eea;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
          
          .why-korea-section {
            position: relative;
            overflow: hidden;
          }
          
          .why-korea-section::before,
          .why-korea-section::after {
            content: '';
            position: absolute;
            top: 0;
            width: 30%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.15;
            z-index: 0;
          }
          
          .why-korea-section::before {
            left: 0;
            background-image: url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop');
          }
          
          .why-korea-section::after {
            right: 0;
            background-image: url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop');
          }
          
          .why-korea-content {
            position: relative;
            z-index: 1;
          }
          
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          

          
          .lang-selector {
            position: fixed;
            top: 20px;
            ${lang === 'ar' ? 'left: 20px;' : 'right: 20px;'}
            z-index: 1000;
          }
          
          /* Chatbot Styles */
          .chatbot-btn {
            position: relative;
            width: 135px;
            height: 135px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .chatbot-btn:hover {
            transform: scale(1.08);
            box-shadow: 0 18px 45px rgba(102, 126, 234, 0.65);
          }
          
          .chatbot-icon {
            font-size: 102px;
            color: white;
          }
          
          .ai-badge {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 18px;
            color: white;
            border: 4px solid white;
            box-shadow: 0 6px 15px rgba(255, 107, 107, 0.5);
          }
          
          .chatbot-tooltip {
            position: absolute;
            bottom: 100%;
            ${lang === 'ar' ? 'left: 0;' : 'right: 0;'}
            margin-bottom: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 14px 20px;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            white-space: nowrap;
            font-size: 14px;
            color: white;
            font-weight: 600;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            pointer-events: none;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
          
          .chatbot-tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            ${lang === 'ar' ? 'left: 25px;' : 'right: 25px;'}
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #764ba2;
          }
          
          .chatbot-btn:hover .chatbot-tooltip {
            opacity: 1;
            transform: translateY(0);
          }
          
          .hero-subtitle-box {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 12px;
            padding: 10px 16px;
            margin: 0 auto 2rem auto;
            max-width: 520px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          
          .hero-subtitle-text {
            font-size: 0.9rem;
            line-height: 1.5;
            font-weight: 500;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          @media (max-width: 768px) {
            .hero-subtitle-box {
              padding: 8px 14px;
              max-width: 90%;
            }
            .hero-subtitle-text {
              font-size: 0.75rem;
              line-height: 1.4;
            }
            .chatbot-btn {
              width: 105px;
              height: 105px;
            }
            .chatbot-icon {
              font-size: 78px;
            }
            .ai-badge {
              width: 38px;
              height: 38px;
              font-size: 15px;
              border: 3px solid white;
            }
            .chatbot-tooltip {
              padding: 10px 14px;
              font-size: 12px;
              margin-bottom: 15px;
            }
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Language Selector -->
        <div class="lang-selector">
            <select id="langSelect" class="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg">
                <option value="ko" ${lang === 'ko' ? 'selected' : ''}>🇰🇷 한국어</option>
                <option value="en" ${lang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
                <option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
                <option value="ja" ${lang === 'ja' ? 'selected' : ''}>🇯🇵 日本語</option>
                <option value="vi" ${lang === 'vi' ? 'selected' : ''}>🇻🇳 Tiếng Việt</option>
                <option value="ar" ${lang === 'ar' ? 'selected' : ''}>🇸🇦 العربية</option>
            </select>
        </div>

        <!-- Hero Section -->
        <section class="hero-pattern text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-4">${t.title}</h1>
                <p class="text-2xl md:text-3xl mb-6">${t.subtitle}</p>
                <div class="hero-subtitle-box">
                    <p class="hero-subtitle-text">
                        ${lang === 'ko' ? '시술 정보부터 가격, 상담, 예약까지<br>한국 의료관광을 \'원스톱\'으로 해결해드립니다.' : 
                          lang === 'en' ? 'From procedure information to pricing, consultation, and booking<br>We solve Korean medical tourism in \'one-stop\'.' :
                          lang === 'zh' ? '从手术信息到价格、咨询、预约<br>一站式解决韩国医疗旅游' :
                          lang === 'ja' ? '施術情報から価格、相談、予約まで<br>韓国医療観光をワンストップで解決します' :
                          lang === 'vi' ? 'Từ thông tin thủ thuật đến giá cả, tư vấn, đặt lịch<br>Giải quyết du lịch y tế Hàn Quốc một cách toàn diện' :
                          'من معلومات الإجراءات إلى الأسعار والاستشارات والحجز<br>نحل السياحة الطبية الكورية بشكل شامل'}
                    </p>
                </div>
                <button onclick="scrollToConsultation()" class="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                    <i class="fas fa-comments mr-2"></i>${t.consult_now}
                </button>
            </div>
        </section>

        <!-- Why Korea Section -->
        <section class="py-16 bg-white why-korea-section">
            <div class="container mx-auto px-4 why-korea-content">
                <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">${t.why_korea}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center p-6 card-hover bg-white bg-opacity-90 rounded-lg shadow-md">
                        <i class="fas fa-microscope text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.advanced_tech}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-white bg-opacity-90 rounded-lg shadow-md">
                        <i class="fas fa-user-md text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.experienced_doctors}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-white bg-opacity-90 rounded-lg shadow-md">
                        <i class="fas fa-dollar-sign text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.affordable_price}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-white bg-opacity-90 rounded-lg shadow-md">
                        <i class="fas fa-shield-alt text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.safety}</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories Section -->
        <section class="py-16 bg-gray-100">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">${t.categories}</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" id="categoriesContainer">
                    <!-- Categories will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Procedures Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">${t.services}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="proceduresContainer">
                    <!-- Procedures will be loaded here -->
                </div>
            </div>
        </section>

        <!-- Consultation Form Section -->
        <section id="consultation" class="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
            <div class="container mx-auto px-4 max-w-2xl">
                <h2 class="text-4xl font-bold text-center mb-8">${t.consultation}</h2>
                <form id="consultationForm" class="bg-white text-gray-800 rounded-lg shadow-xl p-8">
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2" for="name">${t.name} *</label>
                        <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2" for="email">${t.email} *</label>
                        <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2" for="phone">${t.phone}</label>
                        <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2" for="country">${t.country} *</label>
                        <input type="text" id="country" name="country" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-semibold mb-2" for="message">${t.message}</label>
                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"></textarea>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-semibold mb-2" for="files">${t.file_upload}</label>
                        <input type="file" id="files" name="files" multiple accept="image/*,.pdf,.doc,.docx" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                        <div id="uploadProgress" class="mt-2 hidden">
                            <div class="bg-gray-200 rounded-full h-2">
                                <div id="progressBar" class="bg-purple-600 h-2 rounded-full transition-all" style="width: 0%"></div>
                            </div>
                            <p id="progressText" class="text-sm mt-1 text-gray-600"></p>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                        <i class="fas fa-paper-plane mr-2"></i>${t.submit}
                    </button>
                </form>
            </div>
        </section>

        <!-- Chatbot Floating Button -->
        <button id="chatbotBtn" class="fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <i class="fas fa-robot text-2xl"></i>
        </button>

        <!-- Chatbot Panel -->
        <div id="chatbotPanel" class="fixed bottom-24 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 bg-white rounded-2xl shadow-2xl w-96 max-w-full transform translate-y-full opacity-0 transition-all duration-300 hidden">
            <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-t-2xl flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <i class="fas fa-robot text-lg"></i>
                    <span class="font-bold text-base">${t.chatbot_title}</span>
                </div>
                <button id="closeChatbot" class="text-white hover:bg-white/20 p-1.5 rounded-full">
                    <i class="fas fa-times text-sm"></i>
                </button>
            </div>
            <div class="p-3 h-96 overflow-y-auto" id="chatbotContent">
                <p class="text-gray-600 mb-3 text-sm">${t.chatbot_welcome}</p>
                <p class="text-xs text-gray-500 mb-2">${t.chatbot_select}</p>
                <div id="faqList" class="space-y-2">
                    <!-- FAQ items will be loaded here -->
                </div>
                <div id="faqAnswer" class="mt-4 p-4 bg-purple-50 rounded-lg hidden">
                    <button id="backToFaq" class="text-purple-600 hover:text-purple-800 mb-2 flex items-center gap-1">
                        <i class="fas fa-arrow-left"></i>
                        <span class="text-sm">돌아가기</span>
                    </button>
                    <p class="text-gray-800" id="answerText"></p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4 text-center">
                <p class="mb-2">&copy; 2024 ${t.title}. All rights reserved.</p>
                <div class="flex justify-center space-x-4 mt-4">
                    <a href="#" class="hover:text-purple-400"><i class="fab fa-facebook text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-400"><i class="fab fa-instagram text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-400"><i class="fab fa-youtube text-2xl"></i></a>
                    <a href="https://wa.me/821012345678" target="_blank" class="hover:text-purple-400"><i class="fab fa-whatsapp text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-400"><i class="fab fa-weixin text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-400"><i class="fab fa-line text-2xl"></i></a>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            const currentLang = '${lang}';
            let uploadedFiles = [];
            
            // Language selector
            document.getElementById('langSelect').addEventListener('change', function() {
                window.location.href = '/?lang=' + this.value;
            });
            
            // Scroll to consultation form
            function scrollToConsultation() {
                document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
            }
            
            // Load categories
            const categories = ${JSON.stringify(t.categories_list)};
            const categoryIcons = {
                plastic_surgery: 'fa-user-md',
                dermatology: 'fa-spa',
                health_checkup: 'fa-heartbeat',
                dental: 'fa-tooth',
                korean_medicine: 'fa-leaf',
                hair_loss: 'fa-cut',
                ophthalmology: 'fa-eye',
                orthopedics: 'fa-bone',
                obstetrics: 'fa-baby',
                urology: 'fa-stethoscope'
            };
            
            const categoriesContainer = document.getElementById('categoriesContainer');
            Object.entries(categories).forEach(([key, value]) => {
                const icon = categoryIcons[key] || 'fa-hospital';
                categoriesContainer.innerHTML += \`
                    <div class="bg-white p-4 rounded-lg shadow-md card-hover cursor-pointer text-center" onclick="filterByCategory('\${key}')">
                        <i class="fas \${icon} text-3xl text-purple-600 mb-2"></i>
                        <p class="font-semibold">\${value}</p>
                    </div>
                \`;
            });
            
            // Load procedures
            let allProcedures = [];
            
            async function loadProcedures(category = '') {
                try {
                    const url = category ? \`/api/procedures?category=\${category}&lang=\${currentLang}\` : \`/api/procedures?lang=\${currentLang}\`;
                    const response = await axios.get(url);
                    allProcedures = response.data.data;
                    displayProcedures(allProcedures);
                } catch (error) {
                    console.error('Error loading procedures:', error);
                }
            }
            
            function displayProcedures(procedures) {
                const container = document.getElementById('proceduresContainer');
                const langSuffix = '_' + currentLang;
                
                container.innerHTML = procedures.map(proc => \`
                    <div class="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2 text-gray-800">\${proc['name' + langSuffix] || proc.name_en}</h3>
                            <p class="text-gray-600 mb-4">\${proc['description' + langSuffix] || proc.description_en || ''}</p>
                            <div class="space-y-2 text-sm">
                                \${proc.price_min ? \`<p><i class="fas fa-dollar-sign text-purple-600 mr-2"></i>$\${proc.price_min} - $\${proc.price_max}</p>\` : ''}
                                \${proc.duration ? \`<p><i class="fas fa-clock text-purple-600 mr-2"></i>\${proc.duration}</p>\` : ''}
                                \${proc.recovery_days ? \`<p><i class="fas fa-calendar text-purple-600 mr-2"></i>\${proc.recovery_days}</p>\` : ''}
                            </div>
                        </div>
                    </div>
                \`).join('');
            }
            
            function filterByCategory(category) {
                loadProcedures(category);
                // Scroll to procedures section
                document.getElementById('proceduresContainer').scrollIntoView({ behavior: 'smooth' });
            }
            
            // File upload handler
            document.getElementById('files').addEventListener('change', async function(e) {
                const files = Array.from(e.target.files);
                if (files.length === 0) return;
                
                const progressDiv = document.getElementById('uploadProgress');
                const progressBar = document.getElementById('progressBar');
                const progressText = document.getElementById('progressText');
                
                progressDiv.classList.remove('hidden');
                uploadedFiles = [];
                
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const formData = new FormData();
                    formData.append('file', file);
                    
                    try {
                        progressText.textContent = \`Uploading \${i + 1}/\${files.length}: \${file.name}\`;
                        progressBar.style.width = ((i + 1) / files.length * 100) + '%';
                        
                        const response = await axios.post('/api/upload', formData, {
                            headers: { 'Content-Type': 'multipart/form-data' }
                        });
                        
                        if (response.data.success) {
                            uploadedFiles.push(response.data.file_url);
                        }
                    } catch (error) {
                        console.error('Upload error:', error);
                        alert('Failed to upload: ' + file.name);
                    }
                }
                
                progressText.textContent = 'Upload complete!';
                setTimeout(() => {
                    progressDiv.classList.add('hidden');
                    progressBar.style.width = '0%';
                }, 2000);
            });
            
            // Form submission
            document.getElementById('consultationForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    country: document.getElementById('country').value,
                    language: currentLang,
                    message: document.getElementById('message').value,
                    file_urls: uploadedFiles
                };
                
                try {
                    const response = await axios.post('/api/consultations', formData);
                    
                    if (response.data.success) {
                        alert('✅ Consultation request submitted successfully! We will contact you soon.');
                        this.reset();
                        uploadedFiles = [];
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    alert('❌ Failed to submit consultation request. Please try again.');
                }
            });
            
            // Initial load
            loadProcedures();
            
            // ========== CHATBOT FUNCTIONALITY ==========
            const chatbotBtn = document.getElementById('chatbotBtn');
            const chatbotPanel = document.getElementById('chatbotPanel');
            const closeChatbot = document.getElementById('closeChatbot');
            const faqList = document.getElementById('faqList');
            const faqAnswer = document.getElementById('faqAnswer');
            const answerText = document.getElementById('answerText');
            const backToFaq = document.getElementById('backToFaq');
            
            let faqDataLoaded = [];
            
            // Toggle chatbot panel
            chatbotBtn.addEventListener('click', async function() {
                chatbotPanel.classList.toggle('hidden');
                if (!chatbotPanel.classList.contains('hidden')) {
                    setTimeout(() => {
                        chatbotPanel.classList.remove('translate-y-full', 'opacity-0');
                    }, 10);
                    
                    // Load FAQ data if not loaded
                    if (faqDataLoaded.length === 0) {
                        await loadFAQs();
                    }
                } else {
                    chatbotPanel.classList.add('translate-y-full', 'opacity-0');
                }
            });
            
            // Close chatbot
            closeChatbot.addEventListener('click', function() {
                chatbotPanel.classList.add('translate-y-full', 'opacity-0');
                setTimeout(() => {
                    chatbotPanel.classList.add('hidden');
                }, 300);
            });
            
            // Load FAQs
            async function loadFAQs() {
                try {
                    const response = await axios.get(\`/api/faq/\${currentLang}\`);
                    faqDataLoaded = response.data.faqs || [];
                    
                    faqList.innerHTML = faqDataLoaded.map((faq, index) => \`
                        <button 
                            class="w-full text-left p-3 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors text-sm border border-gray-200 hover:border-purple-300"
                            onclick="showAnswer(\${index})"
                        >
                            <i class="fas fa-question-circle text-purple-600 mr-2"></i>
                            \${faq.q}
                        </button>
                    \`).join('');
                } catch (error) {
                    console.error('Error loading FAQs:', error);
                    faqList.innerHTML = '<p class="text-red-500 text-sm">Failed to load FAQs</p>';
                }
            }
            
            // Show answer
            window.showAnswer = function(index) {
                const faq = faqDataLoaded[index];
                if (faq) {
                    answerText.innerHTML = \`
                        <p class="font-semibold text-purple-700 mb-2"><i class="fas fa-question-circle mr-2"></i>\${faq.q}</p>
                        <p class="text-gray-700">\${faq.a}</p>
                    \`;
                    faqList.classList.add('hidden');
                    faqAnswer.classList.remove('hidden');
                }
            }
            
            // Back to FAQ list
            backToFaq.addEventListener('click', function() {
                faqAnswer.classList.add('hidden');
                faqList.classList.remove('hidden');
            });
        </script>
    </body>
    </html>
  `);
});

// Admin dashboard route
app.get('/admin', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Medi Trip Korea - Admin Dashboard</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100">
        <nav class="bg-purple-600 text-white p-4">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl font-bold"><i class="fas fa-hospital-user mr-2"></i>Medi Trip Korea Admin</h1>
                <a href="/" class="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100">
                    <i class="fas fa-home mr-2"></i>Main Site
                </a>
            </div>
        </nav>

        <div class="container mx-auto px-4 py-8">
            <!-- Statistics -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 text-sm">Total Consultations</p>
                            <p class="text-3xl font-bold" id="totalConsultations">0</p>
                        </div>
                        <i class="fas fa-users text-4xl text-purple-600"></i>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 text-sm">Pending</p>
                            <p class="text-3xl font-bold text-yellow-600" id="pendingConsultations">0</p>
                        </div>
                        <i class="fas fa-clock text-4xl text-yellow-600"></i>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 text-sm">Contacted</p>
                            <p class="text-3xl font-bold text-blue-600" id="contactedConsultations">0</p>
                        </div>
                        <i class="fas fa-phone text-4xl text-blue-600"></i>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500 text-sm">Completed</p>
                            <p class="text-3xl font-bold text-green-600" id="completedConsultations">0</p>
                        </div>
                        <i class="fas fa-check-circle text-4xl text-green-600"></i>
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <div class="flex gap-4">
                    <select id="statusFilter" class="border border-gray-300 rounded px-4 py-2">
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                    <button onclick="loadConsultations()" class="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
                        <i class="fas fa-sync-alt mr-2"></i>Refresh
                    </button>
                </div>
            </div>

            <!-- Consultations Table -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full">
                    <thead class="bg-gray-50 border-b">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Language</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="consultationsTableBody">
                        <!-- Data will be loaded here -->
                    </tbody>
                </table>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            let consultations = [];

            async function loadConsultations() {
                try {
                    const status = document.getElementById('statusFilter').value;
                    const url = status ? \`/api/admin/consultations?status=\${status}\` : '/api/admin/consultations';
                    const response = await axios.get(url);
                    consultations = response.data.data || [];
                    displayConsultations();
                    updateStatistics();
                } catch (error) {
                    console.error('Error loading consultations:', error);
                }
            }

            function displayConsultations() {
                const tbody = document.getElementById('consultationsTableBody');
                
                if (consultations.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="8" class="px-6 py-4 text-center text-gray-500">No consultations found</td></tr>';
                    return;
                }

                tbody.innerHTML = consultations.map(c => {
                    const statusColors = {
                        pending: 'bg-yellow-100 text-yellow-800',
                        contacted: 'bg-blue-100 text-blue-800',
                        completed: 'bg-green-100 text-green-800',
                        cancelled: 'bg-red-100 text-red-800'
                    };
                    
                    return \`
                        <tr class="border-b hover:bg-gray-50">
                            <td class="px-6 py-4">#\${c.id}</td>
                            <td class="px-6 py-4">\${c.name}</td>
                            <td class="px-6 py-4">\${c.email}</td>
                            <td class="px-6 py-4">\${c.country}</td>
                            <td class="px-6 py-4">\${c.language.toUpperCase()}</td>
                            <td class="px-6 py-4">
                                <span class="px-2 py-1 rounded text-xs font-semibold \${statusColors[c.status] || 'bg-gray-100 text-gray-800'}">
                                    \${c.status}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm">\${new Date(c.created_at).toLocaleDateString()}</td>
                            <td class="px-6 py-4">
                                <select onchange="updateStatus(\${c.id}, this.value)" class="border rounded px-2 py-1 text-sm">
                                    <option value="">Change Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </td>
                        </tr>
                    \`;
                }).join('');
            }

            function updateStatistics() {
                document.getElementById('totalConsultations').textContent = consultations.length;
                document.getElementById('pendingConsultations').textContent = consultations.filter(c => c.status === 'pending').length;
                document.getElementById('contactedConsultations').textContent = consultations.filter(c => c.status === 'contacted').length;
                document.getElementById('completedConsultations').textContent = consultations.filter(c => c.status === 'completed').length;
            }

            async function updateStatus(id, status) {
                if (!status) return;
                
                try {
                    await axios.put(\`/api/admin/consultations/\${id}\`, { status });
                    alert('Status updated successfully!');
                    loadConsultations();
                } catch (error) {
                    console.error('Error updating status:', error);
                    alert('Failed to update status');
                }
            }

            // Event listeners
            document.getElementById('statusFilter').addEventListener('change', loadConsultations);

            // Initial load
            loadConsultations();
        </script>
    </body>
    </html>
  `);
});

export default app
