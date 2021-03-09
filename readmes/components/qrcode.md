### 二维码生成
引入
```typescript
@Options({
  components:{
    "self":defineAsyncComponent(()=>import("@/componentsAsync/qrcode-component/qrcode-component.vue"))
 }
})
export class extends Vue{}
```
html
```html
<self-qrcode ref="qrcode"></self-qrcode>
```
javascript
```js
this.$refs.qrcode.generate(
  "https://www.baidu.com"
).then(()=>{})
```