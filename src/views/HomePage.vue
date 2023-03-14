<template>
  <div class="container pt-4">
    <input-search></input-search>
    <div class="row">
      <div class="col col-6">
        <h4>
          Danh bạ
          <i class="fa-solid fa-address-book"></i>
        </h4>

        <contact-list
          :contact-list="contactList"
          @update:active-id="(id) => (activeId = id)"
          :active-id="activeId"
        ></contact-list>

        <div class="mt-3 d-flex justify-content-between align-items-center">
          <button class="btn btn-primary" @click="refresh">
            <i class="fas fa-redo"></i> Làm mới
          </button>
          <router-link to="/contacts/create">
            <button class="btn btn-success"><i class="fas fa-plus"></i> Thêm mới</button>
          </router-link>
          <button class="btn btn-danger" @click="deleteAll">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button>
        </div>
      </div>

      <div class="col col-6">
        <h4>
          Chi tiết liên hệ
          <i class="fa-solid fa-address-card"></i>
        </h4>

        <contact-card :key="activeId" v-if="!!activeId" :id="activeId"></contact-card>

        <router-link v-if="activeId" :to="`/contacts/${activeId}`">
          <div class="btn btn-warning btn-sm">
            <i class="fa-solid fa-pen-to-square"></i>Hiệu chỉnh
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from '@/components/InputSearch.vue'
import ContactList from '@/components/ContactList.vue'
import ContactCard from '@/components/ContactCard.vue'
import ContactService from '@/services/contact.service'

export default {
  components: { InputSearch, ContactList, ContactCard },
  data() {
    return { contactList: [], activeId: null }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    async deleteAll() {
      if (confirm('Bạn có muốn xóa tất cả liên hệ không?')) {
        await ContactService.deleteAll()
        this.refresh()
      }
    },
    refresh() {
      ContactService.getAll().then((res) => {
        this.contactList = res.data
      })
    }
  }
}
</script>
