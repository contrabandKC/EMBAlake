/**
 * Check if a user exists in the users array
 * @param {string} name - The name to search for
 * @param {Array} users - Array of user objects
 * @returns {Object|null} Found user or null
 */
export const findUserByName = (name, users) => {
  return users.find(user => user.name.toLowerCase() === name.toLowerCase()) || null;
};

/**
 * Create a new user object
 * @param {string} name - User name
 * @param {Array} users - Existing users array
 * @param {boolean} isAdmin - Whether the user is an admin
 * @returns {Object} New user object
 */
export const createNewUser = (name, users, isAdmin = false) => {
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  return { id: newId, name, isAdmin };
};

/**
 * Handle user login
 * @param {string} name - User name attempting to login
 * @param {Array} users - Existing users array
 * @param {Function} setUsers - Function to update users state
 * @param {Function} setCurrentUser - Function to set current user
 * @param {Function} setIsAdmin - Function to update admin status
 * @returns {Object} The logged in user
 */
export const handleUserLogin = (name, users, setUsers, setCurrentUser, setIsAdmin) => {
  if (!name.trim()) return null;
  
  // Check if user exists
  const existingUser = findUserByName(name, users);
  
  if (existingUser) {
    setCurrentUser(existingUser);
    setIsAdmin(existingUser.isAdmin);
    return existingUser;
  } else {
    // Create new user
    const newUser = createNewUser(name, users);
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setIsAdmin(false);
    return newUser;
  }
}; 