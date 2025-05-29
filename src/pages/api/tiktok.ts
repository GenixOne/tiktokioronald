// src/pages/api/tiktok.ts
import type { APIRoute } from "astro";
import { NextApiRequest, NextApiResponse } from 'next'; // Vercel uses this convention
import tiktok from '@tobyg74/tiktok-api-dl';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = req.query.url as string;

  if (!url) {
    return res.status(400).json({ error: 'Missing TikTok URL' });
  }

  try {
    const result = await tiktok(url);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch TikTok data' });
  }
}
