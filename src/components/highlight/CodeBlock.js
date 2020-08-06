import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"


export default (props) => {
    const className = props.children.props.className || 'language-text'
    const matches = className.match(/language-(?<lang>.*)/)

    return (
        <div className="gatsby-highlight">
            <Highlight {...defaultProps} 
                code={props.children.props.children.trim()} 
                language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
                theme=''
            >
            {({ className, tokens, getLineProps, getTokenProps}) => (
                <pre className={className}>
                    <code className={className}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({line, key:i})}>
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