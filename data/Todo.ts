import { 
  Download, Smartphone, BatteryMedium, ShieldAlert, 
  Pill, Briefcase, Droplets, type LucideIcon 
} from "lucide-react";

export type Category = 'Digital' | 'Physical' | 'Essential';

export interface TodoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon; 
  priority: 'high' | 'medium' | 'low';
  category: Category;
}

export const SURVIVAL_TODOS: TodoItem[] = [
  {
    id: 'download',
    title: 'Download Archive',
    subtitle: 'Full_Data_Package.zip',
    description: 'Bake 400+ PDFs directly into your hardware. Essential for when the global network goes dark.',
    icon: Download,
    priority: 'high',
    category: 'Digital'
  },
  {
    id: 'install',
    title: 'Offline Mode',
    subtitle: 'Install_To_Device',
    description: 'Converts this web portal into a standalone app that works without an internet connection.',
    icon: Smartphone,
    priority: 'high',
    category: 'Digital'
  },
  {
    id: 'battery',
    title: 'Power Reserve',
    subtitle: 'Charge_All_Units',
    description: 'Ensure all portable power banks and solar arrays are at 100% capacity.',
    icon: BatteryMedium,
    priority: 'medium',
    category: 'Physical'
  },
  {
    id: 'meds',
    title: 'Medical Prep',
    subtitle: 'Audit_First_Aid',
    description: 'Check expiration dates on antibiotics and replenish sterile gauze supplies.',
    icon: Pill,
    priority: 'medium',
    category: 'Essential'
  },
  {
    id: 'bag',
    title: 'Go-Bag Prep',
    subtitle: '72_Hour_Kit',
    description: 'Pack essentials for rapid evacuation: clothes, documents, and tools.',
    icon: Briefcase,
    priority: 'high',
    category: 'Physical'
  },
  {
    id: 'water',
    title: 'Water Supply',
    subtitle: 'Purification_Ready',
    description: 'Ensure you have 3 liters of water per person per day stored.',
    icon: Droplets,
    priority: 'high',
    category: 'Essential'
  },
  {
    id: 'comms',
    title: 'Sync Comms',
    subtitle: 'Frequency_Check',
    description: 'Calibrate radio frequencies to local emergency broadcast channels.',
    icon: ShieldAlert,
    priority: 'low',
    category: 'Essential'
  },
];