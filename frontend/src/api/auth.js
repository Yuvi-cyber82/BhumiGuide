import { apiGet, apiPost } from "./client";

export const register = (name, email, password) => apiPost("/auth/register", { name, email, password });
export const login = (email, password) => apiPost("/auth/login", { email, password });
export const me = () => apiGet("/auth/me");
export const googleLogin = (credential) => apiPost("/auth/google", { credential });
export const verifyOtp = (otp) => apiPost("/auth/verify-otp", { otp });
export const resendOtp = () => apiPost("/auth/resend-otp", {});
