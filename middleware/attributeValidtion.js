
const validName = (name) => {
    return typeof name === 'string' && name.trim().length >= 3 && name.trim().length <= 50;
  };
  
  const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return typeof email === 'string' && email.trim() !== '' && emailRegex.test(email);
  };
  
  const validPassword = (password) => {
    return typeof password === 'string' && password.trim() !== '' && password.length >= 6;
  };
  
  const validateRegistrationRequest = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];
  
    if (!name || !validName(name)) {
      errors.push('Invalid name: must be a non-empty string between 3 and 50 characters');
    }
    if (!email || !validEmail(email)) {
      errors.push('Invalid email: must be a non-empty valid email address');
    }
    if (!password || !validPassword(password)) {
      errors.push('Invalid password: must be a non-empty string with at least 6 characters');
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    next();
  };
  
  const validateLoginRequest = (req, res, next) => {
    const { email, password } = req.body;
    const errors = [];
  
    if (!email || !validEmail(email)) {
      errors.push('Invalid email: must be a non-empty valid email address');
    }
    if (!password || !validPassword(password)) {
      errors.push('Invalid password: must be a non-empty string with at least 6 characters');
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    next();
  };
  
  module.exports = {
    validateRegistrationRequest,
    validateLoginRequest
  };
  