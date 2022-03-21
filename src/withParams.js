import { useParams } from 'react-router-dom'

export const withParams = (Child) => {
	return (props) => {
		const params = useParams()
		return <Child {...props} params={params} />
	}
}
