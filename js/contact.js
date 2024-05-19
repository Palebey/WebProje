new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            message: '',
<<<<<<< HEAD
            selectedOption: '',
            university: '',
            sakaryaStudent: false
=======
>>>>>>> 0430bccebc594ae93253509c18a19e9a98e71e97
    
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
<<<<<<< HEAD
            name: '',
            email: '',
            message: '',
            selectedOption: '',
            university: '',
            sakaryaStudent: false
=======
                name: '',
                email: '',
                message: '',
>>>>>>> 0430bccebc594ae93253509c18a19e9a98e71e97
            
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
<<<<<<< HEAD
            if (!this.formData.selectedOption) {
                alert('Lütfen bir eğitim seviyesi seçin.');
                return;
              }
            if (!this.formData.university) {
                alert('Üniversite bilgisini giriniz.');
                return false;
            }
=======
>>>>>>> 0430bccebc594ae93253509c18a19e9a98e71e97
         
            return true;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});