// Librairie
import Link from 'next/link';

export default function FiltresDeClient(props) {
	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<Link href={`/${props.client}`}>
				<a
					style={{
						backgroundColor: '#EE6C4D',
						padding: '5px 15px 5px 15px',
						color: 'white',
						borderRadius: '8px',
						textDecoration: 'none',
					}}
				>
					Tout
				</a>
			</Link>
			{props.annees.map((annee, index) => (
				<Link href={`/${props.client}/${annee}`} key={index}>
					<a
						style={{
							backgroundColor: '#EE6C4D',
							padding: '5px 15px 5px 15px',
							color: 'white',
							borderRadius: '8px',
							textDecoration: 'none',
						}}
					>
						{annee}
					</a>
				</Link>
			))}
		</div>
	);
}
