export type Format = {
  [x: string]: string
}

export type Author = {
  name: string
}

export const getBookLink = (formats: Format) => {
  let htmlLink
  let pdfLink
  let txtLink
  for (let i of Object.keys(formats)) {
    if (i.includes('text/html')) {
      htmlLink = formats[i]
      continue
    }
    if (i.includes('application/pdf')) {
      pdfLink = formats[i]
      continue
    }
    if (i.includes('text/plain')) {
      txtLink = formats[i]
      continue
    }
  }
  return htmlLink ? htmlLink : pdfLink ? pdfLink : txtLink ? txtLink : null
}

export const getAuthorName = (authors: Author[]) =>
  authors.map((val) => val.name.split(', ').reverse().join(' ')).join(', ')
