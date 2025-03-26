/**
 * Add a new weekend option
 * @param {string} startDate - Start date of the weekend
 * @param {string} endDate - End date of the weekend
 * @param {Array} weekendOptions - Current weekend options array
 * @returns {Object} New weekend option object
 */
export const createWeekendOption = (startDate, endDate, weekendOptions) => {
  if (!startDate || !endDate) return null;
  
  const newYear = new Date(startDate).getFullYear();
  const newId = weekendOptions.length > 0 ? Math.max(...weekendOptions.map(o => o.id)) + 1 : 1;
  
  return {
    id: newId, 
    startDate, 
    endDate, 
    year: newYear, 
    votes: 0, 
    voters: []
  };
};

/**
 * Add a vote for a weekend
 * @param {number} weekendId - The ID of the weekend to vote for
 * @param {Object} currentUser - The current user object
 * @param {Array} weekendOptions - Current weekend options array
 * @returns {Array} Updated weekend options array
 */
export const addVoteForWeekend = (weekendId, currentUser, weekendOptions) => {
  if (!currentUser) return weekendOptions;
  
  return weekendOptions.map(option => {
    // If user already voted for this option, don't change anything
    if (option.id === weekendId && !option.voters.includes(currentUser.id)) {
      return {
        ...option,
        votes: option.votes + 1,
        voters: [...option.voters, currentUser.id]
      };
    }
    return option;
  });
};

/**
 * Remove a vote from a weekend
 * @param {number} weekendId - The ID of the weekend to remove vote from
 * @param {Object} currentUser - The current user object
 * @param {Array} weekendOptions - Current weekend options array
 * @returns {Array} Updated weekend options array
 */
export const removeVoteFromWeekend = (weekendId, currentUser, weekendOptions) => {
  if (!currentUser) return weekendOptions;
  
  return weekendOptions.map(option => {
    if (option.id === weekendId && option.voters.includes(currentUser.id)) {
      return {
        ...option,
        votes: option.votes - 1,
        voters: option.voters.filter(voterId => voterId !== currentUser.id)
      };
    }
    return option;
  });
};

/**
 * Find the weekend with the most votes
 * @param {Array} weekendOptions - Current weekend options array
 * @returns {Object|null} Winning weekend or null if no options
 */
export const getWinningWeekend = (weekendOptions) => {
  if (weekendOptions.length === 0) return null;
  
  const maxVotes = Math.max(...weekendOptions.map(option => option.votes));
  return weekendOptions.find(option => option.votes === maxVotes);
};

/**
 * Get unique years from weekend options
 * @param {Array} weekendOptions - Current weekend options array
 * @returns {Array} Array of unique years, sorted descending
 */
export const getUniqueYears = (weekendOptions) => {
  return [...new Set(weekendOptions.map(option => option.year))].sort((a, b) => b - a);
}; 