import axios from 'axios';
   import type { Note, NewNoteData } from '../types/note';

   const BASE_URL = 'https://notehub-public.goit.study/api/notes';

   const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

   const noteServiceClient = axios.create({
     baseURL: BASE_URL,
     headers: {
       Authorization: `Bearer ${TOKEN}`,
     },
   });

   export interface FetchNoteService {
     notes: Note[];
     totalPages: number;
   }

   export const fetchNotes = async (
     page = 1,
     query = '',
     perPage = 12,
     tag?: string
   ): Promise<FetchNoteService> => {
     const params: Record<string, string | number> = { page, perPage };
     if (query) params.search = query;
     if (tag) params.tag = tag;

     try {
       const res = await noteServiceClient.get<FetchNoteService>('/', { params });
       if (!res.data.notes || !res.data.totalPages) {
         throw new Error('Invalid API response: missing notes or totalPages');
       }
       return res.data;
     } catch (error) {
       console.error('Fetch notes error:', error);
       throw new Error('Failed to fetch notes: ' + (error instanceof Error ? error.message : 'Unknown error'));
     }
   };

   export const createNote = async (noteData: NewNoteData): Promise<Note> => {
     const res = await noteServiceClient.post<Note>('/', noteData);
     return res.data;
   };

   export const deleteNote = async (noteId: number): Promise<Note> => {
     const res = await noteServiceClient.delete<Note>(`/${noteId}`);
     return res.data;
   };

   export const fetchNoteById = async (id: number): Promise<Note> => {
     const res = await noteServiceClient.get<Note>(`/${id}`);
     return res.data;
   };