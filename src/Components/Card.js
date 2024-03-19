const Card = (props) => {
  // console.log(props);
  // console.log(props.title);
  // console.log(props.age);
  // console.log(props.array);
//  console.log(props.obj.name);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            props.img ||
            "https://images.unsplash.com/photo-1682686581295-7364cabf5511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.title ? props.title : "Default value"}
          </h5>
          {/* <h5 className="card-title">{props.title || "Default value"}</h5> */}
          <p className="card-text">
            Card 1
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <button>
            {props.obj ? props.obj.name:"Nothing"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
