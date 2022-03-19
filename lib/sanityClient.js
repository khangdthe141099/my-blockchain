import sanityClient from '@sanity/client'

//Connect with sanity.io web
//Token get from API/Webhooks
export const client = sanityClient({
  projectId: '90v3axlp',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skxCfFVbeExzyAS1sCBHyqRnqBEG8q5XUled4aRjKfmwpG297xGTSiUiafrj2BIslB6xQI9tfXMDiyqdBhZ4DFO8DnBf8sehEsuKw7LmBW0hLx9qkcM72s0V5jc2jyEBo6eTnSfWXypEHOsYgEZQkrMwB5S6xYCukVfQE0DcNvyPHrgekcrd',
  useCdn: false,
})