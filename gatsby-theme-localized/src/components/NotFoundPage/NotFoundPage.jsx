import React, {useLayoutEffect} from 'react'

const NotFoundPage = ({ pageContext, location, setLocale, children }) => {
    // Change language of 404 based on user url address
    
    const getDefaultLanguage = () => pageContext.languages.find(lang => lang.default);
    const defaultLanguage = getDefaultLanguage()

    const locales = pageContext.languages.map(item => item.locale)

    const localesInclude = (test) => locales.includes(test)

    useLayoutEffect(() => {
        const languageInUrl = location.pathname.split('/')[1];

        if (languageInUrl === pageContext.locale) return;

        if (localesInclude(languageInUrl)) {
            setLocale(languageInUrl)
        } else (
            setLocale(defaultLanguage.locale)
        )


    });

   return (
       <>
        {children}
       </>
   )
};

export default NotFoundPage;