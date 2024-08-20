import {
  DragOverlay,
  type UniqueIdentifier,
  useDndContext,
} from "@dnd-kit/core";
import type { Anime } from "~/data/animes";
import { AnimeItem } from "./anime-item";

function getAnimeById(animes: Anime[], animeId?: UniqueIdentifier) {
  return animes.find((anime) => anime.id === animeId);
}

interface AnimeListOverlayProps {
  animes: Anime[];
}

export function AnimeListOverlay({ animes }: AnimeListOverlayProps) {
  const { active } = useDndContext();
  const anime = getAnimeById(animes, active?.id);

  return (
    <DragOverlay>{anime ? <AnimeItem anime={anime} /> : null}</DragOverlay>
  );
}
