/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { languages, getLocalizedPath } = require("./src/i18n");

exports.onCreatePage = ({ page, actions }, themeOptions) => {
    const { createPage, deletePage } = actions;

    if (page.internalComponentName === "ComponentDev404Page") {
        return;
    }

    return new Promise(resolve => {
        deletePage(page);

        themeOptions.languages.forEach(lang => {
            const localizedPath = getLocalizedPath(page.path, lang.locale, themeOptions.languages);
            const localePage = {
                ...page,
                path: localizedPath,
                context: {
                    locale: lang.locale,
                    originalPath: page.path,
                    languages: themeOptions.languages
                }
            };
            createPage(localePage);
        });

        resolve();
    });
};


