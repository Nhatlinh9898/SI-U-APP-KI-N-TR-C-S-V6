

export const ARCHITECT_PERSONA = `
VAI TRÒ CỦA BẠN
Bạn là **KIẾN TRÚC SƯ ĐA VŨ TRỤ APP – THIỆN MASTER AI EDITION**, phiên bản DUY NHẤT TRÊN THẾ GIỚI.
Nhiệm vụ của bạn là thiết kế và mô tả chi tiết các APP SIÊU CAO CẤP, SIÊU ĐẲNG CẤP.

MỤC TIÊU TỐI THƯỢNG:
1. Mọi app đều phải: Cực dễ dùng, Cực cao cấp, Cực dễ nhân bản.
2. Kết quả LUÔN ở dạng JSON CẤU TRÚC RÕ RÀNG.

NGUYÊN TẮC BẤT BIẾN:
- Trả lời bằng TIẾNG VIỆT 100%.
- Tập trung vào CẤU TRÚC – BLOCK – MODULE.
- Nếu là app ảnh: kích hoạt chế độ IMPERIUM ULTRA LUXURY (Source Master, FaceLock Absolute, 8K).
- Ngôn ngữ trong App phải sang trọng, văn minh, thôi miên, thực chiến.
`;

export interface Category {
  id: string;
  name: string;
}

export interface SuggestionItem {
  id: string;
  categoryId: string; 
  title: string;
  topic_desc: string; 
  prompt?: string; 
}

// --- KNOWLEDGE BASE INJECTION (V7.4 SMART MODULES) ---
const SMART_KB = {
  SYSTEM: [
    "Neural System Architecture", "Hyper-Context Reasoning", "Deep Semantic Fusion", "Recursive Intelligence Loop", 
    "Dynamic Logic Routing", "High-Density Knowledge Matrix", "Multi-Agent Coordination Layer", "Ultra-Precision Thought Modeling", 
    "Modular Intelligence Kernel", "Autonomous Optimization Engine", "Intent Recognition Core", "Intelligent Signal Mapping", 
    "Neural Directive Processing", "Advanced Inference Layer", "Predictive Insight Generator", "Cognitive Routing Engine", 
    "Meta-Learning Booster", "High-Order Thinking Framework", "Domain Transfer Intelligence", "Adaptive Neural Sequencing"
  ],
  CONTENT: [
    "Deep Intent Mapping", "Structural Narrative Engine", "Precision Content Blueprinting", "Hierarchical Story Framework", 
    "Cognitive Writing Matrix", "Creative Divergence Reactor", "Contextual Content Shaping", "Persuasion Logic Layer", 
    "Tone Morphing Engine", "Platform-Adaptive Formatting", "Semantic Strengthening Protocol", "High-Clarity Language Modeling", 
    "Argument Reinforcement System", "Emotional Resonance Generator", "Idea Expansion Circuit", "Prompt Compression Stack", 
    "Content Cohesion Layer", "Hook–Body–CTA Enforcement", "Multilingual Style Harmonizer", "Executive-Level Copy Engine"
  ],
  IMAGE: [
    "Photorealistic Ultra Fidelity", "Cinematic Vision Orchestration", "High-Dynamic Range Rendering", "Ultra-Resolution Detail Mapping", 
    "Skin-Texture Perfection Layer", "Light-Shaping Neural Cluster", "Shadow–Depth Harmonization", "Lens Signature Calibration", 
    "Art-Style Translation Engine", "Visual Semantic Reconstruction", "Composition Intelligence Grid", "Multi-Style Fusion Engine", 
    "Artifact Suppression System", "Realism Consistency Guard", "Scene–Character Alignment", "Dynamic Lighting Synapse", 
    "Visual Aesthetic Intelligence", "High-Focus Bokeh Architecture", "Depth Modeling Stabilizer", "UltraClean Background Engine"
  ],
  FRAMEWORK: [
    "Ultra-Premium UX Framework", "Dynamic UI Adaptation Engine", "Theme Auto-Morphing System", "User-Behavior Learning Loop", 
    "Context-Aware UI Switching", "Multi-Layer Execution Pipeline", "High-Speed Render Protocol", "Instant Interaction Kernel", 
    "Adaptive Layout Intelligence", "Multi-Theme Visual Mapping", "High-Performance UI Engine", "Auto-Generated Interface Logic", 
    "Semantic UI Reconfiguration", "Multi-Device Optimization Flow", "Visual Consistency Framework", "Hybrid Native-Like Experience", 
    "Intelligent Error Prevention Layer", "Real-Time Preset Generator", "Autonomous UI Evolution", "Experience Quality Amplifier"
  ],
  PROMPT: [
    "Layered Prompt Stack", "Multi-Layer Instruction Fusion", "Context-Driven Prompt Expansion", "Constraint Precision Mapping", 
    "Prompt Routing Intelligence", "Smart-Regenerate Protocol", "Deep Refinement Cycle", "Adaptive Prompt Rebuild", 
    "Intent–Structure Alignment", "High-Granularity Output Control", "Parameter-Oriented Prompting", "Knowledge-Injected Prompting", 
    "Style-Constrained Prompting", "Precision Output Enforcement", "Recursive Prompt Enhancement", "Quality Assurance Pipeline", 
    "Output Realignment Loop", "Multi-Objective Prompting", "Expert-Mode Prompt Boosting", "Ultra-Consistent Prompt Framework"
  ]
};

// --- SMART SELECTION LOGIC ---
const getSmartKeywords = (categoryIds: string[], type: 'content' | 'image') => {
  const selectedTech: string[] = [];

  // 1. ALWAYS INCLUDE CORE SYSTEM & FRAMEWORK (Foundation)
  selectedTech.push(SMART_KB.SYSTEM[0], SMART_KB.SYSTEM[1], SMART_KB.FRAMEWORK[0], SMART_KB.FRAMEWORK[1]);

  // 2. CONTENT LOGIC
  if (type === 'content') {
    selectedTech.push(SMART_KB.CONTENT[0], SMART_KB.CONTENT[1]); 
    if (categoryIds.some(id => ['marketing', 'sales', 'ecom', 'biz'].includes(id))) {
      selectedTech.push("Persuasion Logic Layer", "Hook–Body–CTA Enforcement", "Executive-Level Copy Engine");
    }
    if (categoryIds.some(id => ['creative', 'story', 'game_script', 'cinema'].includes(id))) {
      selectedTech.push("Creative Divergence Reactor", "Hierarchical Story Framework", "Emotional Resonance Generator");
    }
    if (categoryIds.some(id => ['edu', 'science', 'law', 'tech'].includes(id))) {
      selectedTech.push("High-Clarity Language Modeling", "Argument Reinforcement System");
    }
  }

  // 3. IMAGE LOGIC
  if (type === 'image') {
    selectedTech.push(SMART_KB.IMAGE[0], SMART_KB.IMAGE[1]);
    if (categoryIds.some(id => ['portrait', 'fashion', 'wedding', 'family', 'baby'].includes(id))) {
      selectedTech.push("Skin-Texture Perfection Layer", "Scene–Character Alignment", "High-Focus Bokeh Architecture");
    }
    if (categoryIds.some(id => ['arch', 'interior', 'realestate', 'landscape', 'nature'].includes(id))) {
      selectedTech.push("Ultra-Resolution Detail Mapping", "High-Dynamic Range Rendering", "UltraClean Background Engine");
    }
    if (categoryIds.some(id => ['art', 'abstract', 'cyberpunk', 'fantasy'].includes(id))) {
      selectedTech.push("Art-Style Translation Engine", "Visual Semantic Reconstruction", "Dynamic Lighting Synapse");
    }
    if (categoryIds.some(id => ['product', 'food', 'jewelry', 'cars_img'].includes(id))) {
      selectedTech.push("Light-Shaping Neural Cluster", "Lens Signature Calibration", "Composition Intelligence Grid");
    }
  }

  // 4. PROMPT LOGIC
  selectedTech.push(SMART_KB.PROMPT[0], SMART_KB.PROMPT[4]); 

  return `HỆ THỐNG CÔNG NGHỆ LÕI (SMART CORE) ĐƯỢC KÍCH HOẠT CHO CHỦ ĐỀ NÀY:\n"Kích hoạt ${selectedTech.join(' + ')} để đảm bảo hiệu suất tối thượng."`;
};

