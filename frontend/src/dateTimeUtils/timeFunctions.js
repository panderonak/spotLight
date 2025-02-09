export function timeAgoFromTimestamp(timestamp) {
  const currentTime = new Date();
  const createdAt = new Date(timestamp);

  const diffInMs = currentTime - createdAt;

  // Time calculations
  const seconds = diffInMs / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months =
    (currentTime.getFullYear() - createdAt.getFullYear()) * 12 +
    currentTime.getMonth() -
    createdAt.getMonth();
  const years = currentTime.getFullYear() - createdAt.getFullYear();

  // Return the time difference in human-readable format
  if (seconds < 60) {
    return `${Math.floor(seconds)} seconds ago`;
  } else if (minutes < 60) {
    return `${Math.floor(minutes)} minutes ago`;
  } else if (hours < 24) {
    return `${Math.floor(hours)} hours ago`;
  } else if (days < 7) {
    return `${Math.floor(days)} days ago`;
  } else if (months < 12) {
    return `${Math.floor(months)} months ago`;
  } else if (years < 1) {
    return `${Math.floor(months)} months ago`; // If it's less than a year, show months
  } else {
    return `${Math.floor(years)} years ago`;
  }
}

// Function to format a given duration in seconds into mm:ss format
export function formatTimeDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Ensure the seconds are always displayed with two digits
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}
