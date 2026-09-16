import { apiGet, apiPost, apiPut } from "./client";

export const getProgress = () => apiGet("/progress");
export const updateProgress = (partial) => apiPut("/progress", partial);
export const addActivity = (title) => apiPost("/progress/activity", { title });
export const addNotification = (title, body) => apiPost("/progress/notify", { title, body });
export const markNotificationsRead = () => apiPut("/progress/notifications/read");
