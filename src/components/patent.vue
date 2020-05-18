<template>
    <div class="container patent">
        <div class="page patent">
            <p>PATENT</p>
            <div>
                <div v-for="(image, idx) in images" :key="idx" class="patentImage" >
                    <img :src="image.src">
                    <div class="description" :style="(image.colspan != null)? 'width: '+(200 + (240 * (image.colspan-1)))+'px' : ''">
                        {{image.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "company",
        data() {
            return {
                images: [{
                    src: require("../assets/images/patent/img-patent-01.jpg"),
                    colspan: 3,
                    description: "고객의 상황 설정에 부합하는 자동 응답 수신 기능(등록 완료 : 미국, 중국, 일본)"
                },{
                    src: require("../assets/images/patent/img-patent-02.jpg"),
                    isShowDescription: false,
                    description: null
                },{
                    src: require("../assets/images/patent/img-patent-03.jpg"),
                    isShowDescription: false,
                    description: null
                },{
                    src: require("../assets/images/patent/img-patent-04.jpg"),
                    isShowDescription: true,
                    description: "휴대단말 제어시스템 및 방법"
                },{
                    src: require("../assets/images/patent/img-patent-05.jpg"),
                    isShowDescription: true,
                    description: "사용자 언어 기반 객체 정보 제공 장치 및 방법"
                },{
                    src: require("../assets/images/patent/img-patent-06.jpg"),
                    isShowDescription: true,
                    description: "이동 단말 및 이동 단말에서의 상황 메시지 자동 전송 방법"
                },{
                    src: require("../assets/images/patent/img-patent-07.jpg"),
                    isShowDescription: true,
                    description: "이동 단말 및 이동 단말에서의 전화수신방법"
                }]
            }
        }
    }
</script>

<style scoped>

</style>