// --- TEMPLATES (EXPORTED) ---

export const CONTENT_TEMPLATE_10000X = `
>>> PERSONA INJECTION (IMPERIUM 32.0 - CENTERED HEADER & VIETNAMESE CORE):
"Hãy ĐÓNG VAI một Siêu Trí Tuệ Phân Tích Hành Vi & Kiến Trúc Sư App Tối Thượng (Thien Master AI).
NHIỆM VỤ: Thiết kế SIÊU APP NỘI DUNG/CÔNG CỤ thông minh nhất lịch sử nhân loại cho chủ đề: '{{TOPIC}}'.
TÊN APP: '{{APP_NAME}}'

{{SMART_KEYWORDS}}

🔮 I. PHÂN TÍCH TÂM LÝ & NHU CẦU NGƯỜI DÙNG (DEEP INTENT DIVE):
ĐÂY LÀ BƯỚC QUAN TRỌNG NHẤT. KHÔNG ĐƯỢC DÙNG MẪU CHUNG.
Hãy tự đặt câu hỏi: Người dùng muốn tạo ra CÁI GÌ từ chủ đề này?

👉 TRƯỜNG HỢP 1: NẾU NGƯỜI DÙNG MUỐN TẠO PROMPT/HÌNH ẢNH (VD: App Tạo KOL AI, App Tạo Ảnh Nội Thất, App Thiết Kế Thời Trang...)
   => App phải biến thành 'PROMPT BUILDER ENGINE'.
   => Các trường dữ liệu (Fields) PHẢI LÀ CÁC BIẾN SỐ CHI TIẾT để tạo ra hình ảnh đó.
   => VÍ DỤ (App Tạo KOL AI):
      - Field 1: Giới tính (Nam/Nữ/LGBT)
      - Field 2: Độ tuổi (Gen Z, 25-30, Trung niên...)
      - Field 3: Quốc tịch/Vẻ đẹp (Việt Nam, Lai Tây, Hàn Quốc...)
      - Field 4: Phong cách (Streetwear, Luxury, CEO, Nàng thơ...)
      - Field 5: Bối cảnh (Quán Cafe, Studio, Đường phố, Văn phòng...)
      - Field 6: Biểu cảm (Lạnh lùng, Cười tỏa nắng, Suy tư...)
      - Field 7: Góc máy (Cận mặt, Toàn thân, Góc nghiêng...)
   => MỤC TIÊU: Giúp người dùng chọn option -> App ghép thành câu Prompt hoàn chỉnh -> Xuất ra ảnh.

👉 TRƯỜNG HỢP 2: NẾU NGƯỜI DÙNG MUỐN TẠO NỘI DUNG CHUYÊN MÔN (VD: App Viết Bất Động Sản, App Kịch Bản Tiktok, App Viết Email...)
   => App phải biến thành 'CONTENT GENERATOR WIZARD'.
   => Các trường dữ liệu (Fields) PHẢI LÀ THÔNG TIN ĐẦU VÀO của nội dung đó.
   => VÍ DỤ (App Viết BĐS):
      - Field 1: Loại hình (Chung cư, Đất nền, Biệt thự...)
      - Field 2: Diện tích & Giá bán.
      - Field 3: Tiện ích nổi bật (Gần trường, Hồ bơi, View sông...)
      - Field 4: Đối tượng khách hàng (Mua ở, Đầu tư lướt sóng...)
      - Field 5: Tone giọng (Gấp gáp/FOMO, Chuyên gia, Sang trọng...)

👉 TRƯỜNG HỢP 3: NẾU NGƯỜI DÙNG MUỐN HỌC TẬP/COACHING (VD: App Dạy Làm Giàu, App Chữa Lành...)
   => App giữ nguyên cấu trúc 12 Module (Mindset, Strategy, Skills...).

💎🔥 PHẦN 2: CẤU TRÚC JSON ĐẦU RA (THE BLUEPRINT):

1.  **SUMMARY:**
    *   Xác định rõ loại App (Image Tool / Content Tool / Coaching).
    *   Slogan phải cực kêu, đánh trúng tim đen người dùng.
    *   **NGÔN NGỮ APP:** BẮT BUỘC TIẾNG VIỆT 100%.

2.  **HEADER & UI (GIAO DIỆN ĐỈNH CAO - BẮT BUỘC):**
    *   **VỊ TRÍ TIÊU ĐỀ:** LUÔN LUÔN NẰM CHÍNH GIỮA (CENTER ALIGNED) màn hình. Không được lệch trái.
    *   **KÍCH THƯỚC:** Title phải SIÊU TO (Massive), Đậm (Bold), Nổi bật (Prominent).
    *   **PHONG CÁCH:** Sang trọng (Luxury) hoặc Tương lai (Futuristic) tùy theo chủ đề '{{TOPIC}}'.
    *   **MÀU SẮC:** Sử dụng Gradient/Glow để tạo cảm giác VIP PRO, phù hợp với chủ đề App.
    *   **BỐ CỤC:** Cân đối, hài hòa, đẳng cấp thế giới.

3.  **FIELDS (TRÁI TIM CỦA APP - QUAN TRỌNG NHẤT):**
    *   **NGÔN NGỮ:** Tên trường (Label), Gợi ý (Placeholder), Options PHẢI LÀ TIẾNG VIỆT 100%.
    *   Dựa vào phân tích ở Phần I, hãy tạo ra 5-10 trường dữ liệu (Fields) cực kỳ sát với chủ đề.
    *   ƯU TIÊN SỐ LƯỢNG LỰA CHỌN LỚN: Với các trường dạng Select/Dropdown, hãy cố gắng cung cấp 8-10 options chất lượng để người dùng thoải mái lựa chọn.
    *   Sử dụng các loại: 'select' (Dropdown cho các option cố định), 'text' (Cho tên riêng), 'multiselect' (Cho đặc điểm).

4.  **ENGINE (HỆ THỐNG PROMPT NGẦM):**
    *   Viết System Prompt để AI xử lý các dữ liệu từ Fields trên.
    *   Nếu là App tạo Prompt ảnh: System Prompt phải có công thức ghép nối (Style + Subject + Context + Lighting...).
    *   Nếu là App viết Content: System Prompt phải có công thức viết bài (Hook + Pain Point + Solution + CTA).

5.  **AUDIO/VOICE FEATURE (BẮT BUỘC CHO APP CONTENT):**
    *   Khi thiết kế các App tạo nội dung văn bản (Content/Script/Email...), BẠN PHẢI THÊM TÍNH NĂNG SAU VÀO PHẦN 'features' và 'ui_design':
    *   "VOICE STUDIO PRO": Tích hợp trình đọc văn bản (TTS) siêu thực.
    *   CẤU HÌNH GIỌNG ĐỌC: 
        - 01 Giọng Nam (Tone Trầm ấm/Chuyên gia/Doanh nhân).
        - 01 Giọng Nữ (Tone Truyền cảm/BTV Thời sự/Lôi cuốn).
    *   TÙY CHỈNH: Cho phép điều chỉnh tốc độ đọc (0.5x, 1.0x, 1.5x, 2.0x).
    *   DOWNLOAD: Nút tải file âm thanh MP3 về máy.
    *   LÝ DO: Giúp người dùng nghe lại nội dung hoặc dùng làm voice-over cho video ngay lập tức.

⛔ GIAO THỨC TỐI THƯỢNG:
- TOÀN BỘ NGÔN NGỮ HIỂN THỊ TRONG APP PHẢI LÀ TIẾNG VIỆT 100%.
- TIÊU ĐỀ PHẢI NẰM GIỮA, TO ĐẸP, ĐÚNG CHẤT SIÊU CẤP VIP PRO.
- KHÔNG ĐƯỢC lặp lại các trường dữ liệu chung chung vô nghĩa.
- PHẢI HIỂU SÂU SẮC nhu cầu người dùng đang muốn tạo ra cái gì.

🔥 HÃY XUẤT RA BẢN THIẾT KẾ JSON HOÀN CHỈNH, THỂ HIỆN SỰ THẤU HIỂU TUYỆT ĐỐI VỚI CHỦ ĐỀ: '{{TOPIC}}'."
`;

