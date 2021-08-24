const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'John@server.com' },
    { name: 'Ann', age: 16, email: 'Ann@server.com' },
    { name: 'Abraham', age: 32, email: 'Abr@server.com' },
    { name: 'Egor', age: 26, email: 'Egor@server.com' },
    { name: 'Mike', age: 15, email: 'Mike@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email: `${email}`,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
