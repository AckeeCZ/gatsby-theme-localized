import React from "react"
import { compose } from "recompose";
import Layout from "../../components/Layout/Layout"


import { injectIntl } from "react-intl";
import { withPageContext } from "gatsby-theme-localized";


export const content = {
  marginTop: '1.25rem',
}

const SubPage = ({ intl }) => {
  return (
    <Layout>
          <p style={content}>{intl.formatMessage({ id: "subPage.content" })}</p>
    </Layout>
  )
}

export default compose(
  withPageContext,
  injectIntl,
)(SubPage);