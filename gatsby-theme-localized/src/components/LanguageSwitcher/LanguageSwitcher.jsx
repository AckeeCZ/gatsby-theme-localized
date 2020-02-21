import React from 'react'

import { getLocalizedPath } from "../../i18n";

import { PageContext } from "../../pageContext/";

const LanguageSwitcher = ({ render }) => {
    return (
        <PageContext.Consumer>
        {({ originalPath, locale, languages }) => {
            return(
                <div>
                {languages.map(lang => {
                    const isCurrent = lang.locale === locale;
                    const path = getLocalizedPath(originalPath, lang.locale, languages)

                    return render({lang, isCurrent, path})
                })}
             </div>
        )}}
    </PageContext.Consumer>
    );   
} 

export default LanguageSwitcher;
