import React, { useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"


export default (props) => {
    const className = props.children.props.className || 'language-text'

    const language = className.replace("language-", "")
    const matches = className.match(/language-(?<lang>.*)/)

    const CopyButton = props => {
        const [text, setText] = useState("Copy")

        return (
            <button className="code-copy-button" onClick={() => {
                navigator.clipboard.writeText(props.content)
                setText("Copied!")
                setTimeout(() => { setText("Copy")}, 1000)
            }}
            >
                {text}
            </button>
        )
    }

    return (
        <div className="gatsby-highlight">
            <Highlight {...defaultProps} 
                code={props.children.props.children.trim()} 
                language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
                theme=''
            >
            {({ className, tokens, getLineProps, getTokenProps}) => (
                <pre className={className}>
                    <div className="code-header">
                        <span className="language-name">{language}</span>
                        <CopyButton content={props.children.props.children} />
                    </div>
                    <code className={className}>
                    {tokens.map((line, i) => (
                        <div className="code-block" key={i} {...getLineProps({line, key:i})}>
                            <span className="line-number">{i + 1}</span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                    </code>
                </pre>
            )}
            </Highlight>
        </div>
    )
}