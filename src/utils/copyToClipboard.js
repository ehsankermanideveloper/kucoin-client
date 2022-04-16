export const copyToClipboard = (text) => {
    if(text !== '') {
        navigator.clipboard.writeText(text);
    }
}