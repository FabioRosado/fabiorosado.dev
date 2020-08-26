import React, {useEffect, useState} from 'react'


const getMentions = async(postsPerPage, slug) => {
    const page = "https://fabiorosado.dev/"
    const resp = await fetch(
        `https://webmention.io/api/mentions?page=${page}&per-page=${postsPerPage}&target=${slug}`
    )

    const list = await resp.json()

    return list.links
}


const Webmentions = ({ slug, show }) => {
    const [mentions, addMentions] = useState([])
    useEffect(() => {
        const fetchMentions = async () => {
            const olderMentions = await getMentions(50, `https://fabiorosado.dev/blog/${slug}/`)
            addMentions([...olderMentions])
        }
        fetchMentions()

    }, [slug])

    const Reply = ({ data }) => {
        return (
            <div className="mention">
                <img src={data.author.photo} alt={data.author.name} lazy="true" /> 
                <div className="margin-right">
                    <a href={data.url}>{data.author.name} </a> said
                    <div dangerouslySetInnerHTML={{__html:data.content}} />
                </div>
                
            </div>
        )
    }

    const SimpleMention = ({ data, activity }) => {
        return (
            <div className="mention">
            <img src={data.author.photo} alt={data.author.name} lazy="true" /> 
            <div>
                <a href={data.url}>{data.author.name}</a> {activity}
            </div>
            </div>
        )
    }

    const Mention = ({ data, activity }) => {
        switch (activity) {
            case 'like':
                return <SimpleMention data={data} activity="liked" />
            case 'repost':
                return <SimpleMention data={data} activity="retweeted" />
            default:
                return <Reply data={data} />
        }
    }

    return (
        <section className={`webmentions-list ${show}`}>
        {mentions.map((mention, index) => (
            <div className="webmention" key={index}>
                <Mention data={mention.data} activity={mention.activity.type} index={index} />
            </div>
        ))}
        </section>
    )
}

export default Webmentions