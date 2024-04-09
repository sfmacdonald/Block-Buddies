import React from 'react';
import { Link } from 'react-router-dom';


const SingleRandomBuild = ({ builds = [] }) => {
    // Select a random build from the builds array
    const randomBuild = builds[Math.floor(Math.random() * builds.length)];


    // If there are no builds, display a message
    if (!randomBuild) {
        return <h3>No Builds Yet</h3>;
    }


    return (
        <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
                <Link className="text-light" to={`/profiles/${randomBuild.buildAuthor}`}>
                    {randomBuild.buildAuthor} <br />
                    <span style={{ fontSize: '1rem' }}>
                        posted this on {randomBuild.createdAt}
                    </span>
                </Link>
            </h4>
            <div className="card-body bg-light p-2">
                <p>{randomBuild.buildText}</p>
            </div>
            <Link className="btn btn-primary btn-block btn-squared" to={`/builds/${randomBuild._id}`}>
                What do you think?
            </Link>
        </div>
    );
};


export default SingleRandomBuild;