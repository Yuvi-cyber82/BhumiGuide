import { apiGet, apiUpload } from "./client";

export function uploadVerification({ files, survey, state, district, taluka }) {
  const form = new FormData();
  for (const f of files) form.append("files", f);
  if (survey) form.append("survey", survey);
  if (state) form.append("state", state);
  if (district) form.append("district", district);
  if (taluka) form.append("taluka", taluka);
  return apiUpload("/uploads", form);
}

export const listVerifications = () => apiGet("/uploads");
