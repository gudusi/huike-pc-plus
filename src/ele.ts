import { App } from "vue";
import {
  ElInput,
  ElInputNumber,
  ElPagination,
  ElTable,
  ElSelect,
  ElTimePicker,
  ElTimeSelect
} from "element-plus";

export const registryEle = (app: App) => {
  app.component(ElInput.name, ElInput);
  app.component(ElInputNumber.name, ElInputNumber);
  app.component(ElPagination.name, ElPagination);
  app.component(ElTable.name, ElTable);
  app.component(ElSelect.name, ElSelect);
  app.component(ElTimeSelect.name, ElTimeSelect);
  app.component(ElTimePicker.name, ElTimePicker);
};
