import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

type PageProgressProps = {
  barColor: string
  barPercent: number
  backBtnLabel: string
  backBtnCallback: Function
  forwardBtnLabel: string
  forwardBtnCallback: Function
  forwardBtnActive: boolean
}

const PageProgress: React.FunctionComponent<PageProgressProps> = (props) => {

  const {barColor, barPercent, backBtnLabel, forwardBtnLabel, forwardBtnActive} = props
  const [progressPercent, setProgressPercent] = useState<number>(0)
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setProgressPercent(barPercent)
    }
    return () => {
      mounted = false
    }
  }, [barPercent])

  return (
    <section className="page-progress">
      <div
        className="page-progress-percent"
        style={{
          width: progressPercent + "%",
          backgroundColor: barColor
        }}
      >
      </div>
      <div className="page-progress-action">
        <Button className="btn-progress-back">{backBtnLabel}</Button>
        <Button className={forwardBtnActive ? "btn-progress-next-active" : "btn-progress-next" }>{forwardBtnLabel}</Button>
      </div>
    </section>
  )
}

export default PageProgress