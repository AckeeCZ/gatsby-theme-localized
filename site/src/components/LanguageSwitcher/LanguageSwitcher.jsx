import React from 'react'
import { Link } from 'gatsby'

import LanguageSwitcher from "gatsby-theme-localized/src/components/LanguageSwitcher/LanguageSwitcher"

const customSwitcherElement = ({ lang, isCurrent, path }) => {
    return (
        !isCurrent ? 
            <Link key={lang.label} to={path}>
                <span className='active'>{lang.label}</span>
            </Link>
            : <span key={lang.label}>{lang.label}</span>
    )
}

const Switcher = () => {
    return (
        <LanguageSwitcher render={customSwitcherElement} />
    )
}

export default Switcher;
