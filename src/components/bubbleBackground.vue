<template>
  <div class="bcontainer">
    <!-- Left Column -->
    <div class="column left">
      <img 
        v-for="(image, index) in leftImages" 
        :key="'left-image-' + index" 
        src = "../assets/bubbles.png"
        :style="image.style" 
        class="image"
      />
    </div>
    
    <!-- Right Column -->
    <div class="column right">
      <img 
        v-for="(image, index) in rightImages" 
        :key="'right-image-' + index" 
        src = "../assets/bubbles.png"
        :style="image.style" 
        class="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Generate a list of random images (e.g., 10 images)
      images: this.generateRandomImages(16),
      leftColumnHeight: 0, // Tracks the height of the left column
      rightColumnHeight: 0, // Tracks the height of the right column
    };
  },
  computed: {
    // Split the images into left and right columns
    leftImages() {
      return this.images.slice(0, Math.ceil(this.images.length / 2));
    },
    rightImages() {
      return this.images.slice(Math.ceil(this.images.length / 2));
    },
  },
  methods: {
    // Function to generate random images with random styles
    generateRandomImages(count) {
      const images = [];
      for (let i = 0; i < count; i++) {
        images.push({
          style: this.getRandomStyle(), // Randomize the position, size, and opacity
        });
      }
      return images;
    },
    
    // Function to generate random styles for images
    getRandomStyle() {
      return {
        position: 'relative',
        width: `${Math.random() * 50 + 150 }px`,  // Random width (50px to 150px)
        opacity: `${Math.random() * 0.5 + 0.5}`, // Random opacity (0.5 to 1)
        transform: `rotate(${Math.random() * 7 - 7}deg)`, // Random rotation (0 to 360 degrees)
      };
    },

    // Function to place images in random positions in columns without overlap
    placeImages() {
      this.leftImages.forEach((image) => {
        let position = this.getNextAvailablePosition('left');
        image.style.top = position.top + 'px';
        this.leftColumnHeight = position.top + image.style.height.slice(0, -2); // Update the height of the left column
      });

      this.rightImages.forEach((image) => {
        let position = this.getNextAvailablePosition('right');
        image.style.top = position.top + 'px';
        this.rightColumnHeight = position.top + image.style.height.slice(0, -2); // Update the height of the right column
      });
    },

    // Function to calculate the next available position
    getNextAvailablePosition(column) {
      let positionTop = 0;
      if (column === 'left') {
        positionTop = this.leftColumnHeight;
      } else if (column === 'right') {
        positionTop = this.rightColumnHeight;
      }
      return { top: positionTop };
    },
  },

  // Call placeImages when the component is mounted
  mounted() {
    this.placeImages();
  },
};
</script>

<style scoped>
/* Main container to hold the two columns */
.bcontainer {
  display: flex;
  justify-content: center;  /* Center the columns horizontally */
  align-items: flex-start;  /* Align columns to the top */
  position: relative;
  width: 100vw;
  height: 100vh;
}

/* Style for the image columns */
.column {
  position: absolute;
  width: 15%;   /* Each column takes up 45% of the width */
  height: 90%;  /* Full height of the container */
  padding: 1em;
  margin-left: 10%;
  margin-right: 10%;
}

/* Left and right column specific styles */
.left {
  left: 0;
}

.right {
  right: 0;
}

/* Style for each image */
.image {
  position: absolute;
  display: block;
}
</style>
