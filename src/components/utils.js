export const ogImageUrl = (author, website, title) => {
    const ogTitle = title.replace(/\s+/g, "%20").toUpperCase()
    return `https://res.cloudinary.com/fabiorosado/image/upload/q_100/c_fit,co_rgb:0efb69,l_text:orbitron_50_style_bold_text_align_center:${ogTitle},w_1012/co_rgb:fc4056,g_south_east,l_text:orbitron_25_style_boldr:${website},r_0,x_15,y_20/v1605190182/theflyingdev_og_whvovy.png`
}
