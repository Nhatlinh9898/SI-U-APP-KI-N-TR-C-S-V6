import { GoogleGenAI } from "@google/genai";
import { AppBlueprint, DesignStyle, PREDEFINED_LAYOUTS } from "../types";
import { ARCHITECT_PERSONA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateBlueprint = async (
  userIdea: string, 
  style: DesignStyle = 'futuristic',
  template: string = 'ai_auto',
  previousBlueprint?: AppBlueprint,
  feedback?: string
): Promise<AppBlueprint> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 

    let prompt = `HÃY THIẾT KẾ BẢN VẼ CHO Ý TƯỞNG SAU: "${userIdea}"\n`;
    prompt += `PHONG CÁCH THIẾT KẾ: ${style}\n\n`;
    
    if (previousBlueprint && feedback) {
      prompt = `DỰA TRÊN BẢN VẼ HIỆN TẠI VÀ PHẢN HỒI CỦA NGƯỜI DÙNG, HÃY CẬP NHẬT KIẾN TRÚC.\n\n`;
      prompt += `BẢN VẼ HIỆN TẠI: ${JSON.stringify(previousBlueprint)}\n\n`;
      prompt += `PHẢN HỒI CỦA NGƯỜI DÙNG: "${feedback}"\n\n`;
    }

    prompt += `YÊU CẦU ĐẦU RA:\n`;
    prompt += `- Trả về JSON khớp HOÀN TOÀN với schema TypeScript đã định nghĩa.\n`;
    prompt += `- Đảm bảo trường ui_design có đầy đủ primary_color, secondary_color, accent_color (mã HEX).\n`;
    
    if (template !== 'ai_auto' && PREDEFINED_LAYOUTS[template]) {
      const layoutName = template === 'saas' ? 'SaasLayout' : 
                         template === 'portfolio' ? 'PortfolioLayout' : 
                         template === 'app_promo' ? 'AppPromoLayout' :
                         template === 'ecommerce' ? 'EcommerceLayout' :
                         template === 'event' ? 'EventLayout' : 
                         template === 'creator' ? 'CreatorLayout' :
                         template === 'course' ? 'CourseLayout' :
                         template === 'restaurant' ? 'RestaurantLayout' :
                         template === 'real_estate' ? 'RealEstateLayout' : 
                         template === 'agency' ? 'AgencyLayout' :
                         template === 'travel' ? 'TravelLayout' :
                         template === 'clinic' ? 'ClinicLayout' :
                         template === 'fitness' ? 'FitnessLayout' :
                         template === 'charity' ? 'CharityLayout' : 
                         template === 'local_service' ? 'LocalServiceLayout' :
                         template === 'lawyer' ? 'LawyerLayout' :
                         template === 'interior_design' ? 'InteriorDesignLayout' :
                         template === 'photography' ? 'PhotographyLayout' :
                         template === 'podcast' ? 'PodcastLayout' : 
                         template === 'wedding' ? 'WeddingLayout' :
                         template === 'book_launch' ? 'BookLaunchLayout' :
                         template === 'music_release' ? 'MusicReleaseLayout' :
                         template === 'gaming_guild' ? 'GamingGuildLayout' :
                         template === 'car_rental' ? 'CarRentalLayout' :
                         template === 'pet_care' ? 'PetCareLayout' : 
                         template === 'crypto_project' ? 'CryptoProjectLayout' :
                         template === 'spa' ? 'SpaLayout' :
                         template === 'recruitment' ? 'RecruitmentLayout' :
                         template === 'crowdfunding' ? 'CrowdfundingLayout' :
                         template === 'coaching' ? 'CoachingLayout' :
                         template === 'coworking' ? 'CoworkingLayout' : 
                         template === 'auto_repair' ? 'AutoRepairLayout' :
                         template === 'education' ? 'EducationLayout' :
                         template === 'cleaning_service' ? 'CleaningServiceLayout' :
                         template === 'architecture' ? 'ArchitectureLayout' :
                         template === 'financial' ? 'FinancialLayout' :
                         template === 'logistics' ? 'LogisticsLayout' : 'BakeryLayout';
                         
      const requiredProps = template === 'saas' ? 'hero, logos, products, metrics, feature_tabs, integrations_directory, tech_stack, pricing_toggle, feature_comparison, roadmap, live_chat, video_testimonials, system_status, changelog, faq_search, articles, cta, footer, sticky_cta' : 
                            template === 'portfolio' ? 'hero, logos, skill_radar, skill_cloud, tech_stack, projects, project_results, timeline, certificates, social_feed, testimonial_carousel, career_path, contact, footer' : 
                            template === 'app_promo' ? 'hero, video, products, metrics, feature_tabs, integrations_directory, tech_stack, changelog, app_download, faq_search, cta, footer' :
                            template === 'ecommerce' ? 'flash_sale, hero, logos, comparison, product_bundle, products, bento, trust_badges, testimonial_carousel, app_download, newsletter, footer, sticky_cta' :
                            template === 'event' ? 'hero, live_webinar, countdown, video, floor_plan, itinerary, schedule, speakers, team, pricing, map, faq_search, footer' :
                            template === 'creator' ? 'profile, video, stats_dashboard, links, metrics, social_feed, articles, lead_magnet, newsletter, footer' :
                            template === 'course' ? 'hero, live_webinar, video_playlist, metrics, instructor, learning_path, course_accordion, curriculum, certificates, features, pricing, faq_search, footer' :
                            template === 'restaurant' ? 'hero, gallery, menu_tabs, menu_grid, chef_specials, recipe_detail, recipes, highlights, testimonial_carousel, opening_hours, map, booking, reservation_form, footer' :
                            template === 'real_estate' ? 'hero, search, virtual_tour, neighborhood, amenities, properties, metrics, mortgage_calculator, features, testimonial_carousel, map, booking, footer' :
                            template === 'agency' ? 'hero, logos, skill_radar, skill_cloud, tech_stack, partners, bento, project_results, process, team, career_path, jobs, video_testimonials, cta, footer' :
                            template === 'travel' ? 'hero, gallery, itinerary, packing_list, booking_form, features, testimonial_carousel, map, booking, footer' :
                            template === 'clinic' ? 'hero, metrics, services, appointment_form, doctors, trust_badges, opening_hours, faq_search, map, booking, footer' :
                            template === 'fitness' ? 'hero, metrics, bmi_form, workouts, classes, schedule, memberships, app_download, booking, footer' :
                            template === 'charity' ? 'hero, donation_tracker, fundraising, impact_map, donation_impact, metrics, programs, stories, volunteer_form, donate, footer' :
                            template === 'local_service' ? 'hero, pricing_calculator, services, process, testimonial_carousel, opening_hours, map, faq_search, booking, footer' :
                            template === 'lawyer' ? 'hero, metrics, legal_services, case_studies, practices, process, trust_badges, faq_search, map, booking, footer' :
                            template === 'interior_design' ? 'hero, project_details, projects, before_after, portfolio, process, testimonial_carousel, booking, footer' :
                            template === 'photography' ? 'hero, projects, packages, social_feed, testimonial_carousel, booking, footer' :
                            template === 'podcast' ? 'hero, audio, video_playlist, instructor, social_feed, episodes, newsletter, footer' :
                            template === 'wedding' ? 'hero, countdown, gallery, schedule, social_feed, booking, footer' :
                            template === 'book_launch' ? 'hero, countdown, video, instructor, metrics, chapters, social_feed, testimonial_carousel, pricing, footer' :
                            template === 'music_release' ? 'hero, audio, video, social_feed, gallery, listen_now, footer' :
                            template === 'gaming_guild' ? 'hero, video, tournament, leaderboard, social_feed, roster, highlights, join_us, footer' :
                            template === 'car_rental' ? 'hero, car_features, products, process, faq_search, booking, footer' :
                            template === 'pet_care' ? 'hero, pet_profiles, menu_tabs, menu_grid, services, testimonial_carousel, booking, footer' :
                            template === 'crypto_project' ? 'hero, wallet_preview, token_sale, stock_ticker, countdown, tokenomics, metrics, process, roadmap, team, community, footer' :
                            template === 'spa' ? 'hero, menu_tabs, menu_grid, before_after, testimonial_carousel, opening_hours, booking, footer' :
                            template === 'recruitment' ? 'hero, metrics, benefits, process, jobs, application_form, apply, footer' :
                            template === 'crowdfunding' ? 'hero, fundraising, metrics, story, process, rewards, back_us, footer' :
                            template === 'coaching' ? 'hero, instructor, metrics, process, programs, testimonial_carousel, booking, footer' :
                            template === 'coworking' ? 'hero, floor_plan, amenities, gallery, plans, process, booking, footer' :
                            template === 'auto_repair' ? 'hero, services, before_after, process, testimonial_carousel, map, booking, footer' :
                            template === 'education' ? 'hero, metrics, programs, learning_path, curriculum, certificates, testimonial_carousel, map, booking, footer' :
                            template === 'cleaning_service' ? 'hero, services, before_after, process, pricing, booking, footer' :
                            template === 'architecture' ? 'hero, projects, metrics, process, booking, footer' :
                            template === 'financial' ? 'hero, stock_ticker, calculator_preview, metrics, process, trust_badges, faq_search, booking, footer' :
                            template === 'logistics' ? 'hero, tracking_preview, impact_map, metrics, process, testimonial_carousel, booking, footer' :
                            'hero, gallery, menu_tabs, menu_grid, chef_specials, recipe_detail, recipes, features, testimonial_carousel, order, footer';
                            
      prompt += `\n🔥 YÊU CẦU ĐẶC BIỆT VỀ LAYOUT (BẮT BUỘC TUÂN THỦ 100%):\n`;
      prompt += `- Người dùng đã chọn layout mẫu: ${PREDEFINED_LAYOUTS[template].name}.\n`;
      prompt += `- Bạn PHẢI trả về mảng 'layout_modules' chứa ĐÚNG 1 module duy nhất có type là '${layoutName}'.\n`;
      prompt += `- Trong phần 'props' của module '${layoutName}', bạn phải cung cấp đầy đủ các object con: ${requiredProps}.\n`;
      prompt += `- Ví dụ: { "type": "${layoutName}", "props": { "hero": { "title": "..." }, "stats": { "stats": [...] }, ... } }\n`;
    } else {
      prompt += `\n🔥 YÊU CẦU ĐẶC BIỆT CHO 'layout_modules' (BẮT BUỘC):\n`;
      prompt += `- Bạn PHẢI trả về một mảng 'layout_modules' gồm ÍT NHẤT 6-8 modules khác nhau, xếp theo thứ tự logic của một Landing Page hoàn chỉnh.\n`;
      prompt += `- TUYỆT ĐỐI KHÔNG ĐƯỢC CHỈ TRẢ VỀ 1 MODULE. Phải tạo thành một luồng trang web đầy đủ.\n`;
      prompt += `- Ví dụ thứ tự chuẩn: HeroSection -> StatsRow -> BentoGrid -> StepByStep -> FAQAccordion -> CallToAction -> Footer.\n`;
    }

    prompt += `- Các type hợp lệ và cấu trúc props:\n`;
    prompt += `  + MedicalAppointmentForm: { title, subtitle, departments: [{name, icon}] } (Form đặt lịch khám bệnh đa bước)\n`;
    prompt += `  + LegalCaseStudy: { title, subtitle, cases: [{title, category, challenge, solution, result, image}] } (Các vụ việc pháp lý tiêu biểu)\n`;
    prompt += `  + InteriorProjectDetail: { title, subtitle, projects: [{title, style, duration, area, materials: string[], description, challenge, solution, images: string[]}] } (Chi tiết dự án nội thất chuyên sâu)\n`;
    prompt += `  + LogisticsLiveTracking: { title, subtitle, trackingId, steps: [{status, location, time, isCompleted}], packageDetails: {weight, estimatedDelivery} } (Theo dõi vận chuyển thời gian thực)\n`;
    prompt += `  + PropertyGrid: { title, subtitle, properties: [{title, price, location, beds, baths, sqft, image, tag}] }\n`;
    prompt += `  + CourseCurriculum: { title, subtitle, sections: [{title, lessons: [{title, duration, isFree}]}] }\n`;
    prompt += `  + MenuGrid: { title, subtitle, items: [{name, description, price, image, tag}] }\n`;
    prompt += `  + ProcessFlow: { title, subtitle, steps: [{title, description, icon}] }\n`;
    prompt += `  + PricingMatrix: { title, subtitle, tiers: [{name, price}], features: [{name, availability: boolean[]}] }\n`;
    prompt += `  + SocialFeed: { title, subtitle, posts: [{user, handle, avatar, content, image, likes, comments, date}] }\n`;
    prompt += `  + EventSchedule: { title, subtitle, days: [{date, events: [{time, title, speaker, description}]}] }\n`;
    prompt += `  + InstructorBio: { name, role, bio, stats: [{label, value}], image }\n`;
    prompt += `  + FundraisingProgress: { title, goal, current, backers, daysLeft, story }\n`;
    prompt += `  + OpeningHours: { title, hours: [{day, time}], image }\n`;
    prompt += `  + VideoTestimonials: { title, testimonials: [{name, role, quote, videoThumbnail, videoUrl}] }\n`;
    prompt += `  + ProjectMasonry: { title, projects: [{title, category, image}] }\n`;
    prompt += `  + ServiceMenu: { title, categories: [{name, items: [{name, description, price}]}] }\n`;
    prompt += `  + IntegrationGrid: { title, integrations: [{name, icon, description}] }\n`;
    prompt += `  + JobBoard: { title, jobs: [{title, department, location, type, salary}] }\n`;
    prompt += `  + CountdownSection: { title, targetDate, description }\n`;
    prompt += `  + AudioPlayer: { title, trackName, artist, audioUrl, coverImage }\n`;
    prompt += `  + ProductShowcase: { title, products: [{name, description, image, features: string[], price, reverse: boolean}] }\n`;
    prompt += `  + ArticleGrid: { title, articles: [{title, excerpt, date, author, image, category}] }\n`;
    prompt += `  + ComparisonTable: { title, columns: string[], rows: [{name, values: string[]}] }\n`;
    prompt += `  + BeforeAfter: { title, beforeImage, afterImage, description }\n`;
    prompt += `  + TrustBadges: { title, badges: [{label, icon}] }\n`;
    prompt += `  + MapSection: { title, address, lat, lng, zoom }\n`;
    prompt += `  + AppDownload: { title, description, image, appStoreUrl, playStoreUrl }\n`;
    prompt += `  + NewsletterSection: { title, subtitle, buttonText }\n`;
    prompt += `  + TimelineSection: { title, items: [{year, title, description}] }\n`;
    prompt += `  + GallerySection: { title, images: string[] }\n`;
    prompt += `  + VideoSection: { title, videoUrl, thumbnail }\n`;
    prompt += `  + LogoTicker: { title, logos: string[] }\n`;
    prompt += `  + TeamSection: { title, members: [{name, role, image, bio}] }\n`;
    prompt += `  + RoadmapTimeline: { title, subtitle, items: [{quarter, title, description, status: 'completed'|'in-progress'|'planned'}] }\n`;
    prompt += `  + SkillCloud: { title, subtitle, skills: [{name, level, category}] }\n`;
    prompt += `  + Leaderboard: { title, subtitle, items: [{rank, name, score, avatar, trend: 'up'|'down'|'stable'}] }\n`;
    prompt += `  + TokenomicsChart: { title, subtitle, allocations: [{label, percentage, color, description}], total_supply }\n`;
    prompt += `  + ItinerarySection: { title, subtitle, days: [{day, title, activities: [{time, title, description}]}] }\n`;
    prompt += `  + DataMetricCard: { title, subtitle, metrics: [{label, value, change, isPositive, icon}] }\n`;
    prompt += `  + StockTicker: { title, stocks: [{symbol, price, change, isPositive}] } (Thanh chạy giá chứng khoán/crypto)\n`;
    prompt += `  + BookingCalendar: { title, subtitle, slots: [{time, available}] } (Đặt lịch hẹn)\n`;
    prompt += `  + ReviewWall: { title, subtitle, reviews: [{name, role, content, avatar, rating}] } (Tường đánh giá dày đặc)\n`;
    prompt += `  + TechStack: { title, subtitle, techs: [{name, icon, description}] } (Grid công nghệ/công cụ)\n`;
    prompt += `  + ImpactMap: { title, subtitle, locations: [{name, stats, description, lat, lng}] } (Bản đồ tác động/vị trí)\n`;
    prompt += `  + MenuTabs: { title, subtitle, categories: [{name, items: [{name, description, price, image}]}] } (Thực đơn chia tab)\n`;
    prompt += `  + ProductComparison: { title, subtitle, products: [{name, image, price, features: [{name, value}], buttonText, isPopular}] } (So sánh sản phẩm trực quan)\n`;
    prompt += `  + VideoPlaylist: { title, subtitle, videos: [{title, duration, thumbnail, url}] } (Trình phát video có danh sách)\n`;
    prompt += `  + CertificateShowcase: { title, subtitle, certificates: [{title, issuer, date, image}] } (Trưng bày chứng chỉ/giải thưởng)\n`;
    prompt += `  + LiveChatPreview: { title, subtitle, messages: [{user, text, time, isBot}] } (Mô phỏng khung chat trực tuyến)\n`;
    prompt += `  + LeadMagnet: { title, subtitle, description, buttonText, image } (Kêu gọi đăng ký nhận quà/ebook)\n`;
    prompt += `  + PropertySearch: { title, subtitle } (Thanh tìm kiếm BĐS chuyên sâu)\n`;
    prompt += `  + FeatureTabs: { title, subtitle, tabs: [{title, description, image, icon}] } (Tính năng chia tab dọc hiện đại)\n`;
    prompt += `  + TestimonialCarousel: { title, testimonials: [{name, role, content, avatar}] } (Trình trượt đánh giá khách hàng)\n`;
    prompt += `  + PartnerGrid: { title, subtitle, partners: [{name, logo, description}] } (Lưới đối tác kèm mô tả chi tiết)\n`;
    prompt += `  + FAQSearch: { title, subtitle, faqs: [{question, answer, category}] } (Hỏi đáp có thanh tìm kiếm và lọc category)\n`;
    prompt += `  + StickyCTA: { text, buttonText } (Nút kêu gọi hành động nổi cố định ở dưới)\n`;
    prompt += `  + UserStatsDashboard: { title, subtitle, stats: [{label, value, icon, color}] } (Bảng chỉ số người dùng chuyên nghiệp)\n`;
    prompt += `  + FeatureComparisonTable: { title, subtitle, plans: [{name, price, features: {featureName: boolean|string}}], featureList: [string] } (Bảng so sánh tính năng chi tiết giữa các gói)\n`;
    prompt += `  + FlashSaleBanner: { title, endTime, buttonText } (Thanh đếm ngược khuyến mãi khẩn cấp ở đầu trang)\n`;
    prompt += `  + LearningPathMap: { title, subtitle, steps: [{title, description, icon, isCompleted}] } (Bản đồ lộ trình học tập trực quan)\n`;
    prompt += `  + DonationImpactCards: { title, subtitle, tiers: [{amount, title, description, image}] } (Thẻ tác động quyên góp - ví dụ: 50$ giúp được gì)\n`;
    prompt += `  + VirtualTourGallery: { title, subtitle, images: [{url, label}] } (Bộ sưu tập ảnh tối ưu cho tour ảo/360)\n`;
    prompt += `  + CareerPathTimeline: { title, subtitle, steps: [{year, title, company, description}] } (Dòng thời gian sự nghiệp/kinh nghiệm làm việc)\n`;
    prompt += `  + RecipeCardGrid: { title, subtitle, recipes: [{title, time, difficulty, image, calories}] } (Lưới thẻ công thức nấu ăn/món ăn)\n`;
    prompt += `  + WorkoutPlanTable: { title, subtitle, workouts: [{exercise, sets, reps, rest}] } (Bảng lịch tập luyện chi tiết)\n`;
    prompt += `  + LegalServiceCard: { title, subtitle, services: [{title, description, icon}] } (Thẻ dịch vụ pháp lý sang trọng)\n`;
    prompt += `  + CarFeatureHighlight: { title, subtitle, carName, image, features: [{label, value, icon}] } (Trình diễn tính năng xe hơi nổi bật)\n`;
    prompt += `  + PetProfileCard: { title, subtitle, pets: [{name, breed, age, image, gender}] } (Thẻ hồ sơ thú cưng đáng yêu)\n`;
    prompt += `  + FinancialCalculatorPreview: { title, subtitle, description, buttonText, calculatorData: {label, value, unit, fields: [{label, value, unit}], resultLabel, resultValue} } (Bản xem trước công cụ tính toán tài chính)\n`;
    prompt += `  + LiveWebinarPreview: { title, subtitle, webinar: {title, date, host, hostImage, thumbnail} } (Bản xem trước buổi Webinar sắp diễn ra)\n`;
    prompt += `  + ProductBundleCard: { title, subtitle, mainProduct: {name, image}, addOns: [{name, image, price}], totalPrice, discountPrice } (Gói sản phẩm mua kèm tiết kiệm)\n`;
    prompt += `  + PropertyAmenitiesGrid: { title, subtitle, amenities: [{label, icon}] } (Lưới tiện ích bất động sản/không gian)\n`;
    prompt += `  + PricingToggleTable: { title, subtitle, plans: [{name, monthlyPrice, yearlyPrice, features, isPopular}] } (Bảng giá có nút gạt Tháng/Năm)\n`;
    prompt += `  + CourseModuleAccordion: { title, subtitle, modules: [{title, lessons: [{title, duration}]}] } (Danh sách bài học kiểu Accordion chi tiết)\n`;
    prompt += `  + ProjectResultStats: { title, subtitle, image, stats: [{label, value, icon}] } (Kết quả dự án với con số ấn tượng)\n`;
    prompt += `  + SystemStatusWidget: { title, subtitle, services: [{name, status}], uptime } (Widget hiển thị trạng thái hệ thống thời gian thực)\n`;
    prompt += `  + ChangelogFeed: { title, subtitle, updates: [{version, date, type, description}] } (Danh sách cập nhật tính năng mới/sửa lỗi)\n`;
    prompt += `  + NeighborhoodGuide: { title, subtitle, places: [{name, distance, type, rating}] } (Hướng dẫn khu vực lân cận - trường học, bệnh viện...)\n`;
    prompt += `  + TournamentBracket: { title, subtitle, matches: [{team1, team2, score1, score2, status}] } (Sơ đồ thi đấu/kết quả trận đấu eSports)\n`;
    prompt += `  + PackingListChecklist: { title, subtitle, items: [{name, category, essential}] } (Danh sách đồ cần chuẩn bị khi đi du lịch)\n`;
    prompt += `  + ChefSpecialCarousel: { title, subtitle, specials: [{name, description, longDescription, chefNote, price, image, tag}] } (Dùng cho thực đơn nhà hàng cao cấp)\n`;
    prompt += `  + JobApplicationForm: { title, subtitle, steps: [{title, fields: string[]}] } (Form ứng tuyển đa bước tùy chỉnh)\n`;
    prompt += `  + EventSpeakerGrid: { title, subtitle, speakers: [{name, role, image, talkTitle, socials: [{platform, url}]}] } (Lưới diễn giả sự kiện chi tiết)\n`;
    prompt += `  + DonationProgressTracker: { title, subtitle, goal, current, donors: [{name, amount, time}] } (Theo dõi tiến độ quyên góp và danh sách nhà hảo tâm)\n`;
    prompt += `  + ServicePricingCalculator: { title, subtitle, options: [{id, label, type, min, max, step, pricePerUnit, choices: [{label, price}]}], basePrice } (Công cụ tính giá dịch vụ tương tác)\n`;
    prompt += `  + CryptoWalletConnectPreview: { title, subtitle, balance, address, transactions: [{type, amount, token, status, time}] } (Bản xem trước kết nối ví Web3 và lịch sử giao dịch)\n`;
    prompt += `  + FitnessBMIForm: { title, subtitle } (Form tính chỉ số BMI và gợi ý lộ trình tập luyện)\n`;
    prompt += `  + IntegrationDirectory: { title, subtitle, integrations: [{name, category, description, logo, status}] } (Danh mục tích hợp có bộ lọc)\n`;
    prompt += `  + SkillRadarChart: { title, subtitle, skills: [{subject, A, fullMark}] } (Biểu đồ radar phân tích năng lực)\n`;
    prompt += `  + VenueFloorPlan: { title, subtitle, zones: [{id, name, capacity, features, x, y, width, height}] } (Sơ đồ mặt bằng tương tác)\n`;
    prompt += `  + VolunteerSignupForm: { title, subtitle } (Form đăng ký tình nguyện viên nhiều bước)\n`;
    prompt += `  + TokenSaleProgress: { title, subtitle, tiers: [{name, price, active, status}], totalRaised, hardCap } (Tiến độ bán token chi tiết)\n`;
    prompt += `  + RecipeDetailView: { title, subtitle, image, time, difficulty, calories, ingredients: [{name, amount}], steps: [{title, description}] } (Trang chi tiết công thức nấu ăn)\n`;
    prompt += `  + HeroSection: { title, subtitle, cta_text, secondary_cta_text, badge, image }\n`;
    prompt += `  + BentoGrid: { title, subtitle, items: [{title, description, icon, size: 'small'|'medium'|'large'}] } (Dùng để show tính năng nổi bật kiểu Apple)\n`;
    prompt += `  + StatsRow: { stats: [{label, value, suffix, description}] } (Dùng để show con số ấn tượng kèm giải thích)\n`;
    prompt += `  + StepByStep: { title, subtitle, steps: [{title, description, icon}] } (Dùng để show quy trình)\n`;
    prompt += `  + FeatureGrid: { title, subtitle, features: [{title, description, icon, tag}] }\n`;
    prompt += `  + PricingTable: { title, subtitle, plans: [{name, price, description, features: string[], isPopular: boolean, tag}] }\n`;
    prompt += `  + TestimonialGrid: { title, subtitle, testimonials: [{name, role, content, avatar}] }\n`;
    prompt += `  + FAQAccordion: { title, subtitle, faqs: [{question, answer}] }\n`;
    prompt += `  + ContactForm: { title, subtitle, buttonText }\n`;
    prompt += `  + CallToAction: { title, description, buttonText }\n`;
    prompt += `  + Footer: { companyName, description }\n`;
    prompt += `\n- Không giải thích gì thêm ngoài JSON.\n`;
    prompt += `\n🔥 HƯỚNG DẪN CHI TIẾT NỘI DUNG (CONTENT GUIDELINES):\n`;
    prompt += `- TUYỆT ĐỐI KHÔNG sử dụng dữ liệu mẫu chung chung như "Sản phẩm 1", "Tính năng A", "Nguyễn Văn A".\n`;
    prompt += `- PHẢI sử dụng dữ liệu thực tế, chuyên sâu theo đúng ngành nghề của website.\n`;
    prompt += `- Ví dụ cho IntegrationDirectory: Sử dụng các tên thật như Slack, Salesforce, Zapier, Google Drive kèm mô tả giá trị thực tế của việc tích hợp.\n`;
    prompt += `- Ví dụ cho SkillRadarChart: Sử dụng các kỹ năng chuyên môn cao như "Cloud Infrastructure", "Microservices Design", "Brand Strategy".\n`;
    prompt += `- Ví dụ cho RecipeDetailView: Viết một công thức nấu ăn hoàn chỉnh, hấp dẫn với các bước thực hiện chi tiết và định lượng nguyên liệu chính xác.\n`;
    prompt += `- Ví dụ cho TokenSaleProgress: Sử dụng các con số thực tế (ví dụ: $2,500,000), tên các vòng gọi vốn (Seed, Private, Public) và trạng thái cụ thể.\n`;
    prompt += `- Ví dụ cho VenueFloorPlan: Đặt tên các khu vực sáng tạo và chuyên nghiệp (ví dụ: "The Innovation Hub", "Zen Garden Lounge", "Executive Suite").\n`;
    prompt += `- Ví dụ cho MedicalAppointmentForm: Sử dụng các chuyên khoa thực tế như "Nội tiết", "Tim mạch", "Nhi khoa" kèm các icon emoji phù hợp.\n`;
    prompt += `- Ví dụ cho LegalCaseStudy: Mô tả các vụ việc phức tạp như "Tranh chấp sở hữu trí tuệ xuyên biên giới" hoặc "Tái cấu trúc tập đoàn đa quốc gia" với các bước giải quyết chuyên sâu.\n`;
    prompt += `- Ví dụ cho InteriorProjectDetail: Sử dụng các vật liệu cao cấp như "Đá Marble Carrara", "Gỗ Óc Chó nhập khẩu Bắc Mỹ", "Kính cường lực Low-E".\n`;
    prompt += `- Ví dụ cho LogisticsLiveTracking: Sử dụng các địa danh thực tế và trạng thái vận chuyển chuyên nghiệp (ví dụ: "Đang thông quan tại Cảng Cát Lái", "Đang luân chuyển tại kho phân loại").\n`;
    prompt += `- Ví dụ cho VolunteerSignupForm: Đề xuất các vị trí có ý nghĩa như "Điều phối viên cứu trợ khẩn cấp", "Chuyên gia tâm lý cộng đồng".\n`;
    prompt += `- Ví dụ cho FinancialCalculatorPreview: Sử dụng các công cụ thực tế như "Tính toán lãi suất kép", "Lập kế hoạch nghỉ hưu 401k", "So sánh gói vay mua nhà ưu đãi".\n`;
    prompt += `- Ví dụ cho LiveWebinarPreview: Đặt tên các chủ đề xu hướng như "Ứng dụng Generative AI trong quy trình doanh nghiệp", "Chiến lược đầu tư ESG năm 2024".\n`;
    prompt += `- Ví dụ cho ProductBundleCard: Tạo các combo sản phẩm logic như "Bộ Kit làm Podcast chuyên nghiệp" (Mic + Soundcard + Tai nghe) kèm mức giảm giá hấp dẫn.\n`;
    prompt += `- Ví dụ cho CourseModuleAccordion: Xây dựng lộ trình học tập bài bản (ví dụ: "Module 1: Tư duy thiết kế hệ thống", "Module 2: Triển khai Microservices với Docker").\n`;
    prompt += `- Ví dụ cho ProjectResultStats: Sử dụng các chỉ số KPI ấn tượng như "Tăng 150% tỷ lệ chuyển đổi", "Giảm 40% chi phí vận hành", "Đạt 1 triệu người dùng sau 3 tháng".\n`;
    prompt += `- Ví dụ cho ChangelogFeed: Mô tả các bản cập nhật cụ thể như "Version 2.4.0: Tích hợp thanh toán Apple Pay", "Fix: Tối ưu hóa tốc độ tải trang trên mobile".\n`;
    prompt += `- Ví dụ cho BentoGrid: Sử dụng các tính năng đột phá như "Chip Apple M3 Pro thế hệ mới", "Màn hình Liquid Retina XDR 120Hz", "Hệ thống tản nhiệt buồng hơi tiên tiến".\n`;
    prompt += `- Ví dụ cho StepByStep: Mô tả quy trình dịch vụ chuyên nghiệp (ví dụ: "Bước 1: Khảo sát hiện trạng & Tư vấn giải pháp", "Bước 2: Phác thảo ý tưởng & Ký kết hợp đồng").\n`;
    prompt += `- Ví dụ cho ProductComparison: So sánh các thông số kỹ thuật thực tế (ví dụ: iPhone 15 Pro vs iPhone 15 Pro Max về dung lượng pin, tiêu cự camera).\n`;
    prompt += `- Ví dụ cho UserStatsDashboard: Hiển thị các chỉ số vận hành thực tế như "Thời gian phản hồi trung bình: 1.2s", "Tỷ lệ uptime: 99.99%", "Số yêu cầu/giây: 5,000".\n`;
    prompt += `- Ví dụ cho FeatureComparisonTable: Liệt kê các tính năng SaaS chuyên sâu như "API Access (REST/GraphQL)", "SSO Integration (SAML/OIDC)", "Custom Domain Support".\n`;
    prompt += `- Ví dụ cho DonationImpactCards: Mô tả tác động cụ thể (ví dụ: "50$ - Cung cấp bữa ăn dinh dưỡng cho 10 trẻ em trong 1 tháng", "200$ - Tài trợ học bổng 1 học kỳ cho học sinh nghèo").\n`;
    prompt += `- Ví dụ cho CarFeatureHighlight: Sử dụng các thông số kỹ thuật xe hơi chuẩn như "Động cơ V6 Twin-Turbo 3.5L", "Công suất 409 mã lực", "Hệ thống treo khí nén thích ứng".\n`;
    prompt += `- Ví dụ cho PropertyAmenitiesGrid: Sử dụng các tiện ích bất động sản cao cấp như "Bể bơi vô cực nước mặn", "Phòng Gym tiêu chuẩn Olympic", "Hệ thống Smart Home điều khiển bằng giọng nói".\n`;
    prompt += `- Ví dụ cho TechStack: Liệt kê các công nghệ hiện đại và lý do sử dụng (ví dụ: "Next.js 14 - Tối ưu hóa SEO & Performance", "Tailwind CSS - Thiết kế linh hoạt & nhất quán").\n`;
    prompt += `- Ví dụ cho LearningPathMap: Xây dựng lộ trình từ cơ bản đến nâng cao (ví dụ: "Chặng 1: Nền tảng thuật toán", "Chặng 2: Kiến trúc hệ thống phân tán").\n`;
    prompt += `- Ví dụ cho WorkoutPlanTable: Thiết kế bài tập chuyên sâu (ví dụ: "Thứ 2: Ngực & Tay sau - 4 hiệp x 12 lần Bench Press").\n`;
    prompt += `- Ví dụ cho PetProfileCard: Mô tả tính cách thú cưng (ví dụ: "Golden Retriever - Hiền lành, thích trẻ em, đã tiêm phòng đầy đủ").\n`;
    prompt += `- Ví dụ cho NeighborhoodGuide: Đặt tên các địa điểm thực tế (ví dụ: "Trường Quốc tế BIS - 500m", "Bệnh viện Vinmec - 1.2km").\n`;
    prompt += `- Ví dụ cho TournamentBracket: Sử dụng tên các đội tuyển eSports nổi tiếng hoặc sáng tạo (ví dụ: "Team Flash vs GAM Esports").\n`;
    prompt += `- Ví dụ cho TokenomicsChart: Mô tả chi tiết phân bổ token (ví dụ: "Ecosystem: 40% (Vesting 4 năm)", "Team: 15% (Lock 1 năm, Cliff 6 tháng)").\n`;
    prompt += `- Ví dụ cho ItinerarySection: Xây dựng lịch trình du lịch chi tiết từng giờ (ví dụ: "08:00 - Đón khách tại khách sạn", "09:30 - Tham quan Vịnh Hạ Long").\n`;
    prompt += `- Ví dụ cho StockTicker: Sử dụng các mã chứng khoán/crypto thực tế và biến động giá logic (ví dụ: "BTC/USDT: $65,432.10 (+2.45%)").\n`;
    prompt += `- Ví dụ cho BookingCalendar: Thiết kế các khung giờ và loại dịch vụ cụ thể (ví dụ: "Tư vấn thiết kế (60 phút)", "Khám tổng quát (30 phút)").\n`;
    prompt += `- Ví dụ cho ReviewWall: Viết các đánh giá chân thực, có chi tiết cụ thể (ví dụ: "Dịch vụ tuyệt vời, đội ngũ kiến trúc sư rất lắng nghe ý kiến khách hàng").\n`;
    prompt += `- Ví dụ cho ImpactMap: Hiển thị các chỉ số tác động toàn cầu (ví dụ: "100+ Giếng nước sạch tại Châu Phi", "50,000+ Cây xanh được trồng tại Amazon").\n`;
    prompt += `- Ví dụ cho MenuGrid: Mô tả món ăn hấp dẫn kèm thành phần (ví dụ: "Bánh Croissant bơ Pháp - Làm từ bơ Isigny cao cấp, nướng giòn tan").\n`;
    prompt += `- Ví dụ cho VideoPlaylist: Đặt tên các video trong chuỗi bài học (ví dụ: "Bài 1: Giới thiệu về React Server Components", "Bài 2: Tối ưu hóa Performance").\n`;
    prompt += `- Ví dụ cho CertificateShowcase: Liệt kê các chứng chỉ uy tín (ví dụ: "AWS Certified Solutions Architect", "Google Professional Cloud Architect").\n`;
    prompt += `- Ví dụ cho LeadMagnet: Đề xuất các tài liệu giá trị cao (ví dụ: "Ebook: 10 chiến lược tăng trưởng SaaS năm 2024", "Checklist: Quy trình SEO tổng thể").\n`;
    prompt += `- Ví dụ cho PropertySearch: Thiết kế các bộ lọc chuyên sâu (ví dụ: "Khoảng giá: 2 tỷ - 5 tỷ", "Loại hình: Căn hộ cao cấp", "Tiện ích: Có hồ bơi").\n`;
    prompt += `- Ví dụ cho FeatureTabs: Mô tả sâu về các tính năng phức tạp (ví dụ: "Hệ thống bảo mật 3 lớp", "Tự động hóa quy trình với AI").\n`;
    prompt += `- Ví dụ cho PartnerGrid: Sử dụng tên các đối tác/khách hàng uy tín (ví dụ: "Đối tác chiến lược: Microsoft, Google Cloud, AWS").\n`;
    prompt += `- Ví dụ cho FAQSearch: Xây dựng bộ câu hỏi thường gặp theo danh mục (ví dụ: "Thanh toán & Hoàn tiền", "Kỹ thuật & Tích hợp").\n`;
    prompt += `- Ví dụ cho FlashSaleBanner: Sử dụng ngôn ngữ thúc đẩy hành động (ví dụ: "Ưu đãi duy nhất trong 24h", "Giảm ngay 50% - Chỉ còn 10 suất").\n`;
    prompt += `- Ví dụ cho VirtualTourGallery: Đặt tên các góc nhìn 360 độ (ví dụ: "Toàn cảnh phòng khách", "Chi tiết không gian bếp hiện đại").\n`;
    prompt += `- Ví dụ cho CareerPathTimeline: Mô tả các nấc thang sự nghiệp (ví dụ: "Junior Developer -> Senior Developer -> Tech Lead").\n`;
    prompt += `- Ví dụ cho RecipeCardGrid: Tóm tắt món ăn với các thông số (ví dụ: "Phở Bò Truyền Thống - 450 Calo - Độ khó: Trung bình").\n`;
    prompt += `- Ví dụ cho LegalServiceCard: Mô tả các lĩnh vực chuyên sâu (ví dụ: "Luật sở hữu trí tuệ", "Tư vấn M&A doanh nghiệp").\n`;
    prompt += `- Ví dụ cho ChefSpecialCarousel: Giới thiệu các món "ký danh" của đầu bếp (ví dụ: "Bò Wagyu dát vàng - Tuyệt phẩm ẩm thực thượng lưu").\n`;
    prompt += `- Ví dụ cho JobApplicationForm: Đặt các câu hỏi sàng lọc chuyên nghiệp (ví dụ: "Link Portfolio/GitHub", "Mức lương mong muốn").\n`;
    prompt += `- Ví dụ cho EventSpeakerGrid: Viết tiểu sử diễn giả ấn tượng kèm chủ đề bài nói (ví dụ: "CEO TechCorp - Tương lai của Web3").\n`;
    prompt += `- Ví dụ cho DonationProgressTracker: Hiển thị dòng tiền quyên góp thực tế (ví dụ: "Nguyễn Văn A vừa ủng hộ 500,000 VNĐ").\n`;
    prompt += `- Ví dụ cho ServicePricingCalculator: Thiết kế các tùy chọn tính giá linh hoạt (ví dụ: "Diện tích thi công (m2)", "Gói vật liệu: Cơ bản/Cao cấp").\n`;
    prompt += `\n💎 CHIẾN LƯỢC NỘI DUNG SIÊU CHI TIẾT (ULTIMATE CONTENT STRATEGY):\n`;
    prompt += `- Ví dụ cho ChefSpecialCarousel: Sử dụng mô tả giàu tính cảm giác (ví dụ: "Thịt bò Wagyu A5 mềm tan như bơ, hòa quyện cùng sốt nấm Truffle đen thơm nồng"). ChefNote nên là lời khuyên về cách thưởng thức (ví dụ: "Nên dùng kèm rượu vang đỏ Bordeaux để trọn vẹn hương vị").\n`;
    prompt += `- Ví dụ cho JobApplicationForm: Thiết kế các bước chuyên nghiệp (ví dụ: Bước 1: "Hồ sơ cá nhân", Bước 2: "Kỹ năng chuyên môn", Bước 3: "Dự án tiêu biểu").\n`;
    prompt += `- Ví dụ cho PackingListChecklist: Tạo danh sách theo chủ đề (ví dụ: "Đồ dùng leo núi", "Thiết bị quay phim", "Giấy tờ thông hành").\n`;
    prompt += `- Ví dụ cho DonationProgressTracker: Mô tả tác động cụ thể (ví dụ: "100.000đ giúp cung cấp 10 bữa ăn cho trẻ em vùng cao").\n`;
    prompt += `- Ví dụ cho EventSpeakerGrid: Viết tiểu sử ấn tượng (ví dụ: "Cựu Giám đốc Sáng tạo tại Google, người đứng sau chiến dịch X đạt giải Cannes Lion").\n`;
    prompt += `- Ví dụ cho CryptoWalletConnectPreview: Hiển thị các giao dịch thực tế (ví dụ: "Swap 1.5 ETH for 4500 USDC", "Minted Bored Ape #1234").\n`;
    prompt += `- Ví dụ cho FitnessBMIForm: Đưa ra lời khuyên sức khỏe cụ thể (ví dụ: "Chỉ số BMI của bạn là 24.5 - Ngưỡng bình thường. Hãy duy trì chế độ tập luyện Cardio 30p mỗi ngày").\n`;
    prompt += `\n🎯 CÔNG THỨC NỘI DUNG THEO NGÀNH (INDUSTRY-SPECIFIC RECIPES):\n`;
    prompt += `- DÀNH CHO BẤT ĐỘNG SẢN: Tập trung vào "Vị trí đắc địa", "Tiềm năng sinh lời", "Pháp lý minh bạch". Sử dụng các từ như "Tầm nhìn triệu đô", "Tâm điểm kết nối".\n`;
    prompt += `- DÀNH CHO CÔNG NGHỆ/SAAS: Tập trung vào "Hiệu suất đột phá", "Bảo mật đa lớp", "Tích hợp liền mạch". Sử dụng các từ như "Tự động hóa", "Thời gian thực", "Quy mô toàn cầu".\n`;
    prompt += `- DÀNH CHO GIÁO DỤC/KHÓA HỌC: Tập trung vào "Lộ trình bài bản", "Giảng viên chuyên gia", "Hỗ trợ trọn đời". Sử dụng các từ như "Làm chủ kỹ năng", "Thực chiến", "Cộng đồng học tập".\n`;
    prompt += `- DÀNH CHO NHÀ HÀNG/F&B: Tập trung vào "Hương vị nguyên bản", "Nguyên liệu tươi sạch", "Không gian tinh tế". Sử dụng các từ như "Tuyệt phẩm", "Đánh thức vị giác", "Trải nghiệm ẩm thực".\n`;
    prompt += `- DÀNH CHO Y TẾ/SỨC KHỎE: Tập trung vào "Tận tâm chăm sóc", "Thiết bị hiện đại", "An toàn tuyệt đối". Sử dụng các từ như "Phục hồi", "Cải thiện chất lượng sống", "Chuyên gia đầu ngành".\n`;
    prompt += `\n✨ NGUYÊN TẮC "KỂ CHUYỆN" (STORYTELLING PRINCIPLES):\n`;
    prompt += `1. VẤN ĐỀ & GIẢI PHÁP: Luôn bắt đầu bằng việc thấu hiểu nỗi đau của khách hàng và đưa ra giải pháp vượt mong đợi.\n`;
    prompt += `2. LỢI ÍCH TRÊN TÍNH NĂNG: Đừng chỉ nói "Phần mềm nhanh", hãy nói "Tiết kiệm 2 giờ làm việc mỗi ngày cho đội ngũ của bạn".\n`;
    prompt += `3. TẠO SỰ KHAN HIẾM: Sử dụng các yếu tố thời gian hoặc số lượng để thúc đẩy hành động (ví dụ: "Chỉ còn 5 suất ưu đãi cuối cùng").\n`;
    prompt += `4. TÍNH NHÂN VĂN: Lồng ghép các giá trị cộng đồng, bảo vệ môi trường hoặc phát triển bền vững để tạo thiện cảm.\n`;
    prompt += `5. ĐỒNG NHẤT THƯƠNG HIỆU: Đảm bảo tất cả các module đều nói chung một "ngôn ngữ" và phản ánh đúng giá trị cốt lõi của thương hiệu.\n`;
    prompt += `\n🚀 NGUYÊN TẮC VÀNG (GOLDEN RULES):\n`;
    prompt += `1. KHÔNG CHUNG CHUNG: Thay vì "Dịch vụ tốt", hãy viết "Hỗ trợ kỹ thuật 24/7 với thời gian phản hồi dưới 5 phút".\n`;
    prompt += `2. CON SỐ BIẾT NÓI: Luôn ưu tiên các con số cụ thể (%, VNĐ, Giờ, Người dùng).\n`;
    prompt += `3. TÍNH CHUYÊN GIA: Sử dụng thuật ngữ chuyên ngành một cách khéo léo để khẳng định uy tín.\n`;
    prompt += `4. KÊU GỌI HÀNH ĐỘNG (CTA): Mỗi module phải có mục đích rõ ràng và dẫn dắt người dùng đến hành động tiếp theo.\n`;
    prompt += `5. ĐA DẠNG HÓA: Không lặp lại cấu trúc câu. Sử dụng kết hợp câu ngắn mạnh mẽ và câu dài giàu cảm xúc.\n`;
    prompt += `6. VISUAL STORYTELLING: Chọn icon và từ khóa hình ảnh (keyword) phản ánh đúng đẳng cấp của nội dung văn bản.\n`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        {
          role: 'user',
          parts: [
            { text: ARCHITECT_PERSONA },
            { text: prompt }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("Không nhận được phản hồi từ AI Master.");

    try {
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanedText) as AppBlueprint;
    } catch (parseError) {
      console.error("JSON Parse Error:", text);
      throw new Error("Dữ liệu từ AI không hợp lệ. Vui lòng thử lại.");
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Không thể kết nối với hệ thống AI Master. Vui lòng kiểm tra kết nối.");
  }
};
