import React, { useState, useEffect } from "react"
import useWindowDimensions from "../hooks/windows"

const getIds = items => {
    return items.reduce((acc, item) => {
        if (item.url) {
            acc.push(item.url.slice(1))
        }
        if (item.items) {
            acc.push(...getIds(item.items))
        }
        return acc
    }, [])
}

function useActiveId(itemIds, subtitleSlug) {
    const [activeId, setActiveId] = useState(``);
    const [pastSubtitle, setPastSubtitle] = useState(false)
    const [reachedEnd, setReachedEnd] = useState(false)
    const [lastEntry, setLastEntry] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (!lastEntry) {
                    setLastEntry(entries.slice(-1)[0])
                }
                entries.forEach((entry) => {
                    if (entry.target.id === subtitleSlug) {
                        console.log(reachedEnd)
                        if (!entry.isIntersecting && !reachedEnd) {
                            setPastSubtitle(true)
                        } else {
                            setActiveId(entry.target.id)
                            setPastSubtitle(false)
                        }
                    }
                    if (entry.isIntersecting) {
                        if (lastEntry && entry.target.id === lastEntry.target.id) {
                            setReachedEnd(true)
                        } else if (entry.target.id === subtitleSlug) {
                            setReachedEnd(false)
                        }
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: `0% 0% -30% 0%` }
        );

        itemIds.forEach((id) => {
            observer.observe(document.getElementById(id));
        });

        return () => {
            itemIds.forEach((id) => {
                observer.unobserve(document.getElementById(id));
            });
        };
    }, [itemIds, subtitleSlug]);
    return { activeId: activeId, pastSubtitle: pastSubtitle }
}

const renderItems = (items, activeId) => (
    <ol className="list-style-none font-medium">
        {items.map(item => (
            <li key={item.url}>
                <a
                    href={item.url}
                    style={{
                        color: activeId === item.url.slice(1) ? "#0EFB69" : "#FC4056",
                    }}
                >
                    {item.title}
                </a>
                {item.items && renderItems(item.items, activeId)}
            </li>
        ))}
    </ol>
)

const TableOfContents = props => {
    const idList = getIds(props.items)
    const { width } = useWindowDimensions()
    console.log(width)

    let { activeId, pastSubtitle } = useActiveId(idList, props.subtitleSlug)

    return (
        <details
            className={pastSubtitle && width > 1805 ? "table-of-contents-fixed" : "table-of-contents"}
            open
        >
            <summary className="cursor-pointer">Table of Contents</summary>
            {renderItems(props.items, activeId)}
        </details>
    )
}

export default TableOfContents
