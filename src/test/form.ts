import { AxiosResponse } from "axios";
//import formService from "../formService/service";
import loadForms from "../formService/loadForms";

function processData(response: AxiosResponse) {
  const { data, status } = response;
  console.log("processData", status);
  data.Forms.forEach((value: any, index: number, item: any) => {
    if (index < 1) {
      console.log("getList-index", index);
      console.log("getList-value", value);
    }
  });
}

// formService.getForms("test").then(
//   (response: AxiosResponse) => {
//     processData(response);
//   },
//   (error) => console.log(error)
// );

loadForms();
