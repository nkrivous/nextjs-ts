import { ErrorPageProps } from "./types/errorPageProps";

export function guardError(data: any): data is ErrorPageProps {
  return "error" in data;
}
