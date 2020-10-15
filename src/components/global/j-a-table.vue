<template>
  <div class="j-a-table-box">
    <a-table :columns="columns" :data-source="tableData" bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>
      <!-- <template slot="title" slot-scope="currentPageData">
        Header
      </template>
      <template slot="footer" slot-scope="currentPageData">
        Footer
      </template> -->
    </a-table>    
  </div>
</template>

<script>
const c = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const d = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  setup(props) {
    let tableData = d, columns = c
    return {
      columns,
      tableData
    }
  }
};
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>