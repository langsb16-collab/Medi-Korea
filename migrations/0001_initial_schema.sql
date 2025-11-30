-- Medical Procedures Table (시술 정보)
CREATE TABLE IF NOT EXISTS procedures (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL, -- 카테고리: plastic_surgery, dermatology, dental, etc.
  name_ko TEXT NOT NULL,
  name_en TEXT,
  name_zh TEXT,
  name_ja TEXT,
  name_vi TEXT,
  name_ar TEXT,
  description_ko TEXT,
  description_en TEXT,
  description_zh TEXT,
  description_ja TEXT,
  description_vi TEXT,
  description_ar TEXT,
  price_min INTEGER, -- 최소 가격 (USD)
  price_max INTEGER, -- 최대 가격 (USD)
  duration TEXT, -- 시술 시간 (예: "1-2 hours")
  recovery_days TEXT, -- 회복 기간 (예: "3-7 days")
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Consultation Requests Table (상담 신청)
CREATE TABLE IF NOT EXISTS consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  language TEXT NOT NULL, -- ko, en, zh, ja, vi, ar
  procedure_id INTEGER,
  message TEXT,
  file_urls TEXT, -- JSON array of uploaded file URLs
  status TEXT DEFAULT 'pending', -- pending, contacted, completed, cancelled
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (procedure_id) REFERENCES procedures(id)
);

-- Hospitals Table (병원 정보)
CREATE TABLE IF NOT EXISTS hospitals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_ko TEXT NOT NULL,
  name_en TEXT,
  specialties TEXT, -- JSON array of specialties
  address TEXT,
  phone TEXT,
  website TEXT,
  image_url TEXT,
  rating REAL DEFAULT 0,
  certifications TEXT, -- JSON array of certifications
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Reviews Table (후기)
CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hospital_id INTEGER,
  procedure_id INTEGER,
  patient_name TEXT,
  patient_country TEXT,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
  comment_ko TEXT,
  comment_en TEXT,
  comment_zh TEXT,
  comment_ja TEXT,
  comment_vi TEXT,
  comment_ar TEXT,
  before_image_url TEXT,
  after_image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (hospital_id) REFERENCES hospitals(id),
  FOREIGN KEY (procedure_id) REFERENCES procedures(id)
);

-- Admin Users Table (관리자)
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin', -- admin, super_admin
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_procedures_category ON procedures(category);
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created ON consultations(created_at);
CREATE INDEX IF NOT EXISTS idx_reviews_hospital ON reviews(hospital_id);
CREATE INDEX IF NOT EXISTS idx_reviews_procedure ON reviews(procedure_id);
