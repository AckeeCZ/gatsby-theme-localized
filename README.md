<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Gatsby Theme Localized

Gatsby theme v1 based on [gatsby-starter-intl](https://github.com/tomekskuta/gatsby-starter-intl).

[Checkout the demo!](https://gatsby-starter-internationalized.ack.ee)

## Features

-   **internationalized page content** - via `react-intl`
-   **internationalized routes** - via language configuration
-   **lightweight** - includes only internationalization code

-   `LocalizedLink` - built-in link component handling route generation
-   `LanguageSwitcher` - built-in language switcher component

## How to start

## Gatsby-theme-localized
Behaves like a node_module for now its implemented using workspaces.
This theme lets you use localization out of the box, without having to worry about implementation details.

All you have to do is to include it in your core **gatsby-config.js**

```javascript
module.exports = {
  plugins: [
      {
        resolve: 'gatsby-theme-localized',
        options: {
          languages: require('./src/gatsby-theme-localized/i18n/config/languages'),
        }
      }
    ]
}
```

And your core workspace **package.json** file

```javascript
"dependencies": {
    "gatsby": "^2.18.22",
    "gatsby-theme-localized": "*",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
}
```

You can see example implementation in the **site** folder

## Site
Site is the example of your core workspace, that could be extended by themes.

Your site should also contain following directories and files.

```bash
|—— site
|   |—— src
|       |—— gatsby-theme-localized
|           |—— i18n
|               |—— config   
|               |   |—— languages.js
|               |   |—— reactIntl.js # is optional for overriding pollyfills etc
|               |—— translations #contains all locale files
|                   |—— en.yml 
|                   |—— de.yml  
```

## Running the project 
`yarn workspace site`

when all packages are installed then

`yarn workspace site develop`

For more available commands, check scripts field in **package.json**

## How it works

Gatsby creates **static pages** for every language sets in the configuration in [src/i18n/config/languages.js](src/i18n/config/languages.js). The `i18n` folder is being shadowed to [site/src/gatsby-theme-localized/i18n/config/languages.js](site/src/gatsby-theme-localized/i18n/config/languages.js) 

[learn more about shadowing here:](https://www.gatsbyjs.org/docs/themes/shadowing/)

Say you have two languages:

-   `cs` ,
-   `en` and is a default language,

Gatsby then creates:

-   `/cs/stranka1`,
-   `/page1`, 

names depend on your configuration.

### Translations

Translations are set in [src/i18n/translations](site/src/gatsby-theme-localized/i18n/translations). We use flat structure set in yaml files. There should be a yaml file for every language (`cs.yaml`, `en.yaml` etc.)

```jsx
<FormattedMessage id="home.title" />
```

Translation is in `site/src/gatsby-theme-localized/i18n/translations/en.yaml` and looks like:

```yaml
home.title: "Homepage"
```

### Languages

Language list is in [site/src/gatsby-theme-localized/i18n/config/languages.js](site/src/gatsby-theme-localized/i18n/config/languages.js). Elements of array have following attributes:

-   locale - a key to identify your locale,
-   label - a locale name,
-   default - a flag if the language is default (routes won't be prepend with locale),
-   routes - an object with translations for app routes,

Example:

```js
{
        locale: "cs",
        label: "Čeština",
        routes: {
            "/": "/",
            "/page1": "/stranka1",
            "/subpage/page1": "/podstranka/stranka1",
        }
    },
    {
        locale: "en",
        label: "English",
        default: true,
        routes: {
            "/": "/",
            "/page1": "/page1",
            "/subpage/page1": "/subpage/page1",
        }
    },
```

### React Intl locales
Don't forget to add `react-intl` locales for your languages in [site/src/gatsby-theme-localized/i18n/config/reactIntl.js](site/src/gatsby-theme-localized/i18n/config/reactIntl.js).

### PageContext
`PageContext` includes `locale` and `originalPath` you can use in your pages. It is used by `LocalizedLink` to create correct link and by `LanguageSwitcher` to switch to correct language version of a page.

`withPageContext` wraps your page with `react-intl` provider and our own `PageContext` provider.

```jsx
// src/pages/my-page.jsx

import withPageContext from "../pageContext";

const IndexPage = ({ intl }) => (
    <React.Fragment>
        <h1>
            <FormattedMessage id="home.title" />
        </h1>
    </React.Fragment>
);

export default withPageContext(IndexPage);
```

## Localizing 404
To localize your 404, you can use the `NotFoundPage.js` component. In your `404.js`

This component ensures that the right locale is asigned to your 404. 

```jsx
// src/pages/404.js
import React from 'react';

import { NotFoundPage } from 'gatsby-theme-localized'

import { FormattedMessage } from 'react-intl'

export const CustomNotFound = ({ pageContext, location, setLocale }) => {
    return (
    <NotFoundPage {...{ pageContext, location, setLocale }}>
        <FormattedMessage id='404.title'/>
    </NotFoundPage>
)}
 

export default CustomNotFound;
```

## Contributing

If you have any question, see bugs or you think some feature can be written better - just open pull request or issue. I will be happy to help and learn from you.

## License

[MIT](https://opensource.org/licenses/MIT)
