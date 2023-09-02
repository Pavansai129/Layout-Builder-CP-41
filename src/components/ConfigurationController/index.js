// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
