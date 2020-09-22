import React from "react";
import { IntlProvider } from "react-intl";
import Locale from "../../localization";

const locale = Locale.de;

const IntlContext: React.FunctionComponent = ({ children }) => {
  return (
    <IntlProvider
      locale={locale.locale}
      defaultLocale="de"
      messages={locale.Messages}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlContext;
