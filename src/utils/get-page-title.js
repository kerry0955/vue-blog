import settings from '@/settings'

const title = settings.title || 'shu blog'
console.log("settings:::", settings)
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${title}-${pageTitle}`
  }
  return `${title}`
}
