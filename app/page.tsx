import Link from 'next/link';

const sections = [
  {
    title: 'Product',
    href: '/docs/product',
    description:
      'Platform model, service boundaries, deployments, and how the control plane maps to runtime APIs.',
  },
  {
    title: 'SDKs',
    href: '/docs/sdks',
    description:
      'Clean starting points for React, Next.js, React Router, TanStack Router, Node, and Rust integrations.',
  },
  {
    title: 'API Contracts',
    href: '/docs/reference',
    description:
      'OpenAPI-backed reference generated from the specs already checked into this repository.',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-12">
      <div className="rounded-[2rem] border border-stone-700/10 bg-white/70 p-8 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
            Wacht Documentation
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
            Replace the content dump with a documentation system that can scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            This docs app is built to keep product docs, SDK guides, and API contracts in one place
            without repeating the same information across frameworks and services.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/docs"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Open docs
          </Link>
          <Link
            href="/docs/reference"
            className="rounded-full border border-stone-300 bg-stone-50/80 px-5 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
          >
            Browse API contracts
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,245,238,0.88))] p-6 transition hover:-translate-y-0.5 hover:border-teal-700/30 hover:shadow-lg"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
                {section.title}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-stone-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-700">{section.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-stone-950 group-hover:text-teal-700">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
