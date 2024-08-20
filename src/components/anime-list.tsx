import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Anime } from "~/data/animes";
import { AnimeItem } from "./anime-item";

interface AnimeListProps {
  animes: Anime[];
}

export function AnimeList({ animes }: AnimeListProps) {
  return (
    <SortableContext items={animes} strategy={verticalListSortingStrategy}>
      <div className="space-y-6">
        {animes.map((anime) => (
          <AnimeItem key={anime.id} anime={anime} />
        ))}
      </div>
    </SortableContext>
  );
}