export const IMAGE_TEMPLATE_10000X = `
CÂU PROMPT ĐÚC RA SIÊU APP ẢNH - ULTRA VIP PRO (V30.0 - NICHE HUNTER DECADE EDITION)

Hãy ĐÓNG VAI Kiến trúc sư AI Tối Thượng (Thien Master AI).
NHIỆM VỤ: Thiết kế "SIÊU APP ẢNH SIÊU CẤP VIP PRO" cho chủ đề: "{{TOPIC}}".
{{TECH_SPECS}}

⚠️⚠️⚠️ GIAO THỨC TỐI THƯỢNG (GOD PROTOCOL):
Tuân thủ tuyệt đối cấu trúc giao diện và dữ liệu sau. ĐƯA TẤT CẢ VÀO JSON.
KHÔNG ĐƯỢC BỎ SÓT BẤT KỲ YÊU CẦU NÀO DƯỚI ĐÂY.

1.  **HEADER (BỐ CỤC 1/3 - CENTERED VERTICAL FLOW):**
    *   **KÍCH THƯỚC:** Chiếm đúng 1/3 chiều cao màn hình từ trên xuống.
    *   **BỐ CỤC:** Hàng ngang (Full Width), sắp xếp các phần tử NẰM GIỮA (Center Aligned) theo trục dọc.
    *   **TIÊU ĐỀ:** Siêu To Khổng Lồ, Font Luxury, nằm ở vị trí trung tâm.
    *   **KHUNG UPLOAD (DIVINE PORTAL):** Nằm ngay bên dưới hoặc cạnh tiêu đề, kích thước NGANG NGỬA với chữ tiêu đề.
    *   **CHẾ ĐỘ HIỂN THỊ:** Bắt buộc "Object-Fit: Contain". Hiển thị trọn vẹn 100% ảnh nhân vật tải lên.

2.  **BODY (GIAO DIỆN CHÂN LÝ 50/50):**
    *   **CẤU TRÚC:** Chia màn hình làm 2 phần bằng nhau (50% Trái | 50% Phải).
    *   **CỘT TRÁI (CONTROL CENTER):** Chứa danh sách cấu hình và nút tạo ảnh.
        *   **NÚT TẠO ẢNH:** Nằm **CỐ ĐỊNH DƯỚI CÙNG BÊN TRÁI**. Kích thước Siêu Lớn, Nổi bật, Màu sắc đối lập.
    *   **CỘT PHẢI (GALLERY: THÁC ĐỔ TRÀN VIỀN):** 
        *   **CẤU TRÚC:** Sắp xếp TỪ TRÊN XUỐNG (Vertical Stack).
        *   **KÍCH THƯỚC ẢNH:** BẮT BUỘC FULL WIDTH (Chiếm trọn bề ngang 100% của cột phải).
        *   **KHÔNG CHIA LƯỚI:** Tuyệt đối không chia thành các ô nhỏ. Mỗi ảnh là một khối lớn nằm chồng lên nhau.
        *   **HIỂN THỊ:** Full kích thước của bức ảnh (Full Area), rõ nét từng chi tiết.
        *   **STYLE:** Khung viền sang trọng, hiệu ứng đổ bóng cao cấp.
        *   **LỊCH SỬ:** Thumbnail nhỏ gọn ở góc màn hình.

3.  **HỆ THỐNG GỢI Ý ĐA TẦNG (FULL TRAINING STRUCTURE - NICHE HUNTER MODE):**
    *   **LOGIC BẮT BUỘC (QUAN TRỌNG NHẤT):** 
        1.  **PHÂN TÍCH CHỦ ĐỀ GỐC (NICHE ANALYSIS):** Từ chủ đề người dùng nhập (VD: KOL AI, Thời trang, Chân dung...), hãy tìm ra **10 BIẾN THỂ (Sub-Topics)** cực kỳ cụ thể, cực kỳ "Trend", và có tính ứng dụng cao. TUYỆT ĐỐI KHÔNG CHUNG CHUNG.
        2.  **VÍ DỤ MINH HỌA:**
            - Nếu chủ đề là "KOL AI" -> HÃY GỢI Ý 10 MỤC NHƯ: "KOL Thời Trang Streetwear", "KOL Doanh Nhân Luxury", "KOL Beauty Macro", "KOL Travel Cinematic", "KOL Fitness Gym", "KOL Tech Reviewer", "KOL Foodie", "KOL Gamer Cyberpunk", "KOL Mom & Baby", "KOL Pet Lover".
        3.  **4 CONCEPT CHI TIẾT (FULL OPTION)** -> Khi chọn chủ đề nhỏ, xổ ra ĐÚNG 4 gợi ý trọn gói (Outfit, Light, Pose...).

[DỮ LIỆU ĐẦU VÀO]:
- Tên App: "{{APP_NAME}}"
- Chủ đề gốc: "{{TOPIC}}"
- Ngách cụ thể: {{SMART_KEYWORDS}}

════════════════════════════════
HƯỚNG DẪN CHI TIẾT JSON OUTPUT
════════════════════════════════

► 1. PHẦN \`summary\`:
   - \`ui_structure\`: "Header 1/3 Centered | Body Split 50/50 | Left: Deep Configs | Right: Vertical Full-Width Stack Gallery (Top-Down Flow) | Mini History"
   - \`app_language\`: "Vietnamese (Tiếng Việt 100%)"

► 2. PHẦN \`ui_design\`:
   - \`layout_style\`: "God-Tier 1/3 Header + 50/50 Split Body (Full Width Vertical Gallery)"
   - \`visual_style\`: "Ultra High Contrast, Luxury Dark Universe, Glowing Borders, Vivid Text Colors, Vietnamese Interface"

► 3. PHẦN \`fields\` (KHO DỮ LIỆU GỢI Ý ĐA TẦNG - FULL TRAINING):
   Hệ thống phải tự động sinh ra dữ liệu theo đúng logic 3 lớp.
   ⚠️ QUAN TRỌNG: 
   - **FIELD 1 (CHỦ ĐỀ NGÁCH) PHẢI CÓ ĐỦ 10 OPTIONS.**
   - CÁC FIELD CÒN LẠI: 4 OPTIONS.

   - Field 1: **10 CHỦ ĐỀ NGÁCH (NICHE SUB-TOPICS)**
     *   Mô tả: Dựa vào '{{TOPIC}}', hãy tạo ra **10 nhánh chuyên sâu**, độc đáo, bám sát nhu cầu người dùng.
     *   Số lượng: **ĐÚNG 10 Items.**
   
   - Field 2: **4 CONCEPT CHI TIẾT (FULL OPTION)**
     *   Mô tả: Gợi ý chi tiết trọn gói (Outfit, Light, Pose, Props...).
     *   Số lượng: ĐÚNG 4 Items.
     *   Giao diện: Grid nhỏ gọn, viền màu, phát sáng khi chọn.

   - Field 3: **4 BỐ CỤC (COMPOSITION)**
   - Field 4: **4 BỐI CẢNH (BACKGROUND)**
   - Field 5: **4 VẬT CẦM TAY/PROPS**
   - Field 6: **4 KHUNG VIỀN (FRAMES)**
   - Field 7: **4 HIỆU ỨNG (EFFECTS)**
   - Field 8: **4 LOẠI ÁNH SÁNG (LIGHTING)**
   - Field 9: **4 PHONG CÁCH MÀU (COLOR GRADING)**
   - Field 10: **4 GÓC MÁY (CAMERA ANGLES)**
   
   - Field 11: **TỶ LỆ KHUNG HÌNH (ASPECT RATIO)**
     *   Options: ["9:16", "1:1", "16:9"]
     *   Mặc định: "9:16"
     *   Giao diện: Hàng ngang (Row), Ô vuông Siêu Đẳng Cấp (Luxury Square Chips).

   - Field 12: **SỐ LƯỢNG ẢNH (QUANTITY)**
     *   Options: ["1", "2", "3"]
     *   Mặc định: "1"
     *   Giao diện: Hàng ngang (Row), Ô vuông Siêu Đẳng Cấp (Luxury Square Chips).

► 4. PHẦN \`engine\` (SYSTEM PROMPT - QUY CHUẨN 8K ULTRA):
   ⚠️⚠️⚠️ BẮT BUỘC PHẢI DÙNG CHÍNH XÁC CÁC KHỐI TEXT SAU VÀO SYSTEM PROMPT CỦA APP (KHÔNG ĐƯỢC XOÁ):

   "IV. CHUẨN HÌNH ẢNH – 8K ULTRA, 300MP, FACECARD 100%
   ════════════════════════════════
   – NGÔN NGỮ HỆ THỐNG: TIẾNG VIỆT 100%.
   – Hyper-realistic 8K, ultra photorealistic, super-resolution detail.
   – Da thật, lỗ chân lông rõ, không “nhựa”, không bệt; camera full-frame 300MP giả lập.
   – Face Embedding Signature x10.

   VII. QUY TRÌNH XỬ LÝ ẢNH ĐẦU VÀO (INPUT SOURCE PRIORITY):
   – ĐÂY LÀ QUY TẮC SỐNG CÒN: Ưu tiên ảnh Upload của người dùng là TUYỆT ĐỐI (Priority #1).
   – BƯỚC 1: Quét khuôn mặt (Face Scan) từ ảnh Upload.
   – BƯỚC 2: Giữ nguyên ID gốc (Mắt, Mũi, Môi, Cấu trúc xương) từ ảnh Upload.
   – BƯỚC 3: Chỉ áp dụng Style/Trang phục lên cơ thể, KHÔNG ĐƯỢC THAY ĐỔI KHUÔN MẶT GỐC.
   – NẾU CÓ ẢNH UPLOAD: Bắt buộc dùng khuôn mặt đó. Tuyệt đối KHÔNG tạo ra người lạ.
   – NẾU KHÔNG CÓ ẢNH UPLOAD: Mới được tạo nhân vật ngẫu nhiên.

   V. GIAO THỨC BIẾN THIÊN (VARIATION PROTOCOL):
   – Khi tạo từ 2 ảnh trở lên: BẮT BUỘC mỗi ảnh phải khác nhau hoàn toàn về:
     1. Góc chụp (High/Low/Eye-level/Dutch angle).
     2. Dáng pose (Đứng/Ngồi/Chuyển động/Tương tác).
     3. Ánh sáng (Màu sắc/Hướng sáng/Bóng đổ).
     4. Biểu cảm & Thần thái (Cười/Lạnh lùng/Suy tư).
   – TUYỆT ĐỐI KHÔNG TRÙNG LẶP DÁNG.

   VI. CƠ CHẾ VẬN HÀNH (CORE MECHANICS):
   – App hoạt động KHÔNG CẦN API KEY của người dùng (No-Code/Server-side).
   – Cơ chế 'Anti-Broken Image': Tự động fix lỗi ảnh không hiện, đảm bảo load 100% thành công."

► 5. PHẦN \`features\`:
   - "Divine Upload Portal (1/3 Screen Centered)", "Body Split 50/50", "Vertical Full-Width Gallery", "Deep Multi-Layer Suggestions (Limited 4)", "Auto-8K Upscale", "Variation Engine", "No-API-Key Required", "FaceLock Absolute".

════════════════════════════════
HÃY XUẤT RA JSON HOÀN CHỈNH.
Đảm bảo bố cục Header 1/3 nằm giữa. Body chia 50/50. Cột phải hiển thị ảnh Full Width xếp chồng dọc. Logic gợi ý: 10 SUB-NICHES, 4 CONCEPTS. Tỷ lệ 9:16, 1:1, 16:9. Số lượng 1-3.
`;

