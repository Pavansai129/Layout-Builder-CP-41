// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <>
          <div>
            {showLeftNavbar && (
              <div>
                <h1>Left Navbar Menu</h1>
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            {showContent && (
              <div>
                <h1>Content</h1>
                <p>Lorem ipsum Dolor sit amet.</p>
              </div>
            )}
          </div>
          <div>
            {showRightNavbar && (
              <div>
                <h1>Right Navbar Menu</h1>
                <div>
                  <p>AD 1</p>
                </div>
                <div>
                  <p>AD 2</p>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
