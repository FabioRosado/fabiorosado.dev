/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./src/components/highlight/CodeBlock"

const component = {
    pre: CodeBlock
}

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={component}>{element}</MDXProvider>
}