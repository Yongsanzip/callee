<template>
    <div class="container contact">
        <div class="bgImg pc">
        </div>
        <div class="formPanel">
            <form ref="mailForm" @submit.prevent="sendEmail(this)">
                <p>CONTACT US</p>
                <div>
                    <input type="text" placeholder="성명" v-model="name" />
                    <input type="text" placeholder="회사명" v-model="company" />
                </div>
                <div>
                    <input type="text" placeholder="연락처" v-model="phone"/>
                    <input type="text" placeholder="이메일" v-model="email" />
                </div>
                <div><textarea v-model="content" placeholder="내용을 입력해주세요" /></div>
                <!--<div>
                    <button class="fileupload" @click="clickFileUploadBtn">파일첨부</button>
                    <input type="file" ref="fileInput" style="display: none;">
                    <span class="filename">파일명.png</span>
                </div>-->
                <div>
                    <input type="checkbox" ref="check" :checked="isChecked" @click="isChecked=!isChecked">
                    <div class="personalCheckContent" @click="isChecked=!isChecked">개인정보 수집, 이용에 동의, 상담용도로만 이용합니다. <a href="#" style="display: none;">자세히보기</a></div>
                </div>
                <button type="submit" class="submitBtn">SEND</button>
            </form>
        </div>
    </div>
</template>

<script>
    import emailjs from 'emailjs-com';

    export default {
        name: "contact",
        data() {
            return{
                isChecked: false,
                name: null,
                company: null,
                phone: null,
                email: null,
                content: null
            }
        },
        methods: {
            // clickFileUploadBtn() {
            //     this.$refs.fileInput.click();
            // },
            checkMailForm() {
                if(!this.name){
                    alert("이름을 입력해주세요.");
                    return false;
                }
                else if(!this.company){
                    alert("회사명을 입력해주세요.");
                    return false;
                }
                else if(!this.phone){
                    alert("연락처를 입력해주세요.");
                    return false;
                }
                else if(!this.email){
                    alert("이메일 주소를 입력해주세요.");
                    return false;
                }
                else if(!this.content){
                    alert("이메일 내용을 입력해주세요.");
                    return false;
                }
                else if(!this.isChecked) {
                    alert("개인정보 수집, 이용에 동의해주세요.");
                    return false;
                }

                return true;
            },
            sendEmail() {
                if(!this.checkMailForm()){
                    return false;
                }

                document.getElementById("loader").classList.add("show");
                const templateParams = {
                    name: this.name,
                    company: this.company,
                    phone:this.phone,
                    email:this.email,
                    content:this.content,
                };
                emailjs.send('hiworks_smtp_server', 'callee_contract', templateParams, 'user_MKoM4BpLU5gKYwZ75IO26')
                    .then((result) => {
                        document.getElementById("loader").classList.remove("show");
                        alert("메일이 전송되었습니다.");
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        document.getElementById("loader").classList.remove("show");
                        alert("메일의 전송이 실패되었습니다("+error.text+").");
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>