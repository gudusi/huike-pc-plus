import { App } from "vue";
import { ElInput, ElInputNumber, ElPagination, ElTable } from "element-plus";

export const registryEle = (app: App) => {
  app.component(ElInput.name, ElInput);
  app.component(ElInputNumber.name, ElInputNumber);
  app.component(ElPagination.name, ElPagination);
  app.component(ElTable.name, ElTable);
};
