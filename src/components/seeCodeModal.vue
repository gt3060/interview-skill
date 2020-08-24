<template>
  <div>
    <el-dialog title="具体代码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="handleClose">取 消</el-button> -->
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    isModal: Boolean,
  },
  data() {
    return {
      dialogVisible: this.isModal,
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$emit("closeModal", this.dialogVisible);
    },
  },
};
</script>

<style>
</style>