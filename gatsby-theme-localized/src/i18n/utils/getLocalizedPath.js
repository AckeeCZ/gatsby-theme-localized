const getLocalizedPath = (originalPath, locale, languages) => {
    
    const defaultLanguage = languages.find(lang => lang.default);

    if (!defaultLanguage) {
        throw new Error(
            "Default language has to be specified in the language configuration."
        );
    }

    let  keyPath = originalPath.replace(/(\w+)\/$/, "$1");

    // Detect 404
    if (keyPath.match(/^\/?404\/?/gm)) keyPath = 'notFound';
    
    const lang = languages.find(lang => lang.locale === locale);

    const isDefault = locale === defaultLanguage.locale;
    const localizedPath = lang && lang.routes && lang.routes[keyPath];

    if (!localizedPath) {
        throw new Error(
            `You have to specify a translation for all of your routes.\n There is no transalation for ${originalPath} in language ${locale}.`
        );
    }
    return isDefault ? localizedPath : `/${locale}${localizedPath}`;
};

module.exports = getLocalizedPath;