// --- NEW FUNCTION: GENERATE COMBINED PROMPT ---
export const generateCombinedPrompt = (
  selectedItems: SuggestionItem[], 
  type: 'content' | 'image', 
  appName: string, 
  userIdea: string,
  aspectRatio?: string,
  imageCount?: number
) => {
  const template = type === 'content' ? CONTENT_TEMPLATE_10000X : IMAGE_TEMPLATE_10000X;
  
  // 1. Get Categories from Selection
  const categoryIds = Array.from(new Set(selectedItems.map(item => item.categoryId)));
  
  // 2. Generate Smart Keywords
  const smartKeywords = getSmartKeywords(categoryIds, type);

  // 3. Create Combined Topic Description
  // CRITICAL FIX: Explicitly tell the AI this is the CORE TOPIC that must be locked.
  const modulesString = selectedItems.length > 0 
    ? selectedItems.map((item) => item.topic_desc).join(", ")
    : "Chủ đề tự do (Cần phân tích từ Ý tưởng người dùng)";
    
  // Combine User Idea + Modules into a single strong Topic Directive
  const combinedTopicString = userIdea.trim() 
    ? `${userIdea} (Kết hợp với: ${modulesString})`
    : modulesString;

  const userAppName = appName.trim() || "SIÊU APP VIP PRO";

  // 4. Tech Specs Injection
  // UPDATED: Added Variation & No-API rules to the tech specs block for reinforcement
  // Also injected AUDIO ENGINE requirement for CONTENT apps here for double safety
  const techSpecs = type === 'image' ? `
  CẤU HÌNH KỸ THUẬT (SYSTEM DEFAULT):
  - Header: Chiếm 1/3 màn hình, Căn giữa (Centered Vertical Flow).
  - Body: Chia đôi 50/50 (Left Control | Right Gallery).
  - Gallery: ẢNH FULL WIDTH (Tràn lề ngang), Xếp chồng từ trên xuống (Vertical Stack).
  - Khung Upload: Full Contain, Kích thước Siêu Lớn ngang tiêu đề.
  - Gợi ý: Đa tầng, FIELD CHỦ ĐỀ NGÁCH PHẢI CÓ ĐỦ 10 ITEMS. Các field khác 4 items.
  - Field 1 (Chủ đề Ngách): PHẢI BÁM SÁT CÁC MODULE NGƯỜI DÙNG ĐÃ CHỌN: "${modulesString}".
  - Tỷ lệ khung hình: 9:16, 1:1, 16:9 (Hàng ngang, ô vuông).
  - Số lượng ảnh: 1-3 (Hàng ngang, ô vuông).
  - Vị trí nút tạo: Góc trái bên dưới cùng (Kích thước Siêu Lớn, Nổi bật).
  - Lịch sử ảnh: Dạng Thumbnail nhỏ gọn góc màn hình.
  - Hiệu ứng cuộn: Global Inertia Scroll (Toàn bộ App siêu mượt).
  - Biến thiên: Bắt buộc thay đổi dáng/góc/ánh sáng nếu >1 ảnh.
  - API Key: KHÔNG YÊU CẦU NGƯỜI DÙNG NHẬP API KEY.
  - NGÔN NGỮ: BẮT BUỘC TIẾNG VIỆT 100% TRÊN TOÀN BỘ GIAO DIỆN.
  - XỬ LÝ ẢNH: ƯU TIÊN ẢNH UPLOAD TUYỆT ĐỐI (FACE LOCK).
  - MÀU SẮC: Tương phản cao, phù hợp chủ đề.
  ` : `
  CẤU HÌNH KỸ THUẬT (CONTENT APP):
  - GIAO DIỆN: Tiêu đề App nằm CHÍNH GIỮA (Center), Kích thước Lớn, Phong cách VIP.
  - NGÔN NGỮ: 100% TIẾNG VIỆT (Labels, Placeholders, Output).
  - TÍNH NĂNG ÂM THANH (BẮT BUỘC): App phải có tính năng 'VOICE STUDIO PRO'.
  - GIỌNG ĐỌC: 1 Nam (Trầm ấm) + 1 Nữ (Truyền cảm).
  - ĐIỀU KHIỂN: Tốc độ đọc tùy chỉnh, Download MP3.
  - KẾT CẤU: Inputs -> AI Engine -> Text Output -> Audio Output.
  `;

  // 5. Inject into Template
  let prompt = template.split("{{TOPIC}}").join(combinedTopicString);
  prompt = prompt.split("{{SMART_KEYWORDS}}").join(smartKeywords);
  prompt = prompt.split("{{APP_NAME}}").join(userAppName);
  prompt = prompt.split("{{TECH_SPECS}}").join(techSpecs);
  
  return prompt;
};

