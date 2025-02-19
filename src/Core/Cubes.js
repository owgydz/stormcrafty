import { useStore } from '../Hooks/useStore.js'
import { Cube } from './Cube.js'

export const Cubes = () => {
	const [cubes] = useStore((state) => [
		state.cubes
	])
	return cubes.map(({ key, pos, texture }) => {
		return (
			<Cube key={key} position={pos} texture={texture} />
		)
	})
}
