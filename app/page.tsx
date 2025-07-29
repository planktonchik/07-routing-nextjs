import css from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <section className={css.container}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <article className={css.description}>
          <p>
            NoteHub is a simple and efficient application designed for managing
            personal notes. It helps keep you&apos;re thoughts organized and
            accessible in one place, whether your at home or on the go.
          </p>
          <p>
            The app provides a clean interface for writing, editing, and
            browsing notes. With support for keyword search and structured
            organization, NoteHub offers a streamlined experience for anyone who
            values clarity and productivity.
          </p>
        </article>
      </section>
    </main>
  );
}