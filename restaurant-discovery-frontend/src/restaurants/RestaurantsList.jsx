function RestaurantsList({ data = [] }) {
  const listItems =
    Array.isArray(data) && data.length > 0
      ? data.map((val, idx) => {
          const key = val.id;
          const name = val.name;
          const address = val.address;
          const imgUrl = val.imageUrl;

          return (
            <li className="PhotoItem" key={key}>
              <img
                src={imgUrl}
                width={250}
                height={200}
                alt={"no photo available"}
              />
              <p className="PhotoParagraph">
                {name} <br />
                {address}
              </p>
            </li>
          );
        })
      : [];

  return <ul>{listItems}</ul>;
}

export default RestaurantsList;
