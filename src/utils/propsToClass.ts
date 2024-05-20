export const cn = (props: Record<string, boolean | string>) => {

  const classes = []

  for (let [ key, value ] of Object.entries(props)) {
    if (value === false || value === '') continue
    if (value === true) {
      classes.push(key)
    } else {
      classes.push(`${key}-${value}`)
    }
  }

  return classes.join(" ")
}

export const pick = <T extends object, K extends (keyof T)[]>(obj: T, ...args: K) => {
  return Object.fromEntries(Object.entries(obj).filter(entry => args.includes(entry[0] as keyof T))) as Pick<T, K[number]>
}