/**
 * SOTA Enterprise-Grade Product Variant System
 * Enhanced ProductDimension with variant-specific attributes
 * Supports: color-based images, per-variant materials/features, bilingual content
 */

// Enhanced ProductDimension - now includes variant-specific attributes
export interface ProductDimension {
  id: string;
  sku: string;
  
  // Physical dimensions
  width: number;
  height: number;
  depth: number;
  price: number;
  
  // Variant-specific image (shown when this variant is selected)
  image?: string;
  
  // Color for this specific variant
  color?: string;        // Greek color name
  colorEn?: string;      // English color name  
  colorHex?: string;     // Hex code for color swatch display
  
  // Variant-specific materials
  materials?: string[];      // Greek
  materialsEn?: string[];    // English
  
  // Variant-specific features/characteristics
  features?: string[];       // Greek
  featuresEn?: string[];     // English
  
  // Stock status for this variant
  inStock?: boolean;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  category: string;
  subcategory?: string;
  tags?: string[];
  basePrice: number;
  salePrice?: number;
  images: ProductImage[];
  dimensions: ProductDimension[];
  
  // Default materials (fallback when no variant selected)
  materials: string[];
  materialsEn?: string[];    // English materials
  
  // Default colors (fallback when no variant selected)  
  colors: string[];
  colorsEn?: string[];       // English colors
  
  // Default features (fallback when no variant selected)
  features: string[];
  featuresEn?: string[];     // English features
  
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description?: string;
  image?: string;
  productCount: number;
}
