import React from 'react'

const Title = (props) => {
  return (
    <div className="container text-center py-9">
        <h2 className="text-primary text-4xl font-bold mb-4">{props.content}</h2>
        <hr className="bv-accent border-t-[6px] border-primary w-1/2 mx-auto" />
    </div>
  )
}

export default Title