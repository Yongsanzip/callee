<template>
  <div id="app">
    <layoutHeader />
    <home id="home" />
    <service id="service" />
    <company id="company" />
    <patent id="patent" />
    <contact id="contact" />
    <layoutFooter />
    <div id="loader" class="loaderOverlay">
      <div class="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import layoutHeader from './components/layout/header.vue'
import layoutFooter from './components/layout/footer.vue'
import home from './components/home.vue'
import service from './components/service.vue'
import company from './components/company.vue'
import patent from './components/patent.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
    layoutHeader,
    home,
    service,
    company,
    patent,
    contact,
    layoutFooter
  },
  data() {
    return {
      homePoint: null,
      servicePoint: 0,
      companyPoint: null,
      patentPoint: null,
      contactPoint: null,
    }
  },
  methods: {
    checkPoint(){
      if(document.getElementsByClassName('container')[0] != null && document.getElementsByClassName('container')[0].offsetTop > -1){
        this.homePoint = document.getElementsByClassName('container')[0].offsetTop;
        this.servicePoint = document.getElementsByClassName('container')[1].offsetTop;
        this.companyPoint = document.getElementsByClassName('container')[2].offsetTop;
        this.patentPoint = document.getElementsByClassName('container')[3].offsetTop;
        this.contactPoint = document.getElementsByClassName('container')[4].offsetTop;
      }
    },
    removeActiveClass(){
      var activeheaders = document.getElementsByTagName("header")[0].getElementsByClassName("active");
      if(activeheaders.length > 0){
        activeheaders.forEach(function(nav){
          nav.classList.remove("active");
        })
      }
    },
    scrollEvnt(){
      var header = document.getElementsByTagName("header")[0];
      if(this.servicePoint == null || this.servicePoint < 1) this.checkPoint();

      if(window.scrollY > 0){
        if(document.getElementsByClassName("scroll").length > 0) document.getElementsByClassName("scroll")[0].classList.add("scrolled");
      }
      else{
        if(document.getElementsByClassName("scroll").length > 0) document.getElementsByClassName("scroll")[0].classList.remove("scrolled");
      }
      //스크롤이 포인트 아래일 경우
      if(window.scrollY >= this.servicePoint){
        //헤더 상태를 변경하는 클래스 추가
        header.classList.remove("is_top");
        this.removeActiveClass();
        header.getElementsByTagName("li")[1].classList.add("active");

        if(window.scrollY >= this.companyPoint-1){
          this.removeActiveClass();
          header.getElementsByTagName("li")[2].classList.add("active");
          if(window.scrollY >= this.patentPoint-1){
            this.removeActiveClass();
            header.getElementsByTagName("li")[3].classList.add("active");
            if(window.scrollY >= this.contactPoint-1 || window.scrollY == document.body.scrollHeight - document.body.offsetHeight){
              this.removeActiveClass();
              header.getElementsByTagName("li")[4].classList.add("active");
            }
          }
        }
      }else{
        //스크롤이 포인트 위일 경우
        //헤더 상태를 변경하는 클래스 제거
        header.classList.add("is_top");
        this.removeActiveClass();
        header.getElementsByTagName("li")[0].classList.add("active");
      }
    }
  },
  created() {
  },
  mounted() {
    /******** 디바이스 너비변화 감지 ********/
    window.addEventListener('resize', this.scrollEvnt);
    /******** 디바이스 스크롤 감지 ********/
    window.addEventListener("scroll", this.scrollEvnt);

    this.scrollEvnt();
  }
}
</script>
