function ColorsRow({ children, title }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="uppercase font-bold text-sm text-neutral-medium-cloud">{title}</h2>
      <div className="grid grid-cols-4 gap-6">{children}</div>
    </div>
  )
}

export default ColorsRow
