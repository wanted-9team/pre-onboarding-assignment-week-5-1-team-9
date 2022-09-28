import styled from 'styled-components'

export const highlightText = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const match = text.split(new RegExp(`(${query})`, 'gi'))

    return (
      <>
        {match.map((text, idx) =>
          text.toLowerCase() === query.toLowerCase() ? <BoldText key={idx}>{text}</BoldText> : text,
        )}
      </>
    )
  }
  return text
}

const BoldText = styled.span`
  font-weight: bold;
`
