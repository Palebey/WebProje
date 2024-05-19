new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            message: '',
    
        }
    },
    methods: {
        handleSubmit() {
            if (this.validateForm()) {
                localStorage.setItem('formData', JSON.stringify(this.formData));
                window.location.href = 'form-data.html';
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                email: '',
                message: '',
            
            };
        },
        validateForm() {
            if (!this.formData.name) {
                alert('Adınızı giriniz.');
                return false;
            }
            if (!this.formData.email || !this.validateEmail(this.formData.email)) {
                alert('Geçerli bir email adresi giriniz.');
                return false;
            }
            if (!this.formData.message) {
                alert('Mesajınızı giriniz.');
                return false;
            }
         
            return true;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});