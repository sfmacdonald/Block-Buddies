import { Link } from 'react-router-dom';

const BuildList = ({
  builds,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!builds.length) {
    return <h3>No builds Yet</h3>;
  }

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
                  {build.buildAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted this on {build.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You posted this on {build.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{build.buildText}</p>
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

export default BuildList;
