import React, {useLayoutEffect} from 'react'

import withPageContext from '../../pageContext'

const NotFoundPage = ({ pageContext, location, setLocale, children }) => {
    // Change language of 404 based on user url address
    useLayoutEffect(() => {
        const defaultLanguage = () => pageContext.languages.find(lang => lang.default);
        const locales = pageContext.languages.map(item => item.locale)

        const localesInclude = (locale) => locales.includes(locale)
        const languageInUrl = location.pathname.split('/')[1];

        if (languageInUrl === pageContext.locale) return;

        if (localesInclude(languageInUrl)) {
            setLocale(languageInUrl)
        } else {
            setLocale(defaultLanguage().locale)
        }
    });

   return (
       <>
        {children}
       </>
   )
};

export default  withPageContext(NotFoundPage);