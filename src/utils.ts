import { Offer } from './types/offer.ts';
import {Review} from './types/review.ts';

export function getRandomCards<T>(data: T[], count: number): T[] {
  return [...data].sort(() => Math.random() - 0.5).slice(0, count);
}
export function getRatingWidth(props: Offer): string {
  return `${Math.round(props.rating) * 20}%`;
}

export function getReviewRatingWidth(props: Review): string {
  return `${Math.round(props.rating) * 20}%`;
}

export function getReviewDate(date: string): string {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

// export const getOfferRoute = (id: string) => `/offer/${id}`;
