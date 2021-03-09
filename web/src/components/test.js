import React from 'react'

const test = () => {
    return (
        <div>
            
        </div>
    )
}

export default test



function Feed({ edges }: FeedProps): React.Element<'div'> {
  const parentRef = useRef<HTMLDivElement>();
  return (
    <div >
      <h4 >
         List Container
      </h4>
      {edges.map((edge, i) => (
      <FancyRow key={i} />
      ))}
    </div>
  );
}