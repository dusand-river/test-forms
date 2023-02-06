import client from "./client";
import settings from "./settings";

const getForms = async (sourceId: string): Promise<any> => {
  const uri = settings.getUri(sourceId);
  const basicAuth = settings.getAuth(sourceId);
  try {
    const response = await client.get(uri, { auth: basicAuth });
    if (response.data) return response;
    console.log("No data returned by request");
  } catch (error) {
    console.log("getForms", error);
  }
};

export default {
  getForms,
};
