export default function Home({
  pokemon,
}: {
  pokemon: Record<string, string>[];
}) {
  return (
    <main>
      <h1>Pokemon</h1>
      {pokemon.map((p) => (
        <div key={p.id}>
          {JSON.stringify(p)}
        </div>
      ))}
    </main>
  );
}

export async function getServerSideProps({
  params: { count },
}: {
  params: { count: string };
}) {
  const pokemonReq = await fetch(
    `http://127.0.0.1:8080/pokemon/${count}`,
    {
      cache: "no-cache",
    }
  );

  const pokemon = await pokemonReq.json();
  return {
    props: {
      pokemon,
    },
  };
}
