

export type NavItemType = 'text' | 'icon' | 'search';

export interface NavItemProps {
  item: string;
  type: NavItemType;
  icon?: string;
  className?:string;
}

export interface NavBarProps {
  title: string;
  icon: string;
  items: Array<{ type: NavItemType; item: string; icon?: string; className?:string }>;
}