export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="flex flex-col h-full w-full md:hidden">Mobile</section>
      <section className="md:flex h-full w-full mhidden">Desktop</section>
    </main>
  );
}
