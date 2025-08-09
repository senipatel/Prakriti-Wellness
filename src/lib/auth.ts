export interface User {
  fullName: string;
  email: string;
  password: string;
  constitution?: {
    vata: number;
    pitta: number;
    kapha: number;
  };
}

export const initializeDemoUser = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const demoAccount: User = {
    fullName: "Demo User",
    email: "demo@gmail.com",
    password: "12345678",
    constitution: {
      vata: 40,
      pitta: 35,
      kapha: 25
    }
  };

  if (!users.some((user: User) => user.email === demoAccount.email)) {
    users.push(demoAccount);
    localStorage.setItem('users', JSON.stringify(users));
  }
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
};
