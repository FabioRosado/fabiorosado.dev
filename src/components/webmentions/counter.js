import React from 'react'
import useSWR  from 'swr'

const getMentionsCount = async (slug) => {
    const resp = await fetch(`https://webmention.io/api/count.json?target=${slug}/`)

    const { type, count } = await resp.json()

    return {
        likes: ( type.like || 0 ) + ( type.repost || 0),
        mentions: ( type.mention || 0 ) + ( type.reply || 0 ),
        total: count
    }
}


const MentionsCounter = ({ postUrl, styles }) => {
    const { data = {} , error } = useSWR(postUrl, getMentionsCount)

    if (error) return <div>{error}</div>
    
    const { likes = 0, mentions = 0 } = data

    return (
        <>
            <span className={styles}><i className="far fa-heart orange-text" /> {likes} {likes > 1 ? "Likes" : "Like"} </span>
            <span className={styles}><i className="far fa-comment orange-text" /> {mentions} {mentions > 1 ? "Comments" : "Comment"}</span>
        </>
    )
}

export default MentionsCounter