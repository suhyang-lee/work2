<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="far fa-calendar-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" class="modalHeader">
        경고
        <i
          class="closeModalBtn far fa-times-circle"
          @click="showModal = false"
        ></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
      <section slot="footer">
        <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</p>
      </section>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // 앞과 뒤의 공백을 없애주는 것
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },

  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  width: 100%;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, hsl(232, 95%, 69%), #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

.modalHeader {
  color: #42b983;
  font-weight: 700;
}

.closeModalBtn {
  color: #42b983;
}
</style>
