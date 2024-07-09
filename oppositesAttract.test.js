import { describe, it, expect } from "vitest";
import { isLove } from "./oppositesAttract";

describe('isLove', () => {
    it('return true if one flower have par de petalos y la otra un numeroimpar', () => {
        
    const result1 = isLove(1, 4);
    console.log('Resultado 1:', result1); 
    expect(result1).toBe(true);
    });
  });
  
  describe('isLove', () => {
    it('return false if one flower have par de petalos y la otra par de petalos', () => {
        
    const result2 = isLove(2, 2);
    console.log('Resultado 2:', result2);
  
    expect(result2).toBe(false);
    });
  });
  
  describe('isLove', () => {
    it('return true if one flower have zero petalos y la otra have one petalos', () => {
        
    const result3 = isLove(0, 1);
    console.log('Resultado 3:', result3);
  
    expect(result3).toBe(true);
    });
  });
  
  describe('isLove', () => {
    it('return false if the two have zero par de petalos', () => {
        
    const result4 = isLove(0, 0);
    console.log('Resultado 4:', result4);
  
    expect(result4).toBe(false);
    });
  });