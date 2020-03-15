<template>
  <div id="person-details-container" :key="personId">
    <h2>Person Details</h2>
    <div id="person-details-justified-container">
      <div v-if="person.name"><strong>Name:</strong> {{person.name}}</div>
      <div v-else>Name not found</div>
      <div v-if="person.birthday"><strong>Birthday:</strong> {{person.birthday}}</div>
      <div v-else>Birthday Unknown</div>
      <div v-if="person.biography"><strong>Bio:</strong> {{person.biography}}</div>
      <div v-else>Bio Unavailable</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonDetails',
  data: () => {
    return {
      person: {},
    }
  },
  computed: {
    personId: function () {
      return this.$route.params.id;
    }
  },
  watch: {
    personId: {
        async handler () {
            const data = await this.getData();
            this.person = data;
            window.scrollTo(0, 0);
        },
        immediate: true,
    },
  },
  methods: {
    async getData() {
      let response = await fetch(`/person/${this.personId}`);
      let data = await response.json();
      return data;
    }
  },
}
</script>

<style scoped>
    #person-details-container {
        width:600px;
        margin-left: auto;
        margin-right: auto;
    }
    #person-details-justified-container {
        text-align: justify;
    }
</style>
