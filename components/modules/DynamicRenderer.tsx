import React from 'react';
import { LayoutModule } from '../../types';
import { HeroSection } from './HeroSection';
import { FeatureGrid } from './FeatureGrid';
import { PricingTable } from './PricingTable';
import { TestimonialGrid } from './TestimonialGrid';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { CallToAction } from './CallToAction';
import { BentoGrid } from './BentoGrid';
import { StatsRow } from './StatsRow';
import { FAQAccordion } from './FAQAccordion';
import { StepByStep } from './StepByStep';
import { SaasLayout } from './SaasLayout';
import { PortfolioLayout } from './PortfolioLayout';
import { AppPromoLayout } from './AppPromoLayout';
import { EcommerceLayout } from './EcommerceLayout';
import { EventLayout } from './EventLayout';
import { CreatorLayout } from './CreatorLayout';
import { DataList } from './DataList';
import { CourseLayout } from './CourseLayout';
import { RestaurantLayout } from './RestaurantLayout';
import { RealEstateLayout } from './RealEstateLayout';
import { AgencyLayout } from './AgencyLayout';
import { TravelLayout } from './TravelLayout';
import { ClinicLayout } from './ClinicLayout';
import { FitnessLayout } from './FitnessLayout';
import { CharityLayout } from './CharityLayout';
import { LocalServiceLayout } from './LocalServiceLayout';
import { LawyerLayout } from './LawyerLayout';
import { InteriorDesignLayout } from './InteriorDesignLayout';
import { PhotographyLayout } from './PhotographyLayout';
import { PodcastLayout } from './PodcastLayout';
import { WeddingLayout } from './WeddingLayout';
import { BookLaunchLayout } from './BookLaunchLayout';
import { MusicReleaseLayout } from './MusicReleaseLayout';
import { GamingGuildLayout } from './GamingGuildLayout';
import { CarRentalLayout } from './CarRentalLayout';
import { PetCareLayout } from './PetCareLayout';
import { CryptoProjectLayout } from './CryptoProjectLayout';
import { SpaLayout } from './SpaLayout';
import { RecruitmentLayout } from './RecruitmentLayout';
import { CrowdfundingLayout } from './CrowdfundingLayout';
import { CoachingLayout } from './CoachingLayout';
import { CoworkingLayout } from './CoworkingLayout';
import { AutoRepairLayout } from './AutoRepairLayout';
import { EducationLayout } from './EducationLayout';
import { CleaningServiceLayout } from './CleaningServiceLayout';
import { ArchitectureLayout } from './ArchitectureLayout';
import { FinancialLayout } from './FinancialLayout';
import { LogisticsLayout } from './LogisticsLayout';
import { BakeryLayout } from './BakeryLayout';
import { TeamSection } from './TeamSection';
import { LogoTicker } from './LogoTicker';
import { VideoSection } from './VideoSection';
import { GallerySection } from './GallerySection';
import { TimelineSection } from './TimelineSection';
import { NewsletterSection } from './NewsletterSection';
import { MapSection } from './MapSection';
import { AppDownload } from './AppDownload';
import { ArticleGrid } from './ArticleGrid';
import { ComparisonTable } from './ComparisonTable';
import { BeforeAfter } from './BeforeAfter';
import { TrustBadges } from './TrustBadges';
import { ServiceMenu } from './ServiceMenu';
import { IntegrationGrid } from './IntegrationGrid';
import { JobBoard } from './JobBoard';
import { CountdownSection } from './CountdownSection';
import { AudioPlayer } from './AudioPlayer';
import { ProductShowcase } from './ProductShowcase';
import { EventSchedule } from './EventSchedule';
import { InstructorBio } from './InstructorBio';
import { FundraisingProgress } from './FundraisingProgress';
import { OpeningHours } from './OpeningHours';
import { VideoTestimonials } from './VideoTestimonials';
import { ProjectMasonry } from './ProjectMasonry';
import { PropertyGrid } from './PropertyGrid';
import { CourseCurriculum } from './CourseCurriculum';
import { MenuGrid } from './MenuGrid';
import { ProcessFlow } from './ProcessFlow';
import { PricingMatrix } from './PricingMatrix';
import { SocialFeed } from './SocialFeed';
import { RoadmapTimeline } from './RoadmapTimeline';
import { SkillCloud } from './SkillCloud';
import { Leaderboard } from './Leaderboard';
import { TokenomicsChart } from './TokenomicsChart';
import { ItinerarySection } from './ItinerarySection';
import { DataMetricCard } from './DataMetricCard';
import { StockTicker } from './StockTicker';
import { BookingCalendar } from './BookingCalendar';
import { ReviewWall } from './ReviewWall';
import { TechStack } from './TechStack';
import { ImpactMap } from './ImpactMap';
import { MenuTabs } from './MenuTabs';
import { ProductComparison } from './ProductComparison';
import { VideoPlaylist } from './VideoPlaylist';
import { CertificateShowcase } from './CertificateShowcase';
import { LiveChatPreview } from './LiveChatPreview';
import { LeadMagnet } from './LeadMagnet';
import { PropertySearch } from './PropertySearch';

