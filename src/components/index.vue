<script setup>
 import {ref} from 'vue'
 import anime from "animejs";
//variables
  const imgsun1 = ref(null)
  const palm = ref(null)
  const plant1 = ref(null)
  const plant2 = ref(null)
  const montain = ref(null)
  
  // activate animations
  setTimeout(() => {
    imgsun1.value.classList.add('sun_animation')
   
    anime({
      targets: [montain.value],
      translateY: 6,
      translateX:1,
      rotate: 0.5,
      duration: 3500,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
   console.log(imgsun1)
  }, 2000);

  setTimeout(() => {
    anime({
      targets: [palm.value],
      translateY: 6,
      translateX:-1,
      rotate: -2,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: [plant1.value,plant2.value],
      translateY: 8,
      translateX:1,
      rotate: -2,
      duration: 2000,
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  }, 3000);
</script>



<template>
  <div class="flex h-screen bg-slate-300 w-screen  overflow-hidden  " >
    <section  class="bg-[url('/images/background.png')] w-full h-full bg-no-repeat bg-cover object-cover flex items-center justify-center overflow-hidden   "  >

      <img ref="imgsun1" xyz="fade down-100% small-50% duration-20" src="/images/sun1.png" alt="img_water" class=" fixed w-[40dvw] mb-[10dvw] z-40  xyz-in   ">
      <img xyz="fade down-100% small-75% duration-20" src="/images/sun2.png" alt="img_water" class=" fixed w-[35dvw] mb-[9dvw] z-40 xyz-in ">

      <img src="/images/n1.png" alt="img_n1" class=" nubes_left fixed w-[15dvw] mb-[9dvw] left-[1dvw] z-30 ">
      <img src="/images/n2.png" alt="img_n2" class=" nubes_right fixed w-[15dvw] mb-[9dvw] right-[1dvw] bottom-[12dvw] z-30 ">
      <img src="/images/n3.png" alt="img_n3" class=" nubes_right2  fixed w-[22dvw] mb-[9dvw] right-[8dvw] top-[4dvw] z-30 ">
      <img src="/images/n4.png" alt="img_n4" class=" nubes_left2 fixed w-[22dvw] mb-[9dvw] left-[5dvw] top-[1dvw] z-30 ">


      <img xyz="fade down-100% duration-10  " src="/images/water.png" alt="img_water2" class="self-end fixed w-[210dvw] left-[-0dvw] bottom-[-0.2dvw] h-[14dvw] z-40 xyz-in ">
      <img  src="/images/olas.png" alt="img_water2" class=" olas self-end fixed w-[210dvw]  left-[-0dvw] bottom-[-0.2dvw] h-[14dvw] z-40 xyz-in ">
      <img  xyz="fade right-100% duration-20  " src="/images/land.png" alt="img_water" class="self-end fixed w-[40dvw] right-[-4dvw] bottom-[-2.9dvw] -rotate-12   z-50 xyz-in">
      <img ref="palm" xyz="fade right-100% duration-30  " src="/images/palm.png" alt="img_water" class="self-end fixed w-[40dvw] right-[-0dvw] bottom-[-2.9dvw]   z-50 xyz-in">
      <img ref="plant1" xyz="fade down-100% duration-30  " src="/images/plant1.png" alt="img_water" class="self-end fixed w-[10dvw] right-[-0dvw]   z-50 xyz-in">
      <img ref="plant2" xyz="fade down-100% duration-30  " src="/images/plant2.png" alt="img_water" class="self-end fixed w-[5dvw] right-[12dvw]   z-50 xyz-in">
      <img ref="montain" xyz="fade left-100% small-50% duration-20  " src="/images/montain.png" alt="img_water" class="self-end fixed w-[60dvw] h-[10dvw] z-50 xyz-in bottom-[12dvw] left-[-6dvw] ">
      
 
      

    </section>
  </div>
</template>

<style scoped>
.nubes_left{
  transition: all;
  animation: nubes_left_animation 30s linear infinite;

}
.nubes_left2{
  transition: all;
  animation: nubes_left_animation 20s linear infinite;

}
.nubes_right{
  transition: all;
  animation: nubes_right_animation 30s linear infinite;

}

.nubes_right2{
  transition: all;
  animation: nubes_right_animation 20s linear infinite;

}
.sun_animation{
  transition: all;
  animation: sun_rotate 20s linear infinite;
  overflow: hidden;
 
}
.olas{
  transition: all;
  animation: olas_animation 5.5s linear infinite;
  
 
}

@keyframes nubes_left_animation {
  0% { transform: translateX(-25dvw); opacity: 100%; }
  100% { transform: translateX(100dvw) ; opacity: 5%; }
}

@keyframes nubes_right_animation {
  0% { transform: translateX(25dvw); opacity: 100%; }
  100% { transform: translateX(-100dvw) ; opacity: 5%; }
}

@keyframes sun_rotate {
  0% { transform: rotate(0deg); }
  100% { transform:  rotate(360deg); }
}

@keyframes olas_animation {
  0% { transform: translateX(-10dvw); opacity: 0%; }
  50%{opacity: 100%;}
  100% { transform: translateX(2dvw) ; opacity: 0%; }
}
</style>