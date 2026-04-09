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
                         
      const requiredProps = template === 'saas' ? 'hero, logos, products, metrics, feature_tabs, integrations, tech_stack, feature_comparison, roadmap, live_chat, video_testimonials, faq_search, articles, cta, footer, sticky_cta' : 
                            template === 'portfolio' ? 'hero, logos, skill_cloud, tech_stack, projects, timeline, certificates, social_feed, testimonial_carousel, career_path, contact, footer' : 
                            template === 'app_promo' ? 'hero, video, products, metrics, feature_tabs, integrations, tech_stack, app_download, faq_search, cta, footer' :
                            template === 'ecommerce' ? 'flash_sale, hero, logos, comparison, products, bento, trust_badges, testimonial_carousel, app_download, newsletter, footer, sticky_cta' :
                            template === 'event' ? 'hero, countdown, video, itinerary, schedule, team, pricing, map, faq_search, footer' :
                            template === 'creator' ? 'profile, video, stats_dashboard, links, metrics, social_feed, articles, lead_magnet, newsletter, footer' :
                            template === 'course' ? 'hero, video_playlist, metrics, instructor, learning_path, curriculum, certificates, features, pricing, faq_search, footer' :
                            template === 'restaurant' ? 'hero, gallery, menu_tabs, menu_grid, recipes, highlights, testimonial_carousel, opening_hours, map, booking, footer' :
                            template === 'real_estate' ? 'hero, search, virtual_tour, properties, metrics, features, testimonial_carousel, map, booking, footer' :
                            template === 'agency' ? 'hero, logos, skill_cloud, tech_stack, partners, bento, process, team, career_path, jobs, video_testimonials, cta, footer' :
                            template === 'travel' ? 'hero, gallery, itinerary, features, testimonial_carousel, map, booking, footer' :
                            template === 'clinic' ? 'hero, metrics, services, doctors, trust_badges, opening_hours, faq_search, map, booking, footer' :
                            template === 'fitness' ? 'hero, metrics, workouts, classes, schedule, memberships, app_download, booking, footer' :
                            template === 'charity' ? 'hero, fundraising, impact_map, donation_impact, metrics, programs, stories, donate, footer' :
                            template === 'local_service' ? 'hero, services, process, testimonial_carousel, opening_hours, map, faq_search, booking, footer' :
                            template === 'lawyer' ? 'hero, metrics, legal_services, practices, process, trust_badges, faq_search, map, booking, footer' :
                            template === 'interior_design' ? 'hero, projects, before_after, portfolio, process, testimonial_carousel, booking, footer' :
                            template === 'photography' ? 'hero, projects, packages, social_feed, testimonial_carousel, booking, footer' :
                            template === 'podcast' ? 'hero, audio, video_playlist, instructor, social_feed, episodes, newsletter, footer' :
                            template === 'wedding' ? 'hero, countdown, gallery, schedule, social_feed, booking, footer' :
                            template === 'book_launch' ? 'hero, countdown, video, instructor, metrics, chapters, social_feed, testimonial_carousel, pricing, footer' :
                            template === 'music_release' ? 'hero, audio, video, social_feed, gallery, listen_now, footer' :
                            template === 'gaming_guild' ? 'hero, video, leaderboard, social_feed, roster, highlights, join_us, footer' :
                            template === 'car_rental' ? 'hero, car_features, products, process, faq_search, booking, footer' :
                            template === 'pet_care' ? 'hero, pet_profiles, menu_tabs, menu_grid, services, testimonial_carousel, booking, footer' :
                            template === 'crypto_project' ? 'hero, stock_ticker, countdown, tokenomics, metrics, process, roadmap, team, community, footer' :
                            template === 'spa' ? 'hero, menu_tabs, menu_grid, before_after, testimonial_carousel, opening_hours, booking, footer' :
                            template === 'recruitment' ? 'hero, metrics, benefits, process, jobs, apply, footer' :
                            template === 'crowdfunding' ? 'hero, fundraising, metrics, story, process, rewards, back_us, footer' :
                            template === 'coaching' ? 'hero, instructor, metrics, process, programs, testimonial_carousel, booking, footer' :
                            template === 'coworking' ? 'hero, amenities, gallery, plans, process, booking, footer' :
                            template === 'auto_repair' ? 'hero, services, before_after, process, testimonial_carousel, map, booking, footer' :
                            template === 'education' ? 'hero, metrics, programs, learning_path, curriculum, certificates, testimonial_carousel, map, booking, footer' :
                            template === 'cleaning_service' ? 'hero, services, before_after, process, pricing, booking, footer' :
                            template === 'architecture' ? 'hero, projects, metrics, process, booking, footer' :
                            template === 'financial' ? 'hero, stock_ticker, calculator_preview, metrics, process, trust_badges, faq_search, booking, footer' :
                            template === 'logistics' ? 'hero, impact_map, metrics, process, testimonial_carousel, booking, footer' :
                            'hero, menu_tabs, menu_grid, features, testimonial_carousel, order, footer';
                            
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
    prompt += `  + FinancialCalculatorPreview: { title, subtitle, description, buttonText } (Bản xem trước công cụ tính toán tài chính)\n`;
    prompt += `  + HeroSection: { title, subtitle, cta_text }\n`;
    prompt += `  + BentoGrid: { title, subtitle, items: [{title, description, icon, size: 'small'|'medium'|'large'}] } (Dùng để show tính năng nổi bật kiểu Apple)\n`;
    prompt += `  + StatsRow: { stats: [{label, value, suffix}] } (Dùng để show con số ấn tượng)\n`;
    prompt += `  + StepByStep: { title, subtitle, steps: [{title, description, icon}] } (Dùng để show quy trình)\n`;
    prompt += `  + FeatureGrid: { title, features: [{title, description, icon}] }\n`;
    prompt += `  + PricingTable: { title, plans: [{name, price, features: string[], isPopular: boolean}] }\n`;
    prompt += `  + TestimonialGrid: { title, testimonials: [{name, role, content}] }\n`;
    prompt += `  + FAQAccordion: { title, subtitle, faqs: [{question, answer}] }\n`;
    prompt += `  + ContactForm: { title, subtitle, buttonText }\n`;
    prompt += `  + CallToAction: { title, description, buttonText }\n`;
    prompt += `  + Footer: { companyName, description }\n`;
    prompt += `\n- Không giải thích gì thêm ngoài JSON.\n`;
    prompt += `- Đảm bảo các trường dữ liệu phong phú, thực chiến.`;

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
