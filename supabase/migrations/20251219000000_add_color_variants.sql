-- Add color_variants column to products table for per-color images
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS color_variants jsonb;
