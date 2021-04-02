const objectToQueryParams = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return "?" + params.join('&')
}

export const ogImageUrl = (author, website, title) => {
    const params = {
        author,
        website,
        image: `https://fabiorosado.dev/logo.svg`,
        title
    }
    return `https://generate-og-image-git-fabio-og-image-spences10.vercel.app//og.jpg${objectToQueryParams(params)}`
}
