import React, {useState} from "react";
import PropTypes from "prop-types";

import { IntlProvider } from "react-intl";

import PageContext from "./PageContext";

import "../i18n/config/reactIntl";
import translations from "../i18n/translations";

import { getDisplayName } from "../utils";

const withPageContext = Component => {
    const WrapperComponent = props => {
        const [locale, setLocale] = useState(props.pageContext.locale);
        return (
            <IntlProvider locale={locale} messages={translations[locale]}>
                <PageContext.Provider value={{ ...props.pageContext }}>
                    <Component {...props} setLocale={setLocale} />
                </PageContext.Provider>
            </IntlProvider>
        );
    };
    WrapperComponent.displayName = `PageContext(${getDisplayName(Component)})`;
    return WrapperComponent;
};

withPageContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default withPageContext;
