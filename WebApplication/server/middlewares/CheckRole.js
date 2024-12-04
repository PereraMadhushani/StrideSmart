// CheckRole.js
export default function CheckRole(role) {
    return (req, res, next) => {
      // Check user role
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  }
  