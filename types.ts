export type LayoutTemplateType = 'ai_auto' | 'saas' | 'portfolio' | 'app_promo' | 'ecommerce' | 'event' | 'creator' | 'course' | 'restaurant' | 'real_estate' | 'agency' | 'travel' | 'clinic' | 'fitness' | 'charity' | 'local_service' | 'lawyer' | 'interior_design' | 'photography' | 'podcast' | 'wedding' | 'book_launch' | 'music_release' | 'gaming_guild' | 'car_rental' | 'pet_care' | 'crypto_project' | 'spa' | 'recruitment' | 'crowdfunding' | 'coaching' | 'coworking' | 'auto_repair' | 'education' | 'cleaning_service' | 'architecture' | 'financial' | 'logistics' | 'bakery';

export const PREDEFINED_LAYOUTS: Record<string, { name: string, description: string, modules: string[] }> = {
  ai_auto: {
    name: 'AI Tự Động',
    description: 'AI tự phân tích và quyết định cấu trúc tối ưu nhất.',
    modules: []
  },
  saas: {
    name: 'SaaS / B2B',
    description: 'Chuẩn Landing Page bán phần mềm, dịch vụ.',
    modules: ['HeroSection', 'LogoTicker', 'StatsRow', 'BentoGrid', 'ComparisonTable', 'PricingTable', 'FAQAccordion', 'ArticleGrid', 'CallToAction', 'Footer']
  },
  portfolio: {
    name: 'Hồ Sơ Năng Lực',
    description: 'Giới thiệu bản thân, dịch vụ cá nhân, agency.',
    modules: ['HeroSection', 'LogoTicker', 'FeatureGrid', 'TimelineSection', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  app_promo: {
    name: 'Giới Thiệu App',
    description: 'Trang quảng bá ứng dụng di động.',
    modules: ['HeroSection', 'VideoSection', 'BentoGrid', 'StatsRow', 'FeatureGrid', 'AppDownload', 'FAQAccordion', 'CallToAction', 'Footer']
  },
  ecommerce: {
    name: 'Thương Mại Điện Tử',
    description: 'Tối ưu cho bán hàng, giới thiệu sản phẩm, danh mục.',
    modules: ['HeroSection', 'LogoTicker', 'BentoGrid', 'FeatureGrid', 'TrustBadges', 'TestimonialGrid', 'AppDownload', 'NewsletterSection', 'Footer']
  },
  event: {
    name: 'Sự Kiện / Webinar',
    description: 'Dành cho tổ chức sự kiện, hội thảo. Có lịch trình, diễn giả và vé.',
    modules: ['HeroSection', 'VideoSection', 'StatsRow', 'TimelineSection', 'TeamSection', 'PricingTable', 'MapSection', 'FAQAccordion', 'Footer']
  },
  creator: {
    name: 'Creator / Link in Bio',
    description: 'Trang cá nhân cho Creator, tổng hợp link, chỉ số mạng xã hội.',
    modules: ['HeroSection', 'VideoSection', 'DataList', 'StatsRow', 'ArticleGrid', 'NewsletterSection', 'Footer']
  },
  course: {
    name: 'Khóa Học Online',
    description: 'Tối ưu cho việc bán khóa học, e-learning. Có lộ trình học và học phí.',
    modules: ['HeroSection', 'VideoSection', 'StatsRow', 'TimelineSection', 'FeatureGrid', 'PricingTable', 'FAQAccordion', 'Footer']
  },
  restaurant: {
    name: 'Nhà Hàng / F&B',
    description: 'Giới thiệu không gian, thực đơn nổi bật và đặt bàn.',
    modules: ['HeroSection', 'GallerySection', 'BentoGrid', 'FeatureGrid', 'TestimonialGrid', 'MapSection', 'ContactForm', 'Footer']
  },
  real_estate: {
    name: 'Bất Động Sản',
    description: 'Dành cho dự án BĐS, môi giới. Hiển thị danh sách nhà và form tư vấn.',
    modules: ['HeroSection', 'GallerySection', 'StatsRow', 'FeatureGrid', 'TestimonialGrid', 'MapSection', 'ContactForm', 'Footer']
  },
  agency: {
    name: 'Agency / Dịch Vụ',
    description: 'Trang đích cho các công ty dịch vụ, tư vấn, marketing agency.',
    modules: ['HeroSection', 'LogoTicker', 'StatsRow', 'BentoGrid', 'TeamSection', 'TestimonialGrid', 'CallToAction', 'Footer']
  },
  travel: {
    name: 'Du Lịch / Tour',
    description: 'Dành cho công ty du lịch, giới thiệu điểm đến và đặt tour.',
    modules: ['HeroSection', 'GallerySection', 'BentoGrid', 'FeatureGrid', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  clinic: {
    name: 'Phòng Khám / Y Tế',
    description: 'Giới thiệu dịch vụ y tế, đội ngũ bác sĩ và đặt lịch khám.',
    modules: ['HeroSection', 'StatsRow', 'BentoGrid', 'TeamSection', 'TrustBadges', 'FAQAccordion', 'MapSection', 'ContactForm', 'Footer']
  },
  fitness: {
    name: 'Gym / Fitness',
    description: 'Phòng tập gym, yoga. Hiển thị lớp học, bảng giá thẻ hội viên.',
    modules: ['HeroSection', 'StatsRow', 'FeatureGrid', 'StepByStep', 'PricingTable', 'AppDownload', 'CallToAction', 'Footer']
  },
  charity: {
    name: 'Tổ Chức Từ Thiện',
    description: 'Kêu gọi quyên góp, giới thiệu dự án cộng đồng và tác động xã hội.',
    modules: ['HeroSection', 'StatsRow', 'BentoGrid', 'FeatureGrid', 'TestimonialGrid', 'CallToAction', 'Footer']
  },
  local_service: {
    name: 'Dịch Vụ Địa Phương',
    description: 'Sửa chữa, dọn dẹp, spa... Tập trung vào dịch vụ và nhận báo giá.',
    modules: ['HeroSection', 'FeatureGrid', 'StepByStep', 'TestimonialGrid', 'MapSection', 'FAQAccordion', 'ContactForm', 'Footer']
  },
  lawyer: {
    name: 'Luật Sư / Pháp Lý',
    description: 'Văn phòng luật, tư vấn pháp lý. Hiển thị lĩnh vực và đặt lịch.',
    modules: ['HeroSection', 'StatsRow', 'FeatureGrid', 'TrustBadges', 'FAQAccordion', 'MapSection', 'ContactForm', 'Footer']
  },
  interior_design: {
    name: 'Thiết Kế Nội Thất',
    description: 'Phô diễn các dự án nội thất, quy trình làm việc và nhận yêu cầu.',
    modules: ['HeroSection', 'GallerySection', 'BeforeAfter', 'BentoGrid', 'StepByStep', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  photography: {
    name: 'Nhiếp Ảnh Gia',
    description: 'Trưng bày bộ sưu tập ảnh, bảng giá chụp và form book lịch.',
    modules: ['HeroSection', 'GallerySection', 'BentoGrid', 'PricingTable', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  podcast: {
    name: 'Podcast / Show',
    description: 'Trang chủ cho Podcast, danh sách tập mới, host và link nghe.',
    modules: ['HeroSection', 'VideoSection', 'DataList', 'FeatureGrid', 'NewsletterSection', 'Footer']
  },
  wedding: {
    name: 'Thiệp Cưới / Sự Kiện',
    description: 'Trang thông tin đám cưới, đếm ngược, lịch trình và RSVP.',
    modules: ['HeroSection', 'GallerySection', 'TimelineSection', 'BentoGrid', 'ContactForm', 'Footer']
  },
  book_launch: {
    name: 'Ra Mắt Sách',
    description: 'Giới thiệu sách mới, các chương nổi bật và đặt mua.',
    modules: ['HeroSection', 'VideoSection', 'StatsRow', 'BentoGrid', 'TestimonialGrid', 'PricingTable', 'Footer']
  },
  music_release: {
    name: 'Ra Mắt Âm Nhạc',
    description: 'Trang quảng bá album/single, danh sách bài hát và tour diễn.',
    modules: ['HeroSection', 'VideoSection', 'DataList', 'GallerySection', 'CallToAction', 'Footer']
  },
  gaming_guild: {
    name: 'Cộng Đồng Game',
    description: 'Trang chủ cho Clan, eSports team, thành tích và tuyển thành viên.',
    modules: ['HeroSection', 'VideoSection', 'StatsRow', 'TeamSection', 'BentoGrid', 'CallToAction', 'Footer']
  },
  car_rental: {
    name: 'Cho Thuê Xe',
    description: 'Danh sách xe cho thuê, quy trình và form đặt xe.',
    modules: ['HeroSection', 'FeatureGrid', 'StepByStep', 'FAQAccordion', 'ContactForm', 'Footer']
  },
  pet_care: {
    name: 'Chăm Sóc Thú Cưng',
    description: 'Dịch vụ thú y, spa thú cưng, bảng giá và đặt lịch.',
    modules: ['HeroSection', 'FeatureGrid', 'PricingTable', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  crypto_project: {
    name: 'Dự Án Crypto / Web3',
    description: 'Giới thiệu dự án blockchain, tokenomics, roadmap và team.',
    modules: ['HeroSection', 'LogoTicker', 'StatsRow', 'TimelineSection', 'TeamSection', 'CallToAction', 'Footer']
  },
  spa: {
    name: 'Spa / Thẩm Mỹ Viện',
    description: 'Giới thiệu dịch vụ làm đẹp, bảng giá và đặt lịch hẹn.',
    modules: ['HeroSection', 'FeatureGrid', 'BeforeAfter', 'PricingTable', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  recruitment: {
    name: 'Tuyển Dụng / Việc Làm',
    description: 'Trang tuyển dụng nhân sự, văn hóa công ty và danh sách việc làm.',
    modules: ['HeroSection', 'StatsRow', 'FeatureGrid', 'DataList', 'CallToAction', 'Footer']
  },
  crowdfunding: {
    name: 'Gọi Vốn / Crowdfunding',
    description: 'Trang gọi vốn dự án, tiến độ, câu chuyện và các gói tài trợ.',
    modules: ['HeroSection', 'StatsRow', 'BentoGrid', 'PricingTable', 'CallToAction', 'Footer']
  },
  coaching: {
    name: 'Coaching / Tư Vấn',
    description: 'Trang cá nhân cho chuyên gia tư vấn, khóa học và đặt lịch.',
    modules: ['HeroSection', 'StatsRow', 'FeatureGrid', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  coworking: {
    name: 'Coworking Space',
    description: 'Giới thiệu không gian làm việc chung, tiện ích và bảng giá thuê.',
    modules: ['HeroSection', 'FeatureGrid', 'GallerySection', 'BentoGrid', 'PricingTable', 'MapSection', 'ContactForm', 'Footer']
  },
  auto_repair: {
    name: 'Gara / Sửa Xe',
    description: 'Dịch vụ bảo dưỡng, sửa chữa ô tô/xe máy và đặt lịch.',
    modules: ['HeroSection', 'FeatureGrid', 'BeforeAfter', 'StepByStep', 'TestimonialGrid', 'MapSection', 'ContactForm', 'Footer']
  },
  education: {
    name: 'Trường Học / Đào Tạo',
    description: 'Trung tâm ngoại ngữ, trường học. Hiển thị chương trình và đăng ký.',
    modules: ['HeroSection', 'StatsRow', 'FeatureGrid', 'TestimonialGrid', 'MapSection', 'ContactForm', 'Footer']
  },
  cleaning_service: {
    name: 'Dịch Vụ Vệ Sinh',
    description: 'Vệ sinh công nghiệp, dọn nhà. Hiển thị bảng giá và đặt lịch.',
    modules: ['HeroSection', 'FeatureGrid', 'BeforeAfter', 'StepByStep', 'PricingTable', 'ContactForm', 'Footer']
  },
  architecture: {
    name: 'Kiến Trúc / Xây Dựng',
    description: 'Công ty kiến trúc, xây dựng. Phô diễn dự án và quy trình.',
    modules: ['HeroSection', 'GallerySection', 'BentoGrid', 'StatsRow', 'StepByStep', 'ContactForm', 'Footer']
  },
  financial: {
    name: 'Tài Chính / Kế Toán',
    description: 'Dịch vụ kế toán, tư vấn tài chính, vay vốn.',
    modules: ['HeroSection', 'FeatureGrid', 'StatsRow', 'ComparisonTable', 'TrustBadges', 'FAQAccordion', 'ContactForm', 'Footer']
  },
  logistics: {
    name: 'Vận Tải / Chuyển Nhà',
    description: 'Dịch vụ vận chuyển, logistics, chuyển nhà trọn gói.',
    modules: ['HeroSection', 'FeatureGrid', 'ComparisonTable', 'StepByStep', 'TestimonialGrid', 'ContactForm', 'Footer']
  },
  bakery: {
    name: 'Tiệm Bánh / Cafe',
    description: 'Giới thiệu menu, không gian quán và đặt hàng trực tuyến.',
    modules: ['HeroSection', 'GallerySection', 'BentoGrid', 'FeatureGrid', 'TestimonialGrid', 'MapSection', 'CallToAction', 'Footer']
  }
};

export interface AppSummary {
  app_name: string;
  app_slogan: string;
  app_type: 'image' | 'content' | 'video' | 'sales' | 'coaching' | 'analytics' | 'custom';
  industry: string;
  target_user: string;
  main_goal: string;
}

export type DesignStyle = 'minimalist' | 'futuristic' | 'luxury' | 'brutalist' | 'glassmorphism';

export interface UiDesign {
  layout_style: string;
  main_sections: string[];
  visual_vibe: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
}

export interface Field {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'toggle' | 'number';
  options?: string[];
  required: boolean;
  placeholder?: string;
  example?: string;
}

export interface Feature {
  name: string;
  description: string;
}

export interface Features {
  essential: Feature[];
  pro: Feature[];
  god_mode: Feature[];
}

export interface Engine {
  system_prompt: string;
  user_prompt_template: string;
}

export interface Security {
  security_measures: string[];
  logic_constraints: string[];
}

export interface IdeasUseCases {
  marketing_hooks: string[];
  real_world_applications: string[];
}

export interface Ecosystem {
  upgrade_ideas: string[];
  related_apps: string[];
}

export interface LayoutModule {
  type: 'HeroSection' | 'FeatureGrid' | 'CallToAction' | 'FormSection' | 'DataList' | 'PricingTable' | 'TestimonialGrid' | 'ContactForm' | 'Footer' | 'BentoGrid' | 'StatsRow' | 'FAQAccordion' | 'StepByStep' | 'TeamSection' | 'LogoTicker' | 'VideoSection' | 'GallerySection' | 'TimelineSection' | 'NewsletterSection' | 'MapSection' | 'AppDownload' | 'ArticleGrid' | 'ComparisonTable' | 'BeforeAfter' | 'TrustBadges' | 'SaasLayout' | 'PortfolioLayout' | 'AppPromoLayout' | 'EcommerceLayout' | 'EventLayout' | 'CreatorLayout' | 'CourseLayout' | 'RestaurantLayout' | 'RealEstateLayout' | 'AgencyLayout' | 'TravelLayout' | 'ClinicLayout' | 'FitnessLayout' | 'CharityLayout' | 'LocalServiceLayout' | 'LawyerLayout' | 'InteriorDesignLayout' | 'PhotographyLayout' | 'PodcastLayout' | 'WeddingLayout' | 'BookLaunchLayout' | 'MusicReleaseLayout' | 'GamingGuildLayout' | 'CarRentalLayout' | 'PetCareLayout' | 'CryptoProjectLayout' | 'SpaLayout' | 'RecruitmentLayout' | 'CrowdfundingLayout' | 'CoachingLayout' | 'CoworkingLayout' | 'AutoRepairLayout' | 'EducationLayout' | 'CleaningServiceLayout' | 'ArchitectureLayout' | 'FinancialLayout' | 'LogisticsLayout' | 'BakeryLayout';
  props: Record<string, any>;
}

export interface AppBlueprint {
  userId?: string;
  createdAt?: any;
  summary: AppSummary;
  ui_design: UiDesign;
  fields: Field[];
  features: Features;
  engine: Engine;
  security: Security;
  ideas_use_cases: IdeasUseCases;
  ecosystem: Ecosystem;
  layout_modules?: LayoutModule[];
}
