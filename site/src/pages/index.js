import React from "react"
import { compose } from "recompose";
import Layout from "../components/Layout/Layout"


import { injectIntl } from "react-intl";
import withPageContext from "gatsby-theme-localized/src/pageContext";


export const content = {
  marginTop: '1.25rem',
}

const IndexPage = ({ intl }) => {
  return (
    <Layout>
          <p style={content}>{intl.formatMessage({ id: "home.content" })}</p>
    </Layout>
  )
}

export default compose(
  withPageContext,
  injectIntl,
)(IndexPage);