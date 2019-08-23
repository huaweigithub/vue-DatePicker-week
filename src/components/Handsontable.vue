<template>
  <div>
    <hot-table
      ref="hottable"
      class="table"
      id="hot"
      :settings="hotSettings"
      width="600"
      height="300"
    ></hot-table>
    <button @click="viewTable">查看表格数据</button>
  </div>
</template>
 
<script>
import { HotTable } from '@handsontable/vue';

export default {
  data: function () {
    return {
      hotSettings: {
        data: [
          ['2019', 10, 11, 12, 13, 23, 45],
          ['2020', 20, 11, 14, 13, 23, 45],
          ['2021', 30, 15, 12, 13, 23, 45]
        ],
        // columns: '', //列具体配置 
        // width: 906,
        autoWrapRow: true,
        // height: 641,
        // maxRows: 22,
        minRows: 1,
        // currentRowClassName：当前行样式的名称,
        // currentColClassName：当前列样式的名称,
        manualColumnResize: true, //当值为true时，允许拖动，当为false时禁止拖动
        manualRowResize: true, //当值为true时，允许拖动，当为false时禁止拖动
        stretchH: "all", //last:延伸最后一列,all:延伸所有列,none默认不延伸。
        manualColumnMove: true, // 当值为true时，列可拖拽移动到指定列
        manualRowMove: true, // 当值为true时，行可拖拽至指定行
        rowHeaders: true, //当值为true时显示行头，当值为数组时，行头为数组的值
        columnSorting: false, //允许排序
        sortIndicator: true,
        autoColumnSize: true, //当值为true且列宽未设置时，自适应列大小        
        colHeaders: ['ID', '账号', '用户名', '密码', '性别', '出生日期', '电话'],
        minSpareCols: 0, //列留白
        minSpareRows: 0,//行留白
        contextMenu: {   //自定义右键菜单，可汉化，默认布尔值
          items: {
            "row_above": {
              name: '上方插入一行'
            },
            "row_below": {
              name: '下方插入一行'
            },
            "col_left": {
              name: '左方插入列'
            },
            "col_right": {
              name: '右方插入列'
            },
            "hsep1": "---------", //提供分隔线
            "remove_row": {
              name: '删除行',
            },
            "remove_col": {
              name: '删除列',
            },
            "make_read_only": {
              name: '只读',
            },
            "borders": {
              name: '表格线',
            },
            "commentsAddEdit": {
              name: '添加备注',
            },
            "commentsRemove": {
              name: '取消备注',
            },
            "freeze_column": {
              name: '固定列',
            },
            "unfreeze_column": {
              name: '取消列固定',
            },
            "hsep2": "---------",
          }
        },//右键效果        
      },
    };
  },
  components: {
    HotTable
  },
  methods: {
    viewTable() {
      let $dom = this.$refs.hottable.$el
      console.log($dom)
      let mergeData2 = this.$refs.hottable.hotInstance.getPlugin('exportFile')
      mergeData2.downloadFile('csv', {
        bom: false,
        columnDelimiter: ',',
        columnHeaders: true,
        exportHiddenColumns: true,
        exportHiddenRows: true,
        fileExtension: 'csv',
        filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
        mimeType: 'text/csv',
        rowDelimiter: '\r\n',
        rowHeaders: true
      });
      let exportedString = mergeData2.exportAsString('csv', {
        bom: false,
        columnDelimiter: ',',
        columnHeaders: false,
        exportHiddenColumns: true,
        exportHiddenRows: true,
        rowDelimiter: '\r\n',
        rowHeaders: true
      });
      var exportedBlob = mergeData2.exportAsBlob('csv', {
        bom: false,
        columnDelimiter: ',',
        columnHeaders: false,
        exportHiddenColumns: true,
        exportHiddenRows: true,
        mimeType: 'text/csv',
        rowDelimiter: '\r\n',
        rowHeaders: true
      });

      console.log(exportedBlob);    
      console.log(exportedString)
      console.log(mergeData2)
    },
  },
  created() {

  }
}
</script>
<style scoped>
.table {
  margin: 50px auto;
}
</style>