import PropTypes from "prop-types";

const List = ({ data }) => {
  return (
    <>
      {data.map ((item) =>  {
        const { id, name, email, phone } = item;

        return (
         <div key={id} className="main">
          <div  className="box">
          
            {/* <h3>{id}</h3> */}
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
         
          </div>
</div>
        )
      }

      )}
    </>
  )
}
List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;


