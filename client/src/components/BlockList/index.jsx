import { Link } from "react-router-dom";

const BlockList = ({
  builds,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!builds.length) {
    return <h3>No builds Yet</h3>;
  }
  console.log(builds);

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {builds &&
        builds.map((build) => (
          <div key={build._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${build.buildAuthor}`}
                >
                  {console.log(build.buildAuthor)}
                  {build.buildAuthor} <br />
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>{build.buildName}</span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>Number:{build.number}</p>
              <p>Pieces:{build.pieces}</p>
              <p>Theme: {build.theme}</p>
              <p>Age: {build.builderAge}</p>
              <p>Rating: {build.rating}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/builds/${build._id}`}
            >
              Join the discussion on this build.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlockList;
