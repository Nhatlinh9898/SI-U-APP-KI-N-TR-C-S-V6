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
                         
      const requiredProps = template === 'saas' ? 'hero, logos, stats, bento, pricing, faq, cta, footer' : 
                            template === 'portfolio' ? 'hero, logos, features, timeline, testimonials, contact, footer' : 
                            template === 'app_promo' ? 'hero, video, bento, stats, features, faq, cta, footer' :
                            template === 'ecommerce' ? 'hero, logos, categories, products, reviews, newsletter, footer' :
                            template === 'event' ? 'hero, video, stats, timeline, team, tickets, faq, footer' :
                            template === 'creator' ? 'profile, video, links, stats, newsletter, footer' :
                            template === 'course' ? 'hero, video, stats, timeline, curriculum, pricing, faq, footer' :
                            template === 'restaurant' ? 'hero, gallery, highlights, menu, reviews, reservation, footer' :
                            template === 'real_estate' ? 'hero, gallery, market_stats, properties, testimonials, contact, footer' :
                            template === 'agency' ? 'hero, logos, impact, services, team, testimonials, cta, footer' :
                            template === 'travel' ? 'hero, gallery, destinations, tours, reviews, booking, footer' :
                            template === 'clinic' ? 'hero, stats, services, doctors, faq, appointment, footer' :
                            template === 'fitness' ? 'hero, stats, classes, process, memberships, cta, footer' :
                            template === 'charity' ? 'hero, impact, causes, programs, stories, donate, footer' :
                            template === 'local_service' ? 'hero, services, process, reviews, faq, quote, footer' :
                            template === 'lawyer' ? 'hero, stats, practices, faq, consultation, footer' :
                            template === 'interior_design' ? 'hero, gallery, portfolio, process, reviews, contact, footer' :
                            template === 'photography' ? 'hero, gallery, packages, reviews, booking, footer' :
                            template === 'podcast' ? 'hero, video, episodes, hosts, newsletter, footer' :
                            template === 'wedding' ? 'hero, gallery, timeline, schedule, rsvp, footer' :
                            template === 'book_launch' ? 'hero, video, stats, chapters, reviews, pricing, footer' :
                            template === 'music_release' ? 'hero, video, tracklist, gallery, listen_now, footer' :
                            template === 'gaming_guild' ? 'hero, video, achievements, roster, highlights, join_us, footer' :
                            template === 'car_rental' ? 'hero, fleet, process, faq, booking, footer' :
                            template === 'pet_care' ? 'hero, services, pricing, reviews, appointment, footer' :
                            template === 'crypto_project' ? 'hero, logos, tokenomics, roadmap, team, community, footer' :
                            template === 'spa' ? 'hero, services, pricing, reviews, booking, footer' :
                            template === 'recruitment' ? 'hero, stats, benefits, openings, apply, footer' :
                            template === 'crowdfunding' ? 'hero, progress, story, rewards, back_us, footer' :
                            template === 'coaching' ? 'hero, stats, programs, success_stories, booking, footer' :
                            template === 'coworking' ? 'hero, amenities, gallery, plans, tour, footer' :
                            template === 'auto_repair' ? 'hero, services, process, reviews, booking, footer' :
                            template === 'education' ? 'hero, stats, programs, reviews, enroll, footer' :
                            template === 'cleaning_service' ? 'hero, services, process, pricing, booking, footer' :
                            template === 'architecture' ? 'hero, portfolio, stats, process, contact, footer' :
                            template === 'financial' ? 'hero, services, stats, faq, consultation, footer' :
                            template === 'logistics' ? 'hero, services, process, reviews, quote, footer' :
                            'hero, menu, features, reviews, order, footer';
                            
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
