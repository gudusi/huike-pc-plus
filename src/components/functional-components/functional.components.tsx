import { h } from "vue";
import { extractKeys } from "@/components/utils";

export const Group = (props: any, context: any) => {
  return h(
    "main",
    {
      class: "yo-group",
      ...props
    },
    context.slots.default()
  );
};

/**
 *
 * @param props
 * label
 * important 紅色高亮
 * error 顯示錯誤提示
 * span 設置column span 數
 * @param attrs
 * @param slots
 * @constructor
 */
export const Cell = (
  props: {
    label?: string;
    important?: boolean;
    error?: string;
    span?: number;
  } & any,
  { attrs, slots }: any
) => {
  return (
    <dt
      class={["flex-v-mid", props.span ? `yo-column-${props.span}` : ""].join(
        " "
      )}
      {...extractKeys(props, ["span", "label", "important", "error"])}
    >
      <label
        class={[
          "yo-cell-label",
          props.important ? "voyo-color-error" : ""
        ].join(" ")}
      >
        {props.important ? "*" : ""}
        {props.label}
      </label>
      <div class="flex-1 yo-cell-content">{slots.default()}</div>
    </dt>
  );
};

export const Card = (
  props: { header?: string; footerAlign?: string } & any,
  { attrs, slots }: any
) => {
  return (
    <div class={"voyo-card"} {...extractKeys(props, ["header"])}>
      {props.header || slots.header ? (
        <>
          <header class={["voyo-card-header"].join(" ")}>
            {props.header ? <span class="_title">{props.header}</span> : null}
            {slots.header && slots.header()}
          </header>
          <article class={"voyo-card-content"}>{slots.default()}</article>
        </>
      ) : (
        <div>{slots.default()}</div>
      )}
      {slots.footer ? (
        <footer
          class={[
            "voyo-card-footer",
            props.footerAlign ? `text-${props.footerAlign}` : ""
          ].join(" ")}
        >
          {slots.footer()}
        </footer>
      ) : null}
    </div>
  );
};
