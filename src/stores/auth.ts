import { defineStore } from "pinia";
import type {
  ErrorsData,
  ForgotData,
  LoginData,
  PasswordData,
  RegisterData,
} from "@/types/auth";
import { useToastsStore } from "@/stores/toasts";
import { ToastType } from "@/types/toasts";
import Http from "@/module/http";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
  /**
   * State for Auth Store
   *
   * @state user - user model
   * @state token - token for authorization
   * @state errors - array of authentication errors
   * @state target - address forwarding after authorization
   * @state load - progress loading request
   */
  state: () => ({
    user: null as any,
    token: localStorage.getItem("token") as string,
    errors: {} as ErrorsData,
    target: "/dashboard",
    load: false,
  }),

  actions: {
    /**
     * Error removal function by name
     *
     * @param name - error name
     */
    cleanErrors(name: string) {
      this.errors[name] = [];
    },
    /**
     * The function of sending a registration request
     *
     * @param data - registration data
     */
    async createUser(data: RegisterData): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        await Http.inst.post("auth/create", data);
        await router.push({ name: "Login" });
        toastStore.add(
          "Account created! Log in to continue.",
          ToastType.success
        );
      } catch (error: any) {
        this.errors = error.response.data.errors;
      } finally {
        this.load = false;
      }
    },

    /**
     * The function of sending a login request
     *
     * @param data - login data
     */
    async loginUser(data: LoginData): Promise<void> {
      try {
        this.load = true;

        const response = await Http.inst.post("auth/login", data);
        this.token = response.data.token;
        Http.setToken();
        localStorage.setItem("token", response.data.token);

        await router.push(this.target);
      } catch (error: any) {
        this.errors = error.response.data.errors;
      } finally {
        this.load = false;
      }
    },

    /**
     * The function of sending a logout request
     */
    async logoutUser(): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        await Http.inst.post("auth/logout");
        this.token = "";
        Http.setToken();
        localStorage.removeItem("token");

        await router.push({ name: "Login" });
      } catch (error: any) {
        toastStore.add(
          "Something went wrong, try again later.",
          ToastType.danger
        );
      } finally {
        this.load = false;
      }
    },

    /**
     * The function clear auth data
     */
    async cleanUser(): Promise<void> {
      this.token = "";
      Http.setToken();
      localStorage.removeItem("token");

      await router.push({ name: "Login" });
    },

    /**
     * The function of sending a forgot password request
     *
     * @param data - forgot data
     */
    async forgotUser(data: ForgotData): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        await Http.inst.post("auth/forgot", data);
        toastStore.add(
          "An email with a request to change the password has been sent to the specified email.",
          ToastType.success
        );

        await router.push({ name: "Login" });
      } catch (error: any) {
        this.errors = error.response.data.errors;
      } finally {
        this.load = false;
      }
    },

    /**
     * The function of sending a new password request
     *
     * @param data - password data
     */
    async passwordUser(data: PasswordData): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        await Http.inst.post("auth/password", data);
        toastStore.add(
          "Your password has been changed, log in to continue.",
          ToastType.success
        );

        await router.push({ name: "Login" });
      } catch (error: any) {
        this.errors = error.response.data.errors;
      } finally {
        this.load = false;
      }
    },

    /**
     * The function load user data
     */
    async loadUser(): Promise<void> {
      const toastStore = useToastsStore();

      try {
        this.load = true;

        const response = await Http.inst.get("auth/user");
        this.user = response.data.user;
      } catch (error: any) {
        toastStore.add(error.response.data.message, ToastType.danger);
      } finally {
        this.load = false;
      }
    },
  },
});
