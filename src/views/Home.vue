<template>
  <div class="home">
    <p>Adopt a cat</p>
    <div class="adopt">
    <img src="../assets/relaxed-cat-looking-camera-golden-260nw-632318627.jpg" alt="cute cat">
    </div>
    <b-button size='lg'>Add a Pet</b-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
  <style lang="scss" scoped>
  .home{
    display:flex;
    flex-direction: column;
    align-items:center;
  }

  .adopt{
    width:80%;
    height:300px;

    img{

      width: 100%;
    }
  }
  </style>
