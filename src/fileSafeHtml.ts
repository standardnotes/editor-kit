export type FileSafeFileMetadata = {
  [key: string]: any;
}

/**
 * Remove matching <p> tags if present.
 * Also capable of matching adjacent [fsSyntax][fsSyntax]
 */
export const FileSafeSyntaxPattern = /(<p>)?\[FileSafe[^\]]*\](<\/p>)?/g

/**
 * Given an HTML string that includes substrings matching `FileSafeSyntaxPattern`,
 * replace occurences with ghost div element <fileSafe uuid='123'>
 */
export const expandedFileSafeSyntax = (html: string): string => {
  return html.replace(FileSafeSyntaxPattern, (match) => {
    return fileSafeSyntaxToHtmlElement(match)
  })
}

export const removeFileSafeSyntaxFromHtml = (html: string): string => {
  return html.replace(FileSafeSyntaxPattern, (_match) => {
    return ''
  })
}

export const insertionSyntaxForFileDescriptor = (descriptor: FileSafeFileMetadata): string => {
  return `[FileSafe:${descriptor.uuid}:${descriptor.content.fileName}]`
}

export const fileSafeSyntaxToHtmlElement = (syntax: string): string => {
  // Remove paragraph tags
  syntax = syntax.replace('<p>', '')
  syntax = syntax.replace('</p>', '')

  // Remove brackets
  syntax = syntax.replace('[', '').replace(']', '')

  const components = syntax.split(':')
  const uuid = components[1]
  const name = components[2]
  const size = components[3]

  let sizeString = ''

  if (size) {
    const dimensions = size.split('x')
    sizeString = `width=${dimensions[0]} height=${dimensions[1]}`
  }

  /**
   * We use a p tag here because if we try something custom, like `fileSafe` tag, the editor will automatically
   * wrap it in a p tag, causing littered p tags remaining in the plaintext representation.
   */
  return `<p fsplaceholder=true style='display: none;' fscollapsable=true ghost=true fsid='${uuid}' fsname='${name}' ${sizeString}></p>`
}

/**
 * Given a rendered HTML string, replace all <fileSafe> items with [FileSafe:UUID] plaintext items.
 * Also, for any elements that have the 'ghost' attribute, remove it from the resulting string.
 */
export const collapseFileSafeSyntax = (html: string): string => {
  const domCopy = new DOMParser().parseFromString(html, 'text/html')

  // Elements that have fscollapsable means they should be collapsed to plain syntax.
  const mediaElements = domCopy.querySelectorAll('*[fscollapsable]')

  for (const file of mediaElements) {
    const uuid = file.getAttribute('fsid')
    const name = file.getAttribute('fsname')
    const width = file.getAttribute('width')
    const height = file.getAttribute('height')

    const components = ['FileSafe', uuid, name]

    if (width && height) {
      const size = `${width}x${height}`
      components.push(size)
    }

    const fsSyntax = `<p>[${components.join(':')}]</p>`
    file.insertAdjacentHTML('afterend', fsSyntax)
    file.remove()
  }

  const ghosts = domCopy.querySelectorAll('*[ghost]')
  ghosts.forEach((ghost) => ghost.remove())

  return domCopy.body.innerHTML
}
