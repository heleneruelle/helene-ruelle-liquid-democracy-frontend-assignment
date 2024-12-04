/**
 * Calculates the number of days remaining between today and a future date.
 *
 * @param {number} futureTimestamp - The future date in JavaScript timestamp format (milliseconds since epoch).
 * @returns {number} The number of days remaining until the future date. Returns 0 if the future date is in the past or the same as today.
 *
 */
function daysUntilFutureDate(futureTimestamp) {
  const today = new Date();
  const futureDate = new Date(futureTimestamp);

  const diffInMilliseconds = futureDate - today;

  const days = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return days >= 0 ? days : 0;
}

export default daysUntilFutureDate;
