import { cn } from './Styles';

describe('Styles', () => {
  describe('Merge classname', () => {
    it('should merge tailwind classname without conflict', () => {
      const classNameOne = {
        'px-2': true,
        'py-1': true,
        'h-7': false,
        'bg-red': true,
        'hover:bg-dark-red': true,
      };
      const classNameTwo = {
        'p-3': true,
        'bg-[#000000]': true,
      };

      expect(cn(classNameOne, classNameTwo)).toBe('hover:bg-dark-red p-3 bg-[#000000]');
    });
  });
});
