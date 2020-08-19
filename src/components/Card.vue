<template>
  <div class="cardDiv">
    <div class="numberDiv">{{catalogNum}}</div>
    <div class="containDiv">
      <div
        style="font-size:22px; margin-top:5px; color:black; display:flex"
        class="catalogTitleStyle"
      >
        <div style="margin-top:3px; margin-right:5px">
          <el-image :src="srcUrl"></el-image>
        </div>
        <div>
          <a @click="btnTransValue">{{catalogTitle}}</a>
        </div>
      </div>
      <div v-if="isShowTable === 'true'">
        <el-table :data="tableData" stripe>
          <el-table-column prop="contain" width="300">
            <template slot-scope="scope">
              <div @click="handleRowData(scope.row)">
                <i class="el-icon-tickets"></i>
                {{scope.row.contain}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    catalogTitle: String,
    catalogNum: String,
    isShowTable: String,
    tableData: Array,
    srcData: String,
  },
  data() {
    return {
      srcUrl: require(`${this.srcData}`),
    };
  },
  methods: {
    btnTransValue() {
      let obj = {};
      obj.catalogNum = this.catalogNum;
      this.$emit("clickNum", obj);
    },
    handleRowData(data) {
      let obj = {};
      obj.catalogNum = this.catalogNum;
      obj.index = data.index;
      obj.title = data.contain;
      localStorage.setItem("currentTableRow", JSON.stringify(obj));
      this.$emit("childNum", obj);
    },
  },
};
</script>

<style>
.cardDiv {
  /* height: 500px; */
  box-shadow: #778899 0px 0px 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
}

.numberDiv {
  text-align: center;
  width: 40px;
  height: 40px;
  /* div中文字居中 */
  line-height: 40px;
  vertical-align: middle;
  background-color: black;
  color: white;
  font-size: 20px;
  margin-left: -20px;
}

.containDiv {
  margin-left: 30px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.catalogTitleStyle :hover {
  color: #84adea;
}
</style>