export type Language = 'ko' | 'en' | 'ja';

export type TabType = 'main' | 'sub' | 'world' | 'group';

export interface CharacterProfile {
  id: string;
  name: string;
  subName?: string; // 애칭 등
  role: string;
  age: string;
  image?: string;
  tags: string[]; // 신체 스펙 등 요약
  keywords: string[]; // 성격 키워드 해석
  mbti: string;
  description: string; // 한줄 소개
  details: {
    title: string;
    content: string[];
  }[];
  themeColor: string;
}

export interface CityInfo {
  name: string;
  etymology?: string;
  description: string[];
  features: string[];
}

export interface WorldRegion {
  name: string;
  description: string;
  cities: CityInfo[];
}

export interface GroupInfo {
  name: string;
  description: string[];
  members: {
    name: string;
    role: string;
    desc: string;
  }[];
}