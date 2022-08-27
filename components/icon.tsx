interface propsType {
	width: number | string;
	height: number | string;
	color?: string;
}
type Icon = React.FC<propsType>;

const Logo: Icon = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 308.06 284.84'>
		<g id='Layer_2' data-name='Layer 2'>
			<g id='Layer_1-2' data-name='Layer 1'>
				<path
					d='M151.94,29.51A128.72,128.72,0,1,0,257.42,156.13H151.94Z'
					fill='#f60'
				/>
				<path
					d='M151.94,0V29.51A128.76,128.76,0,0,1,257.42,156.13h50.64V0Z'
					fill='#f60'
				/>
			</g>
		</g>
	</svg>
);

const Googles: Icon = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<path
			d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z'
			fill={props.color || '#000000'}
		/>
	</svg>
);

export { Logo, Googles };
