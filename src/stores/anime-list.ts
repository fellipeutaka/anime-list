import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Anime, INITIAL_ANIME_LIST } from "~/data/animes";

export interface AnimeStore {
  list: Anime[];
  setList: (list: Anime[]) => void;
}

export const useAnimeList = create<AnimeStore>()(
  persist(
    (set) => ({
      list: INITIAL_ANIME_LIST,
      setList: (list) => set({ list }),
    }),
    {
      name: "anime-list",
    }
  )
);
