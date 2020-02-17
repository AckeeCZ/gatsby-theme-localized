import React from "react"

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import { FormattedMessage } from "react-intl";


const Header = () => (
    <div>
        <FormattedMessage id="header" />
        <LanguageSwitcher />
    </div>
);

export default Header;
