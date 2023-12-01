const today = new Date()

const f = new Intl.DateTimeFormat("en-in", {
    dateStyle: 'short',
    timeStyle:'full'
})

console.log(f.format(today));