const moduleMap: Record<string, React.FC<any>> = {
  HeroSection: HeroSection,
  FeatureGrid: FeatureGrid,
  PricingTable: PricingTable,
  TestimonialGrid: TestimonialGrid,
  ContactForm: ContactForm,
  Footer: Footer,
  CallToAction: CallToAction,
  BentoGrid: BentoGrid,
  StatsRow: StatsRow,
  FAQAccordion: FAQAccordion,
  StepByStep: StepByStep,
  TeamSection: TeamSection,
  LogoTicker: LogoTicker,
  VideoSection: VideoSection,
  GallerySection: GallerySection,
  TimelineSection: TimelineSection,
  NewsletterSection: NewsletterSection,
  MapSection: MapSection,
  AppDownload: AppDownload,
  ArticleGrid: ArticleGrid,
  ComparisonTable: ComparisonTable,
  BeforeAfter: BeforeAfter,
  TrustBadges: TrustBadges,
  ServiceMenu: ServiceMenu,
  IntegrationGrid: IntegrationGrid,
  JobBoard: JobBoard,
  CountdownSection: CountdownSection,
  AudioPlayer: AudioPlayer,
  ProductShowcase: ProductShowcase,
  EventSchedule: EventSchedule,
  InstructorBio: InstructorBio,
  FundraisingProgress: FundraisingProgress,
  OpeningHours: OpeningHours,
  VideoTestimonials: VideoTestimonials,
  ProjectMasonry: ProjectMasonry,
  PropertyGrid: PropertyGrid,
  CourseCurriculum: CourseCurriculum,
  MenuGrid: MenuGrid,
  ProcessFlow: ProcessFlow,
  PricingMatrix: PricingMatrix,
  SocialFeed: SocialFeed,
  RoadmapTimeline: RoadmapTimeline,
  SkillCloud: SkillCloud,
  Leaderboard: Leaderboard,
  TokenomicsChart: TokenomicsChart,
  ItinerarySection: ItinerarySection,
  DataMetricCard: DataMetricCard,
  StockTicker: StockTicker,
  BookingCalendar: BookingCalendar,
  ReviewWall: ReviewWall,
  TechStack: TechStack,
  ImpactMap: ImpactMap,
  MenuTabs: MenuTabs,
  ProductComparison: ProductComparison,
  VideoPlaylist: VideoPlaylist,
  CertificateShowcase: CertificateShowcase,
  LiveChatPreview: LiveChatPreview,
  LeadMagnet: LeadMagnet,
  PropertySearch: PropertySearch,
  SaasLayout: SaasLayout,
  PortfolioLayout: PortfolioLayout,
  AppPromoLayout: AppPromoLayout,
  EcommerceLayout: EcommerceLayout,
  EventLayout: EventLayout,
  CreatorLayout: CreatorLayout,
  CourseLayout: CourseLayout,
  RestaurantLayout: RestaurantLayout,
  RealEstateLayout: RealEstateLayout,
  AgencyLayout: AgencyLayout,
  TravelLayout: TravelLayout,
  ClinicLayout: ClinicLayout,
  FitnessLayout: FitnessLayout,
  CharityLayout: CharityLayout,
  LocalServiceLayout: LocalServiceLayout,
  LawyerLayout: LawyerLayout,
  InteriorDesignLayout: InteriorDesignLayout,
  PhotographyLayout: PhotographyLayout,
  PodcastLayout: PodcastLayout,
  WeddingLayout: WeddingLayout,
  BookLaunchLayout: BookLaunchLayout,
  MusicReleaseLayout: MusicReleaseLayout,
  GamingGuildLayout: GamingGuildLayout,
  CarRentalLayout: CarRentalLayout,
  PetCareLayout: PetCareLayout,
  CryptoProjectLayout: CryptoProjectLayout,
  SpaLayout: SpaLayout,
  RecruitmentLayout: RecruitmentLayout,
  CrowdfundingLayout: CrowdfundingLayout,
  CoachingLayout: CoachingLayout,
  CoworkingLayout: CoworkingLayout,
  AutoRepairLayout: AutoRepairLayout,
  EducationLayout: EducationLayout,
  CleaningServiceLayout: CleaningServiceLayout,
  ArchitectureLayout: ArchitectureLayout,
  FinancialLayout: FinancialLayout,
  LogisticsLayout: LogisticsLayout,
  BakeryLayout: BakeryLayout,
  DataList: DataList,
  // Fallbacks
  FormSection: ContactForm,
};

interface DynamicRendererProps {
  modules?: LayoutModule[];
  primaryColor?: string;
}

export const DynamicRenderer: React.FC<DynamicRendererProps> = ({ modules, primaryColor }) => {
  if (!modules || modules.length === 0) {
    return (
      <div className="text-slate-500 text-center py-20 bg-slate-900/30 border border-slate-800/50 rounded-3xl border-dashed">
        <p className="text-sm uppercase tracking-widest font-bold mb-2">CHƯA CÓ MODULE NÀO ĐƯỢC TẠO</p>
        <p className="text-xs">Hệ thống AI chưa trả về cấu trúc lắp ráp cho bản vẽ này.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {modules.map((mod, idx) => {
        const Component = moduleMap[mod.type];
        
        if (!Component) {
          return (
            <div key={idx} className="p-4 border border-red-500/50 bg-red-500/10 text-red-400 rounded-xl text-xs">
              <strong>Lỗi:</strong> Không tìm thấy module code thật cho loại <code>{mod.type}</code>
            </div>
          );
        }

        return (
          <div key={idx} className="relative group">
            {/* Nhãn hiển thị tên module khi hover */}
            <div className="absolute -top-3 left-4 px-2 py-1 bg-slate-800 text-slate-300 text-[8px] uppercase tracking-widest font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg border border-slate-700">
              Module: {mod.type}
            </div>
            
            {/* Render component thật */}
            <Component {...mod.props} primary_color={primaryColor} />
          </div>
        );
      })}
    </div>
  );
};
