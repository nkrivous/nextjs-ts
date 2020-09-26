import ErrorPage from "~/src/modules/errorPage/components/ErrorPage";
import { ErrorPageProps } from "~/src/modules/errorPage/types/errorPageProps";
import { guardError } from "~/src/modules/errorPage/utils";

interface Props {
  data: unknown;
}

export default function ServerErrorPage(props: Props | ErrorPageProps) {
  if (guardError(props)) {
    return <ErrorPage />;
  }

  return null;
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://example.com/errors/500");
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    return { props: { error: JSON.stringify(error) } };
  }
}
