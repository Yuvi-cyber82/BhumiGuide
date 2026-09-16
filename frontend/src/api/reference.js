import { apiGet, qs } from "./client";

export const getLocations = () => apiGet("/reference/locations");
export const getCharges = () => apiGet("/reference/charges");
export const getProcedure = () => apiGet("/reference/procedure");
export const getDocuments = () => apiGet("/reference/documents");
export const getOffices = (state, district, taluka) => apiGet(`/reference/offices${qs({ state, district, taluka })}`);
