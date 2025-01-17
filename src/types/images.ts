export interface ImageInfo {
  id: number;
  title: string;
  path: string;
  publicPath: string;
  category?: string;
  description?: string;
  tags: string[];
  element?: string;
  useCase?: string;
}

export interface CategoryInfo {
  title: string;
  path: string;
  publicPath: string;
}

export interface Categories {
  [key: string]: CategoryInfo;
}

export type CategoryKey = 'todos' | 'pentagramas' | 'hexagramas' | 'sigilos' | 'talismanes';
export type ToolCategoryKey = 'todos' | 'armas' | 'tatvas' | 'formasDivinas';