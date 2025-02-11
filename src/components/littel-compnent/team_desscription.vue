<script setup>
defineProps({
  names: { type: String, default: "Nom inconnu" },
  role: { type: String, default: "Rôle non spécifié" },
  description: { type: String, default: "Aucune description disponible." },
  image: { type: String, default: "" }
});
</script>

<template>
  <article class="team-card">
    <div class="image-container">
      <img :src="image" :alt="'Photo de ' + names" class="profile-image">
    </div>
    <div class="info">
      <h4 class="name">{{ names }}</h4>
      <p class="role">{{ role }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.team-card {
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 15px;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
}

.team-card:hover {
  transform: scale(1.05);
}

.image-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  flex: 1;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
}

.role {
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
}

.description {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.4;
}
</style>
