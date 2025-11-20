import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatData {
  name: string;
  value: number;
  fullMark: number;
  fill: string;
}

export interface AllocationData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

export enum UserType {
  USER = 'Users',
  MINER = 'Miners',
  DEV = 'Developers'
}