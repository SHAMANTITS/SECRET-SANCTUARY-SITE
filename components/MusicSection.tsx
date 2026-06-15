const songs = [
  {
    title: "Become the Flame",
    src: "/SONG/become-the-flame.mp3",
    description:
      "A song for the moment you stop hiding from your own fire and let transformation begin.",
  },
  {
    title: "Secret Sanctuary",
    src: "/SONG/secret-sanctuary.mp3",
    description:
      "The sound of arriving somewhere ancient, alive, and quietly waiting for you.",
  },
  {
    title: "The Lens of Reality",
    src: "/SONG/the-lens-of-reality.mp3",
    description:
      "A reflective track about perception, choice, and the way one question can change everything.",
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="bg-sand/40 py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-14">
          <p className="text-mist text-xs uppercase tracking-[0.2em] mb-3">
            Sound of the Sanctuary
          </p>
          <h2 className="font-serif text-bark text-3xl lg:text-4xl mb-3">
            Songs from the Sanctuary
          </h2>
          <p className="text-bark-light italic">
            Quiet companions for the journey inward.
          </p>
        </div>

        <ul className="space-y-6">
          {songs.map((song) => (
            <li
              key={song.src}
              className="bg-cream border border-sand rounded-2xl px-6 py-7 sm:px-8 shadow-[0_10px_30px_-20px_rgba(45,74,62,0.25)]"
            >
              <h3 className="font-serif text-bark text-xl sm:text-2xl mb-2">
                {song.title}
              </h3>
              <p className="text-bark-light text-sm sm:text-base italic leading-relaxed mb-5">
                {song.description}
              </p>
              <audio
                controls
                preload="none"
                className="w-full"
                aria-label={`Play ${song.title}`}
              >
                <source src={song.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
