export const gitInfoLoader=async () => {
  const response=await fetch('https://api.github.com/users/mainak061')
  return response.json()
}