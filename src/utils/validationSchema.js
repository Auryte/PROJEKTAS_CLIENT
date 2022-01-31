import * as Yup from 'yup';
const minLength = 8;

export const DisplayingLoginErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email('Įveskite teisingą el.pašto adresą').required('El.paštas yra privalomas'),
  password: Yup.string()
    .required('Slaptažodis yra privalomas')
    .min(8, 'Slaptažodis per trumpas - min 8 simboliai')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Turi būti 8 simboliai - didžioji, mažoji raidės ir skaičius'
    )
});

export const DisplayingProjectErrorMessagesSchema = Yup.object().shape({
  title: Yup.string().required('Pavadinimas yra privalomas'),
  description: Yup.string()
    .min(1100, 'Tekstas turi būti min 1100 simbolių.')
    .max(1800, 'Tekstas privalo neviršyti 1800 simbolių')
    .required('Aprašymas yra privalomas'),
  imgMainPath: Yup.string(),
  images: Yup.array()
    .of(Yup.string().required('Nuotraukų url yra privalomi'))
    .min(minLength, `Turi būti bent ${minLength} nuotraukos`),
  seoUrl: Yup.string().required('Seo nuoroda yra privaloma'),
  metaTitleTag: Yup.string().required('Meta antraštė yra privaloma'),
  metaDescription: Yup.string().required('Meta aprašymas yra privalomas')
});

export const DisplayingArticleErrorMessagesSchema = Yup.object().shape({
  title: Yup.string().required('Pavadinimas yra privalomas'),
  description: Yup.string()
    .min(1100, 'Tekstas turi būti min 1100 simbolių.')
    .required('Aprašymas yra privalomas'),
  imgMainPath: Yup.string(),
  images: Yup.array().of(Yup.string()),
  seoUrl: Yup.string().required('Seo nuoroda yra privaloma'),
  metaTitleTag: Yup.string().required('Meta antraštė yra privaloma'),
  metaDescription: Yup.string().required('Meta aprašymas yra privalomas')
});
