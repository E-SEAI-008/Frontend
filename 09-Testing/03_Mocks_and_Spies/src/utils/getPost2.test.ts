import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPost } from './getPost';

describe('getPost', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1, title: 'Post 1', body: 'Body 1' }),
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('resolves with post data', async () => {
    const result = await getPost(1);
    expect(result.title).toBe('Post 1');
  });

  test('rejects on failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    await expect(getPost(99)).rejects.toThrow('Network error');
  });

  test('logs the post ID being fetched', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    await getPost(2);

    // the spy recorded that console.log was called with this exact string
    expect(consoleSpy).toHaveBeenCalledWith('Fetching post with ID: 2');

    consoleSpy.mockRestore();
    // afterEach will restore the fetch mock — we just need to clean up the spy here
  });
});
