import axios, { AxiosError } from "axios";
import type { AxiosInstance } from "axios";
import { useAuthStore } from "@/stores/auth";

export default class Http {
  private static _instance: AxiosInstance;

  /**
   * Create axios instance and set base config
   *
   * @private
   */
  private constructor() {
    const { token } = useAuthStore();

    Http._instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        common: {
          Authorization: token ? "Bearer " + token : "",
        },
      },
    });

    Http._instance.interceptors.response.use(
      (response) => response,
      (error) => Http.errorHandling(error)
    );
  }

  /**
   * Get axios instance
   */
  public static get inst(): AxiosInstance {
    if (!Http._instance) {
      new Http();
    }

    return Http._instance;
  }

  /**
   * Set auth token
   */
  public static setToken(): void {
    const { token } = useAuthStore();
    Http._instance.defaults.headers.common.Authorization = "Bearer " + token;
  }

  /**
   * Clean auth token
   */
  public static cleanToken(): void {
    Http._instance.defaults.headers.common.Authorization = "";
  }

  /**
   * Error event Handling
   *
   * @param error
   */
  public static async errorHandling(error: AxiosError): Promise<AxiosError> {
    if (error.response?.status === 401) {
      const authStore = useAuthStore();
      await authStore.cleanUser();
    }

    return Promise.reject(error);
  }
}
