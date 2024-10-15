export interface ProductsResponse {
  data: ProductItem[];
  totalRecords: number;
  currentPage: number;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  images?: ProductImage[];
}

export interface ProductImage {
  id: string;
  url: string;
  productId: string;
  public_id: string
}

export interface CreateProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface ProductDeletedResponse {
  imageDeleted:            ImageDeleted;
  isDeleted:               IsDeleted;
  isDeletedFromClaudinary: IsDeletedFromClaudinary;
}

export interface ImageDeleted {
  id:        string;
  url:       string;
  public_id: string;
}

export interface IsDeleted {
  raw:      any[];
  affected: number;
}

export interface IsDeletedFromClaudinary {
  result: string;
}
