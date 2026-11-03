import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Lorem ipsum dolor sit amet
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </>
  );
}
