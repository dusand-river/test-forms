const uriFormsBase = "https://{{subdomain}}.wufoo.com/api/v3/forms";
const uriFormsOther = "{{formid}}{{endPoint}}.{{format}}";

type setting = {
  id: string;
  accessId: string;
  subdomain: string;
  format: string;
};

const formSettings: setting[] = [
  {
    id: "david",
    accessId: "Y3VO-26SD-XJBC-RBO4",
    subdomain: "bhycadmin",
    format: "json",
  },
  {
    id: "james",
    subdomain: "bhyctest",
    accessId: "AXLK-1Q4V-GMTC-UETL",
    format: "json",
  },
];

const getSetting = (id: string): setting => {
  return formSettings.filter((item) => item.id === id)[0];
};

const getAuth = (id: string) => {
  const { accessId } = getSetting(id);
  return {
    username: accessId,
    password: "anyPass",
  };
};

const getUri = (id: string, endPoint?: string, formId?: string): string => {
  const { subdomain, format } = getSetting(id);

  let localBase = uriFormsBase.replace("{{subdomain}}", subdomain);
  let localOther = uriFormsOther.replace(
    "{{formid}}",
    formId ? `/${formId}` : ""
  );
  localOther = localOther.replace("{{endPoint}}", endPoint ? endPoint : "");
  localOther = localOther.replace("{{format}}", format ? format : "json");
  const uri = `${localBase}${localOther}`;
  return uri;
};

export default {
  getAuth,
  getUri,
};
