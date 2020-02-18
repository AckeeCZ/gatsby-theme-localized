// react-intl no longer supports addLocaleData for plurals, you can polyfill it with @formatjs like this

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/en'); // Add locale data for de
    require('@formatjs/intl-pluralrules/dist/locale-data/cs'); // Add locale data for cs
}