import styled from "@emotion/styled"

const Header1 = styled.header`
    margin: 0vh;
`

const DivHeader = styled.div`
    background-color: #4a3a47b5;
    text-align: center;
    padding: 2vh;
    height: 20vh;
    width: auto;
`
const Line = styled.hr`
    background-image: linear-gradient(to right,transparent,#e6f0af,transparent);
    border: 0;
    height: 0.1rem;
    max-width: 100%;
    margin: 0;
`

const Header = () => {
  return (
    <Header1>
       <DivHeader>
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h1>Cristian Castro</h1>
              <Line />
            <h3>FullStack Developer</h3>
          </div>
       </DivHeader>
    </Header1>
  )
}

export default Header