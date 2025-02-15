import { Event } from '@/models/event';

export const dummyEvents: Event[] = [
  {
    id: '1',
    name: 'Event 1',
    date: '2024-12-01',
    presentationsId: ['1', '2', '3']
  },
  {
    id: '2',
    name: 'Event 2',
    date: '2025-01-01',
    presentationsId: ['4', '5', '6']
  },
  {
    id: '3',
    name: 'Event 3',
    date: '2026-01-01',
    presentationsId: ['7', '8', '9']
  }
];
