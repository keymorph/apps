export function isEmailValid(email) {
  // We might want to refactor the length check to the caller as needed for more flexibility
  return (
    email.length === 0 || email.match(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
  );
}
