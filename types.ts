export interface AppSummary {
  app_name: string;
  app_slogan: string;
  app_type: 'image' | 'content' | 'video' | 'sales' | 'coaching' | 'analytics' | 'custom';
  industry: string;
  target_user: string;
  main_goal: string;
}

export interface UiDesign {
  layout_style: string;
  main_sections: string[];
  visual_style: string;
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

export interface Engine {
  system_prompt: string;
  user_prompt_template: string;
  loop_logic: string;
}

export interface Features {
  essential: string[];
  pro: string[];
  god_mode: string[];
}

export interface Security {
  security_rules: string[];
  config_recommendations: string[];
}

export interface AppBlueprint {
  summary: AppSummary;
  idea_titles: string[];
  use_cases: string[];
  ui_design: UiDesign;
  fields: Field[];
  engine: Engine;
  features: Features;
  security: Security;
  upgrades: string[];
  related_apps: string[];
}

export const INITIAL_BLUEPRINT: AppBlueprint | null = null;