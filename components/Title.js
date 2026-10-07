const Title = ({ content, text, light = false, align = 'center' }) => {
  const centered = align === 'center'

  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}`}>
      <span className={`mb-5 block h-[3px] w-12 bg-accent ${centered ? 'mx-auto' : ''}`} />
      <h2 className={`heading ${light ? 'text-white' : 'text-ink'}`}>{content}</h2>
      {text ? <p className={`lead mt-4 ${light ? 'text-white/70' : ''}`}>{text}</p> : null}
    </div>
  )
}

export default Title
