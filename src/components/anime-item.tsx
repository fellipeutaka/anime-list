import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Anime } from "~/data/animes";
import { Button, ButtonStyles } from "./ui/button";
import { Icons } from "./ui/icons";

interface AnimeItemProps {
  anime: Anime;
}

export function AnimeItem({ anime }: AnimeItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: anime.id,
  });

  return (
    <section
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      data-dragging={isDragging}
      className="grid items-center gap-6 rounded-xl border bg-card p-4 text-card-foreground shadow data-[dragging=true]:opacity-50 sm:grid-cols-[auto,auto,1fr]"
    >
      <Button
        {...listeners}
        {...attributes}
        variant="outline"
        size="icon"
        className="cursor-move"
      >
        <Icons.Hamburger className="size-4" />
      </Button>

      <img
        src={anime.image}
        alt={anime.title}
        className="w-full select-none rounded-md"
      />

      <div className="ml-2 flex flex-col justify-between gap-2 sm:h-2/3">
        <h3 className="font-medium text-lg">{anime.title}</h3>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-muted-foreground text-sm">{anime.meta}</span>
          <a
            href={anime.link}
            target="_blank"
            rel="noopener noreferrer"
            className={ButtonStyles({ className: "gap-2" })}
          >
            <Icons.Play className="size-4" />
            <span>Watch on Crunchyroll</span>
            <Icons.Crunchyroll className="size-4 text-orange-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
