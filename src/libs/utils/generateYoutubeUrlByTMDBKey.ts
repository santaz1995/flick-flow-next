import { YOUTUBE_EMBED_URL } from '@/libs/constants/project';

export const generateYoutubeUrlByTMDBKey = (key?: string): string | undefined => {
  if (!key) {
    return;
  }
  return `${YOUTUBE_EMBED_URL}${key}`;
};
