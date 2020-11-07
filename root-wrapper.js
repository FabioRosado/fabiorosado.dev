import { MDXProvider } from "@mdx-js/react"
import React from "react"
import CodeBlock from "./src/components/highlight/CodeBlock"

const component = {
  pre: CodeBlock,
}

export const wrapPageElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>
}
