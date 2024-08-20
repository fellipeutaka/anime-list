export type IconProps = React.ComponentProps<"svg">;
export type Icon = (props: IconProps) => React.JSX.Element;

export const Icons = {
  Crunchyroll: (props) => (
    <svg
      role="img"
      aria-label="Crunchyroll"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.818 26.871c.01-11.65 9.466-21.086 21.117-21.073 11.153.01 20.275 8.678 21.022 19.638.028-.467.043-.94.043-1.413C48.014 10.77 37.28.013 24.024 0 10.768-.014.014 10.721 0 23.976-.014 37.23 10.721 47.987 23.976 48c.548 0 1.092-.018 1.63-.054-11.051-.676-19.8-9.856-19.788-21.076zm32.568.312a8.2 8.2 0 01-8.19-8.208 8.204 8.204 0 015.424-7.71 17.923 17.923 0 00-8.375-2.073c-9.95-.01-18.022 8.047-18.032 17.995-.01 9.95 8.047 18.022 17.995 18.033 9.948.01 18.022-8.047 18.032-17.997 0-1.127-.103-2.23-.301-3.301a8.187 8.187 0 01-6.554 3.261h.001z"
      />
    </svg>
  ),
  Hamburger: (props) => (
    <svg
      role="img"
      aria-label="Hamburger menu"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5m0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5"
        clipRule="evenodd"
      />
    </svg>
  ),
  Play: (props) => (
    <svg
      role="img"
      aria-label="Play"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.242 2.322a.5.5 0 01.491-.014l9 4.75a.5.5 0 010 .884l-9 4.75A.5.5 0 013 12.25v-9.5a.5.5 0 01.242-.428M4 3.579v7.842L11.429 7.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<string, Icon>;
