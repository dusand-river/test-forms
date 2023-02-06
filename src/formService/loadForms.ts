import { AxiosResponse } from "axios";
import formService from "../formService/service";

const loadForms = () => {
  formService.getForms("test").then(
    (response: AxiosResponse) => {
      console.log(response.status);
      console.log(response.data);
    },
    (error) => console.log(error)
  );
};

export default loadForms;