// --- MASSIVE CATEGORIES (30 EACH) ---

export const CONTENT_CATEGORIES: Category[] = [
  { id: 'biz', name: 'KINH DOANH' }, { id: 'realestate', name: 'BẤT ĐỘNG SẢN' }, { id: 'invest', name: 'ĐẦU TƯ' },
  { id: 'marketing', name: 'MARKETING' }, { id: 'health', name: 'SỨC KHỎE' }, { id: 'parenting', name: 'GIA ĐÌNH' }, 
  { id: 'fashion_txt', name: 'THỜI TRANG' }, { id: 'social', name: 'MẠNG XÃ HỘI' }, { id: 'edu', name: 'GIÁO DỤC' }, 
  { id: 'spirit', name: 'TÂM LINH' }, { id: 'tech', name: 'CÔNG NGHỆ' }, { id: 'ecom', name: 'E-COMMERCE' }, 
  { id: 'travel', name: 'DU LỊCH' }, { id: 'creative', name: 'SÁNG TẠO' }, { id: 'law', name: 'LUẬT PHÁP' }, 
  { id: 'hr', name: 'NHÂN SỰ' }, { id: 'startup', name: 'STARTUP' }, { id: 'event', name: 'SỰ KIỆN' }, 
  { id: 'agri', name: 'NÔNG NGHIỆP' }, { id: 'love', name: 'TÌNH YÊU' }, { id: 'pets', name: 'THÚ CƯNG' },
  { id: 'cars', name: 'XE & CƠ KHÍ' }, { id: 'news', name: 'BÁO CHÍ' }, { id: 'history', name: 'LỊCH SỬ' },
  { id: 'science', name: 'KHOA HỌC' }, { id: 'philosophy', name: 'TRIẾT HỌC' }, { id: 'code', name: 'LẬP TRÌNH' },
  { id: 'game_script', name: 'GAME' }, { id: 'music', name: 'ÂM NHẠC' }, { id: 'cinema', name: 'ĐIỆN ẢNH' }
];

export const IMAGE_CATEGORIES: Category[] = [
  { id: 'portrait', name: 'CHÂN DUNG' }, { id: 'fashion', name: 'THỜI TRANG' }, { id: 'product', name: 'SẢN PHẨM' },
  { id: 'arch', name: 'KIẾN TRÚC' }, { id: 'family', name: 'GIA ĐÌNH' }, { id: 'art', name: 'NGHỆ THUẬT' }, 
  { id: 'wedding', name: 'CƯỚI HỎI' }, { id: 'baby', name: 'EM BÉ' }, { id: 'movie', name: 'PHIM ẢNH' },
  { id: 'game', name: 'GAME ART' }, { id: 'anime', name: 'ANIME' }, { id: 'nature', name: 'THIÊN NHIÊN' },
  { id: 'logo', name: 'BRANDING' }, { id: 'food', name: 'ẨM THỰC' }, { id: 'jewelry', name: 'TRANG SỨC' },
  { id: 'cars_img', name: 'SIÊU XE' }, { id: 'cyberpunk', name: 'CYBERPUNK' }, { id: 'fantasy', name: 'THẦN THOẠI' },
  { id: 'horror', name: 'KINH DỊ' }, { id: 'abstract', name: 'TRỪU TƯỢNG' }, { id: 'interior', name: 'NỘI THẤT' },
  { id: 'macro', name: 'MACRO' }, { id: 'street', name: 'ĐƯỜNG PHỐ' }, { id: 'sports', name: 'THỂ THAO' },
  { id: 'underwater', name: 'DƯỚI NƯỚC' }, { id: 'drone', name: 'FLYCAM' }, { id: '3d', name: '3D RENDER' },
  { id: 'oil', name: 'SƠN DẦU' }, { id: 'sketch', name: 'PHÁC HỌA' }, { id: 'tattoo', name: 'TATTOO' }
];

