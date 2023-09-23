import './home.css';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getId } from '../redux/cuisine/detailSlice';

export default function CuisineList(props) {
  const dispatch = useDispatch();
  const { title, image, id } = props;

   const detailpage = () => {
    dispatch(getId(id));
    return (
      ' '
    );
  };

  return (
    <section className="cards">
      <div className="arrow" data-testid="back-button">
        <NavLink to="/detail">
          <BsArrowRightCircle size={23} color="white" onClick={() => detailpage(id)} />
        </NavLink>
      </div>
      <div className="inner"><Card.Img src={image} alt="cuisine image" /></div>
      <div className="title">
        {' '}
        {title}
        {' '}
      </div>
    </section>
  );
}

CuisineList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
