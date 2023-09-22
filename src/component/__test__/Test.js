import { useSelector } from 'react-redux';
import CuisineList from '../CuisineList';

export default function Test () {
    const { totalcuisines } = useSelector((state) => state.cuisine);
    return (
        <div>{totalcuisines[0].title}</div>
    )
}