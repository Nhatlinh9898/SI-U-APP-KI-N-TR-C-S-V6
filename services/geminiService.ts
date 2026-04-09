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
    prompt += `  + MedicalAppointmentForm: { title, subtitle, departments: [{name, icon}], doctors: [{name, role, image, department, experience}], insurance_partners: string[] } (Form đặt lịch khám bệnh chuyên sâu nhiều bước)\n`;
    prompt += `  + LegalCaseStudy: { title, subtitle, cases: [{title, category, challenge, solution, result, image, client_quote, legal_team: string[]}] } (Các vụ việc pháp lý tiêu biểu chi tiết)\n`;
    prompt += `  + InteriorProjectDetail: { title, subtitle, projects: [{title, style, duration, area, materials: string[], description, challenge, solution, images: string[], design_philosophy, budget_range}] } (Chi tiết dự án nội thất chuyên sâu)\n`;
    prompt += `  + LogisticsLiveTracking: { title, subtitle, trackingId, steps: [{status, location, time, isCompleted}], packageDetails: {weight, estimatedDelivery}, carrier_info: {name, logo, hotline}, service_type } (Theo dõi vận chuyển thời gian thực chi tiết)\n`;
    prompt += `  + PropertyGrid: { title, subtitle, properties: [{title, price, location, beds, baths, sqft, image, tag, amenities: string[], agent_info: {name, image, phone}}] } (Lưới bất động sản chi tiết)\n`;
    prompt += `  + CourseCurriculum: { title, subtitle, sections: [{title, description, lessons: [{title, duration, isFree, previewUrl}]}] } (Lộ trình học tập chi tiết)\n`;
    prompt += `  + MenuGrid: { title, subtitle, items: [{name, description, price, image, tag, calories, dietary_info: string[]}] } (Thực đơn chi tiết với thông tin dinh dưỡng)\n`;
    prompt += `  + ProcessFlow: { title, subtitle, steps: [{title, description, icon, duration, outcome}] } (Quy trình làm việc chi tiết)\n`;
    prompt += `  + PricingMatrix: { title, subtitle, tiers: [{name, price}], features: [{name, availability: boolean[]}] }\n`;
    prompt += `  + SocialFeed: { title, subtitle, posts: [{user, handle, avatar, content, image, likes, comments, date}] }\n`;
    prompt += `  + EventSchedule: { title, subtitle, days: [{date, title, sessions: [{time, title, speaker, speakerImage, speakerRole, speakerCompany, location, description, tags: string[], type: 'Workshop'|'Keynote'|'Panel'|'Break', isLive: boolean}]}] } (Lịch trình sự kiện chuyên sâu)\n`;
    prompt += `  + InstructorBio: { title, name, role, bio, image, stats: [{label, value}], expertise: string[], education: string[], socialLinks: [{icon, url}] } (Hồ sơ giảng viên/chuyên gia chi tiết)\n`;
    prompt += `  + FundraisingProgress: { title, subtitle, raised, goal, currency, backers, daysLeft, milestones: [{amount, label}], recentBackers: [{avatar}], tags: string[] } (Tiến độ huy động vốn chi tiết)\n`;
    prompt += `  + OpeningHours: { title, hours: [{day, time}], image }\n`;
    prompt += `  + VideoTestimonials: { title, testimonials: [{name, role, quote, videoThumbnail, videoUrl}] }\n`;
    prompt += `  + ProjectMasonry: { title, projects: [{title, category, image}] }\n`;
    prompt += `  + ServiceMenu: { title, categories: [{name, items: [{name, description, price}]}] }\n`;
    prompt += `  + IntegrationGrid: { title, integrations: [{name, icon, description}] }\n`;
    prompt += `  + FinancialCalculatorPreview: { title, subtitle, description, buttonText, calculatorData: {label, value, unit, fields: [{label, value, unit}], resultLabel, resultValue, impact_description}} (Preview công cụ tính toán tài chính)\n`;
    prompt += `  + LiveWebinarPreview: { title, subtitle, webinar: {title, date, host, hostImage, thumbnail, agenda: string[], learning_outcomes: string[]}} (Preview buổi webinar trực tuyến)\n`;
    prompt += `  + JobBoard: { title, subtitle, jobs: [{title, department, location, type, salary, posted_at}] } (Bảng tin tuyển dụng chi tiết)\n`;
    prompt += `  + CountdownSection: { title, targetDate, description } (Đếm ngược sự kiện)\n`;
    prompt += `  + AudioPlayer: { title, subtitle, coverImage, tracks: [{title, duration, artist, description, date, audioUrl}] } (Trình phát âm thanh/podcast chi tiết)\n`;
    prompt += `  + ProductShowcase: { title, subtitle, items: [{name, description, image, price, features: string[], specifications: [{label, value}], reversed: boolean, badge, rating, reviewCount, videoUrl, variants: [{label, color}]}] } (Trưng bày sản phẩm cao cấp)\n`;
    prompt += `  + ArticleGrid: { title, subtitle, articles: [{title, excerpt, date, author: {name, avatar, role}, readingTime, image, category, tags: string[], views, isFeatured: boolean}] } (Lưới bài viết/tin tức chi tiết)\n`;
    prompt += `  + ComparisonTable: { title, subtitle, features: [{name, description, us: boolean|string, them: boolean|string}], ourName, competitorName } (Bảng so sánh chi tiết)\n`;
    prompt += `  + BeforeAfter: { title, beforeImage, afterImage, description }\n`;
    prompt += `  + TrustBadges: { title, badges: [{label, icon}] }\n`;
    prompt += `  + MapSection: { title, address, lat, lng, zoom }\n`;
    prompt += `  + AppDownload: { title, description, image, appStoreUrl, playStoreUrl }\n`;
    prompt += `  + NewsletterSection: { title, subtitle, buttonText }\n`;
    prompt += `  + TimelineSection: { title, subtitle, items: [{date, title, description, icon, tags: string[]}] } (Dòng thời gian chi tiết)\n`;
    prompt += `  + GallerySection: { title, images: string[] }\n`;
    prompt += `  + VideoSection: { title, videoUrl, thumbnail }\n`;
    prompt += `  + LogoTicker: { title, logos: string[] }\n`;
    prompt += `  + TeamSection: { title, subtitle, members: [{name, role, image, bio, expertise: string[], education, location, achievements: string[], socialLinks: [{platform, url}]}] } (Đội ngũ chuyên gia chi tiết)\n`;
    prompt += `  + RoadmapTimeline: { title, subtitle, items: [{quarter, title, description, status: 'completed'|'in-progress'|'planned', features: string[]}] } (Lộ trình phát triển chi tiết)\n`;
    prompt += `  + SkillCloud: { title, subtitle, skills: [{name, level, category, icon, yearsOfExperience}] } (Kỹ năng & Chuyên môn chi tiết)\n`;
    prompt += `  + Leaderboard: { title, subtitle, items: [{rank, name, score, avatar, trend: 'up'|'down'|'stable', category, achievements: string[]}] } (Bảng xếp hạng chi tiết)\n`;
    prompt += `  + TokenomicsChart: { title, subtitle, allocations: [{label, percentage, amount, color, description, vesting, icon}], total_supply } (Biểu đồ phân bổ Token chi tiết)\n`;
    prompt += `  + ItinerarySection: { title, subtitle, days: [{day, title, activities: [{time, title, description, location, transport}]}] } (Lịch trình du lịch/sự kiện chi tiết)\n`;
    prompt += `  + DataMetricCard: { title, subtitle, metrics: [{label, value, change, isPositive, icon, description, comparisonLabel, sparkline: number[]}] } (Thẻ chỉ số dữ liệu chuyên sâu)\n`;
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
    prompt += `  + TestimonialCarousel: { title, testimonials: [{name, role, content, avatar, rating, companyLogo, projectContext}] } (Trình trượt đánh giá khách hàng chi tiết)\n`;
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
    prompt += `  + EventSpeakerGrid: { title, subtitle, speakers: [{name, role, image, talkTitle, topic_description, time, location, socials: [{platform, url}]}] } (Lưới diễn giả sự kiện chi tiết)\n`;
    prompt += `  + DonationProgressTracker: { title, subtitle, goal, current, impact_description, campaign_end_date, donors: [{name, amount, time}] } (Theo dõi tiến độ quyên góp và danh sách nhà hảo tâm)\n`;
    prompt += `  + ServicePricingCalculator: { title, subtitle, currency, options: [{id, label, description, type, min, max, step, pricePerUnit, choices: [{label, price}]}], basePrice } (Công cụ tính giá dịch vụ tương tác)\n`;
    prompt += `  + CryptoWalletConnectPreview: { title, subtitle, balance, address, transactions: [{type, amount, token, status, time}] } (Bản xem trước kết nối ví Web3 và lịch sử giao dịch)\n`;
    prompt += `  + FitnessBMIForm: { title, subtitle } (Form tính chỉ số BMI và gợi ý lộ trình tập luyện)\n`;
    prompt += `  + IntegrationDirectory: { title, subtitle, integrations: [{name, category, description, longDescription, features: string[], logo, status, developerDocs, popularityScore, reviews, author}] } (Danh mục tích hợp chuyên sâu)\n`;
    prompt += `  + SkillRadarChart: { title, subtitle, skills: [{subject, A, fullMark, description, level_label}] } (Biểu đồ radar phân tích năng lực chi tiết)\n`;
    prompt += `  + VenueFloorPlan: { title, subtitle, zones: [{id, name, capacity, description, price, features, x, y, width, height}] } (Sơ đồ mặt bằng tương tác chi tiết)\n`;
    prompt += `  + VolunteerSignupForm: { title, subtitle, steps: [{title, fields: [{name, label, type, placeholder, options: string[]}]}] } (Form đăng ký tình nguyện viên nhiều bước tùy chỉnh)\n`;
    prompt += `  + TokenSaleProgress: { title, subtitle, tiers: [{name, price, active, status}], totalRaised, hardCap, tokenSymbol, impact_description } (Tiến độ bán token chi tiết với tác động dự án)\n`;
    prompt += `  + RecipeDetailView: { title, subtitle, image, time, difficulty, calories, ingredients: [{name, amount}], steps: [{title, description}], chef_tips, nutrition_facts: {protein, fat, carbs, fiber} } (Trang chi tiết công thức nấu ăn chuyên sâu)\n`;
    prompt += `  + HeroSection: { title, subtitle, cta_text, secondary_cta_text, badge, image, videoUrl, highlights: string[], socialProof: {text, avatars: string[]}, layout: 'center'|'split' }\n`;
    prompt += `  + ContactForm: { title, subtitle, buttonText, fields: [{name, label, type, placeholder, options: string[], required}], successMessage, officeInfo: {address, phone, email, workingHours}, socialLinks: [{platform, url, icon}] }\n`;
    prompt += `  + CallToAction: { title, description, buttonText, secondaryButtonText, backgroundImage, stats: [{label, value}], variant: 'simple'|'glass'|'image' }\n`;
    prompt += `  + Footer: { companyName, description, logo, linkGroups: [{title, links: [{label, url}]}], socialLinks: [{platform, url, icon}], newsletter: {title, description, placeholder, buttonText}, bottomLinks: [{label, url}] }\n`;
    prompt += `  + StatsRow: { title, subtitle, stats: [{label, value, suffix, description, icon, trend: {value, isUp}}], layout: 'grid'|'row', variant: 'minimal'|'bordered'|'card' }\n`;
    prompt += `  + StepByStep: { title, subtitle, steps: [{title, description, icon, duration, outcome, media: {type, url}, tags: string[]}], layout: 'vertical'|'horizontal'|'grid', cta: {text, url} }\n`;
    prompt += `  + FeatureTabs: { title, subtitle, tabs: [{title, description, image, videoUrl, icon, features: string[], cta: {text, url}}], layout: 'left'|'right'|'top' }\n`;
    prompt += `  + LogoTicker: { title, logos: [{name, url}], speed, direction: 'left'|'right', variant: 'ticker'|'grid', grayscale: boolean }\n`;
    prompt += `\n- Không giải thích gì thêm ngoài JSON.\n`;
    prompt += `\n🔥 HƯỚNG DẪN CHI TIẾT NỘI DUNG (CONTENT GUIDELINES):\n`;
    prompt += `- TUYỆT ĐỐI KHÔNG sử dụng dữ liệu mẫu chung chung như "Sản phẩm 1", "Tính năng A", "Nguyễn Văn A".\n`;
    prompt += `- PHẢI sử dụng dữ liệu thực tế, chuyên sâu theo đúng ngành nghề của website.\n`;
    prompt += `- Ví dụ cho IntegrationDirectory: Mô tả các tích hợp SaaS phổ biến (ví dụ: "Slack", description: "Đồng bộ thông báo tức thì", longDescription: "Kết nối quy trình làm việc của bạn với Slack để nhận thông báo thời gian thực về các sự kiện quan trọng.", features: ["Thông báo kênh", "Lệnh slash tùy chỉnh"]).\n`;
    prompt += `- Ví dụ cho SkillRadarChart: Sử dụng các kỹ năng chuyên môn cao (ví dụ: "Cloud Infrastructure", description: "Thiết kế hệ thống trên AWS/Azure", level_label: "Expert").\n`;
    prompt += `- Ví dụ cho RecipeDetailView: Viết một công thức nấu ăn hoàn chỉnh, hấp dẫn (ví dụ: "Bò sốt vang kiểu Pháp"). Thêm chef_tips: "Nên ướp thịt qua đêm với rượu vang đỏ để thịt mềm và đậm đà hơn" và các chỉ số dinh dưỡng nutrition_facts.\n`;
    prompt += `- Ví dụ cho TokenSaleProgress: Sử dụng các con số thực tế (ví dụ: $2,500,000), tên các vòng gọi vốn (Seed, Private, Public) và mô tả tác động (ví dụ: "Vốn huy động sẽ được dùng để phát triển Mainnet và mở rộng thị trường Châu Á"). Thêm tokenSymbol: "AIX".\n`;
    prompt += `- Ví dụ cho VenueFloorPlan: Đặt tên các khu vực sáng tạo (ví dụ: "The Innovation Hub", description: "Không gian mở cho làm việc nhóm và sáng tạo", price: "500.000đ/giờ").\n`;
    prompt += `- Ví dụ cho MedicalAppointmentForm: Sử dụng các chuyên khoa thực tế (ví dụ: "Nội tiết", "Tim mạch"). Thêm danh sách doctors với tên thật và kinh nghiệm cụ thể (ví dụ: "PGS.TS Nguyễn Văn A", experience: "25 năm kinh nghiệm"). Liệt kê các insurance_partners uy tín.\n`;
    prompt += `- Ví dụ cho LegalCaseStudy: Mô tả các vụ việc phức tạp (ví dụ: "Tranh chấp sở hữu trí tuệ xuyên biên giới"). Thêm client_quote: "Sự chuyên nghiệp và quyết đoán của đội ngũ luật sư đã giúp doanh nghiệp chúng tôi vượt qua giai đoạn khó khăn nhất" và danh sách legal_team.\n`;
    prompt += `- Ví dụ cho InteriorProjectDetail: Sử dụng các vật liệu cao cấp (ví dụ: "Đá Marble Carrara"). Thêm design_philosophy: "Sự giao thoa giữa nét cổ điển và tinh thần đương đại" và budget_range: "2.5 tỷ - 4 tỷ VNĐ".\n`;
    prompt += `- Ví dụ cho LogisticsLiveTracking: Sử dụng các địa danh thực tế và trạng thái vận chuyển chuyên nghiệp. Thêm carrier_info (ví dụ: name: "Giao Hàng Nhanh", hotline: "1900 636677") và service_type: "Giao hàng hỏa tốc 2h".\n`;
    prompt += `- Ví dụ cho VolunteerSignupForm: Thiết kế các bước đăng ký ý nghĩa (ví dụ: Bước 1: "Về bạn", Bước 2: "Kỹ năng đóng góp", Bước 3: "Cam kết đồng hành").\n`;
    prompt += `- Ví dụ cho FinancialCalculatorPreview: Sử dụng các công cụ thực tế như "Tính toán lãi suất kép", "Lập kế hoạch nghỉ hưu 401k", "So sánh gói vay mua nhà ưu đãi". Thêm impact_description: "Tiết kiệm 15% lãi suất".\n`;
    prompt += `- Ví dụ for LiveWebinarPreview: Đặt tên các chủ đề xu hướng như "Ứng dụng Generative AI trong quy trình doanh nghiệp", "Chiến lược đầu tư ESG năm 2024". Thêm agenda: ["Giới thiệu", "Demo trực tiếp", "Q&A"] và learning_outcomes: ["Hiểu về LLM", "Cách viết prompt hiệu quả"].\n`;
    prompt += `- Ví dụ cho ProductBundleCard: Tạo các combo sản phẩm logic như "Bộ Kit làm Podcast chuyên nghiệp" (Mic + Soundcard + Tai nghe) kèm mức giảm giá hấp dẫn.\n`;
    prompt += `- Ví dụ cho PropertyGrid: Sử dụng các địa danh thực tế (ví dụ: "Thảo Điền, Quận 2"). Thêm amenities: ["Hồ bơi vô cực", "Phòng Gym 24/7", "An ninh 3 lớp"] và agent_info với ảnh chân dung chuyên nghiệp.\n`;
    prompt += `- Ví dụ cho CourseCurriculum: Xây dựng lộ trình học tập bài bản (ví dụ: "Module 1: Tư duy thiết kế hệ thống", description: "Nền tảng về kiến trúc phần mềm hiện đại", lessons: [{title: "Giới thiệu về Microservices", duration: "15:00", isFree: true, previewUrl: "https://example.com/preview"}]).\n`;
    prompt += `- Ví dụ cho MenuGrid: Mô tả món ăn hấp dẫn kèm thông tin dinh dưỡng (ví dụ: "Salad Ức Gà Địa Trung Hải", calories: "350", dietary_info: ["Low Carb", "High Protein", "Gluten Free"]).\n`;
    prompt += `- Ví dụ cho JobBoard: Sử dụng các vị trí công việc thực tế (ví dụ: "Senior Fullstack Engineer", salary: "$3000 - $5000", posted_at: "2 ngày trước").\n`;
    prompt += `- Ví dụ cho PricingTable: Gói dịch vụ SaaS (ví dụ: "Pro Plan", price: "$29", yearlyPrice: "$290", savings: "$58", targetAudience: "Đội ngũ chuyên nghiệp", features: ["Unlimited Projects", "Priority Support"], unavailableFeatures: ["Custom Branding"]).\n`;
    prompt += `- Ví dụ cho BentoGrid: Giới thiệu tính năng sản phẩm (ví dụ: "AI Powered", size: "large", dark: true, stats: {value: "99.9%", label: "Accuracy"}, badge: "New").\n`;
    prompt += `- Ví dụ cho DataMetricCard: Báo cáo hiệu suất kinh doanh (ví dụ: "Doanh thu", value: "$1.2M", change: "15%", isPositive: true, sparkline: [30, 45, 35, 60, 55, 80, 75], comparisonLabel: "so với quý trước").\n`;
    prompt += `- Ví dụ cho InstructorBio: Hồ sơ chuyên gia (ví dụ: "Dr. Sarah Chen", expertise: ["Machine Learning", "Data Strategy"], education: ["PhD in AI, Stanford"], socialLinks: [{icon: "LinkedIn", url: "#"}]).\n`;
    prompt += `- Ví dụ cho FundraisingProgress: Chiến dịch gọi vốn cộng đồng (ví dụ: "Green Tech Initiative", milestones: [{amount: 50000, label: "Prototype Build"}, {amount: 100000, label: "Mass Production"}]).\n`;
    prompt += `- Ví dụ cho ArticleGrid: Blog công nghệ (ví dụ: "Tương lai của AI", isFeatured: true, views: "12.5K", author: {name: "Alex", role: "AI Researcher"}).\n`;
    prompt += `- Ví dụ cho EventSchedule: Hội thảo quốc tế (ví dụ: "Keynote: Innovation", type: "Keynote", isLive: true, speakerRole: "CEO", speakerCompany: "TechCorp").\n`;
    prompt += `- Ví dụ cho TeamSection: Ban lãnh đạo công ty (ví dụ: "John Doe", achievements: ["15+ Years Exp", "Ex-Google"], location: "San Francisco").\n`;
    prompt += `- Ví dụ cho TestimonialGrid: Đánh giá từ đối tác (ví dụ: "Dịch vụ tuyệt vời", rating: 5, companyLogo: "https://logo.com/1").\n`;
    prompt += `- Ví dụ cho ProductShowcase: Ra mắt iPhone mới (ví dụ: "iPhone 15 Pro", badge: "Mới", rating: 4.9, variants: [{label: "Titanium", color: "#8e8e93"}]).\n`;
    prompt += `- Ví dụ cho ItinerarySection: Lịch trình tour du lịch cao cấp (ví dụ: "Ngày 1", title: "Khám phá Vịnh Hạ Long", activities: [{time: "08:00", title: "Đón khách tại khách sạn", location: "Hà Nội", transport: "Xe Limousine"}]).\n`;
    prompt += `- Ví dụ cho RoadmapTimeline: Mô tả các giai đoạn phát triển sản phẩm (ví dụ: "Q4 2026", title: "Ra mắt phiên bản Mobile", features: ["iOS App", "Android App"], impact: "Mở rộng tệp khách hàng lên 200%", team: [{name: "Alex", avatar: "..."}], milestones: [{label: "Beta", date: "12/12", completed: true}]).\n`;
    prompt += `- Ví dụ cho SkillCloud: Hiển thị các kỹ năng chuyên môn (ví dụ: "React Native", level: 90, yearsOfExperience: 5, icon: "📱", iconColor: "#61DAFB", description: "Xây dựng ứng dụng đa nền tảng", projects: ["App Giao Hàng", "Ví Điện Tử"]).\n`;
    prompt += `- Ví dụ cho Leaderboard: Vinh danh những người dẫn đầu (ví dụ: "Nguyễn Văn A", score: "15,400", category: "Top Contributor", achievements: ["MVP 2023"], pointsHistory: [10, 20, 30], lastActive: "1h trước", badges: [{icon: "🔥", label: "Hot"}]).\n`;
    prompt += `- Ví dụ cho ComparisonTable: So sánh các gói dịch vụ hoặc so sánh với đối thủ (ví dụ: "Bảo mật 2 lớp", description: "Sử dụng 2FA và Hardware Key", us: true, them: false).\n`;
    prompt += `- Ví dụ cho TimelineSection: Mô tả lịch sử hình thành hoặc lộ trình dự án (ví dụ: "Năm 2020", title: "Mở rộng thị trường Đông Nam Á", tags: ["Expansion"], media: {type: "image", url: "..."}, location: "Singapore", participants: [{name: "John", avatar: "..."}]).\n`;
    prompt += `- Ví dụ cho HeroSection: "Giải pháp quản lý tài chính thông minh cho doanh nghiệp", layout: "split", highlights: ["Không cần thẻ tín dụng", "Dùng thử 14 ngày"], socialProof: {text: "Được tin dùng bởi 5000+ doanh nghiệp", avatars: ["..."]}.\n`;
    prompt += `- Ví dụ cho ContactForm: "Liên hệ tư vấn giải pháp", fields: [{name: "company", label: "Tên công ty", type: "text"}, {name: "service", label: "Dịch vụ quan tâm", type: "select", options: ["Tư vấn thuế", "Kiểm toán"]}], officeInfo: {address: "123 Lê Lợi, Quận 1, TP.HCM", phone: "028 1234 5678"}.\n`;
    prompt += `- Ví dụ cho CallToAction: "Sẵn sàng nâng tầm doanh nghiệp?", variant: "image", backgroundImage: "...", stats: [{label: "Khách hàng hài lòng", value: "99%"}, {label: "Dự án hoàn thành", value: "1,200+"}].\n`;
    prompt += `- Ví dụ cho Footer: "TechCorp Solutions", linkGroups: [{title: "Giải pháp", links: [{label: "Cloud ERP", url: "#"}]}], newsletter: {title: "Nhận bản tin công nghệ", description: "Cập nhật xu hướng AI mới nhất mỗi tuần"}.\n`;
    prompt += `- Ví dụ cho StatsRow: "Những con số ấn tượng", variant: "card", stats: [{label: "Người dùng hoạt động", value: "1M", suffix: "+", icon: "👥", trend: {value: "12%", isUp: true}}].\n`;
    prompt += `- Ví dụ cho StepByStep: "Quy trình triển khai 5 bước", layout: "vertical", steps: [{title: "Khảo sát & Phân tích", media: {type: "image", url: "..."}, tags: ["Khởi động"], outcome: "Tài liệu giải pháp chi tiết"}].\n`;
    prompt += `- Ví dụ cho FeatureTabs: "Tính năng đột phá", layout: "left", tabs: [{title: "Tự động hóa AI", features: ["Xử lý ngôn ngữ tự nhiên", "Phân tích dự báo"], cta: {text: "Xem demo", url: "#"}}].\n`;
    prompt += `- Ví dụ cho LogoTicker: "Đối tác chiến lược", speed: 30, grayscale: true, logos: [{name: "Google", url: "..."}].\n`;
    prompt += `- Ví dụ cho ArticleGrid: Sử dụng các chủ đề chuyên sâu (ví dụ: "Tối ưu hóa SEO cho Next.js 14", readingTime: "8 phút", tags: ["SEO", "Next.js", "Web Performance"]).\n`;
    prompt += `- Ví dụ cho EventSchedule: Xây dựng lịch trình hội thảo chuyên nghiệp (ví dụ: "Keynote: Tương lai của AI", location: "Hội trường A", tags: ["AI", "Future"]).\n`;
    prompt += `- Ví dụ cho TeamSection: Giới thiệu đội ngũ với đầy đủ bằng cấp và kỹ năng (ví dụ: "TS. Nguyễn Văn A", expertise: ["Machine Learning", "Big Data"], education: "PhD tại Stanford University").\n`;
    prompt += `- Ví dụ cho TestimonialCarousel: Thêm rating (ví dụ: 5) và projectContext (ví dụ: "Thiết kế hệ thống ERP cho VinGroup") để tăng độ tin cậy.\n`;
    prompt += `- Ví dụ cho CountdownSection: Sử dụng cho các sự kiện quan trọng (ví dụ: "Khai trương chi nhánh mới", targetDate: "2024-12-31T23:59:59").\n`;
    prompt += `- Ví dụ cho AudioPlayer: Sử dụng cho các album nhạc hoặc podcast (ví dụ: "Tập 42: Tương lai của Web3", artist: "Tech Talk Vietnam", description: "Thảo luận về sự chuyển dịch từ Web2 sang Web3").\n`;
    prompt += `- Ví dụ cho ProductShowcase: Trưng bày các sản phẩm công nghệ cao (ví dụ: "MacBook Pro M3 Max", price: "Từ 79.990.000đ", specifications: [{label: "CPU", value: "16-core"}, {label: "GPU", value: "40-core"}]).\n`;
    prompt += `- Ví dụ cho ChangelogFeed: Mô tả các bản cập nhật cụ thể như "Version 2.4.0: Tích hợp thanh toán Apple Pay", "Fix: Tối ưu hóa tốc độ tải trang trên mobile".\n`;
    prompt += `- Ví dụ cho BentoGrid: Sử dụng các tính năng đột phá như "Chip Apple M3 Pro thế hệ mới", "Màn hình Liquid Retina XDR 120Hz". Thêm tag như "Mới", "Độc quyền" và cta_text như "Tìm hiểu thêm".\n`;
    prompt += `- Ví dụ cho ProcessFlow: Mô tả quy trình làm việc chuyên nghiệp (ví dụ: "Bước 1: Tiếp nhận yêu cầu", duration: "1 ngày", outcome: "Tài liệu BRD sơ bộ").\n`;
    prompt += `- Ví dụ cho PricingMatrix: Liệt kê các tính năng SaaS chuyên sâu như "API Access", "Custom Domain", "SSO".\n`;
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
    prompt += `- Ví dụ cho PartnerGrid: Sử dụng tên các đối tác/khách hàng uy tín (ví dụ: "Đối tác chiến lược: Microsoft, Google Cloud, AWS").\n`;
    prompt += `- Ví dụ cho FAQAccordion: Xây dựng bộ câu hỏi thường gặp theo danh mục (ví dụ: "Thanh toán & Hoàn tiền", question: "Làm sao để hoàn tiền?", author: {name: "Hỗ trợ viên", role: "Support"}, lastUpdated: "09/04/2026", relatedLinks: [{label: "Chính sách hoàn tiền", url: "#"}]).\n`;
    prompt += `- Ví dụ cho FlashSaleBanner: Sử dụng ngôn ngữ thúc đẩy hành động (ví dụ: "Ưu đãi duy nhất trong 24h", "Giảm ngay 50% - Chỉ còn 10 suất").\n`;
    prompt += `- Ví dụ cho VirtualTourGallery: Đặt tên các góc nhìn 360 độ (ví dụ: "Toàn cảnh phòng khách", "Chi tiết không gian bếp hiện đại").\n`;
    prompt += `- Ví dụ cho CareerPathTimeline: Mô tả các nấc thang sự nghiệp (ví dụ: "Junior Developer -> Senior Developer -> Tech Lead").\n`;
    prompt += `- Ví dụ cho RecipeCardGrid: Tóm tắt món ăn với các thông số (ví dụ: "Phở Bò Truyền Thống - 450 Calo - Độ khó: Trung bình").\n`;
    prompt += `- Ví dụ cho LegalServiceCard: Mô tả các lĩnh vực chuyên sâu (ví dụ: "Luật sở hữu trí tuệ", "Tư vấn M&A doanh nghiệp").\n`;
    prompt += `- Ví dụ cho ChefSpecialCarousel: Giới thiệu các món "ký danh" của đầu bếp (ví dụ: "Bò Wagyu dát vàng - Tuyệt phẩm ẩm thực thượng lưu").\n`;
    prompt += `- Ví dụ cho JobApplicationForm: Đặt các câu hỏi sàng lọc chuyên nghiệp (ví dụ: "Link Portfolio/GitHub", "Mức lương mong muốn").\n`;
    prompt += `- Ví dụ cho EventSpeakerGrid: Viết tiểu sử diễn giả ấn tượng kèm chủ đề bài nói (ví dụ: "CEO TechCorp - Tương lai của Web3").\n`;
    prompt += `- Ví dụ cho DonationProgressTracker: Hiển thị dòng tiền quyên góp thực tế (ví dụ: "Nguyễn Văn A vừa ủng hộ 500,000 VNĐ").\n`;
    prompt += `- Ví dụ cho ServicePricingCalculator: Thiết kế các tùy chọn tính giá linh hoạt (ví dụ: "Diện tích thi công (m2)", description: "Diện tích sàn cần lát gạch"). Thêm currency: "VNĐ" hoặc "$" và các lựa chọn gói vật liệu.\n`;
    prompt += `\n💎 CHIẾN LƯỢC NỘI DUNG SIÊU CHI TIẾT (ULTIMATE CONTENT STRATEGY):\n`;
    prompt += `- Ví dụ cho ChefSpecialCarousel: Sử dụng mô tả giàu tính cảm giác (ví dụ: "Thịt bò Wagyu A5 mềm tan như bơ, hòa quyện cùng sốt nấm Truffle đen thơm nồng"). ChefNote nên là lời khuyên về cách thưởng thức (ví dụ: "Nên dùng kèm rượu vang đỏ Bordeaux để trọn vẹn hương vị").\n`;
    prompt += `- Ví dụ cho JobApplicationForm: Thiết kế các bước chuyên nghiệp (ví dụ: Bước 1: "Hồ sơ cá nhân", Bước 2: "Kỹ năng chuyên môn", Bước 3: "Dự án tiêu biểu").\n`;
    prompt += `- Ví dụ cho PackingListChecklist: Tạo danh sách theo chủ đề (ví dụ: "Đồ dùng leo núi", "Thiết bị quay phim", "Giấy tờ thông hành").\n`;
    prompt += `- Ví dụ cho DonationProgressTracker: Mô tả tác động cụ thể (ví dụ: "100.000đ giúp cung cấp 10 bữa ăn cho trẻ em vùng cao"). Thêm campaign_end_date như "Còn 15 ngày".\n`;
    prompt += `- Ví dụ cho EventSpeakerGrid: Viết tiểu sử ấn tượng kèm chủ đề bài nói chi tiết (ví dụ: "CEO TechCorp - Tương lai của Web3", topic_description: "Khám phá cách Blockchain thay đổi nền kinh tế số"). Thêm time: "14:00 - 15:30" và location: "Hội trường A".\n`;
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