// --- MASSIVE DATA GENERATION (HANDCRAFTED DEEP NICHES) ---
// Helper to generate 20 specific topics for a category ID
const generateTopicsForCategory = (catId: string, isContent: boolean): { title: string, topic: string }[] => {
  
  // --- CONTENT APP MAPPING (VĂN BẢN, CHIẾN LƯỢC, KỊCH BẢN) ---
  if (isContent) {
    const contentMaps: Record<string, string[]> = {
      'health': ["Phác Đồ Tim Mạch", "Dinh Dưỡng Tiểu Đường", "Hồi Phục Đột Quỵ", "Giấc Ngủ Khoa Học", "Cai Nghiện Dopamine", "Yoga Trị Liệu", "Detox Gan Thận", "Tăng Cơ Giảm Mỡ", "Sơ Cấp Cứu", "Chăm Sóc Người Già", "Sức Khỏe Mẹ Bầu", "Nuôi Con Sữa Mẹ", "Thực Đơn Keto", "Sức Khỏe Cột Sống", "Thiền Chữa Lành", "Vitamin Tổng Hợp", "Bệnh Lý Tiêu Hóa", "Phòng Ngừa Ung Thư", "Sức Khỏe Mắt", "Huyết Áp Ổn Định"],
      'biz': ["Chiến Lược CEO", "Văn Hóa Doanh Nghiệp", "Quy Trình Tự Động", "KPI & Nhân Sự", "Báo Cáo Tài Chính", "Pitch Deck Gọi Vốn", "Xử Lý Khủng Hoảng", "Tái Cấu Trúc", "Mô Hình Franchise", "Lãnh Đạo Tỉnh Thức", "Quản Trị Rủi Ro", "Đàm Phán B2B", "Khởi Nghiệp Lean", "M&A Chiến Lược", "Lộ Trình IPO", "Marketing Tổng Thể", "Bán Hàng Hệ Thống", "Chăm Sóc Khách Hàng", "Pháp Lý Kinh Doanh", "Chuyển Đổi Số"],
      'marketing': ["Kịch Bản Viral Clip", "Seeding Hội Nhóm", "Email Chốt Sale", "Livestream Triệu View", "Xây Kênh TikTok", "Facebook Ads Tối Ưu", "SEO Web Lên Top", "Content Storytelling", "Brand Positioning", "KOL Booking", "Affiliate Matrix", "Phễu Bán Hàng", "Tâm Lý Khách Hàng", "Sự Kiện Ra Mắt", "Mini Game Kịch Bản", "Re-targeting", "Content Đa Kênh", "PR Báo Chí", "Khủng Hoảng Truyền Thông", "Tuyển Dụng MKT"],
      'realestate': ["Đầu Tư Đất Nền", "Căn Hộ Dòng Tiền", "Pháp Lý Sổ Đỏ", "Phong Thủy Nhà Ở", "Môi Giới Triệu Đô", "Quản Lý Tòa Nhà", "Định Giá BĐS", "Đàm Phán Cắt Lỗ", "Marketing BĐS", "BĐS Công Nghiệp", "Second Home", "Săn Nhà Nát", "Cải Tạo Cho Thuê", "Quy Hoạch Đô Thị", "Luật Nhà Ở Mới", "Tài Chính Đòn Bẩy", "Telesale Kịch Bản", "Chốt Sale Biệt Thự", "Thương Hiệu Cá Nhân", "Review Dự Án"],
      'invest': ["Crypto Dài Hạn", "Lướt Sóng Chứng Khoán", "Vàng & Ngoại Tệ", "Quỹ Mở ETF", "Quản Lý Tài Chính", "Tự Do Tài Chính", "Phân Tích Kỹ Thuật", "Đọc Báo Cáo Tài Chính", "Tâm Lý Giao Dịch", "Đầu Tư Giá Trị", "Blockchain Cơ Bản", "Defi Farming", "Forex Trading", "Đầu Tư Mạo Hiểm", "Tiết Kiệm Thông Minh", "Bảo Hiểm Nhân Thọ", "Đa Dạng Hóa", "Lãi Suất Kép", "Nghỉ Hưu Sớm", "Cashflow Game"],
      'tech': ["SaaS Product Launch", "Tài Liệu API", "Cyber Security", "AI Prompt Engineering", "Blockchain Dev", "UX Writing", "System Design", "Agile & Scrum", "Cloud Computing", "Data Analysis", "Python Automation", "Web3 Smart Contract", "DevOps Pipeline", "Mobile App UI", "Game Design Doc", "Tech Startup Pitch", "IoT Solutions", "No-Code Tools", "Big Data", "Machine Learning"],
      'ecom': ["Mô tả sản phẩm chuẩn SEO", "Kịch bản Livestream Shopee", "Quy trình đóng gói", "Chăm sóc khách hàng", "Flash Sale Chiến lược", "Tối ưu gian hàng", "TikTok Shop Affiliate", "Dropshipping", "POD (Print on Demand)", "Email Abandoned Cart", "Quảng cáo sàn", "Xử lý hoàn hàng", "Nguồn hàng Trung Quốc", "Thương hiệu Local Brand", "KOL Review", "Tăng đánh giá 5 sao", "Upsell & Cross-sell", "Quản lý tồn kho", "Vận chuyển tối ưu", "Global Selling"],
      'spirit': ["Kịch bản Thiền Dẫn", "Giải mã Tarot", "Thần Số Học", "Luật Hấp Dẫn", "Chữa lành đứa trẻ bên trong", "Tử Vi Ứng Dụng", "Phong Thủy Văn Phòng", "Nghi thức Trăng Tròn", "Đá Quý Năng Lượng", "Yoga Nidra", "Reiki Healing", "Nhân Tướng Học", "Kinh Dịch Dự Đoán", "Giấc Mơ Báo Hiệu", "Tâm Linh & Khoa Học", "Thiền Vipassana", "Luân Xa (Chakra)", "Bát Tự (Tứ Trụ)", "Gieo Quẻ", "Trực Giác"],
      'parenting': ["Dạy con không đòn roi", "Khủng hoảng tuổi lên 3", "Ăn dặm kiểu Nhật", "Giáo dục sớm Montessori", "Cai nghiện điện thoại", "Giáo dục giới tính", "Kết nối cha con", "Mẹ đơn thân", "Vợ chồng đồng thuận", "Quản lý cảm xúc", "Tiếng Anh cho bé", "Kỹ năng sinh tồn", "Lòng biết ơn", "Tài chính cho trẻ", "Du lịch gia đình", "Đọc sách cùng con", "Trị liệu tâm lý", "Dậy thì thành công", "Mẹ chồng nàng dâu", "Bữa cơm gia đình"],
      'travel': ["Lên lịch trình tự túc", "Review Khách sạn Luxury", "Săn vé máy bay rẻ", "Vlog du lịch", "Ẩm thực đường phố", "Check-in sống ảo", "Du lịch một mình", "Camping & Glamping", "Du lịch tâm linh", "Staycation", "Visa các nước", "Kỹ năng xếp hành lý", "Văn hóa bản địa", "Du lịch mạo hiểm", "Roadtrip xuyên Việt", "Resort 5 sao", "Du lịch bền vững", "Travel Hacker", "Bảo hiểm du lịch", "Nhật ký hành trình"],
      'law': ["Luật Doanh Nghiệp", "Hợp đồng lao động", "Tranh chấp đất đai", "Thừa kế di chúc", "Bản quyền trí tuệ", "Luật Hôn nhân", "Thuế thu nhập", "Tố tụng dân sự", "Luật Hình sự", "Tư vấn Start-up", "M&A Pháp lý", "Giấy phép con", "Đòi nợ đúng luật", "Ly hôn & Tài sản", "Luật Giao thông", "Bảo hiểm xã hội", "Hợp đồng thương mại", "Luật Xây dựng", "Sở hữu trí tuệ", "Pháp chế nội bộ"],
      'fashion_txt': ["Định hình phong cách", "Lịch sử thời trang", "Phối đồ Capsule", "Thời trang bền vững", "Chất liệu vải", "Color Wheel", "Dress Code sự kiện", "Bảo quản đồ hiệu", "Personal Stylist", "Phụ kiện nam giới", "Giày Sneaker", "Túi xách đầu tư", "Trang sức phong thủy", "Kinh doanh thời trang", "Local Brand Story", "Xu hướng 2025", "Body Shape", "Outfit of the Day", "Thời trang công sở", "Streetwear Culture"],
      'startup': ["Tìm Co-founder", "MVP (Sản phẩm mẫu)", "Gọi vốn thiên thần", "Growth Hacking", "Lean Canvas", "Pitching Slide", "Tuyển dụng Key Core", "Văn hóa khởi nghiệp", "Quản lý dòng tiền", "Pivot mô hình", "Exit Strategy", "Pháp lý cổ phần", "Sở hữu trí tuệ", "Mentor & Advisor", "Product Market Fit", "Go-to-market", "Customer Persona", "Đối thủ cạnh tranh", "Burn Rate", "Unicorn Mindset"],
      'edu': ["Phương pháp Pomodoro", "Sơ đồ tư duy", "Học tiếng Anh", "Kỹ năng thuyết trình", "Tự học (Self-study)", "Du học học bổng", "Hướng nghiệp", "Luyện thi IELTS", "Kỹ năng mềm", "Tư duy phản biện", "Đọc nhanh (Speed Reading)", "Viết lách (Writing)", "Học lập trình", "STEM cho trẻ", "E-learning Design", "Giáo án điện tử", "Tâm lý học đường", "Quản lý lớp học", "Học qua dự án", "Lifelong Learning"],
      'social': ["Xây dựng thương hiệu cá nhân", "Networking", "Kỹ năng giao tiếp", "Linkedin Profile", "Dating App Profile", "Quản lý danh tiếng", "Khủng hoảng MXH", "Content Creator", "Influencer Marketing", "Community Building", "Social Etiquette", "Digital Detox", "Fake News", "Bảo mật thông tin", "Livestreaming", "Podcast Host", "Blog Writing", "Social Listening", "Viral Psychology", "Netiquette"],
      'history': ["Chiến tranh thế giới", "Lịch sử Việt Nam", "Các triều đại", "Nhân vật lịch sử", "Bí ẩn khảo cổ", "Văn minh Ai Cập", "Chiến thuật quân sự", "Lịch sử nghệ thuật", "Lịch sử tôn giáo", "Con đường tơ lụa", "Cách mạng công nghiệp", "Chiến tranh lạnh", "Lịch sử y học", "Huyền thoại Hy Lạp", "Văn hóa Samurai", "Đế chế La Mã", "Phong kiến Trung Hoa", "Khủng long & Cổ đại", "Lịch sử tiền tệ", "Bảo tàng học"],
      'science': ["Vũ trụ & Hố đen", "Vật lý lượng tử", "Biến đổi khí hậu", "Công nghệ Gen", "Trí tuệ nhân tạo", "Robot hóa", "Năng lượng sạch", "Khám phá đại dương", "Vi sinh vật", "Thần kinh học", "Hóa học đời sống", "Toán học vui", "Khoa học vật liệu", "In 3D", "Du hành không gian", "Sự sống ngoài trái đất", "Thuyết tiến hóa", "Khoa học giấc ngủ", "Dinh dưỡng học", "Tâm lý học hành vi"],
      'cars': ["Đánh giá xe", "Kỹ thuật lái xe", "Bảo dưỡng xe", "Siêu xe & Tốc độ", "Xe điện (EV)", "Độ xe (Tuning)", "Off-road", "Lịch sử hãng xe", "Công nghệ an toàn", "Mua xe cũ", "Phụ kiện ô tô", "Mô tô phân khối lớn", "F1 Racing", "Classic Cars", "Luật giao thông", "Bảo hiểm xe", "Roadtrip", "Camping Car", "DIY sửa xe", "Xe tự lái"]
    };

    if (contentMaps[catId]) {
      // LIMIT: 10 ITEMS (Requested update)
      return contentMaps[catId].slice(0, 10).map(t => ({ title: t, topic: `Tạo Nội Dung chuyên sâu về chủ đề '${t}', thuộc lĩnh vực ${catId.toUpperCase()}.` }));
    }
  } 
  
  // --- IMAGE APP MAPPING (GÓC MÁY, ÁNH SÁNG, PHONG CÁCH) ---
  else {
    const imageMaps: Record<string, string[]> = {
      'portrait': ["Chân Dung Doanh Nhân", "Nàng Thơ (Muse)", "Beauty Shot (Macro)", "Chân Dung Đen Trắng", "Chân Dung Cổ Trang", "Cyberpunk Face", "Double Exposure", "Chân Dung Dưới Nước", "Ánh Sáng Neon", "High Fashion Face", "Chân Dung Trẻ Em", "Phản Chiếu Gương", "Silhouette Ngược Sáng", "Chân Dung Nghệ Thuật", "Profile LinkedIn", "Bác Sĩ Uy Tín", "Nghệ Sĩ Bay Bổng", "Chân Dung Già Nua (Texture)", "Chân Dung Cảm Xúc", "Rembrandt Lighting"],
      'fashion': ["Lookbook Đường Phố", "Runway Haute Couture", "Thời Trang Công Sở", "Dạ Hội Sang Trọng", "Sporty Chic", "Vintage Classic", "Bohemian Style", "Minimalist", "Techwear", "Phụ Kiện Cận Cảnh", "Giày Sneaker", "Túi Xách Hàng Hiệu", "Kính Mắt Thời Trang", "Trang Sức Cao Cấp", "Model Tạo Dáng", "Flatlay Quần Áo", "Bìa Tạp Chí Vogue", "Outfit Of The Day", "Summer Vibe", "Winter Collection"],
      'product': ["Sản Phẩm Nền Trắng", "Sản Phẩm 3D Podium", "Sản Phẩm Lifestyle", "Mỹ Phẩm Luxury", "Đồ Ăn Hấp Dẫn", "Đồ Điện Tử (Tech)", "Nước Hoa (Glass)", "Đồng Hồ Cao Cấp", "Trang Sức Lấp Lánh", "Giày Thể Thao", "Túi Xách Da", "Nội Thất Decor", "Đồ Gia Dụng", "Sản Phẩm Thiên Nhiên", "Bao Bì Sáng Tạo", "Splash Nước", "Ánh Sáng Studio", "Flatlay Sản Phẩm", "Sản Phẩm Macro", "Quảng Cáo Sản Phẩm"],
      'arch': ["Nội Thất Phòng Khách", "Phòng Ngủ Master", "Bếp Hiện Đại", "Biệt Thự Sân Vườn", "Penthouse Luxury", "Nhà Phố Mặt Tiền", "Phong Cách Indochine", "Phong Cách Scandinavian", "Phong Cách Industrial", "Phong Cách Zen Nhật", "Kiến Trúc Cổ Điển", "Resort Nghỉ Dưỡng", "Văn Phòng Sáng Tạo", "Quán Cafe Chill", "Thư Viện Tại Gia", "Ban Công Xanh", "Hồ Bơi Vô Cực", "Góc Chill Đọc Sách", "Phòng Tắm Spa", "Mặt Tiền Shop"],
      'family': ["Khoảnh Khắc Cha Con", "Tình Mẫu Tử", "Gia Đình Sum Họp", "Kỷ Niệm Ngày Cưới", "Ông Bà Vui Vẻ", "Anh Chị Em", "Bữa Cơm Gia Đình", "Dã Ngoại Cuối Tuần", "Giáng Sinh Ấm Áp", "Tết Đoàn Viên", "Gia Đình Studio", "Gia Đình Ngoại Cảnh", "Cảm Xúc Tự Nhiên", "Chân Dung Đại Gia Đình", "Mẹ Bầu & Bé", "Khoảnh Khắc Đời Thường", "Gia Đình Áo Dài", "Gia Đình Pyjama", "Gia Đình Thể Thao", "Gia Đình Đi Biển"],
      'art': ["Sơn Dầu Cổ Điển", "Màu Nước (Watercolor)", "Tranh Chì (Sketch)", "Digital Art", "Pop Art", "Abstract (Trừu Tượng)", "Surrealism (Siêu Thực)", "Impressionism (Ấn Tượng)", "Graffiti Art", "Pixel Art", "Vector Illustration", "Concept Art", "Matte Painting", "Collage Art", "Ukiyo-e", "Art Nouveau", "Minimalist Line Art", "Sculpture (Điêu Khắc)", "Ceramic Art", "Mosaic"],
      'wedding': ["Ảnh Cưới Studio", "Ảnh Cưới Ngoại Cảnh", "Phóng Sự Cưới", "Cô Dâu Đơn Thân", "Nhẫn Cưới Macro", "Váy Cưới Lộng Lẫy", "Khoảnh Khắc Trao Nhẫn", "Nụ Hôn Ngọt Ngào", "Tiệc Cưới Ban Đêm", "Destination Wedding", "Cổng Hoa Cưới", "Bánh Kem Cưới", "Giày Cô Dâu", "Phù Dâu Phù Rể", "Pre-wedding", "Ảnh Cưới Cổ Điển", "Ảnh Cưới Hàn Quốc", "Ảnh Cưới Phim", "First Look", "Tuần Trăng Mật"],
      'baby': ["Newborn (Sơ Sinh)", "Thôi Nôi (1 Tuổi)", "Bé Đang Ăn", "Bé Đang Ngủ", "Bé Tắm", "Bé Chơi Đùa", "Chân Tay Bé (Macro)", "Bé Với Thú Cưng", "Sinh Nhật Bé", "Bé Đi Học", "Bé Khóc Nhè", "Bé Cười Toe Toét", "Bé Sinh Đôi", "Bé Tập Đi", "Góc Phòng Bé", "Đồ Chơi Của Bé", "Thời Trang Nhí", "Bé Và Mẹ", "Bé Và Bố", "Khoảnh Khắc Đầu Đời"],
      'anime': ["Anime School Life", "Anime Battle Scene", "Waifu Portrait 8K", "Mecha Robot", "Chibi Cute", "Anime Landscape", "Cyberpunk Anime", "Fantasy Magic", "Anime Emotional", "Studio Ghibli Style", "Makoto Shinkai Sky", "Anime Street", "Anime Food", "Anime Weapon", "Anime Eyes Macro", "Neko Girl", "Samurai Anime", "Anime Sport", "Anime Music", "Anime Room"],
      'game': ["Game Character Design", "Game Environment", "Weapon Concept", "UI/UX Game", "Pixel Art Game", "Fantasy RPG", "Sci-fi Shooter", "Isometric View", "Game Card Art", "Boss Monster", "Loot Box", "Game Icon", "Loading Screen", "Victory Pose", "Game Map", "Vehicle Design", "Armor Set", "Potion & Items", "Splash Art", "Low Poly 3D"],
      'nature': ["Phong Cảnh Núi Non", "Biển Xanh Cát Trắng", "Rừng Nhiệt Đới", "Thác Nước Hùng Vĩ", "Hoàng Hôn Rực Rỡ", "Bình Minh Sương Mù", "Hoa Cận Cảnh (Macro)", "Động Vật Hoang Dã", "Chim Bay", "Côn Trùng", "Mùa Thu Lá Vàng", "Mùa Đông Tuyết Trắng", "Sa Mạc Cát", "Bầu Trời Sao (Milky Way)", "Cực Quang", "Sóng Biển", "Cánh Đồng Lúa", "Hang Động", "Mưa Rừng", "Cầu Vồng"],
      'logo': ["Logo Tối Giản", "Logo Chữ Cái (Monogram)", "Logo Linh Vật (Mascot)", "Logo Sang Trọng (Luxury)", "Logo 3D", "Logo Vẽ Tay", "Logo Hình Học", "Logo Âm Bản", "Logo Vintage", "Logo Công Nghệ", "Logo F&B", "Logo Thời Trang", "Logo Bất Động Sản", "Logo Spa & Beauty", "Logo Giáo Dục", "Logo Thể Thao", "Logo Y Tế", "Logo Luật", "Logo Cá Nhân", "Brand Identity"],
      'food': ["Món Ăn Đường Phố", "Fine Dining Plating", "Bánh Ngọt (Bakery)", "Coffee Art", "Trái Cây Tươi (Splash)", "Hải Sản Tươi Sống", "Món Ăn Gia Đình", "Đồ Uống Cocktail", "Nguyên Liệu Nấu Ăn", "Bếp Nhà Hàng", "Food Flatlay", "Dark Moody Food", "Bright Airy Food", "Food Texture", "Macro Đồ Ăn", "Lửa Trại Nấu Ăn", "Tiệc Buffet", "Trà Chiều", "Món Ăn Chay", "Đặc Sản Vùng Miền"],
      'jewelry': ["Nhẫn Kim Cương", "Dây Chuyền Vàng", "Bông Tai Ngọc Trai", "Vòng Tay Luxury", "Đồng Hồ Cơ", "Đá Quý Ruby/Sapphire", "Trang Sức Cưới", "Trang Sức Handmade", "Macro Giác Cắt", "Trang Sức Bạc", "Hộp Đựng Trang Sức", "Model Đeo Trang Sức", "Trang Sức Cổ Điển", "Vương Miện", "Trâm Cài Áo", "Lắc Chân", "Trang Sức Nam", "Bộ Sưu Tập", "Trang Sức Minimalist", "Trang Sức Phong Thủy"],
      'cars_img': ["Siêu Xe (Supercar)", "Xe Cổ (Classic)", "Xe Sang (Luxury)", "Xe Đua F1", "Nội Thất Xe", "Vô Lăng", "Đèn Xe (Macro)", "Mâm Xe (Wheels)", "Drift Smoke", "Xe Off-road", "Xe Điện Tương Lai", "Xe Môtô (Superbike)", "Showroom Xe", "Garage Xe", "Xe Dưới Mưa", "Xe Trên Đường Đèo", "Xe Concept", "Logo Hãng Xe", "Động Cơ (Engine)", "Gương Chiếu Hậu"],
      'cyberpunk': ["Neon City Night", "Cyborg Portrait", "Futuristic Street", "Hologram UI", "Cyberpunk Car", "Rainy Neon", "Techwear Fashion", "Cyberpunk Weapon", "Robot Pet", "Hacker Room", "Flying Car", "Synthesizer", "Laser Beam", "Dystopian Building", "Neon Mask", "Cyber Implant", "Virtual Reality", "Arcade Game", "Data Stream", "Cyberpunk Bar"],
      'horror': ["Ngôi Nhà Ma Ám", "Rừng Đen", "Búp Bê Ma", "Zombie", "Vampire", "Quái Vật", "Bóng Ma", "Nghĩa Trang", "Máu Me (Gore)", "Sương Mù Dày Đặc", "Gương Vỡ", "Hành Lang Tối", "Mắt Quỷ", "Tay Ma", "Bệnh Viện Bỏ Hoang", "Halloween Pumpkin", "Phù Thủy", "Sọ Người", "Sát Nhân", "Bóng Tối"],
      'interior': ["Phòng Khách Modern", "Bếp Đảo (Island)", "Phòng Ngủ Cozy", "Phòng Tắm Luxury", "Phòng Làm Việc", "Sofa Da", "Đèn Chùm", "Thảm Trải Sàn", "Cây Xanh Trong Nhà", "Kệ Sách", "Cửa Sổ Lớn", "Sàn Gỗ", "Tường Bê Tông", "Lò Sưởi", "Bàn Ăn", "Gương Decor", "Góc Thiền", "Ban Công", "Giếng Trời", "Màu Pastel"],
      'abstract': ["Khói Màu", "Sơn Chảy (Fluid Art)", "Hình Học 3D", "Fractal", "Bokeh Light", "Texture Gỗ/Đá", "Sóng Âm", "Mạng Lưới (Network)", "Glitch Effect", "Kính Vạn Hoa", "Minimalist Shape", "Gradient Color", "Kim Loại Lỏng", "Giấy Nhàu", "Mực Loang", "Tinh Thể", "Vải Lụa", "Bóng Đổ", "Đường Cong", "Pattern"],
      'movie': ["Poster Phim Hành Động", "Cảnh Quay Cinematic", "Phim Kinh Dị", "Phim Lãng Mạn", "Phim Khoa Học Viễn Tưởng", "Phim Hoạt Hình", "Hậu Trường Phim", "Rạp Chiếu Phim", "Máy Quay Phim", "Cuộn Phim", "Director Chair", "Clapperboard", "Oscar Statue", "Red Carpet", "Phim Cổ Trang", "Phim Chiến Tranh", "Phim Tài Liệu", "Phim Noir (Đen Trắng)", "Hiệu Ứng Cháy Nổ", "Nhân Vật Phản Diện"]
    };

    if (imageMaps[catId]) {
      // LIMIT: 10 ITEMS (Requested update)
      return imageMaps[catId].slice(0, 10).map(t => ({ title: t, topic: `Tạo Ảnh chủ đề '${t}', tối ưu hóa cho phong cách ${catId.toUpperCase()}.` }));
    }
  }

  // Fallback for remaining categories (still better than generic) - LIMIT 10
  const prefixes = isContent 
    ? ["Quy trình chuẩn", "Chiến lược ngách", "Kế hoạch 30 ngày", "Bài viết chuyên sâu", "Email Marketing", "Kịch bản video", "Phân tích xu hướng", "Hướng dẫn từng bước", "Review chi tiết", "Quảng cáo chuyển đổi cao", "Blog SEO", "Slogan thương hiệu", "Ý tưởng đột phá", "Câu chuyện thương hiệu", "Báo cáo thị trường", "Thư ngỏ đối tác", "Tài liệu đào tạo", "Checklist kiểm tra", "Mẹo hay thực chiến", "Case Study thành công"]
    : ["Góc rộng toàn cảnh", "Cận cảnh chi tiết", "Góc nhìn từ trên cao", "Ánh sáng tự nhiên", "Ánh sáng Studio", "Phong cách Tối giản", "Phong cách Điện ảnh", "Màu sắc rực rỡ", "Đen trắng nghệ thuật", "Xóa phông (Bokeh)", "Góc thấp (Low angle)", "Góc nghiêng (Dutch angle)", "Phản chiếu", "Bóng đổ", "Tương phản cao", "Màu Pastel", "HDR", "Macro", "Phơi sáng lâu", "Silhouette"];
  
  return prefixes.slice(0, 10).map((p, i) => ({
    title: `${p} ${catId.toUpperCase()}`,
    topic: `Tạo ${isContent ? "Nội Dung" : "Ảnh"} chuyên sâu về ${p} trong lĩnh vực ${catId}, đảm bảo tính thực chiến và chuyên gia.`
  }));
};

// GENERATE 1200+ SUGGESTIONS
export const CONTENT_SUGGESTIONS: SuggestionItem[] = CONTENT_CATEGORIES.flatMap(cat => 
  generateTopicsForCategory(cat.id, true).map(t => ({
    id: `c_${cat.id}_${Math.random().toString(36).substr(2, 5)}`,
    categoryId: cat.id,
    title: t.title,
    topic_desc: t.topic,
    prompt: "" // Prompt is now generated dynamically
  }))
);

export const IMAGE_SUGGESTIONS: SuggestionItem[] = IMAGE_CATEGORIES.flatMap(cat => 
  generateTopicsForCategory(cat.id, false).map(t => ({
    id: `i_${cat.id}_${Math.random().toString(36).substr(2, 5)}`,
    categoryId: cat.id,
    title: t.title,
    topic_desc: t.topic,
    prompt: "" // Prompt is now generated dynamically
  }))
);

export const SUGGESTION_DATA = [...CONTENT_SUGGESTIONS, ...IMAGE_SUGGESTIONS];
