export function getServerSideProps({
  params: { count },
}: {
  params: { count: string };
}) {
  return {
    props: {
      count,
    },
  };
}

export default function Home({ count }: { count: string }) {
  return (
    <main>
      {new Array(+count || 1).fill(0).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </main>
  );
}
