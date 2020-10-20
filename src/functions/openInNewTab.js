export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

// Then add to your onClick

// onClick={() => {openInNewTab('https://stackoverflow.com')}}
