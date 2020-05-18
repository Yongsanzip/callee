<template>
    <div class="container contact">
        <div class="bgImg pc">
        </div>
        <div class="formPanel">
            <form ref="mailForm" @submit.prevent="sendEmail">
                <p>CONTACT US</p>
                <div>
                    <input type="text" placeholder="성명" name="name" />
                    <input type="text" placeholder="회사명" name="company" />
                </div>
                <div>
                    <input type="text" placeholder="연락처" name="phone" />
                    <input type="text" placeholder="이메일" name="email" />
                </div>
                <div><textarea name="content" placeholder="내용을 입력해주세요" /></div>
                <div>
                    <button class="fileupload" @click="clickFileUploadBtn">파일첨부</button>
                    <input type="file" ref="fileInput" style="display: none;">
                    <span class="filename">파일명.png</span>
                </div>
                <div>
                    <input type="checkbox" name="check">
                    <div class="personalCheckContent">개인정보 수집, 이용에 동의, 상담용도로만 이용합니다. <a href="#">자세히보기</a></div>
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
            sendEmail: (e) => {
                const templateParams = {
                    name: e.name.name,
                    company: e.name.company,
                    phone:e.name.phone,
                    email:e.name.email,
                };
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        }
    }
</script>