export const convertDateTime = (timestamp) => {
    const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;

    // Create a new Date object
    const date = new Date(milliseconds);
    
    // Convert to a human-readable format
    return date.toLocaleString()
}