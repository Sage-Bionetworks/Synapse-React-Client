import { IFilterXSSOptions } from 'xss'

// PORTALS-1450: including 'style' in the allow-list will cause string values to come through, which crashes the app when used (because it uses jsx).
export const xssOptions: IFilterXSSOptions = {
  whiteList: {
    a: ['target', 'href', 'title', 'ref'],
    abbr: ['title'],
    address: [],
    area: ['shape', 'coords', 'href', 'alt'],
    article: [],
    aside: [],
    audio: ['autoplay', 'controls', 'loop', 'preload', 'src'],
    b: [],
    bdi: ['dir'],
    bdo: ['dir'],
    big: [],
    blockquote: ['cite'],
    body: [],
    br: [],
    button: ['class'],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ['align', 'valign', 'span', 'width'],
    colgroup: ['align', 'valign', 'span', 'width'],
    dd: [],
    del: ['datetime'],
    details: ['open'],
    div: ['class'],
    dl: [],
    dt: [],
    em: [],
    font: ['color', 'size', 'face'],
    footer: [],
    g: [],
    h1: ['toc'],
    h2: ['toc'],
    h3: ['toc'],
    h4: ['toc'],
    h5: ['toc'],
    h6: ['toc'],
    head: [],
    header: [],
    hr: [],
    html: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    ins: ['datetime'],
    li: ['class'],
    mark: [],
    nav: [],
    noscript: [],
    ol: ['class'],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: ['data-widgetparams', 'class', 'id'],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    svg: [],
    table: ['width', 'border', 'align', 'valign', 'class'],
    tbody: ['align', 'valign'],
    td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
    tfoot: ['align', 'valign'],
    th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class'],
    thead: ['class', 'align', 'valign'],
    tr: ['rowspan', 'align', 'valign'],
    tt: [],
    u: [],
    ul: ['class'],
    video: [
      'autoplay',
      'controls',
      'loop',
      'preload',
      'src',
      'height',
      'width',
    ],
  },
  stripIgnoreTagBody: true, // filter out all tags not in the whitelist
  allowCommentTag: false,
  css: false,
  onIgnoreTag: function (tag, html, options) {
    if (tag === '!doctype') {
      // do not filter doctype
      return html
    }
    return undefined
  },
  safeAttrValue: function (tag, name, value) {
    if (tag === 'img' && name === 'src') {
      if (
        value &&
        (value.startsWith('data:image/') || value.startsWith('http'))
      ) {
        return value
      } else {
        return ''
      }
    } else {
      return value
    }
  },
}
