interface propsType {
  width: number | string,
  height: number | string,
}
type Icon = React.FC<propsType>

const Logo: Icon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308.06 284.84">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M151.94,29.51A128.72,128.72,0,1,0,257.42,156.13H151.94Z" fill="#f60" />
        <path d="M151.94,0V29.51A128.76,128.76,0,0,1,257.42,156.13h50.64V0Z" fill='#f60' />
      </g>
    </g>
  </svg>
)

export { Logo }