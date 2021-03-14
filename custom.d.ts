declare module '*.module.scss' {
  const content: { [classname: string]: string }
  
  export default content
}

declare module '*.svg' {
  const content: string

  export default content
}