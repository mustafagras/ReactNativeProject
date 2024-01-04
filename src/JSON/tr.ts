import { threeDot } from "../constants/formatString";

const tr = [
  {
    auth: {
      signIn: {
        title: "Kullanıcı Girişi",
        email: "E-posta",
        password: "Şifre",
        login: "Giriş Yap",
        register: "Üyelik Oluştur",
        forgotButton: "Şifremi Unuttum",
        language: "Dil",
        forgot: "Şifreni mi unuttun?",
        successRecorded: "Giriş Yapıldı",
        policyInfo: "K.V.K.K kapsamında kişisel bilgileriniz saklanmaktadır.",
        policy: "Gizlilik Politikası",
        and: " ve ",
        terms: "Kullanım Koşullarını",
        inspect: " inceleyin.",
      },
      signUp: {
        title: "Yeni Üyelik",
        fullName: "Ad Soyad",
        phoneNumber: "Telefon Numarası",
        email: "E-posta",
        password: "Şifre",
        rePassword: "Şifre Tekrar",
        login: "Giriş Yap",
        register: "Üyelik Oluştur",
        language: "Dil",
        allReady: "Zaten bir hesabın var mı?",
        allReadyButton: "Giriş Yap",
        successRecorded: "Kayıt Yapıldı",
        policyInfo: "Üye olarak Gizlilik Politikamızı kabul etmiş olursunuz.",
        policy: "Gizlilik Politikası",
        and: " ve ",
        terms: "Kullanım Koşullarını",
        inspect: " inceleyin.",
        policyOkey: "Kabul ediyorum",
        mailStatus: false,
        confirmationCode: "Doğrulama Kodu",
        confirmationCodeInfo:
          "Lütfen cep telefonunuza gönderilen doğrulama kodunu girin.",
        resendCode: "Kodu Tekrar Gönder",
        confirmationCodeError:
          "Aktivasyon kodunun süresi dolmuştur, lütfen tekrar gönderin.",
        checkOne: "En az 6 karakter",
        checkTwo: "En az 1 büyük ve 1 küçük harf",
        checkThree: "En az 1 rakam",
        checkFour: "En az 1 özel karakter",
        checkPassword: "Şifre Doğrulama",
      },
      forgotPassword: {
        title: "Şifremi Unuttum",
        email: "E-posta",
        newPassword: "Yeni Şifre Girin",
        sendCode: "Şifreyi Değiştir",
      },
      signOut: {
        email: "E-posta: ",
        phone: "Telefon: ",
        address: "Adres: ",
        logout: "Çıkış Yap",
      },
    },
    app: {
      home: {
        title: "Anasayfa",
      },
      educationList: {
        title: "Eğitim Listesi",
        title2: "Eğitim Detay Listesi",
        detailSee: "Detay Gör",
        moreSee: "Devamını Gör",
        notMore: "Daha Az Gör",
        findButton: `Eğitim Ara${threeDot}`,
        lesson: "İçerik",
        certificate: "Sertifikalar",
        career: "Kariyer",
      },
      eventList: {
        title: "Etkinlik Listesi",
        title2: "Etkinlik Detay Listesi",
        detailSee: "Detay Gör",
        findButton: `Eğitim Ara${threeDot}`,
      },
      profile: {
        title: "Profil",
      },
    },
  },
];
export default tr;
