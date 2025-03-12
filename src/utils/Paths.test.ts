import { getBaseUrl } from './Paths';

describe('Paths', () => {
  describe('Get the base URL', () => {
    it('should get Next public URL', () => {
      vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://example.com');

      expect(getBaseUrl()).toBe('https://example.com');

      vi.unstubAllEnvs();
    });

    it('should get Vercel production URL', () => {
      vi.stubEnv('VERCEL_ENV', 'production');
      vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', 'example.com');

      expect(getBaseUrl()).toBe('https://example.com');

      vi.unstubAllEnvs();
    });

    it('should get Vercel URL', () => {
      vi.stubEnv('VERCEL_URL', 'example.vercel.app');

      expect(getBaseUrl()).toBe('https://example.vercel.app');

      vi.unstubAllEnvs();
    });

    it('should get localhost', () => {
      expect(getBaseUrl()).toBe('http://localhost:3000');
    });
  });
});
