import React from 'react'
import { Link } from 'gatsby'

import { languages, getLocalizedPath } from "../../gatsby-theme-localized/i18n";

import { PageContext } from "gatsby-theme-localized/src/pageContext";

const LanguageSwitcher = () => {
    return (
        <PageContext.Consumer>
        {({ originalPath, locale }) => {
            return(
            <div>

                {languages.map(lang =>
                    lang.locale === locale ? (
                        <span key={lang.locale}>{lang.label}</span>
                    ) : (
                        <Link
                            key={lang.locale}
                            to={getLocalizedPath(originalPath, lang.locale)}
                        >
                            <span>{lang.label}</span>
                        </Link>
                    )
                )}
            </div>
        )}}
    </PageContext.Consumer>
    );   
} 

export default LanguageSwitcher;
