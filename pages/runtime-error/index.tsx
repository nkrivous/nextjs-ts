interface Props {
  data: unknown;
}

export default function RuntimeErrorPage({ data }: Props) {
  return (data as Array<undefined>)[0];
}

export async function getServerSideProps() {
  return { props: { data: null } };
}
