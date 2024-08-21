import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  type UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { AnimeList } from "./components/anime-list";
import { AnimeListOverlay } from "./components/anime-list-overlay";
import { SiteFooter } from "./components/site-footer";
import type { Anime } from "./data/animes";
import { useAnimeList } from "./stores/anime-list";

function getAnimePosition(animes: Anime[], animeId: UniqueIdentifier) {
  return animes.findIndex((anime) => anime.id === animeId);
}

export function App() {
  const animes = useAnimeList((state) => state.list);
  const setAnimeList = useAnimeList((state) => state.setList);

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (!over) {
      return;
    }

    if (active.id === over?.id) {
      return;
    }

    const originalPosition = getAnimePosition(animes, active.id);
    const newPosition = getAnimePosition(animes, over.id);

    const newList = arrayMove(animes, originalPosition, newPosition);
    setAnimeList(newList);
  }

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <main className="container space-y-12">
        <h1 className="text-balance font-bold font-display text-4xl leading-tight tracking-tight md:text-5xl">
          My Anime List
        </h1>

        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
          modifiers={[restrictToParentElement]}
        >
          <AnimeList animes={animes} />
          {createPortal(<AnimeListOverlay animes={animes} />, document.body)}
        </DndContext>
      </main>

      <SiteFooter />
    </>
  );
}
