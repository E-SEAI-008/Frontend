import { describe, test, expect, vi } from 'vitest';
import { getPost } from './getPost';

describe('getPost', () => {
  test('resolves with post data', async () => {
    const mockPost = { id: 1, title: 'Post 1', body: 'Body 1' };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockPost),
      }),
    );

    // call our function
    const result = await getPost(1);
    expect(result).toEqual(mockPost);

    // check that fetch was called with the right URL
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1',
    );

    // restore fetch back to the real one after the test
    vi.restoreAllMocks();
  });

  test('rejects with an error when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));

    await expect(getPost(99)).rejects.toThrow('Network error');

    vi.restoreAllMocks();
  });
});
