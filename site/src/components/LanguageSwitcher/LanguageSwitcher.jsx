import React from 'react'
import { Link } from 'gatsby'

import { LanguageSwitcher as Switcher } from "gatsby-theme-localized"

const renderCustomSwitcher = ({ lang, isCurrent, path }) => {
    return (
        !isCurrent ? 
            <Link key={lang.label} to={path}>
                <span className='active'>{lang.label}</span>
            </Link>
            : <span key={lang.label}>{lang.label}</span>
    )
}

const LanguageSwitcher = () => {
    return (
        <Switcher render={renderCustomSwitcher} />
    )
}

export default LanguageSwitcher;
