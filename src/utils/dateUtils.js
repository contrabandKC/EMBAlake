/**
 * Format date for detailed display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date with weekday, month, day, and year
 */
export const formatDate = (dateString) => {
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Format date for compact display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date with month and day
 */
export const formatShortDate = (dateString) => {
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Get the day of the week for a date
 * @param {string} dateString - ISO date string
 * @returns {string} Day of the week (Monday, Tuesday, etc.)
 */
export const getWeekday = (dateString) => {
  return new Date(dateString).toLocaleString('en-us', {weekday: 'long'});
};

/**
 * Extract year from a date
 * @param {string} dateString - ISO date string
 * @returns {number} Year as a number
 */
export const getYear = (dateString) => {
  return new Date(dateString).getFullYear();
}; 