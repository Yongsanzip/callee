<template>
    <div class="container contact">
        <div class="bgImg pc">
        </div>
        <div class="formPanel">
            <form ref="mailForm" @submit.prevent="sendEmail(this)">
                <p>CONTACT US</p>
                <div>
                    <input type="text" placeholder="성명" ref="name" />
                    <input type="text" placeholder="회사명" ref="company" />
                </div>
                <div>
                    <input type="text" placeholder="연락처" ref="phone" />
                    <input type="text" placeholder="이메일" ref="email" />
                </div>
                <div><textarea ref="content" placeholder="내용을 입력해주세요" /></div>
                <!--<div>
                    <button class="fileupload" @click="clickFileUploadBtn">파일첨부</button>
                    <input type="file" ref="fileInput" style="display: none;">
                    <span class="filename">파일명.png</span>
                </div>-->
                <div>
                    <input type="checkbox" name="check">
                    <div class="personalCheckContent">개인정보 수집, 이용에 동의, 상담용도로만 이용합니다. </div>
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
        methods: {
            clickFileUploadBtn() {
                this.$refs.fileInput.click();
            },
            sendEmail() {
                const templateParams = {
                    name: this.$refs.name.value,
                    company: this.$refs.company.value,
                    phone:this.$refs.phone.value,
                    email:this.$refs.email.value,
                    content:this.$refs.content.value,
                };
                emailjs.send('shhphone', 'callee_contract', templateParams, 'user_MKoM4BpLU5gKYwZ75IO26')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>