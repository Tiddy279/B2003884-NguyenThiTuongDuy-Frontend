<template>
  <div class="container pt-4">
    <h2>Thêm liên hệ</h2>

    <contact-form :contact-form="contactForm" @submit="handleSubmit"></contact-form>
  </div>
</template>

<script>
import ContactService from '@/services/contact.service'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: { ContactForm },
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        address: '',
        phone: '',
        favorite: false
      }
    }
  },
  methods: {
    async handleSubmit(payload) {
      await ContactService.create(payload)
      this.$router.push('/')
    }
  }
}
</script>
