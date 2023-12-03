import AsyncStorage from '@react-native-async-storage/async-storage';

class SessionStore {
  private static instance: SessionStore;
  private token: string | null = null;

  private constructor() {}

  public static getInstance(): SessionStore {
    if (!SessionStore.instance) {
      SessionStore.instance = new SessionStore();
    }
    return SessionStore.instance;
  }

  public async getToken(): Promise<string | null> {
    if (!this.token) {
      this.token = await AsyncStorage.getItem('token');
    }
    return this.token;
  }

  public async setToken(token: string | null): Promise<void> {
    this.token = token;
    if (token === null) {
      await AsyncStorage.removeItem('token');
    } else {
      await AsyncStorage.setItem('token', token);
    }
  }

  public async clearSession(): Promise<void> {
    await this.setToken(null);
  }
}

export const sessionStore = SessionStore.getInstance();
