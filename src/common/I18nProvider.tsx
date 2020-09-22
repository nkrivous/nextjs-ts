import React, { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import Locale from "../../localization";

const locale = Locale.de;

export default function I18nProvider({ children }: PropsWithChildren<{}>) {
  return (
    <IntlProvider
      locale={locale.locale}
      defaultLocale="de"
      messages={locale.Messages}
    >
      {children}
    </IntlProvider>
  );
}
