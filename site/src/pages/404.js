import React from 'react';

import { NotFoundPage, withPageContext } from 'gatsby-theme-localized'

import { FormattedMessage } from 'react-intl'

export const CustomNotFound = ({ pageContext, location, setLocale }) => (
    <NotFoundPage {...{ pageContext, location, setLocale } }>
        <FormattedMessage id='404.title' />
    </NotFoundPage>
)
 

export default  withPageContext(CustomNotFound);
