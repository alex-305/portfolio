export function formatDate(date:Date) {
    let d = new Date(date)

    return d.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    })
}