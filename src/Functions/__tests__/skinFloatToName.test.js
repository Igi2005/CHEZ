import { describe, test, expect } from '@jest/globals';
import { SkinFloatToName } from '../skinFloatToName';


describe('SkinFloatToName', () => {
    test('should return "Factory New" for float values <= 0.07', () => {
      expect(SkinFloatToName(0.07)).toBe('Factory New');
      expect(SkinFloatToName(0.06)).toBe('Factory New');
      expect(SkinFloatToName(0.0)).toBe('Factory New');
    });
  
    test('should return "Minimal Wear" for float values > 0.07 and <= 0.15', () => {
      expect(SkinFloatToName(0.08)).toBe('Minimal Wear');
      expect(SkinFloatToName(0.15)).toBe('Minimal Wear');
    });
  
    test('should return "Field-Tested" for float values > 0.15 and <= 0.37', () => {
      expect(SkinFloatToName(0.16)).toBe('Field-Tested');
      expect(SkinFloatToName(0.37)).toBe('Field-Tested');
    });
  
    test('should return "Well-Worn" for float values > 0.37 and <= 0.44', () => {
      expect(SkinFloatToName(0.38)).toBe('Well-Worn');
      expect(SkinFloatToName(0.44)).toBe('Well-Worn');
    });
  
    test('should return "Battle-Scarred" for float values > 0.44', () => {
      expect(SkinFloatToName(0.45)).toBe('Battle-Scarred');
      expect(SkinFloatToName(0.99)).toBe('Battle-Scarred');
    });
  });