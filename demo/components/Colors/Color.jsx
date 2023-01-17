import classNames from '../../lib/utils/classNames'

function Color({ className, name, hex }) {
  return (
    <div className="space-y-1.5 cursor-pointer">
      <div className={classNames('h-12 w-full rounded', className)} />
      <div className="px-0.5 flex justify-between space-x-0 flex-col">
        <div className="font-medium text-sm text-slate-100 w-full">{name}</div>
        <div className="text-slate-200 font-mono lowercase">{hex}</div>
      </div>
    </div>
  )
}

export default Color
