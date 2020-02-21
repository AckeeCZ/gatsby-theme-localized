import React from "react"
import { compose } from "recompose";
import Layout from "../components/Layout/Layout"


import { injectIntl, FormattedMessage } from "react-intl";
import { withPageContext } from "gatsby-theme-localized";


export const content = {
  marginTop: '1.25rem',
}

const IndexPage = ({ intl }) => {
  return (
    <Layout>
          <p style={content}>{intl.formatMessage({ id: "home.content" })}</p>
          <FormattedMessage id='home.rich' values={{
            a: child => <a href='https://google.com'>rich {child}</a>
          }}/>
    </Layout>
  )
}

export default compose(
  withPageContext,
  injectIntl,
)(IndexPage);