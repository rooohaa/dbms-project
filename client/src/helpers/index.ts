export const getUniqueId = (): number => {
   return Math.round(new Date().getTime() / (Math.random() * 1000))
}
