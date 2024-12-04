/**
 * Calculates the total number of days between two dates.
 *
 * @param {number} startTimestamp - The starting date in JavaScript timestamp format (milliseconds since epoch).
 * @param {number} endTimestamp - The ending date in JavaScript timestamp format (milliseconds since epoch).
 * @returns {number} The total number of days between the two dates. If the start date is after the end date, returns 0.
 * Reversed Dates: If startTimestamp > endTimestamp, the function will return 0.
 * Same Dates: If startTimestamp === endTimestamp, the function will return 0.
 * Timestamps in Seconds: Ensure the input timestamps are in milliseconds, not seconds (multiply by 1000 if needed).
 */
function daysBetweenDates(startTimestamp, endTimestamp) {
  const startDate = new Date(startTimestamp); // Convert start timestamp to a Date object
  const endDate = new Date(endTimestamp); // Convert end timestamp to a Date object

  // Calculate the difference in milliseconds
  const diffInMilliseconds = endDate - startDate;

  // Convert milliseconds to days (1 day = 86,400,000 ms)
  const totalDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return totalDays >= 0 ? totalDays : 0; // Ensure non-negative result
}

export default daysBetweenDates;
