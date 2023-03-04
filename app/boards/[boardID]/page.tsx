export default function page({ params }: { params: { boardID: string } }) {
	return <h1>Vous êtes au board ({params.boardID})</h1>;
}
