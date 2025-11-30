import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  DB: D1Database;
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
    }
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

// Get all procedures
app.get('/api/procedures', async (c) => {
  const { DB } = c.env;
  const category = c.req.query('category');
  const lang = c.req.query('lang') || 'en';
  
  try {
    let query = 'SELECT * FROM procedures';
    let params: string[] = [];
    
    if (category) {
      query += ' WHERE category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY category, id';
    
    const result = params.length > 0 
      ? await DB.prepare(query).bind(...params).all()
      : await DB.prepare(query).all();
    
    return c.json({ success: true, data: result.results });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get single procedure
app.get('/api/procedures/:id', async (c) => {
  const { DB } = c.env;
  const id = c.req.param('id');
  
  try {
    const result = await DB.prepare('SELECT * FROM procedures WHERE id = ?')
      .bind(id)
      .first();
    
    if (!result) {
      return c.json({ success: false, error: 'Procedure not found' }, 404);
    }
    
    return c.json({ success: true, data: result });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Submit consultation request
app.post('/api/consultations', async (c) => {
  const { DB } = c.env;
  
  try {
    const body = await c.req.json();
    const { name, email, phone, country, language, procedure_id, message, file_urls } = body;
    
    // Validation
    if (!name || !email || !country || !language) {
      return c.json({ success: false, error: 'Missing required fields' }, 400);
    }
    
    const result = await DB.prepare(`
      INSERT INTO consultations (name, email, phone, country, language, procedure_id, message, file_urls, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `).bind(
      name,
      email,
      phone || null,
      country,
      language,
      procedure_id || null,
      message || null,
      file_urls ? JSON.stringify(file_urls) : null
    ).run();
    
    return c.json({ 
      success: true, 
      message: 'Consultation request submitted successfully',
      consultation_id: result.meta.last_row_id 
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

// Get all hospitals
app.get('/api/hospitals', async (c) => {
  const { DB } = c.env;
  
  try {
    const result = await DB.prepare('SELECT * FROM hospitals ORDER BY rating DESC').all();
    return c.json({ success: true, data: result.results });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get reviews
app.get('/api/reviews', async (c) => {
  const { DB } = c.env;
  const procedure_id = c.req.query('procedure_id');
  const hospital_id = c.req.query('hospital_id');
  
  try {
    let query = 'SELECT * FROM reviews';
    let params: string[] = [];
    
    if (procedure_id || hospital_id) {
      query += ' WHERE';
      if (procedure_id) {
        query += ' procedure_id = ?';
        params.push(procedure_id);
      }
      if (hospital_id) {
        if (procedure_id) query += ' AND';
        query += ' hospital_id = ?';
        params.push(hospital_id);
      }
    }
    
    query += ' ORDER BY created_at DESC LIMIT 50';
    
    const result = params.length > 0
      ? await DB.prepare(query).bind(...params).all()
      : await DB.prepare(query).all();
    
    return c.json({ success: true, data: result.results });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// ==================== ADMIN API ====================

// Get all consultation requests (admin)
app.get('/api/admin/consultations', async (c) => {
  const { DB } = c.env;
  const status = c.req.query('status');
  
  try {
    let query = 'SELECT * FROM consultations';
    let params: string[] = [];
    
    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const result = params.length > 0
      ? await DB.prepare(query).bind(...params).all()
      : await DB.prepare(query).all();
    
    return c.json({ success: true, data: result.results });
  } catch (error: any) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Update consultation status (admin)
app.put('/api/admin/consultations/:id', async (c) => {
  const { DB } = c.env;
  const id = c.req.param('id');
  
  try {
    const body = await c.req.json();
    const { status } = body;
    
    if (!status) {
      return c.json({ success: false, error: 'Status is required' }, 400);
    }
    
    await DB.prepare(`
      UPDATE consultations 
      SET status = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `).bind(status, id).run();
    
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
          
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .floating-btn {
            position: fixed;
            bottom: 30px;
            ${lang === 'ar' ? 'left: 30px;' : 'right: 30px;'}
            z-index: 1000;
          }
          
          .lang-selector {
            position: fixed;
            top: 20px;
            ${lang === 'ar' ? 'left: 20px;' : 'right: 20px;'}
            z-index: 1000;
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
                <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">${t.hero_description}</p>
                <button onclick="scrollToConsultation()" class="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                    <i class="fas fa-comments mr-2"></i>${t.consult_now}
                </button>
            </div>
        </section>

        <!-- Why Korea Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">${t.why_korea}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center p-6 card-hover bg-gray-50 rounded-lg">
                        <i class="fas fa-microscope text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.advanced_tech}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-gray-50 rounded-lg">
                        <i class="fas fa-user-md text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.experienced_doctors}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-gray-50 rounded-lg">
                        <i class="fas fa-dollar-sign text-5xl text-purple-600 mb-4"></i>
                        <h3 class="text-xl font-semibold mb-2">${t.affordable_price}</h3>
                    </div>
                    <div class="text-center p-6 card-hover bg-gray-50 rounded-lg">
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

        <!-- Floating WhatsApp Button -->
        <a href="https://wa.me/821012345678" target="_blank" class="floating-btn bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <i class="fab fa-whatsapp text-3xl"></i>
        </a>

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
