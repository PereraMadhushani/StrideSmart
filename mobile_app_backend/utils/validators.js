const validateSubordinate = (data) => {
    const { name, address, contactNumber, gender } = data;
    
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    
    if (!address || address.trim().length === 0) {
      return 'Address is required';
    }
    
    if (!contactNumber || contactNumber.trim().length === 0) {
      return 'Contact number is required';
    }
    
    // Validate contact number format (customize as needed)
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!phoneRegex.test(contactNumber)) {
      return 'Invalid contact number format';
    }
    
    if (!gender || !['male', 'female'].includes(gender.toLowerCase())) {
      return 'Gender must be either male or female';
    }
    
    return null;
  };
  
  module.exports = { validateSubordinate };