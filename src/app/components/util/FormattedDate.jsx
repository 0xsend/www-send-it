const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export default function FormattedDate({ date, ...props }) {
  date = typeof date === 'string' ? new Date(date) : date
  if (date === 'Invalid Date') {
    return <>
      {date.toString()}
    </>
  }
  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
