import React from 'react'

import PropTypes from 'prop-types'

import { getLocalizedPath } from "../../i18n";

import { PageContext } from "../../pageContext/";

import { Link } from 'gatsby'

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

LanguageSwitcher.propTypes = {
    render: PropTypes.func
}

LanguageSwitcher.defaultProps = {
    render: ({lang, isCurrent, path}) => !isCurrent ? 
                <Link key={lang.label} to={path}>
                    <span className='active'>{lang.label}</span>
                </Link>
            : <span key={lang.label}>{lang.label}</span>
}

export default LanguageSwitcher;

