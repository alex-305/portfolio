export function formatDate(date:Date) {
    let d = new Date(date + 'T00:00:00')

    return d.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    })
}