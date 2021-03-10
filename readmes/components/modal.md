pageModal
---

```html
<yo-page-modal title="新增一个页面" v-model="pageModalShow">
    <div>
           内容
    </div>
<!--    底部插槽-->
    <template #footer>
        <voyoc-btn type="candy" @voyoTap="closeModal">确定</voyoc-btn>
        <voyoc-btn type="candy" @voyoTap="closeModal" color="gentle">关闭</voyoc-btn>
    </template>
</yo-page-modal>
```