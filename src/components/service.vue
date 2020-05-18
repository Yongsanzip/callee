<template>
    <div class="container service">
        <div class="about">
            <p>ABOUT callee</p>
            통화가 어려울 때 나의 상태를 발신자에게 센스있게 알려줍니다.<br>
            문자를 목소리로 변환하여 주변에 피해를 주지 않고 통화할 수 있습니다.<br>
            보이는 ARS로 알리고 싶은 URL을 연결하여 홍보 할 수 있습니다.<br>
            비즈링을 이용하여 통화 대기시간에도 정보를 전달 합니다.
        </div>
        <div class="content">
            <div class="tabs">
                <ul>
                    <li v-for="(tab, idx) in tabs" :key="idx" :name="tab.name" :index="idx" @click.prevent="setActiveTab" :class="{'active': idx == selectedTab}">
                        <div>
                            <p class="pc pad" v-html="tab.bigTitle"></p>
                            <p class="mo" v-html="tab.bigTitle_mo"></p>
                            {{tab.title}}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <div id="advantage" class="threeCols" :class="{'active': 0 == selectedTab}">
                    <div>
                        <div class="num">01</div>
                        <div class="text">
                            <p>방문고객에게 감사한<br>마음을 전달</p><br><br>
                        </div>
                    </div>
                    <div>
                        <div class="num">02</div>
                        <div class="text">
                            <p>통화하기 곤란할 땐<br>센스있게</p><br><br>
                        </div>
                    </div>
                    <div>
                        <div class="num">03</div>
                        <div class="text">
                            <p>Biz Ring을<br>내 손으로</p><br><br>
                        </div>
                    </div>
                </div>
                <div id="responseMode" index=1 class="threeCols" :class="{'active': 1 == selectedTab}">
                    <div>
                        <div class="num">01</div>
                        <div class="text pc">
                            <p>기본 응답모드 사용</p>
                            통화가 곤란할 때 상황에 맞는<br>등록된 기본 응답모드를 눌러서<br>상태를 알려주세요.
                        </div>
                        <div class="text pad mo">
                            <p>기본 응답모드 사용</p>
                            통화가 곤란할 때 상황에 맞는 등록된 기본<br>응답모드를 눌러서 상태를 알려주세요.
                        </div>
                    </div>
                    <div>
                        <div class="num">02</div>
                        <div class="text pc">
                            <p>응답모드가 없다면</p>
                            응답 모드 추가를 눌러 나에게<br>필요한 모드를 만들 수 있어요.<br><br>
                        </div>
                        <div class="text pad mo">
                            <p>응답모드가 없다면</p>
                            응답 모드 추가를 눌러 나에게 필요한<br>모드를 만들 수 있어요.<br><br>
                        </div>
                    </div>
                    <div>
                        <div class="num">03</div>
                        <div class="text pc">
                            <p>응답모드로 음성안내</p>
                            선택된 모드로 상대방에 음성으로<br>양해를 구합니다.<br><br>
                        </div>
                        <div class="text pad mo">
                            <p>응답모드로 음성안내</p>
                            선택된 모드로 상대방에 음성으로 양해를 구합니다.<br><br>
                        </div>
                    </div>
                </div>
                <div id="usageMode" index=2 :class="{'active table': 2 == selectedTab}">
                    <div class="icons">
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-moving.png" />
                            </div>
                            이동중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-shoping.png" />
                            </div>
                            쇼핑중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-meeting.png" />
                            </div>
                            미팅중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-exercise.png" />
                            </div>
                            운동중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-duty.png" />
                            </div>
                            집중근무중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-chating.png" />
                            </div>
                            수다중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-sleep.png" />
                            </div>
                            취침중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-shower.png" />
                            </div>
                            샤워중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-counseling.png" />
                            </div>
                            상담중
                        </div>
                        <div class="iconBox">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-meal.png" />
                            </div>
                            식사중
                        </div>
                        <div class="iconBox mo">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-training.png" />
                            </div>
                            훈련
                        </div>
                        <div class="iconBox mo">
                            <div class="icon">
                                <img src="../assets/images/icons/ic-bathing.png" />
                            </div>
                            목욕
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page serviceGuide guide">
            <p>서비스 이용가이드</p>
            <div class="guideImages">
                <div>
                    <img src="../assets/images/serviceGuide/img-guide-01.jpg" />
                    <img src="../assets/images/serviceGuide/img-guide-02.jpg" />
                    <img src="../assets/images/serviceGuide/img-guide-03.jpg" />
                    <img src="../assets/images/serviceGuide/img-guide-04.jpg" />
                </div>
            </div>
        </div>
        <div class="page serviceGuide usageMode">
            <p>서비스 이용모드</p>
            <div class="usageModeCases">
                <div>
                    <div class="num">01</div>
                    <div class="text">
                        <p>기본응답모드 사용</p>
                        통화가 곤란할 때 상황에 맞는 기본 응답모드를 눌러서 상태를 알려주세요.
                    </div>
                </div>
                <div>
                    <div class="num">02</div>
                    <div class="text">
                        <p>응답모드가 없다면</p>
                        응답모드 추가를 눌러 나에게 필요한 모드를 만들 수 있어요.<br><br>
                    </div>
                </div>
                <div>
                    <div class="num">03</div>
                    <div class="text">
                        <p>응답모드로 음성 안내</p>
                        선택된 모드로 상대방에 음성으로 양해를 구합니다.<br><br>
                    </div>
                </div>
            </div>
            <div class="icons">
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-moving.png" />
                    </div>
                    이동중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-shoping.png" />
                    </div>
                    쇼핑중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-meeting.png" />
                    </div>
                    미팅중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-exercise.png" />
                    </div>
                    운동중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-duty.png" />
                    </div>
                    집중근무중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-chating.png" />
                    </div>
                    수다중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-sleep.png" />
                    </div>
                    취침중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-shower.png" />
                    </div>
                    샤워중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-counseling.png" />
                    </div>
                    상담중
                </div>
                <div class="iconBox">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-meal.png" />
                    </div>
                    식사중
                </div>
                <div class="iconBox mo">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-training.png" />
                    </div>
                    훈련
                </div>
                <div class="iconBox mo">
                    <div class="icon">
                        <img src="../assets/images/icons/ic-bathing.png" />
                    </div>
                    목욕
                </div>
            </div>
        </div>
        <div class="page serviceGuide importantService">
            <p>주요 서비스 페이지</p>
            <div>
                <div class="detailImage">
                    <img :src="importantServiceImages[selectedImportantService]">
                </div>
                <div class="thumbnamilImages">
                    <div>
                        <div v-for="(src, idx) in importantServiceImages" :key="idx" @click="setDetailImg(idx)" :class="{'active': selectedImportantService == idx}">
                            <img :src="src">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service",
                data() {
                    return {
                tabs: [{
                    bigTitle: "Service<br>Advantage",
                    bigTitle_mo: "Service<br>Advantage",
                    title: "서비스 장점",
                    name: "advantage"
                },{
                    bigTitle: "Automatic<br>Response Mode",
                    bigTitle_mo: "Automatic<br>Response<br>Mode",
                    title: "자동응답 이용",
                    name: "advantage"
                },{
                    bigTitle: "Service<br>Usage Mode",
                    bigTitle_mo: "Service<br>Usage<br>Mode",
                    title: "서비스 이용모드",
                    name: "Usage"
                }],
                selectedTab: 0,
                importantServiceImages: [
                    require("../assets/images/serviceScreenshot/img-screen-01.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-02.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-03.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-04.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-05.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-06.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-07.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-08.jpg"),
                    require("../assets/images/serviceScreenshot/img-screen-09.jpg")
                ],
                selectedImportantService: 0
            }
        },
        methods: {
            setActiveTab(e) {
                var target = e.target;
                console.log(1, target);
                if(e.target.tagName.toLowerCase() != "li"){
                    target = e.target.parentElement;
                    if(target.tagName.toLowerCase() != "li"){
                        target = target.parentElement;
                    }
                }
                console.log(2, target);
                this.selectedTab = target.getAttribute("index");
            },
            setDetailImg(idx){
                this.selectedImportantService = idx;
            }
        }
    }
</script>

<style scoped>

</style>