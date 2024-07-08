export type NavItemType = 'text' | 'icon' | 'search';

export interface NavItemProps {
  item: string;
  type: NavItemType;
  icon?: string;
}

export interface NavBarProps {
  title: string;
  icon: string;
  items: Array<{ type: NavItemType; item: string; icon?: string }>;
}