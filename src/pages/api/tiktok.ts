export const config = { runtime: 'nodejs' };

import type { APIRoute } from 'astro';
import tiktok from '@tobyg74/tiktok-api-dl';

export const GET: APIRoute = async ({ request, url }) => {
  const tiktokUrl = new URL(request.url).searchParams.get('url');

  if (!tiktokUrl) {
    return new Response(JSON.stringify({ error: 'Missing URL' }), {
      status: 400,
    });
  }

  try {
    const result = await tiktok(tiktokUrl);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch TikTok data' }), {
      status: 500,
    });
  }
};
