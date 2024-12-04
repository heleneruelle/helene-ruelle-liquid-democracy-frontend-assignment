/**
 * Calculates the percentage of completion based on the duration and days remaining.
 *
 * @param {number} duration - Total duration in days.
 * @param {number} daysUntilEndDate - Number of days remaining until the end date.
 * @returns {number} The percentage of completion (0 to 100).
 */
function projectCompletionState(duration, daysUntilEndDate) {
  const daysPassed = duration - daysUntilEndDate;
  const percentage = (daysPassed / duration) * 100;

  return Math.min(Math.max(percentage, 0), 100);
}

export default projectCompletionState;
